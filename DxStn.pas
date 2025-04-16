//------------------------------------------------------------------------------
//This Source Code Form is subject to the terms of the Mozilla Public
//License, v. 2.0. If a copy of the MPL was not distributed with this
//file, You can obtain one at http://mozilla.org/MPL/2.0/.
//------------------------------------------------------------------------------
unit DxStn;

interface

uses
  Station, Qsb, DxOper, SndTypes;

type
  TDxStation = class(TStation)
  private
    Qsb: TQsb;
  public
    Oper: TDxOperator;
    constructor CreateStation;
    destructor Destroy; override;
    procedure ProcessEvent(AEvent: TStationEvent); override;
{$ifdef DEBUG}
    procedure SendMsg(AMsg: TStationMessage); override;
{$endif}
    procedure DataToLastQso;
    function GetBlock: TSingleArray; override;
  var
     Operid: integer;
  end;

{$ifdef DEBUG}
var
  LastDxCallsign : string = '';
{$endif}

implementation

uses
  SysUtils, Classes, RndFunc, Dialogs,
  Main,     // for Mainform
  ExchFields, // for TExchField
  CallLst, Log, Ini, Contest;

{ TDxStation }

constructor TDxStation.CreateStation;
begin
  inherited Create(nil);
  inherited Init;

  HisCall := Ini.Call;

  // Pick one Callsign from call history file
  Operid := Tst.PickStation;
  MyCall := Tst.GetCall(Operid);

  Oper := TDxOperator.Create(MyCall, osNeedPrevEnd);
  NrWithError := Ini.Lids and (Random < 0.1);

  // DX's speed, {WpmS,WpmC}, is set once at creation time
  WpmS := Oper.GetWpm(WpmC);

  // DX's sent exchange types depends on kind-of-station and their callsign
  SentExchTypes := Tst.GetSentExchTypes(skDxStation, MyCall);

  // Adding a contest: DxStation.CreateStation - get Exch1 (e.g. Name), Exch2 (e.g. NR), and optional UserText
  // load dynamic exchange field information into this DxStation.
  Tst.GetExchange(Operid, Self);

  if Ini.Lids and (Random < 0.03) then
    RST := 559 + 10 * Random(4)
  else
    RST := 599;

  Qsb := TQsb.Create;

  Qsb.Bandwidth := 0.1 + Random / 2;
  if Ini.Flutter and (Random < 0.3) then
    Qsb.Bandwidth := 3 + Random * 30;

  Amplitude := 9000 + 18000 * (1 + RndUShaped);
  if RunMode = rmSingle then
    Pitch := Round(RndGaussLim(0, 50))
  else
    Pitch := Round(RndGaussLim(0, 300));

  if Ini.RunMode = rmHst then
    begin
      Tst.DropStation(Operid);
      Operid := -1;
    end;

{$ifdef DEBUG}
  // retain most recent DxCallsign (used for debugging)
  if Ini.RunMode = rmSingle then
    LastDxCallsign := MyCall;
{$endif}

  //the MeSent event will follow immediately
  TimeOut := NEVER;
  State := stCopying;
end;


destructor TDxStation.Destroy;
begin
  Oper.Free;
  Qsb.Free;
  inherited;
end;


procedure TDxStation.ProcessEvent(AEvent: TStationEvent);
var
  i: integer;
