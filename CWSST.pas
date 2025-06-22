unit CWSST;

interface

uses
  Classes, Generics.Defaults, Generics.Collections, Contest, Contnrs,
  Station, DxStn, Log;

type
    TCWSSTRec= class
    public
        Call: string;     // Station Callsign
        Exch1: string;    // Operator Name
        Exch2: string;    // Number/State/Province/DX
        UserText: string; // station location information string

        class function compareCall(const left, right: TCWSSTRec) : integer; static;
    end;

  TCWSST= class(TContest)
  private
    CWSSTList: TObjectList<TCWSSTRec>;
    Comparer: IComparer<TCWSSTRec>;
    procedure Delimit(var AStringList: TStringList; const AText: string);

  public
    constructor Create;
    destructor Destroy; override;
    function LoadCallHistory(const AUserCallsign : string) : boolean; override;

    function PickStation(): integer; override;
    procedure DropStation(id : integer); override;
    function GetCall(id : integer): string; override;
    function FindCallRec(out outrec: TCWSSTRec; const ACall: string): Boolean;
    procedure GetExchange(id : integer; out station : TDxStation); override;
    procedure SendMsg(const AStn: TStation; const AMsg: TStationMessage); override;
    procedure SendText(const AStn: TStation; const AMsg: string); override;
    function GreetingAsText(const AStn: TStation) : string;
    function GetStationInfo(const ACallsign: string) : string; override;
    function ExtractMultiplier(Qso: PQso) : string; override;
  end;

  function IsNum(Num: String): Boolean;


implementation

uses
    Math,
    SysUtils, StrUtils, DXCC;

function TCWSST.LoadCallHistory(const AUserCallsign : string) : boolean;
const
    // !!Order!!,Call,Name,Exch1,UserText
    CallInx : integer = 0;
    NameInx : integer = 1;
    ExchInx : integer = 2;
    UserTextInx : integer = 3;
var
    slst, tl: TStringList;
    i: integer;
    SST: TCWSSTRec;
begin
    // reload call history if empty
    Result := CWSSTList.Count <> 0;
    if Result then
      Exit;

    slst:= TStringList.Create;
    tl:= TStringList.Create;
    SST := nil;

    try
        CWSSTList.Clear;

        slst.LoadFromFile(ParamStr(1) + 'K1USNSST.txt');
        slst.Sort;

        for i:= 0 to slst.Count-1 do begin
            if (slst.Strings[i].StartsWith('!!Order!!')) then continue;
            if (slst.Strings[i].StartsWith('#')) then continue;

            self.Delimit(tl, slst.Strings[i]);
            if (tl.Count >= 3) then begin
                if SST = nil then
                  SST:= TCWSSTRec.Create;

                SST.Call:= UpperCase(tl.Strings[CallInx]);
                SST.Exch1:= UpperCase(tl.Strings[NameInx]);
                SST.Exch2:= UpperCase(tl.Strings[ExchInx]);
                if tl.Count > UserTextInx then
                  SST.UserText:= tl.Strings[UserTextInx];
                if SST.Call='' then continue;
                if SST.Exch1='' then  continue;
                if SST.Exch2='' then continue;
                if length(SST.Exch1) > 10 then continue;
                if length(SST.Exch2) > 5 then continue;

                CWSSTList.Add(SST);
                SST := nil;
            end;
        end;

        Result := True;

    finally
        slst.Free;
        tl.Free;
        if SST <> nil then SST.Free;
    end;


end;

constructor TCWSST.Create;
begin
    inherited Create;
    CWSSTList:= TObjectList<TCWSSTRec>.Create;
    Comparer := TComparer<TCWSSTRec>.Construct(TCWSSTRec.compareCall);

    BFarnsworthEnabled := true;
end;

destructor TCWSST.Destroy;
begin
  FreeAndNil(CWSSTList);
  inherited;
end;


function TCWSST.PickStation(): integer;
begin
     result := random(CWSSTList.Count);
end;


procedure TCWSST.DropStation(id : integer);
begin
  assert(id < CWSSTList.Count);
  CWSSTList.Delete(id);
end;


function TCWSST.GetCall(id : integer): string;
begin
     result := CWSSTList[id].Call;
end;


function TCWSST.FindCallRec(out outrec: TCWSSTRec; const ACall: string): Boolean;
var
  rec: TCWSSTRec;
{$ifdef FPC}
  index: int64;
{$else}
  index: integer;
{$endif}
begin
  rec := TCWSSTRec.Create();
  rec.Call := ACall;
  outrec:= nil;
  try
    if CWSSTList.BinarySearch(rec, index, Comparer) then
      outrec:= CWSSTList.Items[index];
  finally
    rec.Free;
  end;
  Result:= outrec <> nil;
end;


procedure TCWSST.GetExchange(id : integer; out station : TDxStation);
begin
  station.OpName := CWSSTList.Items[id].Exch1;
  station.Exch1 := CWSSTList.Items[id].Exch1;
  station.Exch2 := CWSSTList.Items[id].Exch2;
end;


{
  Overrides TContest.SendMsg() to send contest-specific messages.

  Adding a contest: TContest.SendMsg(AMsg): send contest-specfic messages
}
procedure TCWSST.SendMsg(const AStn: TStation; const AMsg: TStationMessage);
var
  prefix : String;