begin
  if Oper.State = osDone then Exit;

  case AEvent of
    evMsgSent:
      //we finished sending and started listening
      if Tst.Me.State = stSending
        then TimeOut := NEVER
        else TimeOut := Oper.GetReplyTimeout;

    evTimeout:
      begin
      //he did not reply, quit or try again
      if State = stListening then
        begin
        Oper.MsgReceived([msgNone]);
        if Oper.State = osFailed then begin
          // during debug, use status bar to show CW stream
          if BDebugCwDecoder or BDebugGhosting then
            Mainform.sbar.Caption :=
              (Format('[%s-osFailed], Stn deleted',[MyCall]) + '; ' +
              Mainform.sbar.Caption).Substring(0, 80);
          Free;
          Exit;
          end;

        if Oper.IsGhosting then
        begin
          // if the operator is ghosting, this station will stop transmitting.
          // force this station's state into stListening mode so it can
          // receive final messages from the operator.
          State := stListening;
        end
        else
          State := stPreparingToSend;
        end;

      //preparations to send are done, now send
      if State = stPreparingToSend then
        for i:=1 to Oper.RepeatCnt do SendMsg(Oper.GetReply)
      end;

    evMeFinished: //he finished sending
      //we notice the message only if we are not sending ourselves
      if State <> stSending then
        begin
        //interpret the message
        case State of
          stCopying:
            Oper.MsgReceived(Tst.Me.Msg);

          stListening, stPreparingToSend:
           //these messages can be copied even if partially received
            if (msgCQ in Tst.Me.Msg) or (msgTU in Tst.Me.Msg) or (msgNil in Tst.Me.Msg)
              then Oper.MsgReceived(Tst.Me.Msg)
              else Oper.MsgReceived([msgGarbage]);
          end;

          //react to the message
          if Oper.State = osFailed then // give up
            begin
              // during debug, use status bar to show CW stream
              if BDebugCwDecoder or BDebugGhosting then
                Mainform.sbar.Caption :=
                  (Format('[%s-osFailed, Stn deleted]',[MyCall]) + '; ' +
                  Mainform.sbar.Caption).Substring(0, 80);
              Free;
              Exit;
            end;

          if Oper.IsGhosting then begin
            // if the operator is ghosting, this station will stop transmitting.
            // force this station's state into stListening mode so it can
            // receive final messages from the operator.
            State := stListening;
          end
          else begin
            TimeOut := Oper.GetSendDelay; //reply or switch to standby
            State := stPreparingToSend;
          end;
        end
      // special case where user is sending 'TU' with a partial callsign
      else if State = stSending then
        begin
          { Special case where the user has sent an incorrect/partial callsign
            and this DxStation/DxOperator is re-sending their correct callsign.
            However, the user just sent 'TU', indicating that they have
            finished the QSO and moving on to the next caller. In this
            case, we want this DxStation to finish the QSO (by setting their
            Oper.State = osDone). Once complete, this station will stop
            sending, the log will be updated and report the incorrect callsign.
          }
          if (Oper.State = osNeedCall) and (msgTU in Tst.Me.Msg) then
            Oper.MsgReceived(Tst.Me.Msg);
        end;

    evMeStarted:
      //If we are not sending, we can start copying
      //Cancel timeout, he is replying
      begin
        if State <> stSending then begin
          assert(State in [stPreparingToSend, stListening]);
          State := stCopying;
        end;
        TimeOut := NEVER;
      end;
    end;
end;


{$ifdef DEBUG}
procedure TDxStation.SendMsg(AMsg: TStationMessage);
begin
  inherited SendMsg(AMsg);

  if BDebugExchSettings and (AMsg in [msgNR, msgR_NR, msgR_NR2,
    msgDeMyCallNr1, msgDeMyCallNr2, msgMyCallNr1, msgMyCallNr2]) then
  begin
    if (Mainform.Edit2.Text = '') and not (SimContest in [scArrlSS]) then
      Mainform.Edit2.Text := Exch1;
    if (Mainform.Edit3.Text = '') and
      ((SimContest <> scNaQp) or (Exch2 <> 'DX')) then
      MainForm.Edit3.Text := Exch2;
  end;
end;
{$endif}


// copies data from this DxStation to the last QSO (top of QsoList[]).
// removes Self from Stations[] container array.
procedure TDxStation.DataToLastQso;
begin
  with QsoList[High(QsoList)] do begin
    TrueCall := Self.MyCall;
    TrueRst := Self.Rst;
    TrueNR := Self.NR;
    // Adding a contest: copy DxStation's Exch1 qso information into log
    case SentExchTypes.Exch1 of
      etRST: TrueExch1 := IntToStr(Self.RST);
      etOpName: TrueExch1 := Self.OpName;
      etFdClass: TrueExch1 := Self.Exch1;
      etSSNrPrecedence: begin
        TrueNR := Self.NR;
        TruePrec := Self.Prec;
      end;
      else
        assert(false);
    end;
    // Adding a contest: copy DxStation's Exch2 qso information into log
    case SentExchTypes.Exch2 of
      etSerialNr: TrueExch2 := IntToStr(Self.NR);
      etGenericField: TrueExch2 := Self.Exch2;
      etCqZone: TrueExch2 := Self.Exch2;
      etItuZone: TrueExch2 := Self.Exch2;
      etArrlSection: TrueExch2 := Self.Exch2;
      etStateProv: TrueExch2 := Self.Exch2;
      etPower: TrueExch2 := Self.Exch2;
      etJaPref: TrueExch2 := Self.Exch2;
      etJaCity: TrueExch2 := Self.Exch2;
      etNaQpExch2, etNaQpNonNaExch2: TrueExch2 := Self.Exch2;
      etSSCheckSection: begin
        TrueCheck := Self.Chk;    // check (e.g. 72)
        TrueSect := Self.Sect;    // section (e.g. OR)
      end
      else
        assert(false);
    end;
  end;

  Free; // removes Self from Stations[] container
end;




function TDxStation.GetBlock: TSingleArray;
begin
  Result := inherited GetBlock;
  if Ini.Qsb then Qsb.ApplyTo(Result);
end;

end.