begin
  case AMsg of
    msgCQ: SendText(AStn, 'CQ SST <my>'); // sent by MyStation
    msgNrQm: // sent by calling station (DxStation)
      if AStn.MyCall = Me.MyCall then
        SendText(AStn, 'NR?')
      else case Floor(AStn.R1*4) of
        0,1: SendText(AStn, 'NR?');
        2:   SendText(AStn, 'NAME?');
        3:   SendText(AStn, 'ST?');
      end;
    msgTU:  // TU message sent by MyStation
       SendText(AStn, 'TU <my>');
    msgR_NR: // exchange msg sent by remote station in response to my exchange
      begin
        // leading 'R ' 10% of the time
        prefix := '';
        if Random < 0.10 then prefix := 'R ';

        // include a pleasantry greeting 20% of the time
        if Random < 0.20 then prefix := prefix + '<greeting> ';

        SendText(AStn, prefix + '<#>');
      end;
    msgR_NR2: // repeated exchange sent by remote station (DxStation)
      begin
        // leading 'R ' 10% of the time
        prefix := '';
        if Random < 0.10 then prefix := 'R ';

        // include a pleasantry greeting 20% of the time
        if Random < 0.20 then prefix := prefix + '<greeting> ';

        SendText(AStn, prefix + '<#> <#>');
      end;
    msgLongCQ: SendText(AStn, 'CQ CQ SST <my> <my>');  // QrmStation only
    else
      inherited SendMsg(AStn, AMsg);
  end;
end;


{
  This virtual procedure is provided in case a derived contest needs
  to perform additional processing on the message being sent before
  passing the string to the Encoder and Keyer.
}
procedure TCWSST.SendText(const AStn: TStation; const AMsg: string);
var
  P : integer;
begin
  // note - the <greeting> token below is intentionally followed by a
  // space to allow GreetingAsText() to randomly return an empty greeting.
  P := Pos('<greeting> ', AMsg);
  if P > 0 then
    inherited SendText(AStn, StuffString(AMsg, P, 11, GreetingAsText(AStn)))
  else
    inherited SendText(AStn, AMsg);
end;


{ return a random casual conversation string for SST Contest.
  Includes the trailing space if a name is returned;
  otherwise a NULL string is returned. This allows an empty
  greeting to be returned.

  Note: that the caller is typically using a message of the form
  'R <greeting> <#>' (see TCWSST.SendMsg above). This function returns
  a string to replace the '<greeting> ' token, including the trailing space.
}
function TCWSST.GreetingAsText(const AStn: TStation) : string;
begin
  // Adding a contest: contest-specific messages (e.g. for CWOPS SST, 'GM Mike ').
  if AStn.MsgTemp = 'undef' then
    begin
      // format greeting of the form: 'GM <MyName> '
      case Random(10) of
        0..2: AStn.MsgTemp := Format('GM %s ', [Tst.Me.Exch1]);  // 30%
        3..5: AStn.MsgTemp := Format('GA %s ', [Tst.Me.Exch1]);  // 30%
        6..8: AStn.MsgTemp := Format('GE %s ', [Tst.Me.Exch1]);  // 30%
        9:    AStn.MsgTemp := '';                                // 10%
      end;
    end;
  Result := AStn.MsgTemp;
end;


{
  return status bar information string from K1USNSST call history file.
  for members (w/ numeric Exch2), return their QTH string (UserText)
  for DX Stations (not USA or Canada), return their Entity/Continent.
  this string is used in MainForm.sbar.Caption (status bar).
  We are careful not to disclose information that would give hints during
  exchange copy (e.g. for non-members in US or Canada, we do not return
  their city/state/province).
  Format:  '<call> [- <user text from K1USNSST.LIST>] [- Entity/Continent]'
}
function TCWSST.GetStationInfo(const ACallsign: string) : string;
var
  cwopsrec : TCWSSTRec;
  dxrec : TDXCCRec;
  userText : string;
begin
  cwopsrec := nil;
  dxrec := nil;
  userText := '';
  result:= '';

  if FindCallRec(cwopsrec, ACallsign) then
    begin
      // return userText. If empty, return DXCC Continent/Entity info.
      userText := cwopsrec.UserText;
      if userText.IsEmpty and
         gDXCCList.FindRec(dxrec, ACallsign) and
         (dxrec.Entity <> Me.MyEntity) then
        userText := dxRec.Continent + '/' + dxRec.Entity;

      if not userText.IsEmpty then
        result:= ACallsign + ' - ' + userText;
    end;
end;


{
  K1USN SST contest uses number of unique States + States + Countries worked
  as the multiplier. Each QSO counts as 1 point.
}
function TCWSST.ExtractMultiplier(Qso: PQso) : string;
var
  dxrec : TDXCCRec;
begin
  dxrec := nil;

  // 1 point per QSO regardless of QTH
  Qso^.Points := 1;

  // multiplier:
  // - USA or Canada uses State or Province
  // - DX uses Country(Entity) name
  Result:= Qso^.Exch2;
  if Qso^.TrueExch2.Equals('DX') and
     gDXCCList.FindRec(dxrec, Qso^.Call) then
    Result:= dxrec.Entity;
end;


class function TCWSSTRec.compareCall(const left, right: TCWSSTRec) : integer;
begin
  Result := CompareStr(left.Call, right.Call);
end;


function IsNum(Num: String): Boolean;
var
   X : Integer;
begin
   Result := Length(Num) > 0;
   for X := 1 to Length(Num) do begin
       if Pos(copy(Num,X,1),'0123456789') = 0 then begin
           Result := False;
           Exit;
       end;
   end;
end;




procedure TCWSST.Delimit(var AStringList: TStringList; const AText: string);
const
    DelimitChar: char= ',';
begin
    AStringList.Clear;
    AStringList.Delimiter := DelimitChar;
    AStringList.StrictDelimiter := True;
    AStringList.DelimitedText := AText;
end;

end.



