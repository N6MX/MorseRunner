// ============================================================================
// COMMENTED PASCAL CODE FROM Main.pas - FOR REFERENCE ONLY
// ============================================================================
// This section contains the original Pascal implementation code from Main.pas,
// commented out for reference during porting. As handlers are ported to TypeScript,
// they will be implemented below using React hooks and TypeScript patterns.
// ============================================================================

// //------------------------------------------------------------------------------
// //This Source Code Form is subject to the terms of the Mozilla Public
// //License, v. 2.0. If a copy of the MPL was not distributed with this
// //file, You can obtain one at http://mozilla.org/MPL/2.0/.
// //------------------------------------------------------------------------------
// unit Main;

// {$ifdef FPC}
// {$MODE Delphi}
// {$endif}

// interface

// uses
//   Windows, Messages, Classes, Graphics, Controls, Forms,
//   Buttons, SndCustm, SndOut, Contest, Ini,
//   VolmSldr, VolumCtl, StdCtrls, Station, Menus, ExtCtrls,
//   ComCtrls, Spin, SndTypes,
//   WavFile,
//   ExchFields,   // for TFieldDefinition
//   System.ImageList, Vcl.ToolWin, Vcl.ImgList;

// const
//   WM_TBDOWN = WM_USER+1;
//   sVersion: String = '1.85.3+';  { Sets version strings in UI panel. }

// type

//   { TMainForm }

//   TMainForm = class(TForm)
//     AlSoundOut1: TAlSoundOut;
//     MainMenu1: TMainMenu;
//     File1: TMenuItem;
//     Send1: TMenuItem;
//     CQ1: TMenuItem;
//     Exchange1: TMenuItem;
//     TU1: TMenuItem;
//     MyCall1: TMenuItem;
//     HisCall1: TMenuItem;
//     QSOB41: TMenuItem;
//     N1: TMenuItem;
//     AGN1: TMenuItem;
//     Bevel1: TBevel;
//     Panel1: TPanel;
//     Label1: TLabel;
//     SpeedButton4: TSpeedButton;
//     SpeedButton5: TSpeedButton;
//     SpeedButton6: TSpeedButton;
//     SpeedButton7: TSpeedButton;
//     SpeedButton8: TSpeedButton;
//     SpeedButton9: TSpeedButton;
//     SpeedButton10: TSpeedButton;
//     SpeedButton11: TSpeedButton;
//     Edit1: TEdit;
//     Label2: TLabel;
//     Edit2: TEdit;
//     Label3: TLabel;
//     Edit3: TEdit;
//     Bevel2: TBevel;
//     Panel2: TPanel;
//     Panel3: TPanel;
//     Panel4: TPanel;
//     Help1: TMenuItem;
//     Readme1: TMenuItem;
//     About1: TMenuItem;
//     N2: TMenuItem;
//     PaintBox1: TPaintBox;
//     Panel5: TPanel;
//     Exit1: TMenuItem;
//     Panel6: TPanel;
//     RichEdit1: TRichEdit;
//     Label12: TLabel;
//     Label13: TLabel;
//     Label14: TLabel;
//     Label15: TLabel;
//     Shape1: TShape;
//     PopupMenu1: TPopupMenu;
//     PileupMNU: TMenuItem;
//     SingleCallsMNU: TMenuItem;
//     CompetitionMNU: TMenuItem;
//     HSTCompetition1: TMenuItem;
//     StopMNU: TMenuItem;
//     ImageList1: TImageList;
//     Run1: TMenuItem;
//     PileUp1: TMenuItem;
//     SingleCalls1: TMenuItem;
//     Competition1: TMenuItem;
//     HSTCompetition2: TMenuItem;
//     Stop1MNU: TMenuItem;
//     ViewScoreBoardMNU: TMenuItem;
//     ViewScoreTable1: TMenuItem;
//     Panel7: TPanel;
//     Label16: TLabel;
//     Panel8: TPanel;
//     Shape2: TShape;
//     AlWavFile1: TAlWavFile;
//     Panel9: TPanel;
//     GroupBox3: TGroupBox;
//     Label11: TLabel;
//     CheckBox2: TCheckBox;
//     CheckBox3: TCheckBox;
//     CheckBox4: TCheckBox;
//     CheckBox5: TCheckBox;
//     CheckBox6: TCheckBox;
//     SpinEdit3: TSpinEdit;
//     GroupBox1: TGroupBox;
//     Label4: TLabel;
//     Label5: TLabel;
//     Label6: TLabel;
//     Label7: TLabel;
//     Label9: TLabel;
//     Edit4: TEdit;
//     SpinEdit1: TSpinEdit;
//     CheckBox1: TCheckBox;
//     ComboBox1: TComboBox;
//     ComboBox2: TComboBox;
//     Panel10: TPanel;
//     Label8: TLabel;
//     SpinEdit2: TSpinEdit;
//     ToolBar1: TToolBar;
//     ToolButton1: TToolButton;
//     Label10: TLabel;
//     VolumeSlider1: TVolumeSlider;
//     Label18: TLabel;
//     WebPage1: TMenuItem;
//     FirstTime1: TMenuItem;
//     Settings1: TMenuItem;
//     Call1: TMenuItem;
//     QSK1: TMenuItem;
//     CWSpeed1: TMenuItem;
//     N10WPM1: TMenuItem;
//     N15WPM1: TMenuItem;
//     N20WPM1: TMenuItem;
//     N25WPM1: TMenuItem;
//     N30WPM1: TMenuItem;
//     N35WPM1: TMenuItem;
//     N40WPM1: TMenuItem;
//     N45WPM1: TMenuItem;
//     N50WPM1: TMenuItem;
//     N55WPM1: TMenuItem;
//     N60WPM1: TMenuItem;
//     CWBandwidth1: TMenuItem;
//     CWBandwidth2: TMenuItem;
//     N300Hz1: TMenuItem;
//     N350Hz1: TMenuItem;
//     N400Hz1: TMenuItem;
//     N450Hz1: TMenuItem;
//     N500Hz1: TMenuItem;
//     N550Hz1: TMenuItem;
//     N600Hz1: TMenuItem;
//     N650Hz1: TMenuItem;
//     N700Hz1: TMenuItem;
//     N750Hz1: TMenuItem;
//     N800Hz1: TMenuItem;
//     N850Hz1: TMenuItem;
//     N900Hz1: TMenuItem;
//     N100Hz1: TMenuItem;
//     N150Hz1: TMenuItem;
//     N200Hz1: TMenuItem;
//     N250Hz1: TMenuItem;
//     N300Hz2: TMenuItem;
//     N350Hz2: TMenuItem;
//     N400Hz2: TMenuItem;
//     N450Hz2: TMenuItem;
//     N500Hz2: TMenuItem;
//     N550Hz2: TMenuItem;
//     N600Hz2: TMenuItem;
//     MonLevel1: TMenuItem;
//     N30dB1: TMenuItem;
//     N20dB1: TMenuItem;
//     N10dB1: TMenuItem;
//     N0dB1: TMenuItem;
//     N6: TMenuItem;
//     QRN1: TMenuItem;
//     QRM1: TMenuItem;
//     QSB1: TMenuItem;
//     Flutter1: TMenuItem;
//     LIDS1: TMenuItem;
//     Activity1: TMenuItem;
//     N11: TMenuItem;
//     N21: TMenuItem;
//     N31: TMenuItem;
//     N41: TMenuItem;
//     N51: TMenuItem;
//     N61: TMenuItem;
//     N71: TMenuItem;
//     N81: TMenuItem;
//     N91: TMenuItem;
//     N7: TMenuItem;
//     Duration1: TMenuItem;
//     N5min1: TMenuItem;
//     N10min1: TMenuItem;
//     N15min1: TMenuItem;
//     N30min1: TMenuItem;
//     N60min1: TMenuItem;
//     N90min1: TMenuItem;
//     N120min1: TMenuItem;
//     PlayRecordedAudio1: TMenuItem;
//     N8: TMenuItem;
//     AudioRecordingEnabled1: TMenuItem;
//     Panel11: TPanel;
//     ListView1: TListView;
//     Operator1: TMenuItem;
//     N9: TMenuItem;
//     ListView2: TListView;
//     sbar: TPanel;
//     mnuShowCallsignInfo: TMenuItem;
//     NRDigits1: TMenuItem;
//     SerialNRSet1: TMenuItem;
//     SerialNRSet2: TMenuItem;
//     SerialNRSet3: TMenuItem;
//     SerialNRCustomRange: TMenuItem;
//     CWMaxRxSpeed1: TMenuItem;
//     CWMinRxSpeed1: TMenuItem;
//     CWMinRxSpeedSet1: TMenuItem;
//     CWMinRxSpeedSet2: TMenuItem;
//     CWMinRxSpeedSet4: TMenuItem;
//     CWMinRxSpeedSet6: TMenuItem;
//     CWMinRxSpeedSet8: TMenuItem;
//     CWMinRxSpeedSet10: TMenuItem;
//     CWMinRxSpeedSet0: TMenuItem;
//     CWMaxRxSpeedSet0: TMenuItem;
//     CWMaxRxSpeedSet1: TMenuItem;
//     CWMaxRxSpeedSet2: TMenuItem;
//     CWMaxRxSpeedSet4: TMenuItem;
//     CWMaxRxSpeedSet6: TMenuItem;
//     CWMaxRxSpeedSet8: TMenuItem;
//     CWMaxRxSpeedSet10: TMenuItem;
//     NRQM: TMenuItem;
//     ContestGroup: TGroupBox;
//     SimContestCombo: TComboBox;
//     Label17: TLabel;
//     ExchangeEdit: TEdit;
//     Label19: TLabel;
//     Label20: TLabel;
//     Label21: TLabel;
//     Label22: TLabel;
//     procedure FormCreate(Sender: TObject);
//     procedure AlSoundOut1BufAvailable(Sender: TObject);
//     procedure FormDestroy(Sender: TObject);
//     procedure FormKeyPress(Sender: TObject; var Key: Char);
//     procedure FormKeyDown(Sender: TObject; var Key: Word;
//       Shift: TShiftState);
//     procedure Edit1Enter(Sender: TObject);
//     procedure FormMouseWheelDown(Sender: TObject; Shift: TShiftState;
//       MousePos: TPoint; var Handled: Boolean);
//     procedure FormMouseWheelUp(Sender: TObject; Shift: TShiftState;
//       MousePos: TPoint; var Handled: Boolean);
//     procedure ComboBox2Change(Sender: TObject);
//     procedure ComboBox1Change(Sender: TObject);
//     procedure FormClose(Sender: TObject; var Action: TCloseAction);
//     procedure SpinEdit1Change(Sender: TObject);
//     procedure SpinEdit2Change(Sender: TObject);
//     procedure PaintBox1Paint(Sender: TObject);
//     procedure Exit1Click(Sender: TObject);
//     procedure FirstTime1Click(Sender: TObject);
//     procedure About1Click(Sender: TObject);
//     procedure Readme1Click(Sender: TObject);
//     procedure ViewScoreBoardMNUClick(Sender: TObject);
//     procedure ViewScoreTable1Click(Sender: TObject);
//     procedure FormKeyUp(Sender: TObject; var Key: Word;
//       Shift: TShiftState);
//     procedure Edit2Enter(Sender: TObject);
//     procedure VolumeSliderDblClick(Sender: TObject);
//     procedure VolumeSlider1Change(Sender: TObject);
//     procedure WebPage1Click(Sender: TObject);
//     procedure Call1Click(Sender: TObject);
//     procedure NWPMClick(Sender: TObject);
//     procedure Pitch1Click(Sender: TObject);
//     procedure Bw1Click(Sender: TObject);
//     procedure File1Click(Sender: TObject);
//     procedure PlayRecordedAudio1Click(Sender: TObject);
//     procedure AudioRecordingEnabled1Click(Sender: TObject);
//     procedure SelfMonClick(Sender: TObject);
//     procedure Settings1Click(Sender: TObject);
//     procedure LIDS1Click(Sender: TObject);
//     procedure CWMaxRxSpeedClick(Sender: TObject);
//     procedure CWMinRxSpeedClick(Sender: TObject);
//     procedure NRDigitsClick(Sender: TObject);
//     procedure SerialNRCustomRangeClick(Sender: TObject);
//     procedure Activity1Click(Sender: TObject);
//     procedure Duration1Click(Sender: TObject);
//     procedure Operator1Click(Sender: TObject);
//     procedure ListView2CustomDrawSubItem(Sender: TCustomListView;
//       Item: TListItem; SubItem: Integer; State: TCustomDrawState;
//       var DefaultDraw: Boolean);
//     //procedure SimContestComboClick(Sender: TObject);
//     procedure ListView2SelectItem(Sender: TObject; Item: TListItem;
//       Selected: Boolean);
//     procedure mnuShowCallsignInfoClick(Sender: TObject);
//     procedure SimContestComboChange(Sender: TObject);
//     procedure SimContestComboRefresh;
//     procedure ExchangeEditChange(Sender: TObject);
//     procedure ExchangeEditExit(Sender: TObject);
//     procedure SpinEdit1Exit(Sender: TObject);

//   private
//     MustAdvance: boolean;       // Controls when Exchange fields advance
//     UserCallsignDirty: boolean; // SetMyCall is called after callsign edits
//     UserExchangeDirty: boolean; // SetMyExchange is called after exchange edits
//     CWSpeedDirty: boolean;      // SetWpm is called after CW Speed edits
//     RitLocal: integer;          // tracks incremented RIT Value
//     function CreateContest(AContestId : TSimContest) : TContest;
//     procedure ConfigureExchangeFields;
//     procedure SetMyExch1(const AExchType: TExchange1Type; const Avalue: string);
//     procedure SetMyExch2(const AExchType: TExchange2Type; const Avalue: string);
//     procedure SaveRecvFieldSizes;
//     procedure RestoreRecvFields;
//     procedure ResizeRecvFields;
//     procedure ProcessSpace;
//     procedure ProcessEnter;
//     procedure EnableCtl(Ctl: TWinControl; AEnable: boolean);
//     procedure WmTbDown(var Msg: TMessage); message WM_TBDOWN;
//     procedure SetToolbuttonDown(Toolbutton: TToolbutton; ADown: boolean);
//     procedure DecSpeed;
//     procedure IncSpeed;
//   public
//     CompetitionMode: boolean;

//     // Received Exchange information is contest-specific and depends on contest,
//     // user's QTH/location, DX station's QTH/location, and whether the user's
//     // simulated station is local/DX relative to the contest.
//     // This value is set by calling the virtual TContest.GetSentExchTypes()
//     // function. See TArrlDx.GetExchangeTypes() for additional information.
//     RecvExchTypes: TExchTypes;

//     procedure WipeBoxes;
//     procedure PopupScoreWpx;
//     procedure PopupScoreHst;
//     procedure Advance;
//     procedure SetContest(AContestNum: TSimContest);
//     function SetMyExchange(const AExchange: string) : Boolean;
//     procedure SetDefaultRunMode(V : Integer);
//     procedure SetMySerialNR;
//     procedure SetPitch(PitchNo: integer);
//     procedure SetBw(BwNo: integer);
//     procedure UpdateTitleBar;
//     procedure PostHiScore(const sScore: string);
//     procedure UpdSerialNR(V: integer {TSerialNRTypes});
//     procedure UpdSerialNRCustomRange(const ARange: string);
//     procedure UpdCWMinRxSpeed(minspd: integer);
//     procedure UpdCWMaxRxSpeed(Maxspd: integer);
//     procedure ClientHTTP1Redirect(Sender: TObject; var dest: string;
//       var NumRedirect: Integer; var Handled: Boolean; var VMethod: string);
//   end;

// function ToStr(const val : TExchange1Type): string; overload;
// function ToStr(const val : TExchange2Type): string; overload;

// const
//   CDebugExchSettings: boolean = false;  // compile-time exchange settings debug
//   CDebugCwDecoder: boolean = false;     // compile-time enable for CW Decoder
//   CDebugGhosting : boolean = false;     // compile-time enable for Ghosting debug

// var
//   MainForm: TMainForm;
//   SavedContest: TSimContest = TSimContest(-1);  // used to restore Exch Field sizes
//   SaveEdit1Width: integer = 0;
//   SaveEdit2Width: integer = 0;
//   SaveEdit3Width: integer = 0;
//   SaveLabel3Left: integer = 0;
//   SaveEdit3Left: integer = 0;

//   { debug switches - set via .INI file or compile-time switches (above) }
//   BDebugExchSettings: boolean;    // display parsed Exchange field settings
//   BDebugCwDecoder: boolean;       // enables CW stream to status bar
//   BDebugGhosting: boolean;        // enabled DxStation ghosting issues

// implementation

// uses
//   DXCC, ARRLFD, NAQP, CWOPS, CQWW, CQWPX, ARRLDX, CWSST, ALLJA, ACAG,
//   IARUHF, ARRLSS,
//   MorseKey, FarnsKeyer, CallLst,
//   SysUtils, ShellApi, Crc32, Idhttp, Math, IniFiles,
//   Dialogs, System.UITypes, TypInfo, ScoreDlg, Log, PerlRegEx, StrUtils;

// {$R *.DFM}

// function ToStr(const val : TExchange1Type) : string; overload;
// begin
//   Result := GetEnumName(typeInfo(TExchange1Type ), Ord(val));
// end;

// function ToStr(const val : TExchange2Type) : string; overload;
// begin
//   Result := GetEnumName(typeInfo(TExchange2Type ), Ord(val));
// end;

// { return whether the Edit2 control is the RST exchange field. }
// function Edit2IsRST: Boolean;
// begin
//   assert((not (SimContest in [scWpx, scHst])) or
//     (MainForm.RecvExchTypes.Exch1 = etRST));
//   Result := MainForm.RecvExchTypes.Exch1 = etRST;
// end;

// procedure TMainForm.FormCreate(Sender: TObject);
// begin
// {$ifdef DEBUG}
//   // detect/report memory leaks while in debug mode
//   System.ReportMemoryLeaksOnShutdown := True;
// {$endif}
//   Randomize;

//   Panel2.DoubleBuffered := True;
//   RichEdit1.Align := alClient;
//   RichEdit1.Font.Name:= 'Consolas';
//   RichEdit1.Font.Size:= 11;
//   Self.Caption:= 'Morse Runner - Community Edition';
//   Label12.Caption:= format('Morse Runner %s ', [sVersion]);
//   Label13.Caption:= Label12.Caption;
//   Label14.Caption:= Label12.Caption;
//   ListView2.Visible:= False;
//   ListView2.Clear;

//   UserCallsignDirty := False;
//   UserExchangeDirty := False;

//   // load DXCC support
//   gDXCCList := TDXCC.Create;

//   Histo:= THisto.Create(PaintBox1);

//   AlSoundOut1.BufCount := 4;

//   // Initialize Volume Slider with dB range [-60dB, 0dB]
//   // (using direct calls to avoid merge issues in .dfm)
//   VolumeSlider1.DbMax := 0;
//   VolumeSlider1.DbScale := 60;
//   VolumeSlider1.HintStep := 3;
//   VolumeSlider1.Db := 0;            // sets value = 1.0 (0dB)

//   // Read settings from .INI file
//   FromIni(
//     procedure (const aMsg : string)
//     begin
//       Application.MessageBox(PChar(aMsg),
//         'Error',
//         MB_OK or MB_ICONERROR);
//     end
//   );

//   // populate and sort SimContestCombo after reading .ini file settings
//   SimContestComboRefresh;
//   assert(MainForm.SimContestCombo.ItemIndex =
//     MainForm.SimContestCombo.Items.IndexOf(ActiveContest.Name));

//   // enable Exchange debugging either locally or via .INI file
//   BDebugExchSettings := CDebugExchSettings or Ini.DebugExchSettings;
//   BDebugCwDecoder := CDebugCwDecoder or Ini.DebugCwDecoder;

//   MakeKeyer(DEFAULTRATE, Ini.BufSize);

//   // create a derived TContest of the appropriate type
//   SetContest(Ini.SimContest);
// end;


// procedure TMainForm.FormDestroy(Sender: TObject);
// begin
//   ToIni;
//   gDXCCList.Free;
//   Histo.Free;
//   Tst.Free;
//   DestroyKeyer;
// end;


// // Contest Factory - allocate a derived TContest of the appropriate type
// function TMainForm.CreateContest(AContestId : TSimContest) : TContest;
// begin
//   // Adding a contest: implement a new contest-specific call history .pas file.
//   Result := nil;
//   case AContestId of
//   scWpx, scHst: Result := TCqWpx.Create;
//   scCwt:        Result := TCWOPS.Create;
//   scFieldDay:   Result := TArrlFieldDay.Create;
//   scNaQp:       Result := TNcjNaQp.Create;
//   scCQWW:       Result := TCqWW.Create;
//   scArrlDx:     Result := TArrlDx.Create;
//   scSst:        Result := TCWSST.Create;
//   scAllJa:      Result := TALLJA.Create;
//   scAcag:       Result := TACAG.Create;
//   scIaruHf:     Result := TIaruHf.Create;
//   scArrlSS:     Result := TSweepstakes.Create;
//   else
//     assert(false);
//   end;
// end;

// procedure TMainForm.AlSoundOut1BufAvailable(Sender: TObject);
// begin
//   if AlSoundOut1.Enabled then
//     AlSoundOut1.PutData(Tst.GetAudio);
// end;

// procedure TMainForm.FormKeyPress(Sender: TObject; var Key: Char);
// begin
//   case Key of
// {
//     #13: //^M = ESM
//       Ini.Esm := not Ini.Esm;
// }
//     #23: //^W  = Wipe
//       WipeBoxes;
//     #21: //^U  pileup continuo se 1
//       begin
//         if NoStopActivity = 0 then
//           begin
//             Label8.Caption := 'min';
//             NoStopActivity := 1
//           end
//         else
//         begin
//             NoStopActivity := 0;
//             Label8.Caption := 'min.';
//         end;

//       end;
//     #25: //^Y  = Edit
//       ;

//     #27: //Esc = Abort send
//       begin
//         if msgHisCall in Tst.Me.Msg then
//           CallSent := false;
//         if msgNR in Tst.Me.Msg then
//           NrSent := false;
//         Tst.Me.AbortSend;
//       end;

//     ';': //<his> <#>
//       begin
//         // some contests have additional exchange processing (e.g. ARRL SS)
//         Tst.OnExchangeEditComplete;  // sets Log.CallSent

//         SendMsg(msgHisCall);
//         SendMsg(msgNr);
//       end;

//     '.', '+', '[', ',': //TU & Save
//       begin
//         // verify callsign using simple length-based check
//         var ExchError: string;
//         if not Tst.CheckEnteredCallLength(Edit1.Text, ExchError) then
//           begin
//             DisplayError(ExchError, clRed);
//             Exit;
//           end;

//         // some contests have additional exchange processing (e.g. ARRL SS)
//         Tst.OnExchangeEditComplete;  // sets Log.CallSent

//         if not CallSent then
//           SendMsg(msgHisCall);
//         SendMsg(msgTU);
//         Log.SaveQso;
//       end;

//     ' ': // advance to next exchange field
//       if (ActiveControl <> ExchangeEdit) and
//          not ((ActiveControl = Edit3) and (SimContest = scArrlSS)) then
//         ProcessSpace
//       else
//         Exit;

//     //'\': // = F1
//     //  SendMsg(msgCQ);

//     else
//       Exit;
//   end;
//   Key := #0;
// end;


// procedure TMainForm.FormKeyDown(Sender: TObject; var Key: Word;
//   Shift: TShiftState);
// begin
//   case Key of
//     VK_INSERT: //<his> <#>
//       begin
//       Tst.OnExchangeEditComplete;
//       SendMsg(msgHisCall);
//       SendMsg(msgNr);
//       Key := 0;
//       end;

//     VK_RETURN: //Save
//       ProcessEnter;

//     87, 119: //Alt-W  = Wipe
//       if GetKeyState(VK_MENU) < 0 then WipeBoxes else Exit;

// {
//     'M': //Alt-M  = Auto CW
//       if GetKeyState(VK_MENU) < 0
//         then Ini.AutoCw := not Ini.AutoCw
//         else Exit;
// }

//     VK_UP:
//       if GetKeyState(VK_CONTROL) >= 0 then IncRit(1)
//       else if RunMode <> rmHst then SetBw(ComboBox2.ItemIndex+1);

//     VK_DOWN:
//       if GetKeyState(VK_CONTROL) >= 0  then IncRit(-1)
//       else if RunMode <> rmHst then SetBw(ComboBox2.ItemIndex-1);

//     VK_PRIOR: //PgUp
//       IncSpeed;

//     VK_NEXT: //PgDn
//       DecSpeed;

//     VK_F9:
//       if (ssAlt in Shift) or  (ssCtrl in Shift) then DecSpeed;

//     VK_F10:
//       if (ssAlt in Shift) or  (ssCtrl in Shift) then IncSpeed;

//     VK_F11:
//       WipeBoxes;

//     else
//       Exit;
//   end;
//   Key := 0;
// end;


// procedure TMainForm.FormKeyUp(Sender: TObject; var Key: Word;
//   Shift: TShiftState);
// begin
//   case Key of
//     VK_INSERT, VK_RETURN:
//       Key := 0;
//     end;
// end;


// {
//   Advance cursor to next exchange field. This procedure is called whenever
//   the Spacebar is pressed. Its purpose is to move the cursor to the next
//   Exchange field.

//   If the current contest has an RST field:
//   - the RST field value is set if currently empty
//   - the RST field is skipped (cursor is moved to the third exchange field).
//     Note that TAB key will select the middle digit of the RST field.
// }
// procedure TMainForm.ProcessSpace;
// begin
//   MustAdvance := false;

//   if Edit2IsRST then
//     begin
//       if ActiveControl = Edit1 then
//         begin
//           if Edit2.Text = '' then
//             Edit2.Text := '599';
//           ActiveControl := Edit3;
//         end
//       else if ActiveControl = Edit2 then
//         begin
//           if Edit2.Text = '' then
//             Edit2.Text := '599';
//           ActiveControl := Edit3;
//         end
//       else
//         ActiveControl := Edit1;
//     end
//   else {otherwise, space bar moves cursor to next field}
//     begin
//       if ActiveControl = Edit1 then
//         begin
//           if SimContest = scFieldDay then
//             SbarUpdateStationInfo(Edit1.Text);
//           if SimContest = scArrlSS then
//             ActiveControl := Edit3
//           else
//             ActiveControl := Edit2;
//         end
//       else if ActiveControl = Edit2 then
//         ActiveControl := Edit3
//       else
//         ActiveControl := Edit1;
//     end;
// end;


// {
//   Called when the Enter key is pressed.
//   In setup-mode:
//   - passes Enter key to either the Exchange setup field or callsign field.
//   In Run-mode:
//   - moves the cursor between QSO exchange fields following the QSO state.
//   - if either CW Speed and Active Spin Controls are active, cursor is moved
//     to the appropriate QSO exchange field.
//   - for some contests, the status bar is updated with Dx Station information.
// }
// procedure TMainForm.ProcessEnter;
// var
//   C, N, R, Q: boolean;
//   ExchError: string;
// begin
//   if ActiveControl = ExchangeEdit then
//     begin
//       // exit Exchange field
//       ExchangeEditExit(ActiveControl);
//       Exit;
//     end;
//   if ActiveControl = Edit4 then
//     begin
//       // exit callsign field
//       Edit4Exit(ActiveControl);
//       Exit;
//     end;
//   if ActiveControl = SpinEdit1 then
//     begin
//       // exit CW Speed Control
//       SpinEdit1Exit(ActiveControl);
//       if RunMode = rmStop then
//         Exit;
//     end;
//   MustAdvance := false;
//   ExchError := '';

//   sbar.Font.Color := clDefault;

//   // 'Control-Enter', 'Shift-Enter' and 'Alt-Enter' are shortcuts to SaveQSO
//   if (GetKeyState(VK_CONTROL) or GetKeyState(VK_SHIFT) or GetKeyState(VK_MENU)) < 0 then
//   begin
//     // verify callsign before calling SaveQSO
//     if not Tst.CheckEnteredCallLength(Edit1.Text, ExchError) then
//       begin
//         DisplayError(ExchError, clRed);
//         Exit;
//       end;

//     Log.SaveQso;
//     Exit;
//   end;

//   // Adding a contest: update status bar w/ station info.
//   // This status message occurs when user presses the Enter key.
//   // remember not to give a hint if exchange entry is affected by this info.
//   // for certain contests (e.g. ARRL Field Day), update update status bar
//   if SimContest in [scCwt, scFieldDay, scWpx, scCQWW, scArrlDx, scIaruHf] then
//     SbarUpdateStationInfo(Edit1.Text)
//   else if not BDebugCwDecoder then
//     SbarUpdateStationInfo('');

//   //no QSO in progress, send CQ
//   if Edit1.Text = '' then
//   begin
//     SendMsg(msgCq);
//     // special case - Cursor is in either CW Speed or Activity Spin Control
//     // when Enter key is pushed. Move cursor to the next QSO Exchange field.
//     if (RunMode <> rmStop) and
//           ((ActiveControl = SpinEdit1) or (ActiveControl = SpinEdit3)) then
//       MustAdvance := true;
//     Exit;
//   end;

//   // Update CallSent (HisCall has been sent)
//   Tst.OnExchangeEditComplete;

//   // clear prior error string
//   DisplayError('', clDefault);

//   //current state
//   C := CallSent;
//   N := NrSent;    // 'Nr' represents the exchange (<exch1> <exch2>).
//   Q := (Edit2.Text <> '') or (SimContest in [scArrlSS]);
//   case SimContest of
//     scArrlSS:
//       R := Tst.ValidateEnteredExchange(Edit1.Text, Edit2.Text, Edit3.Text, ExchError);
//     scNaQp:
//       // for NAQP, Exch2 can be empty because Non-NA (DX) Stations do not send State.
//       R := (Edit3.Text <> '') or (not (Tst as TNcjNaQp).IsCallLocalToContest(Edit1.Text));
//     else
//       R := (Edit3.Text <> '');
//   end;

//   //send his call if did not send before, or if call changed
//   if (not C) or ((not N) and (not R)) then
//     SendMsg(msgHisCall);
//   if not N then
//     SendMsg(msgNR);
//   if N and (not R or not Q) then
//     begin
//       DisplayError(ExchError, clDefault);
//       SendMsg(msgQm);
//     end;

//   if R and Q and (C or N) then
//   begin
//     // validate Exchange before sending TU and logging the QSO
//     if not Tst.ValidateEnteredExchange(Edit1.Text, Edit2.Text, Edit3.Text, ExchError) then
//       begin
//         DisplayError(ExchError, clRed);
//         Exit;
//       end;

//     SendMsg(msgTU);
//     Log.SaveQso;
//   end
//   else
//     MustAdvance := true;
// end;


// procedure TMainForm.Edit1Enter(Sender: TObject);
// var
//   P: integer;
// begin
//   P := Pos('?', Edit1.Text);
//   if P > 0 then
//   begin
//     Edit1.SelStart := P-1;
//     Edit1.SelLength := 1;
//   end;
// end;


// procedure TMainForm.FormMouseWheelDown(Sender: TObject; Shift: TShiftState;
//   MousePos: TPoint; var Handled: Boolean);
// begin
//   if GetKeyState(VK_CONTROL) >= 0  then IncRit(1)
//   else if RunMode <> rmHst then SetBw(ComboBox2.ItemIndex-1);
//   Handled := true;  // set Handled to prevent being called 3 times
// end;

// procedure TMainForm.FormMouseWheelUp(Sender: TObject; Shift: TShiftState;
//   MousePos: TPoint; var Handled: Boolean);
// begin
//   if GetKeyState(VK_CONTROL) >= 0 then IncRit(-1)
//   else if RunMode <> rmHst then SetBw(ComboBox2.ItemIndex+1);
//   Handled := true;  // set Handled to prevent being called 3 times
// end;


// procedure TMainForm.IncSpeed;
// begin
//   if RunMode = rmHST then
//     SetWpm(Trunc(Wpm / 5) * 5 + 5)
//   else
//     SetWpm(Wpm + Ini.WpmStepRate);
// end;


// procedure TMainForm.DecSpeed;
// begin
//   if RunMode = rmHST then
//     SetWpm(Ceil(Wpm / 5) * 5 - 5)
//   else
//     SetWpm(Wpm - Ini.WpmStepRate);
// end;

// procedure TMainForm.ExchangeEditChange(Sender: TObject);
// begin
//   // exchange edit callsign edit has occurred; allows SetMyCall to be called.
//   UserExchangeDirty := True;
// end;

// procedure TMainForm.ExchangeEditExit(Sender: TObject);
// begin
//   if UserExchangeDirty then
//     SetMyExchange(Trim(ExchangeEdit.Text));
// end;

// procedure TMainForm.SetContest(AContestNum: TSimContest);
// begin
//   // Adding a contest: add each contest to this set. TODO - implement alternative
//   // validate selected contest
//   if not (AContestNum in [scWpx, scCwt, scFieldDay, scNaQp, scHst,
//     scCQWW, scArrlDx, scSst, scAllJa, scAcag, scIaruHf, scArrlSS]) then
//   begin
//     ShowMessage('The selected contest is not yet supported.');
//     SimContestCombo.ItemIndex :=
//         SimContestCombo.Items.IndexOf(ActiveContest.Name);
//     Exit;
//   end;

//   // clear input fields prior to deleting Contest object.
//   WipeBoxes;

//   // restore Recv Exchange field sizing prior to deleting Contest object.
//   RestoreRecvFields;

//   // clear any status messages
//   sbar.Caption := '';
//   sbar.Font.Color := clDefault;
//   sbar.Visible := mnuShowCallsignInfo.Checked;

//   // drop prior contest
//   if Assigned(Tst) then
//     FreeAndNil(Tst);

//   assert(ContestDefinitions[AContestNum].T = AContestNum,
//     'Contest definitions are out of order');

//   Ini.SimContest := AContestNum;
//   Ini.ActiveContest := @ContestDefinitions[AContestNum];
//   SimContestCombo.ItemIndex :=
//         SimContestCombo.Items.IndexOf(Ini.ActiveContest.Name);

//   // create new contest
//   Tst := CreateContest(AContestNum);

//   // load original or Farnsworth Keyer
//   FreeAndNil(Keyer);
//   if SimContest in [scSST] then
//     Keyer := TFarnsKeyer.Create(DEFAULTRATE, Ini.BufSize)
//   else
//     Keyer := TKeyer.Create(DEFAULTRATE, Ini.BufSize);

//   // the following will initialize simulation-specific data owned by contest.
//   // (moved here from Ini.FromIni)
//   begin
//     // if emtpy, set initial User Exchange (e.g. 3A OR)
//     if Ini.UserExchangeTbl[SimContest].IsEmpty then
//       Ini.UserExchangeTbl[SimContest] := ActiveContest.ExchDefault;

//     // set contest-specific Sent Exchange field prior to calling SetMyCall().
//     // UI assumes uppercase only, so convert .ini file data to uppercase.
//     ExchangeEdit.Text := UpperCase(Ini.UserExchangeTbl[SimContest]);

//     // set user's call - also calls SetMyExchange and ConfigureExchangeFields.
//     SetMyCall(UpperCase(Ini.Call));
//     SetPitch(ComboBox1.ItemIndex);
//     SetBw(ComboBox2.ItemIndex);
//     SetWpm(Ini.Wpm);
//     SetQsk(Ini.Qsk);

//     // buffer size - set in TContest.Create()
//     assert(Tst.Filt.SamplesInInput = Ini.BufSize);
//     assert(Tst.Filt2.SamplesInInput = Ini.BufSize);

//     // my sent exchange set by SetMyCall() above
//     assert(Tst.Me.SentExchTypes = Tst.GetSentExchTypes(skMyStation, Ini.Call));
//   end;
// end;

// {procedure TMainForm.SetNumber(ANumber: string);
// begin
//    Ini.Number := ANumber;
//    editNumber.Text := ANumber;
//    Tst.Me.NR2 := ANumber;
// end;}

// {
//   Set my "sent" exchange fields using the exchange string containing two values,
//   separated by a space. Error/warning messages are displayed in the status bar.

//   My "sent" exchange types (Tst.Me.SentExchTypes) have been previously set by
//   SetMyCall().

//   Beginning with ARRL Sweepstakes contest, the exchange will have more than
//   two values, namely '# A 72 OR'. For the case of ARRL Sweepstakes, we will
//   break this into two pieces: Exch1='# A', Exch2='72 OR'.
// }
// function TMainForm.SetMyExchange(const AExchange: string) : Boolean;
// var
//   sl: TStringList;
//   ExchError: string;
//   SentExchTypes : TExchTypes;
// begin
//   sl:= TStringList.Create;
//   try
//     assert(Tst.Me.SentExchTypes = Tst.GetSentExchTypes(skMyStation, Ini.Call),
//       'set by TMainForm.SetMyCall');
//     SentExchTypes := Tst.Me.SentExchTypes;

//     // ValidateMyExchange will parse user-entered exchange and
//     // return Exch1 and Exch2 tokens.
//     if not Tst.ValidateMyExchange(AExchange, sl, ExchError) then
//       begin
//         Result := False;
//         DisplayError(ExchError, clRed);

//         // update the Sent Exchange field value
//         ExchangeEdit.Text := AExchange;
//         Ini.UserExchangeTbl[SimContest]:= AExchange;
//         exit;
//       end
//     else
//       begin
//         Result := True;
//         sbar.Visible := mnuShowCallsignInfo.Checked;
//         sbar.Font.Color := clDefault;
//         sbar.Caption := '';
//       end;

//     // restore Exchange fields if current contest has changed since last run
//     if (SimContest <> SavedContest) and (SaveEdit3Left <> 0) then
//       RestoreRecvFields;

//     // set contest-specific sent exchange values
//     SetMyExch1(SentExchTypes.Exch1, sl[0]);
//     SetMyExch2(SentExchTypes.Exch2, sl[1]);
//     assert(Tst.Me.SentExchTypes = SentExchTypes);

//     // update the Sent Exchange field value
//     ExchangeEdit.Text := AExchange;
//     Ini.UserExchangeTbl[SimContest]:= AExchange;

//     // update application's title bar
//     UpdateTitleBar;

//     UserExchangeDirty := False;
//   finally
//     sl.Free;
//   end;
// end;


// procedure TMainForm.UpdateTitleBar;
// begin
//   if (SimContest = scHst) and not HamName.IsEmpty then  // for HST, add operator name
//     Caption := Format('Morse Runner - Community Edition:  %s', [HamName])
//   else // Default is: Morse Runner - Community Edition
//     Caption := 'Morse Runner - Community Edition';
// end;


// procedure TMainForm.SetDefaultRunMode(V : Integer);
// begin
//   if (V >= Ord(rmPileUp)) and (V <= Ord(rmHst)) then
//     DefaultRunMode := TRunMode(V)
//   else
//     DefaultRunMode := rmPileUp;

//   assert(PopupMenu1.Items[0].Tag = Ord(rmPileUp));
//   assert(PopupMenu1.Items[1].Tag = Ord(rmSingle));
//   assert(PopupMenu1.Items[2].Tag = Ord(rmWpx));
//   assert(PopupMenu1.Items[3].Tag = Ord(rmHst));
//   PopupMenu1.Items[Ord(DefaultRunMode)-1].Default := True;
// end;


// procedure TMainForm.SetMySerialNR;
// begin
//   assert(Tst.Me.SentExchTypes.Exch2 = etSerialNr);
//   SetMyExch2(Tst.Me.SentExchTypes.Exch2, Ini.UserExchange2[SimContest]);
// end;

// {
//   Received Exchange Field types are defined by each contest.
//   Exchange Field types can also dynamically change for various contests:
//   - ARRL DX: Exchange 2 changes between etStateProv and etPower.
//   - ARRL 10m: Exchange 2 changes between etStateProv10m, etIARU, etSerial,
//     depending on sending station's callsign.
//   - NCJ NAQP: Exchange 2 changes between eNaQpExch2 and eNaQpNonNaExch2,
//     depending on sending station's callsign. Non-NA sends only send Name
//     without a location and DX is recorded in the log.

//   Received exchange field labels and exchange field maximum length are set.

//   This procedure is called whenever:
//   a) the contest changes by SetContest().
//   b) when DxStation's callsign is entered (dynamic during contest).

//   Note: using DxStations's callsign can be eliminated by using ASCII
//   exchange fields and not applying semantics until the log entry is
//   constructed and compared. This may simplify how dynamic exchange field
//   types are handled.
// }
// procedure TMainForm.ConfigureExchangeFields;
// const
//   { the logic below allows Exchange label to be optional.
//     If necessary, move this value into ContestDefinitions[] table. }
//   AExchangeLabel: PChar = 'Exchange';

// var
//   Visible: Boolean;

// begin
//   // Load Received exchange field types
//   RecvExchTypes:= Tst.GetRecvExchTypes(skMyStation, Tst.Me.MyCall, Trim(Edit1.Text));

//   // apply contest-specific exchange field sizing and positioning
//   ResizeRecvFields;

//   // Optional Contest Exchange label and field
//   Visible := AExchangeLabel <> '';
//   Label17.Visible:= Visible;
//   ExchangeEdit.Visible:= Visible;
//   Label17.Caption:= AExchangeLabel;

//   // The Exchange field is editable in some contests
//   ExchangeEdit.Enabled := ActiveContest.ExchFieldEditable;

//   // setup Exchange Field 1 (e.g. RST)
//   assert(RecvExchTypes.Exch1 = TExchange1Type(Exchange1Settings[RecvExchTypes.Exch1].T),
//     Format('Exchange1Settings[%d] ordering error: found %s, expecting %s.',
//       [Ord(RecvExchTypes.Exch1), ToStr(RecvExchTypes.Exch1),
//       ToStr(TExchange1Type(Exchange1Settings[RecvExchTypes.Exch1].T))]));
//   Label2.Caption:= Exchange1Settings[RecvExchTypes.Exch1].C;
//   Edit2.MaxLength:= Exchange1Settings[RecvExchTypes.Exch1].L;

//   // setup Exchange Field 2 (e.g. Serial #)
//   assert(RecvExchTypes.Exch2 = TExchange2Type(Exchange2Settings[RecvExchTypes.Exch2].T),
//     Format('Exchange2Settings[%d] ordering error: found %s, expecting %s.',
//       [Ord(RecvExchTypes.Exch2), ToStr(RecvExchTypes.Exch2),
//       ToStr(TExchange2Type(Exchange2Settings[RecvExchTypes.Exch2].T))]));
//   Label3.Caption := Exchange2Settings[RecvExchTypes.Exch2].C;
//   Edit3.MaxLength := Exchange2Settings[RecvExchTypes.Exch2].L;
// end;

// procedure TMainForm.SetMyExch1(const AExchType: TExchange1Type;
//   const Avalue: string);
// const
//   DIGITS = ['0'..'9'];
// var
//   L: integer;
// begin
//   // Adding a contest: setup contest-specific exchange field 1
//   case AExchType of
//     etRST:
//       begin
//         // Format('invalid RST (%s)', [AValue]));
//         Ini.UserExchange1[SimContest] := Avalue;
//         Tst.Me.RST := StrToInt(Avalue.Replace('E', '5', [rfReplaceAll])
//                                      .Replace('N', '9', [rfReplaceAll]));
//         Tst.Me.Exch1 := Avalue;
//         if BDebugExchSettings then Edit2.Text := Avalue; // testing only
//       end;
//     etOpName: // e.g. scCwt (David)
//       begin
//         // Format('invalid OpName (%s)', [AValue]));
//         Ini.HamName:= Avalue;
//         Ini.UserExchange1[SimContest] := Avalue;
//         Tst.Me.OpName := Avalue;
//         Tst.Me.Exch1 := Avalue;
//         if BDebugExchSettings then Edit2.Text := Avalue; // testing only
//       end;
//     etFdClass:  // e.g. scFieldDay (3A)
//       begin
//         // 'expecting FD class (3A)'
//         Ini.ArrlClass := Avalue;
//         Ini.UserExchange1[SimContest] := Avalue;
//         Tst.Me.Exch1 := Avalue;
//         if BDebugExchSettings then Edit2.Text := Avalue; // testing only
//       end;
//     etSSNrPrecedence:
//       begin
//         // Active during ARRL Sweepstakes contest.
//         // '#A' | '# A' | '123A' | '123 A' | 'A'
//         //    --> Exch1 = 'A' | ' A'       // optional leading space
//         // We want to send what is specified. If they say, '#A', then so space.
//         // We can can store leading space in Tst.Me.Exch1 = ' A', so strip
//         // the leading '#' or numeric ('123').
//         // - pull the leading numeric or '#' and store in NumberStr
//         // - convert '<nr><prec>' to '<nr>''<prec>'
//         // - convert '<nr> <prec>' to '<nr>' ' <prec>'
//         // - insert leading space if count=2
//         Ini.UserExchange1[SimContest] := Avalue;

//         if Avalue.IsEmpty then
//           begin
//             Tst.Me.NR := 1;
//             Tst.Me.Exch1 := '';
//           end
//         else if Avalue[1] = '#' then
//           begin
//             // optional leading '#' ('#A' | '# A')
//             if SerialNR in [snMidContest, snEndContest] then
//               Tst.Me.NR := 1 + (Tst.GetRandomSerialNR div 10) * 10
//             else
//               Tst.Me.NR := 1;
//             L := 2;
//             if Avalue[L] = ' ' then
//               while Avalue[L+1] = ' ' do
//                 Inc(L);
//             Tst.Me.Exch1 := Avalue.Substring(L-1);
//           end
//         else if CharInSet(Avalue[1], DIGITS) then
//           begin
//             // optional leading serial number ('123A' | '123 A')
//             L := 1;
//             repeat
//               Inc(L)
//             until not CharInSet(Avalue[L], DIGITS);
//             Tst.Me.NR := AValue.Substring(0,L-1).ToInteger;
//             if Avalue[L] = ' ' then
//               while Avalue[L+1] = ' ' do
//                 Inc(L);
//             Tst.Me.Exch1 := Avalue.Substring(L-1);
//             if BDebugExchSettings then Edit2.Text := Avalue; // testing only
//           end
//         else
//           begin
//             // no leading serial number. use assigned serial number behavior.
//             if SerialNR in [snMidContest, snEndContest] then
//               Tst.Me.NR := 1 + (Tst.GetRandomSerialNR div 10) * 10
//             else
//               Tst.Me.NR := 1;
//             Tst.Me.Exch1 := ' ' + Avalue;
//           end;
//         if BDebugExchSettings then Edit2.Text := Avalue; // testing only
//       end;
//     else
//       assert(false, Format('Unsupported exchange 1 type: %s.', [ToStr(AExchType)]));
//   end;
//   Tst.Me.SentExchTypes.Exch1 := AExchType;
// end;

// procedure TMainForm.SetMyExch2(const AExchType: TExchange2Type;
//   const Avalue: string);
// begin
//   assert(RunMode = rmStop);
//   // Adding a contest: setup contest-specific exchange field 2
//   case AExchType of
//     etSerialNr:
//       begin
//         var S : String := Avalue.Replace('T', '0', [rfReplaceAll])
//                                 .Replace('O', '0', [rfReplaceAll])
//                                 .Replace('N', '9', [rfReplaceAll]);
//         Ini.UserExchange2[SimContest] := Avalue;
//         if SimContest = scHST then
//           Tst.Me.NR := 1
//         else if S.Contains('#') and (SerialNR in [snMidContest, snEndContest]) then
//           Tst.Me.NR := 1 + (Tst.GetRandomSerialNR div 10) * 10
//         else if IsNum(S) then
//           Tst.Me.Nr := S.ToInteger
//         else
//           Tst.Me.Nr := 1;
//         if BDebugExchSettings then Edit3.Text := IntToStr(Tst.Me.Nr);  // testing only
//       end;
//     etGenericField, etNaQpExch2, etNaQpNonNaExch2:
//       begin
//         // 'expecting alpha-numeric field'
//         Ini.UserExchange2[SimContest] := Avalue;
//         Tst.Me.Exch2 := Avalue;
//         if BDebugExchSettings then Edit3.Text := Avalue; // testing only
//       end;
//     etArrlSection:  // e.g. Field Day (OR)
//       begin
//         // 'expecting FD section (e.g. OR)'
//         Ini.ArrlSection := Avalue;
//         Ini.UserExchange2[SimContest] := Avalue;
//         Tst.Me.Exch2 := Avalue;
//         if BDebugExchSettings then Edit3.Text := Avalue; // testing only
//       end;
//     etStateProv, etPower:  // e.g. NAQP (OR); ARRLDX (OR | KW)
//       begin
//         // 'expecting State or Province (e.g. OR)'
//         Ini.UserExchange2[SimContest] := Avalue;
//         Tst.Me.Exch2 := Avalue;
//         if BDebugExchSettings then Edit3.Text := Avalue; // testing only
//       end;
//     etCqZone:
//       begin
//         Ini.UserExchange2[SimContest] := Avalue;
//         Tst.Me.Exch2 := Avalue;
//         if BDebugExchSettings then Edit3.Text := Avalue;  // testing only
//       end;
//     etItuZone:
//       begin
//         // 'expecting Itu-Zone or IARU Society'
//         Ini.UserExchange2[SimContest] := Avalue;
//         Tst.Me.Exch2 := Avalue;
//         if BDebugExchSettings then Edit3.Text := Avalue; // testing only
//       end;
//     //etAge:
//     etJaPref:
//       begin
//         Ini.UserExchange2[SimContest] := Avalue;
//         Tst.Me.Exch2 := Avalue;
//         if BDebugExchSettings then Edit3.Text := Avalue; // testing only
//       end;
//     etJaCity:
//       begin
//         Ini.UserExchange2[SimContest] := Avalue;
//         Tst.Me.Exch2 := Avalue;
//         if BDebugExchSettings then Edit3.Text := Avalue; // testing only
//       end;
//     etSSCheckSection:
//       begin
//         Ini.UserExchange2[SimContest] := Avalue; // <check> <sect> (e.g. 72 OR)
//         Tst.Me.Exch2 := Avalue;
//         if BDebugExchSettings then
//           begin
//             Edit3.Text := Edit2.Text + ' ' + Avalue;  // testing only
//             Edit2.Text := '';
//           end;
//       end;
//     else
//       assert(false, Format('Unsupported exchange 2 type: %s.', [ToStr(AExchType)]));
//   end;
//   Tst.Me.SentExchTypes.Exch2 := AExchType;
// end;


// procedure TMainForm.SaveRecvFieldSizes;
// begin
//   SaveEdit1Width := Edit1.Width;
//   SaveEdit2Width := Edit2.Width;
//   SaveEdit3Width := Edit3.Width;
//   SaveLabel3Left := Label3.Left;
//   SaveEdit3Left := Edit3.Left;
//   SavedContest := Ini.SimContest;
// end;


// procedure TMainForm.RestoreRecvFields;
// begin
//   if SaveEdit3Left <> 0 then
//   begin
//     Edit1.Width := SaveEdit1Width;
//     Edit2.Width := SaveEdit2Width;
//     Edit3.Width := SaveEdit3Width;
//     Label3.Left := SaveLabel3Left;
//     Edit3.Left := SaveEdit3Left;

//     Label2.Show;
//     Edit2.Show;

//     SaveEdit1Width := 0;
//     SaveEdit2Width := 0;
//     SaveEdit3Width := 0;
//     SaveLabel3Left := 0;
//     SaveEdit3Left := 0;
//     SavedContest := UndefSimContest;
//   end;
// end;


// procedure TMainForm.ResizeRecvFields;
// const
//   PAD = 1;
// begin
//   case SimContest of
//     scArrlSS:
//       if SaveEdit3Left = 0 then
//       begin
//         // retain current field sizes
//         SaveRecvFieldSizes;

//         // hide Exch1 (Edit2)
//         Edit2.Hide;
//         Label2.Hide;

//         // reduce Edit1 width; shift Exch Field 2 to the left and grow
//         var Reduce1: integer := (SaveEdit1Width * 4) div 9;
//         Label3.Left := Label3.Left - (Label3.Left - Label2.Left) - Reduce1;
//         Edit3.Left := Edit2.Left - Reduce1;
//         Edit3.Width := Edit3.Width + (SaveEdit3Left - Edit2.Left + Reduce1 + 15);
//         Edit1.Width := Edit1.Width - Reduce1;
//       end;
//     scAllJa, scAcag:
//       if SaveEdit3Left = 0 then
//       begin
//         // retain current field sizes
//         SaveRecvFieldSizes;

//         // Update Exch1 and Exch2 field widths using field lengths
//         var L1: Integer := Exchange1Settings[RecvExchTypes.Exch1].L + PAD;
//         var L2: Integer := Exchange2Settings[RecvExchTypes.Exch2].L + PAD;
//         var CharWidth: Single := (SaveEdit2Width + SaveEdit3Width) / (L1 + L2);
//         Edit2.Width := Round(CharWidth * L1);
//         Edit3.Width := Round(CharWidth * L2);

//         // Adjust Exch2's left edge
//         var Delta: Integer := SaveEdit2Width - Edit2.Width;
//         Label3.Left := Label3.Left - Delta;
//         Edit3.Left := Edit3.Left - Delta;
//       end;
//   end;
// end;


// {
//   Set pitch based on menu item number.
//   Must be within range [0, ComboBox1.Items.Count).
// }
// procedure TMainForm.SetPitch(PitchNo: integer);
// begin
//   PitchNo := Max(0, Min(PitchNo, ComboBox1.Items.Count-1));
//   Ini.Pitch := 300 + PitchNo * 50;
//   ComboBox1.ItemIndex := PitchNo;
//   Tst.Modul.CarrierFreq := Ini.Pitch;
// end;


// {
//   Set bandwidth based on menu item number.
//   Must be within range [0, ComboBox2.Items.Count).
// }
// procedure TMainForm.SetBw(BwNo: integer);
// begin
//   BwNo := Max(0, Min(BwNo, ComboBox2.Items.Count-1));
//   Ini.Bandwidth := 100 + BwNo * 50;
//   ComboBox2.ItemIndex := BwNo;

//   Tst.Filt.Points := Round(0.7 * DEFAULTRATE / Ini.BandWidth);
//   Tst.Filt.GainDb := 10 * Log10(500/Ini.Bandwidth);
//   Tst.Filt2.Points := Tst.Filt.Points;
//   Tst.Filt2.GainDb := Tst.Filt.GainDb;

//   UpdateRitIndicator;
// end;

// procedure TMainForm.SimContestComboChange(Sender: TObject);
// begin
//   SetContest(FindContestByName(SimContestCombo.Items[SimContestCombo.ItemIndex]));
// end;

// { add contest names to SimContest Combo box and sort }
// procedure TMainForm.SimContestComboRefresh;
// var
//   C: TContestDefinition;
//   I: integer;
// begin
//   SimContestCombo.Items.Clear;
//   for C in ContestDefinitions do
//     SimContestCombo.Items.Add(C.Name);
//   SimContestCombo.Sorted:= True;

//   // Use current contest if it exists within the list; otherwise select the first
//   I := SimContestCombo.Items.IndexOf(Ini.ContestDefinitions[SimContest].Name);
//   if I = -1 then
//     begin
//       I := 0;
//       SetContest(Ini.FindContestByName(SimContestCombo.Items[I]));
//     end;
//   SimContestCombo.ItemIndex := I;
// end;

// procedure TMainForm.ComboBox2Change(Sender: TObject);
// begin
//   SetBw(ComboBox2.ItemIndex);
// end;

// procedure TMainForm.ComboBox1Change(Sender: TObject);
// begin
//   SetPitch(ComboBox1.ItemIndex);
// end;

// procedure TMainForm.FormClose(Sender: TObject; var Action: TCloseAction);
// begin
//   AlSoundOut1.Enabled := false;
//   if AlWavFile1.IsOpen then AlWavFile1.Close;
// end;

// procedure TMainForm.SpinEdit1Change(Sender: TObject);
// begin
//   if SpinEdit1.Focused then
//   begin
//     // CW Speed edit has occurred while focus is within the spin edit control.
//     // Mark this value as dirty and defer the call to SetWpm until edit is
//     // completed by user.
//     CWSpeedDirty := True
//   end
//   else
//     SetWpm(SpinEdit1.Value);
// end;

// {
//   Called when user leaves CW Speed Control or user presses Enter key.
// }
// procedure TMainForm.SpinEdit1Exit(Sender: TObject);
// begin
//   // call SetWpm if the CW Speed has been edited
//   if CWSpeedDirty then
//     SetWpm(SpinEdit1.Value);
// end;

// procedure TMainForm.SpinEdit2Change(Sender: TObject);
// begin
//   Ini.Duration := SpinEdit2.Value;
//   Histo.ReCalc(Ini.Duration);
// end;

// procedure TMainForm.PaintBox1Paint(Sender: TObject);
// begin
//   Histo.Repaint;
// end;

// procedure TMainForm.Exit1Click(Sender: TObject);
// begin
//   Close;
// end;


// procedure TMainForm.WipeBoxes;
// begin
//   Edit1.Text := '';
//   Edit2.Text := '';
//   Edit3.Text := '';
//   ActiveControl := Edit1;

//   if SimContest = scArrlSS then
//     Log.SBarUpdateSummary('');

//   if Assigned(Tst) then
//     Tst.OnWipeBoxes;

//   CallSent := false;
//   NrSent := false;
// end;


// procedure TMainForm.FirstTime1Click(Sender: TObject);
// const
//     Msg='                       First Time?'#13 +
//         'Welcome to Morse Runner Community Edition'#13 +
//         ''#13 +
//         'Initial Setup:'#13 +
//         '1) Select the Contest you wish to operate.'#13 +
//         '2) Type the exchange you wish to send.'#13 +
//         '3) In the station section replace VE3NEA with your call.'#13 +
//         '4) Select your CW Speed, Tone, and Bandwidth.'#13 +
//         '5) Turn on Band Conditions for realistic hardships.'#13 +
//         '6) Activity is the average amount of responses you want per CQ.'#13 +
//         '    So if no one responds, you might get twice the number the'#13 +
//         '    following time. This is a pile up trainer after all.'#13 +
//         '7) Select the time limit.'#13 +
//         '8) The Run button has a drop down.'#13 +
//         '    - Pile up - Hit F1 to call CQ. Get ready for pileups!'#13 +
//         '    - Single Calls - Work one station at a time with no pileups.'#13 +
//         'More detailed help is in the readme, but this gets you started.'#13 +
//         'Have Fun!'#13 +
//         ''#13 +
//         'Please visit us or provide feedback at either:'#13 +
//         '    - https://www.github.com/w7sst/MorseRunner/#readme'#13 +
//         '    - https://groups.io/g/MorseRunnerCE';
// begin
//     Application.MessageBox(PChar(Msg),
//       'First Time Setup',
//       MB_OK);
// end;


// procedure TMainForm.About1Click(Sender: TObject);
// const
//     Msg= //'Morse Runner - Community Edition'#13 +
//         'CW CONTEST SIMULATOR'#13#13 +
//         'Version %s'#13#13 +
//         'Copyright ©2004-2016 Alex Shovkoplyas, VE3NEA'#13 +
//         'Copyright ©2022-2025 Morse Runner Community Edition Contributors'#13#13 +
//         'https://www.github.com/w7sst/MorseRunner/#readme'#13 +
//         'https://groups.io/g/MorseRunnerCE';
// begin
//     Application.MessageBox(PChar(Format(Msg, [sVersion])),
//       'About Morse Runner - Community Edition',
//       MB_OK);
// end;


// procedure TMainForm.Readme1Click(Sender: TObject);
// var
//     FileName: string;
// begin
//     FileName := ExtractFilePath(ParamStr(0)) + 'readme.txt';
//     ShellExecute(GetDesktopWindow, 'open', PChar(FileName), '', '', SW_SHOWNORMAL);
// end;



// procedure TMainForm.EnableCtl(Ctl: TWinControl; AEnable: boolean);
// const
//   Clr: array[boolean] of TColor = (clBtnFace, clWindow);
// begin
//   Ctl.Enabled := AEnable;
//   if Ctl is TSpinEdit then (Ctl as TSpinEdit).Color := Clr[AEnable]
//   else if Ctl is TEdit then (Ctl as TEdit).Color := Clr[AEnable];
// end;

// procedure TMainForm.Run(Value: TRunMode);
// const
//   Mode: array[TRunMode] of string =
//     ('', 'Pile-Up', 'Single Calls', 'COMPETITION', 'H S T');
// var
//   BCompet, BStop: boolean;
//   //S: string;
// begin
//   if Value = Ini.RunMode then
//     Exit;

//   if Value <> rmStop then
//   begin
//     {
//       consider special case of click Run while focus in CallSign or Exchange
//       fields.

//       clicking in the Run button does not generate an OnExit event for the
//       Callsign nor Exchange fields until after the Run button has been processed.
//       Does this matter? Perhaps not... The contest audio will start before the
//       Exch1 and Exch2 fields are configured. The first thing sent after hitting
//       Run is a CQ from the DxStation and this CQ may depend on contest or
//       user callsign (e.g. ARRL DX controls Exch2).
//       THE CALLSIGN DOES AFFECT CQ!!!!
//       However, Exch2 does not affect CQ.
//       Only the Contest affects the CQ being sent (is this true for all contests?).
//       If user pushes Enter key after editing either the Exchange or Callsign
//       fields, then the proper OnEnter/OnExit event is sent for either control.
//       So I think we are okay if contest is started before dynamic exchange
//       setup is processed. As long as the CQ message is independent of Exchange
//       field setup, then we are okay.

//       to simplify this, the dynamic exchange can simply be an ascii-only field.
//       When QSO is saved to log, we know the calling DX Station and can get
//       it's sent type. The sent type is our receiving type which can be used
//       to check the accuracy of the entered QSO.
//     }
//     if UserCallsignDirty then
//        if not SetMyCall(Trim(Edit4.Text)) then
//          Exit;
//     if UserExchangeDirty then
//        if not SetMyExchange(Trim(ExchangeEdit.Text)) then
//          Exit;

//     // if requesting an HST run, verify the correct contest and serial NR
//     // mode is selected.
//     if (Value = rmHst) and
//        ((SimContest <> scHst) or (Ini.SerialNR <> snStartContest)) then
//     begin
//       var S : string :=
//         'Error: HST Competition mode requires the following settings:'#13 +
//         '  1. ''HST (High Speed Test)'' in the Contest dropdown.'#13 +
//         '  2. ''Start of Contest'' in the ''Settings | Serial NR'' menu.'#13 +
//         'Please correct these settings and try again.';
//       Application.MessageBox(PChar(S),
//         'Error',
//         MB_OK or MB_ICONERROR);
//       Exit;
//     end;

//     // load call history and other contest-specific setup before starting
//     if not Tst.OnContestPrepareToStart(Ini.Call, ExchangeEdit.Text) then
//       Exit;
//   end;

//   BStop := Value = rmStop;
//   BCompet := Value in [rmWpx, rmHst];
//   RunMode := Value;

//   //debug switches
//   BDebugExchSettings := (CDebugExchSettings or Ini.DebugExchSettings) and not BCompet;
//   BDebugCwDecoder := (CDebugCwDecoder or Ini.DebugCwDecoder) and not BCompet;
//   BDebugGhosting := (CDebugGhosting or Ini.DebugGhosting) and not BCompet;

//   //main ctls
//   EnableCtl(SimContestCombo, BStop);
//   EnableCtl(Edit4,  BStop);
//   EnableCtl(ExchangeEdit, BStop and ActiveContest.ExchFieldEditable);
//   EnableCtl(SpinEdit2, BStop);
//   SetToolbuttonDown(ToolButton1, not BStop);
//   ToolButton1.Caption := IfThen(BStop, 'Run', 'Stop');
//   ToolButton1.ImageIndex := IfThen(BStop, 0, 10);

//   //condition checkboxes
//   EnableCtl(CheckBox2, not BCompet);
//   EnableCtl(CheckBox3, not BCompet);
//   EnableCtl(CheckBox4, not BCompet);
//   EnableCtl(CheckBox5, not BCompet);
//   EnableCtl(CheckBox6, not BCompet);
//   if RunMode = rmWpx then
//     begin
//     CheckBox2.Checked := true;
//     CheckBox3.Checked := true;
//     CheckBox4.Checked := true;
//     CheckBox5.Checked := true;
//     CheckBox6.Checked := true;
//     SpinEdit2.Value := CompDuration;
//     end
//   else if RunMode = rmHst then
//     begin
//     CheckBox2.Checked := false;
//     CheckBox3.Checked := false;
//     CheckBox4.Checked := false;
//     CheckBox5.Checked := false;
//     CheckBox6.Checked := false;
//     SpinEdit2.Value := CompDuration;
//     end;

//   //button menu
//   PileupMNU.Enabled := BStop;
//   SingleCallsMNU.Enabled := BStop;
//   CompetitionMNU.Enabled := BStop;
//   HSTCompetition1.Enabled := BStop;
//   StopMNU.Enabled := not BStop;

//   //main menu
//   PileUp1.Enabled := BStop;
//   SingleCalls1.Enabled := BStop;
//   Competition1.Enabled := BStop;
//   HSTCompetition2.Enabled := BStop;
//   Stop1MNU.Enabled := not BStop;
//   ViewScoreTable1.Enabled:= BStop;  // by bg4fqd

//   Call1.Enabled := BStop;
//   Duration1.Enabled := BStop;
//   QRN1.Enabled := not BCompet;
//   QRM1.Enabled := not BCompet;
//   QSB1.Enabled := not BCompet;
//   Flutter1.Enabled := not BCompet;
//   Lids1.Enabled := not BCompet;

//   //hst specific
//   Activity1.Enabled := Value <> rmHst;
//   CWBandwidth2.Enabled := Value <> rmHst;
//   CWMinRxSpeed1.Enabled := Value <> rmHst;
//   CWMaxRxSpeed1.Enabled := Value <> rmHst;
//   NRDigits1.Enabled := Value <> rmHst;

//   EnableCtl(SpinEdit3, RunMode <> rmHst);
//   if RunMode = rmHst then SpinEdit3.Value := 4;

//   EnableCtl(ComboBox2, RunMode <> rmHst);
//   if RunMode = rmHst then begin ComboBox2.ItemIndex :=10; SetBw(10); end;

//   if RunMode = rmHst then ListView1.Visible := false
//   else if RunMode <> rmStop then ListView1.Visible := true;


//   //mode caption
//   Panel4.Caption := Mode[Value];
//   Panel4.Font.Color := IfThen(BCompet, clRed, clGreen);

//   if not BStop then
//     begin
//     Tst.Me.AbortSend;
//     Tst.BlockNumber := 0;
//     //Tst.Me.Nr := 1;
//     Log.Clear;
//     WipeBoxes;

//     RichEdit1.Visible:= false;
//     RichEdit1.Align:= alNone;
//     sbar.Align:= alBottom;
//     sbar.Visible:= mnuShowCallsignInfo.Checked;
//     ListView2.Align:= alClient;
//     ListView2.Clear;
//     ListView2.Visible:= true;
//     {! ?}
//     Panel5.Update;
//     end;

//   if not BStop then
//     IncRit(0);

//   if BStop then begin
//     {// save NR back to .INI File.
//     // todo - there is a better way to this.
//     if (not BCompet) and
//       (Self.ExchangeField2Type = etSerialNr) and
//       (SimContest in [scWpx]) then
//       begin
//         S := IntToStr(Tst.Me.NR);
//         Self.SetMyExch2(etSerialNr, S);
//       end;
//       }
//     if AlWavFile1.IsOpen then
//       AlWavFile1.Close;
//   end
//   else begin
//     AlWavFile1.FileName := ChangeFileExt(ParamStr(0), '.wav');
//     if SaveWav then
//       AlWavFile1.OpenWrite;
//   end;

//   AlSoundOut1.Enabled := not BStop;
// end;

// procedure TMainForm.WmTbDown(var Msg: TMessage);
// begin
//   TToolbutton(Msg.LParam).Down := Boolean(Msg.WParam);
// end;


// procedure TMainForm.SetToolbuttonDown(Toolbutton: TToolbutton;
//   ADown: boolean);
// begin
//     Windows.PostMessage(Handle, WM_TBDOWN, Integer(ADown), Integer(Toolbutton));
// end;


// procedure TMainForm.PopupScoreWpx;
// var
//     S, FName: string;
//     Score: integer;
//     DlgScore: TScoreDialog;
// begin
//     S := Format('%s %s %s %s ',
//     [
//         FormatDateTime('yyyy-mm-dd', Now),
//         trim(Ini.Call),
//         trim(ListView1.Items[0].SubItems[1]),
//         trim(ListView1.Items[1].SubItems[1])
//     ]);
//  //for debug
// {
//   S := Format('%s %s %s %s ',
//   [
//     FormatDateTime('yyyy-mm-dd', Now),
//     Ini.Call,
//     '111',
//     '107'
//   ]);
// }
//     S := S + '[' + IntToHex(CalculateCRC32(S, $C90C2086), 8) + ']';
//     FName := ChangeFileExt(ParamStr(0), '.lst');
//     with TStringList.Create do
//     try
//         if FileExists(FName) then
//             LoadFromFile(FName);
//         Add(S);
//         SaveToFile(FName);
//     finally
//         Free;
//     end;

//     DlgScore:= TScoreDialog.Create(Self);
//     try
//         DlgScore.Edit1.Text := S;

//         Score := StrToIntDef(ListView1.Items[2].SubItems[1], 0);
//         if Score > HiScore then
//             DlgScore.Height := 192
//         else
//             DlgScore.Height := 129;
//         HiScore := Max(HiScore, Score);
//         DlgScore.ShowModal;
//     finally
//         DlgScore.Free;
//     end;
// end;


// procedure TMainForm.PopupScoreHst;
// var
//     S: string;
//     FName: TFileName;
// begin
//   S := Format('%s'#9'%s'#9'%s'#9'%s', [
//     FormatDateTime('yyyy-mm-dd hh:nn', Now),
//     Ini.Call,
//     Ini.HamName,
//     Panel11.Caption]);

//   FName := ExtractFilePath(ParamStr(0)) + 'HstResults.txt';
//   with TStringList.Create do
//     try
//       if FileExists(FName) then
//         LoadFromFile(FName);
//       Add(S);
//       SaveToFile(FName);
//     finally
//       Free;
//     end;

//   ShowMessage('HST Score: ' + ListView1.Items[2].SubItems[1]);
// end;


// procedure OpenWebPage(Url: string);
// begin
//   ShellExecute(GetDesktopWindow, 'open', PChar(Url), '', '', SW_SHOWNORMAL);
// end;


// procedure TMainForm.ViewScoreBoardMNUClick(Sender: TObject);
// begin
//   //PopupScoreWpx;
//   OpenWebPage(WebServer);
// end;

// procedure TMainForm.ViewScoreTable1Click(Sender: TObject);
// var
//   FName: string;
// begin
//   RichEdit1.Clear;
//   ListView2.Align:= alNone;
//   ListView2.Visible:= false;
//   sbar.Visible:= false;
//   RichEdit1.Align:= alClient;
//   RichEdit1.Visible:= true;
//   FName := ChangeFileExt(ParamStr(0), '.lst');
//   if FileExists(FName) then
//     RichEdit1.Lines.LoadFromFile(FName)
//   else
//     RichEdit1.Lines.Add('Your score table is empty');
//   RichEdit1.Visible := true;
//   RichEdit1.Font.Name:= 'Consolasf';
// end;

// procedure TMainForm.mnuShowCallsignInfoClick(Sender: TObject);
// begin
//     with Sender as TMenuItem do begin
//         Checked := not Checked;
//         if ListView2.Visible then
//             sbar.Visible:= Checked;
//     end;
// end;

// procedure TMainForm.ClientHTTP1Redirect(Sender: TObject; var dest: string;
//   var NumRedirect: Integer; var Handled: Boolean; var VMethod: string);
// begin
//   (Sender as TIdHTTP).Tag:= 1;
//   Handled:= true;
// end;





// {
//   Move cursor to next exchange field.
//   Called by TMyStation.GetBlock after callsign is sent.
//   If the callsign field (Edit1) contains a '?', the active control is
//   set to Edit1 and the '?' is selected.
//   For contests with an RST field, the RST field is set to 599 and the active
//   control is then set to Edit3 (skipping the RST field). Note that using
//   TAB will select the RST field with the middle digit selected.
//   For contests without an RST field, the active control is advanced to the
//   next exchange field.
// }
// procedure TMainForm.Advance;
// begin
//   if not MustAdvance then
//     Exit;

//   if Edit2IsRST and (Edit2.Text = '') then
//     Edit2.Text := '599';

//   if (Edit1.Text = '') or
//      (Pos('?', Edit1.Text) > 0) then
//     begin
//       { stay in callsign field if callsign has a '?' }
//       if ActiveControl = Edit1 then
//         Edit1Enter(nil)
//       else
//         ActiveControl := Edit1;
//     end
//   else
//     begin
//       { otherwise advance to next field, skipping RST }
//       if Edit2IsRST or not Edit2.Showing then
//         ActiveControl := Edit3
//       else
//         ActiveControl := Edit2;

//       if (SimContest = scArrlSS) and
//         (Ini.ShowCheckSection > 0) and
//         (ActiveControl = Edit3) and (Edit3.Text = '') and
//         (Random < (ShowCheckSection/100)) then
//           begin
//             // inject a Section error 10% of the time
//             var S: string := (Tst as TSweepstakes).GetCheckSection(Edit1.Text, 0.10);
//             if not S.IsEmpty then
//               S := S + ' ';
//             Edit3.Text := S;
//             Edit3.SelStart := S.Length;
//           end;
//     end;

//   MustAdvance := false;
// end;



// procedure TMainForm.VolumeSliderDblClick(Sender: TObject);
// begin
//   with Sender as TVolumeSlider do begin
//     Value := 1;         // Set to full volume, 0 dB
//     OnChange(Sender);
//   end;
// end;


// {
//   The Volume slider changes and Hint generation are handled within the VCL
//   Control. See VCL/VolmSldr.pas.
// }
// procedure TMainForm.VolumeSlider1Change(Sender: TObject);
// begin
//   Ini.MonLevel := round(VolumeSlider1.Db);
// end;


// procedure TMainForm.WebPage1Click(Sender: TObject);
// begin
//   OpenWebPage('https://www.github.com/w7sst/MorseRunner#readme');
// end;


// procedure TMainForm.PostHiScore(const sScore: string);
// var
//   HttpClient: TIdHttp;
//   ParamList: TStringList;
//   s, sUrl, sp: string;
//   response: TMemoryStream;
//   p: integer;
// begin
//   HttpClient:= TIdHttp.Create();
//   response:= TMemoryStream.Create;
//   s:= format(SubmitHiScoreURL, [sScore]);
//   s:= StringReplace(s, ' ', '%20', [rfReplaceAll]);
//   try
//     HttpClient.AllowCookies:= true;
//     HttpClient.Request.ContentType:= 'application/x-www-form-urlencoded';
//     HttpClient.Request.CacheControl:='no-cache';
//     HttpClient.Request.UserAgent:='User-Agent=Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)';
//     HttpClient.Request.Accept:='Accept=*/*';
//     HttpClient.OnRedirect:= ClientHTTP1Redirect;
//     if PostMethod<>'POST' then
//     begin // Method = Get
//       s:= StringReplace(s, '[', '%5B', [rfReplaceAll]);
//       s:= StringReplace(s, ']', '%5D', [rfReplaceAll]);
//       HttpClient.Get(s, response);
//     end
//     else
//     begin // Method = Post
//       p:= pos('?', s);
//       sUrl:= copy(s, 0, p-1);
//       sp:= copy(s, p + 1, MaxInt);
//       ParamList:= TStringList.Create;
//       ParamList.Delimiter:= '&';
//       ParamList.DelimitedText:= sp;
//       // procedure TStrings.SetDelimitedText(const Value: string); has a bug
//       ParamList.Text:= StringReplace(ParamList.Text, '%20', ' ', [rfReplaceAll]);
//       HttpClient.Request.ContentType:= 'application/x-www-form-urlencoded';
//       s:= HttpClient.Post(sUrl, ParamList);
//       ParamList.Free;
//     end;
//     if HttpClient.Tag=1 then
//       ShowMessage('Sent!')
//     else
//       ShowMessage('Error!');
//   finally
//     HttpClient.Free;
//   end;
// end;

// //------------------------------------------------------------------------------
// //                              accessibility
// //------------------------------------------------------------------------------
// procedure TMainForm.Call1Click(Sender: TObject);
// begin
//   // UI assumes uppercase only, so convert user's callsign to uppercase.
//   SetMyCall(UpperCase(Trim(InputBox('Callsign', 'Callsign', Edit4.Text))));
// end;

// procedure TMainForm.NWPMClick(Sender: TObject);
// begin
//   SetWpm((Sender as TMenuItem).Tag);
// end;

// procedure TMainForm.SetWpm(AWpm : integer);
// begin
//   Wpm := Max(10, Min(120, AWpm));
//   SpinEdit1.Value := Wpm;
//   Tst.Me.SetWpm(Wpm);

//   CWSpeedDirty := False;
// end;


// procedure TMainForm.Pitch1Click(Sender: TObject);
// begin
//   SetPitch((Sender as TMenuItem).Tag);
// end;

// procedure TMainForm.Bw1Click(Sender: TObject);
// begin
//   SetBw((Sender as TMenuItem).Tag);
// end;

// procedure TMainForm.File1Click(Sender: TObject);
// var
//   Stp: boolean;
// begin
//   Stp := RunMode = rmStop;

//   AudioRecordingEnabled1.Enabled := Stp;
//   PlayRecordedAudio1.Enabled := Stp and FileExists(ChangeFileExt(ParamStr(0), '.wav'));

//   AudioRecordingEnabled1.Checked := Ini.SaveWav;
// end;

// procedure TMainForm.PlayRecordedAudio1Click(Sender: TObject);
// var
//   FileName: string;
// begin
//   FileName := ChangeFileExt(ParamStr(0), '.wav');
//   ShellExecute(GetDesktopWindow, 'open', PChar(FileName), '', '', SW_SHOWNORMAL);
// end;


// procedure TMainForm.AudioRecordingEnabled1Click(Sender: TObject);
// begin
//   Ini.SaveWav := not Ini.SaveWav;
// end;


// procedure TMainForm.SelfMonClick(Sender: TObject);
// begin
//   VolumeSlider1.Db := (Sender as TMenuItem).Tag;
//   VolumeSlider1.OnChange(Sender);
// end;

// procedure TMainForm.Settings1Click(Sender: TObject);
// begin
//   QSK1.Checked := Ini.Qsk;
//   QRN1.Checked := Ini.Qrn;
//   QRM1.Checked := Ini.Qrm;
//   QSB1.Checked := Ini.Qsb;
//   Flutter1.Checked := Ini.Flutter;
//   LIDS1.Checked := Ini.Lids;
// end;


// procedure TMainForm.CWMaxRxSpeedClick(Sender: TObject);
// Var
//   maxspd:integer;
// begin
//   maxspd := (Sender as TMenuItem).Tag;

//   UpdCWMaxRxSpeed(maxspd);
// end;


// procedure TMainForm.UpdCWMaxRxSpeed(Maxspd: integer);
// begin
//   Ini.MaxRxWpm := Maxspd;
//   CWMaxRxSpeedSet0.checked := maxspd = 0;
//   CWMaxRxSpeedSet1.checked := maxspd = 1;
//   CWMaxRxSpeedSet2.checked := maxspd = 2;
//   CWMaxRxSpeedSet4.checked := maxspd = 4;
//   CWMaxRxSpeedSet6.checked := maxspd = 6;
//   CWMaxRxSpeedSet8.checked := maxspd = 8;
//   CWMaxRxSpeedSet10.checked := maxspd = 10;
// end;


// procedure TMainForm.CWMinRxSpeedClick(Sender: TObject);
// Var
//   minspd:integer;
// begin
//   minspd := (Sender as TMenuItem).Tag;

//   UpdCWMinRxSpeed(minspd);
// end;


// procedure TMainForm.UpdCWMinRxSpeed(minspd: integer);
// begin
//    if (Wpm < 15) and  (minspd > 4) then
//             minspd := 4;

//   Ini.MinRxWpm := minspd;
//   CWMinRxSpeedSet0.checked := minspd = 0;
//   CWMinRxSpeedSet1.checked := minspd = 1;
//   CWMinRxSpeedSet2.checked := minspd = 2;
//   CWMinRxSpeedSet4.checked := minspd = 4;
//   CWMinRxSpeedSet6.checked := minspd = 6;
//   CWMinRxSpeedSet8.checked := minspd = 8;
//   CWMinRxSpeedSet10.checked := minspd = 10;
// end;

// procedure TMainForm.NRDigitsClick(Sender: TObject);
// Var
//   snt: integer;
// begin
//   snt := (Sender as TMenuItem).Tag;

//   UpdSerialNR(snt);
// end;


// procedure TMainForm.SerialNRCustomRangeClick(Sender: TObject);
// Var
//   snt:integer;
//   RangeStr: string;
//   ClickedOK, Done: boolean;
//   tempRange : TSerialNRSettings;
//   Err: string;
// begin
//   snt := (Sender as TMenuItem).Tag;

//   tempRange := Ini.SerialNRSettings[snCustomRange];
//   RangeStr := tempRange.RangeStr;
//   Done := False;
//   repeat
//     begin
//       ClickedOK := Dialogs.InputQuery('Enter Custom Serial Number Range',
//         'Enter min-max values (e.g. 01-99):',
//         RangeStr);
//       if not ClickedOK then break;

//       // split into two strings [Min, Max)
//       tempRange.ParseSerialNR(RangeStr, Err);

//       if Err <> '' then
//         begin
//           // report error and try again
//           MessageDlg(Err, mtError, [mbOK], 0);
//         end
//       else
//         begin
//           Ini.SerialNRSettings[snCustomRange] := tempRange;
//           UpdSerialNRCustomRange(tempRange.RangeStr);
//           UpdSerialNR(snt);
//           Done := true;
//         end;
//     end;
//   until (Done);
// end;


// procedure TMainForm.UpdSerialNR(V: integer);
// begin
//   assert(Ord(snStartContest) = SerialNRSet1.Tag);
//   assert(Ord(snMidContest) = SerialNRSet2.Tag);
//   assert(Ord(snEndContest) = SerialNRSet3.Tag);
//   assert(Ord(snCustomRange) = SerialNRCustomRange.Tag);

//   var snt : TSerialNrTypes := TSerialNrTypes(V);

//   // validate custom serial number range; if invalid, set to Start of Contest
//   if not Ini.SerialNRSettings[snt].IsValid then
//     snt := snStartContest;

//   Ini.SerialNR := snt;
//   SerialNRSet1.Checked := snt = snStartContest;
//   SerialNRSet2.Checked := snt = snMidContest;
//   SerialNRSet3.Checked := snt = snEndContest;
//   SerialNRCustomRange.Checked := snt = snCustomRange;

//   // update contest-specific settings/caches (e.g. SerialNR Generator for CQ Wpx)
//   if not (RunMode in [rmStop, rmHST]) then
//     Tst.SerialNrModeChanged;
// end;


// procedure TMainForm.UpdSerialNRCustomRange(const ARange: string);
// begin
//   if Ini.SerialNRSettings[snCustomRange].IsValid then
//     SerialNRCustomRange.Caption := Format('Custom Range (%s)...', [ARange])
//   else
//     SerialNRCustomRange.Caption := 'Custom Range...';
// end;


// //ALL checkboxes
// procedure TMainForm.LIDS1Click(Sender: TObject);
// begin
//   with Sender as TMenuItem do Checked := not Checked;

//   CheckBox4.Checked := QRN1.Checked;
//   CheckBox3.Checked := QRM1.Checked;
//   CheckBox2.Checked := QSB1.Checked;
//   CheckBox5.Checked := Flutter1.Checked;
//   CheckBox6.Checked := LIDS1.Checked;

//   ReadCheckboxes;
// end;


// procedure TMainForm.ListView2CustomDrawSubItem(Sender: TCustomListView;
//   Item: TListItem; SubItem: Integer; State: TCustomDrawState;
//   var DefaultDraw: Boolean);
// var
//   View: TListView;
//   Qso: PQso;
// begin
//   if Length(QsoList) = 0 then Exit;

//   View := Sender as TListView;
//   Qso := @QsoList[Item.Index];

//   if Log.ShowCorrections then
//   begin
//     // column errors are stored as individual bits in Qso.ColumnErrorFlags
//     const ColumnFlag: integer = (1 shl SubItem);
//     if (Qso.Err <> '   ') and ((Qso.ColumnErrorFlags and ColumnFlag) <> 0) then
//       View.Canvas.Font.Color := clRed
//     else
//       View.Canvas.Font.Color := clBlack;
//   end
//   else if SubItem = Log.CorrectionColumnInx then
//     View.Canvas.Font.Color := clRed
//   else
//     View.Canvas.Font.Color := clBlack;

//   // strike out HST Score if a QSO error exists
//   if SimContest = scHst then
//     if (SubItem = 4) and (Qso.Err <> '   ') and (Qso.TrueCall <> '') then
//       View.Canvas.Font.Style := [fsStrikeOut]
//     else
//       View.Canvas.Font.Style := [];
// end;

// procedure TMainForm.ListView2SelectItem(Sender: TObject; Item: TListItem;
//   Selected: Boolean);
// begin
//     if (Selected and mnuShowCallsignInfo.Checked) then
//         SbarUpdateStationInfo(Item.SubItems[0]);
// end;

// procedure TMainForm.Activity1Click(Sender: TObject);
// begin
//   Ini.Activity := (Sender as TMenuItem).Tag;
//   SpinEdit3.Value := Ini.Activity;
// end;


// procedure TMainForm.Duration1Click(Sender: TObject);
// begin
//   Ini.Duration := (Sender as TMenuItem).Tag;
//   SpinEdit2.Value := Ini.Duration;
// end;


// procedure TMainForm.Operator1Click(Sender: TObject);
// begin
//   HamName := InputBox('HST Operator', 'Enter operator''s name', HamName);
//   HamName := UpperCase(HamName);

//   UpdateTitleBar;

//   with TIniFile.Create(ChangeFileExt(ParamStr(0), '.ini')) do
//     try
//       WriteString(SEC_STN, 'Name', HamName);
//     finally
//       Free;
//     end;
// end;

// end.






import { useState, useCallback, useRef } from 'react';
import * as Station from '../data/Station';
import * as Ini from '../services/Ini';

// Constants
const sVersion = '1.85.3+'; // Sets version strings in UI panel

// TODO: Map Pascal types to TypeScript equivalents
// TSimContest, TRunMode, TStationMessage, TExchange1Type, TExchange2Type, etc.

export const useMainFormHandlers = () => {
  // Private state (mirrors Pascal private fields)
  const mustAdvanceRef = useRef<boolean>(false);
  const userCallsignDirtyRef = useRef<boolean>(false);
  const userExchangeDirtyRef = useRef<boolean>(false);
  const cwSpeedDirtyRef = useRef<boolean>(false);
  const spinEdit1FocusedRef = useRef<boolean>(false);
  const spinEdit1ValueRef = useRef<number>(25);
  const ritLocalRef = useRef<number>(0);
  const edit1Ref = useRef<(() => void) | null>(null); // Function to focus Edit1 TextInput (equivalent to Pascal ActiveControl)
  const edit1TextInputRef = useRef<any>(null); // Actual TextInput ref for selection operations
  const [edit1Selection, setEdit1Selection] = useState<{ start: number; end: number } | null>(null); // Selection state for web
  const edit2TextInputRef = useRef<any>(null); // Actual TextInput ref for Edit2 selection operations
  const [edit2Selection, setEdit2Selection] = useState<{ start: number; end: number } | null>(null); // Selection state for Edit2 on web
  const edit3TextInputRef = useRef<any>(null); // Actual TextInput ref for Edit3 selection operations
  const [edit3Selection, setEdit3Selection] = useState<{ start: number; end: number } | null>(null); // Selection state for Edit3 on web

  // Public state
  const [competitionMode, setPanel11CompetitionMode] = useState<boolean>(false);
  const [runMode, setRunMode] = useState<string>(''); // Panel4 caption: 'Pile-Up', 'Single Calls', 'COMPETITION', 'H S T'
  const [ritValue, setRitValue] = useState<number>(0); // RIT value for Panel8/Shape2 positioning
  const [panel11Caption, setPanel11Caption] = useState<string>('0'); // Panel11 caption
  const [scorePtsRaw, setScorePtsRaw] = useState<string>('0');
  const [scorePtsVerified, setScorePtsVerified] = useState<string>('0');
  const [scoreMultRaw, setScoreMultRaw] = useState<string>('0');
  const [scoreMultVerified, setScoreMultVerified] = useState<string>('0');
  const [scoreTotalRaw, setScoreTotalRaw] = useState<string>('0');
  const [scoreTotalVerified, setScoreTotalVerified] = useState<string>('0');
  
  // Panel6 state
  const [listView2Visible, setListView2Visible] = useState<boolean>(false);
  const [richEdit1Visible, setRichEdit1Visible] = useState<boolean>(false);
  const [sbarVisible, setSbarVisible] = useState<boolean>(false);
  const [sbarCaption, setSbarCaption] = useState<string>('');
  const [richEdit1Text, setRichEdit1Text] = useState<string>('');
  const [listView2Data, setListView2Data] = useState<Array<{
    utc: string;
    call: string;
    recv: string;
    sent: string;
    pref: string;
    chk: string;
    wpm: string;
  }>>([]);
  const [appVersion, setAppVersion] = useState<string>('1.xx');
  
  // Panel9 - ContestGroup state
  const [simContestComboItems, setSimContestComboItems] = useState<string[]>([]);
  
  // ComboBox items
  const comboBox1Items = ['300 Hz', '350 Hz', '400 Hz', '450 Hz', '500 Hz', '550 Hz', '600 Hz', '650 Hz', '700 Hz', '750 Hz', '800 Hz', '850 Hz', '900 Hz'];
  const comboBox2Items = ['100 Hz', '150 Hz', '200 Hz', '250 Hz', '300 Hz', '350 Hz', '400 Hz', '450 Hz', '500 Hz', '550 Hz', '600 Hz'];
  
  // ToolButton1 state (Run/Stop)
  const [runButtonDown, setRunButtonDown] = useState<boolean>(false);
  const [runButtonCaption, setRunButtonCaption] = useState<string>('   Run   ');
  const [runDropdownVisible, setRunDropdownVisible] = useState<boolean>(false);
  const [currentRunMode, setCurrentRunMode] = useState<string>('Pile-Up'); // Current selected run mode
  
  // TODO: Add RecvExchTypes state when types are defined

  // Form control state (Edit controls)
  const [edit1Text, setEdit1TextState] = useState('');
  
  // setEdit1Text with validation (equivalent to Pascal Edit1KeyPress filtering)
  // In Pascal, Edit1KeyPress sets Key := #0 to prevent invalid characters
  // In React Native, we filter them in the setter
  const setEdit1Text = useCallback((text: string) => {
    // Valid characters: A-Z, a-z, 0-9, /, ? (matching Pascal CharInSet check)
    const filtered = text.replace(/[^A-Za-z0-9/?]/g, '');
    setEdit1TextState(filtered);
  }, []);
  const [edit2Text, setEdit2TextState] = useState('');
  
  // setEdit2Text with validation (equivalent to Pascal Edit2KeyPress filtering)
  // In Pascal, Edit2KeyPress sets Key := #0 to prevent invalid characters
  // In React Native, we filter them in the setter
  const setEdit2Text = useCallback((text: string) => {
    // Map A/E/N to 1/5/9 for RST mode (unless HST mode)
    let mappedText = text;
    if (runMode !== 'HST Competition') {
      mappedText = text.replace(/[aA]/g, '1').replace(/[eE]/g, '5').replace(/[nN]/g, '9');
    }
    // Filter invalid characters based on field type
    // TODO: Use RecvExchTypes.Exch1 when implemented
    // For now, default to RST mode: only 0-9
    // When RecvExchTypes is implemented:
    //   - etRST: only 0-9
    //   - etOpName: only A-Z, a-z
    //   - etFdClass: only 0-9, A-F, a-f, X, x
    const filtered = mappedText.replace(/[^0-9]/g, '');
    setEdit2TextState(filtered);
  }, [runMode]);
  const [edit3Text, setEdit3TextState] = useState('');
  
  // setEdit3Text with validation (equivalent to Pascal Edit3KeyPress filtering)
  // In Pascal, Edit3KeyPress sets Key := #0 to prevent invalid characters
  // In React Native, we filter them in the setter
  const setEdit3Text = useCallback((text: string) => {
    // TODO: Use RecvExchTypes.Exch2 when implemented
    // For now, default to SerialNr mode (most common case)
    // Map A/N/T to 1/9/0 for SerialNr/ItuZone/Age (unless HST mode)
    let mappedText = text;
    if (runMode !== 'HST Competition') {
      mappedText = text.replace(/[aA]/g, '1').replace(/[nN]/g, '9').replace(/[tT]/g, '0');
    }
    // Filter invalid characters based on field type
    // TODO: When RecvExchTypes is implemented, handle all cases:
    //   - etSerialNr, etItuZone, etAge: only 0-9
    //   - etCqZone: only 0-9 (with O->0 mapping)
    //   - etGenericField: 0-9, A-Z, a-z
    //   - etPower: 0-9, K, k, W, w, A, a, n, N, o, O, t, T
    //   - etArrlSection, etStateProv: only A-Z, a-z
    //   - etNaQPExch2, etNaQpNonNaExch2: 0-9, A-Z, a-z, /
    //   - etJaPref, etJaCity: 0-9, L, M, H, P, l, m, h, p
    //   - etSSCheckSection: 0-9, A-Z, a-z, /, space
    // For now, default to SerialNr: only 0-9
    const filtered = mappedText.replace(/[^0-9]/g, '');
    setEdit3TextState(filtered);
  }, [runMode]);
  const [edit4Text, setEdit4Text] = useState('VE3NEA');
  const [exchangeEditText, setExchangeEditText] = useState('3A ON');
  
  // SpinEdit controls
  const [spinEdit1Value, setSpinEdit1Value] = useState(25);
  // Keep ref in sync with state
  spinEdit1ValueRef.current = spinEdit1Value;
  const [spinEdit2Value, setSpinEdit2Value] = useState(30);
  const [spinEdit3Value, setSpinEdit3Value] = useState(3);
  
  // Checkbox controls
  const [qsk, setQsk] = useState<boolean>(false);
  const [checkBox2Checked, setCheckBox2Checked] = useState(false);
  const [checkBox3Checked, setCheckBox3Checked] = useState(false);
  const [checkBox4Checked, setCheckBox4Checked] = useState(false);
  const [checkBox5Checked, setCheckBox5Checked] = useState(false);
  const [checkBox6Checked, setCheckBox6Checked] = useState(false);
  
  // QSO state (mirrors Pascal CallSent and NrSent)
  const [callSent, setCallSent] = useState<boolean>(false);
  const [nrSent, setNrSent] = useState<boolean>(false);
  
  // ComboBox controls
  const [comboBox1Index, setComboBox1Index] = useState(0);
  const [comboBox2Index, setComboBox2Index] = useState(0);
  const [simContestComboIndex, setSimContestComboIndex] = useState(0);
  
  // VolumeSlider control
  const [volumeSlider1Value, setVolumeSlider1Value] = useState(0.75); // Corresponds to -15dB
  
  // TODO: Add state for ListView1, ListView2, RichEdit1, PaintBox1, etc.

  // ============================================================================
  // EVENT HANDLERS - Form Events
  // ============================================================================

  const FormCreate = useCallback((sender: any) => {
    console.log('FormCreate called');
    // Store Edit1 ref and focus function if provided (for ActiveControl functionality)
    if (sender?.edit1Ref) {
      edit1TextInputRef.current = sender.edit1Ref.current; // Store actual TextInput ref for selection
      edit1Ref.current = () => {
        sender.edit1Ref.current?.focus();
      };
    }
    // Store Edit2 ref if provided (for selection operations)
    if (sender?.edit2Ref) {
      edit2TextInputRef.current = sender.edit2Ref.current;
    }
    // Store Edit3 ref if provided (for selection operations)
    if (sender?.edit3Ref) {
      edit3TextInputRef.current = sender.edit3Ref.current;
    }
    // TODO: Implement initialization logic from Pascal FormCreate
    // - Randomize
    // - Set up RichEdit1
    // - Initialize DXCC support
    // - Initialize Volume Slider
    // - Read settings from .INI file
    // - Create contest
  }, []);

  const FormDestroy = useCallback((sender: any) => {
    console.log('FormDestroy called');
    // TODO: Implement cleanup logic from Pascal FormDestroy
    // - Save settings to .INI
    // - Free DXCC list
    // - Free Histo
    // - Free Tst
    // - Destroy keyer
  }, []);

  const FormClose = useCallback((sender: any, action: any) => {
    console.log('FormClose called');
    // TODO: Implement cleanup from Pascal FormClose
    // - Disable AlSoundOut1
    // - Close AlWavFile1 if open
  }, []);

  const FormKeyPress = useCallback((sender: any, key: string) => {
    console.log('FormKeyPress called with:', key);
    // TODO: Implement key handling from Pascal FormKeyPress
    // - Handle ^W (Wipe)
    // - Handle ^U (toggle NoStopActivity)
    // - Handle Esc (Abort send)
    // - Handle ';' (send his call + number)
    // - Handle '.', '+', '[', ',' (TU & Save)
    // - Handle ' ' (advance to next exchange field)
  }, []);

  const FormKeyDown = useCallback((sender: any, key: string, shift: any) => {
    console.log('FormKeyDown called with:', key, shift);
    // TODO: Implement key down handling from Pascal FormKeyDown
    // - Handle VK_INSERT (<his> <#>)
    // - Handle VK_RETURN (Save)
    // - Handle Alt-W (Wipe)
    // - Handle VK_UP/VK_DOWN (RIT or BW)
    // - Handle VK_PRIOR/VK_NEXT (Speed)
    // - Handle VK_F9/VK_F10 (Speed with Alt/Ctrl)
    // - Handle VK_F11 (Wipe)
  }, []);

  const FormKeyUp = useCallback((sender: any, key: string, shift: any) => {
    console.log('FormKeyUp called with:', key, shift);
    // TODO: Implement key up handling from Pascal FormKeyUp
    // - Handle VK_INSERT, VK_RETURN
  }, []);

  const FormMouseWheelDown = useCallback((sender: any, shift: any, mousePos: any, handled: boolean) => {
    console.log('FormMouseWheelDown called');
    // TODO: Implement mouse wheel down from Pascal FormMouseWheelDown
    // - IncRit or SetBw based on Ctrl key
  }, []);

  const FormMouseWheelUp = useCallback((sender: any, shift: any, mousePos: any, handled: boolean) => {
    console.log('FormMouseWheelUp called');
    // TODO: Implement mouse wheel up from Pascal FormMouseWheelUp
    // - IncRit or SetBw based on Ctrl key
  }, []);

  // ============================================================================
  // EVENT HANDLERS - Edit Control Events
  // ============================================================================

  // procedure TMainForm.Edit1KeyPress(Sender: TObject; var Key: Char);
  // begin
  //   if not CharInSet(Key, ['A'..'Z', 'a'..'z', '0'..'9', '/', '?', #8]) then
  //     Key := #0;
  // end;
  const Edit1KeyPress = useCallback((sender: any, key: string) => {
    console.log('Edit1KeyPress called with:', key);
    // Validate characters: A-Z, a-z, 0-9, /, ?, backspace (#8)
    // In Pascal, invalid characters are set to #0 to prevent entry
    // In React Native, we validate in onChangeText instead
    const validChars = /^[A-Za-z0-9/?\b]$/;
    if (!validChars.test(key) && key !== '\b') {
      // Invalid character - in Pascal this would set Key := #0
      // In React Native, we prevent this in onChangeText
      return false;
    }
    return true;
  }, []);

  // procedure TMainForm.Edit2KeyPress(Sender: TObject; var Key: Char);
  // begin
  //   case RecvExchTypes.Exch1 of
  //     etRST:
  //       begin
  //         if RunMode <> rmHst then
  //         begin
  //           // for RST field, map (A,E,N) to (1,5,9)
  //           case Key of
  //             'a', 'A': Key := '1';
  //             'e', 'E': Key := '5';
  //             'n', 'N': Key := '9';
  //           end;
  //         end;
  //         // valid RST characters...
  //         if not CharInSet(Key, ['0'..'9', #8]) then
  //           Key := #0;
  //       end;
  //     etOpName:
  //       begin
  //         // valid operator name characters
  //         if not CharInSet(Key, ['A'..'Z','a'..'z', #8]) then
  //           Key := #0;
  //       end;
  //     etFdClass:
  //       begin
  //         // valid Station Classification characters, [1-9][0-9]+[A-F]|DX
  //         if not CharInSet(Key, ['0'..'9','A'..'F','a'..'f','X','x',#8]) then
  //           Key := #0;
  //       end;
  //     else
  //       assert(false, Format('invalid exchange field 1 type: %s',
  //         [ToStr(RecvExchTypes.Exch1)]));
  //   end;
  // end;
  const Edit2KeyPress = useCallback((sender: any, key: string) => {
    console.log('Edit2KeyPress called with:', key);
    // TODO: Use RecvExchTypes.Exch1 when implemented
    // For now, default to RST mode (most common case)
    // When RecvExchTypes is implemented, use: case RecvExchTypes.Exch1 of etRST, etOpName, etFdClass
    
    // Default to RST mode
    let mappedKey = key;
    
    // RST mode: map A/E/N to 1/5/9 (unless HST mode)
    if (runMode !== 'HST Competition') {
      switch (key.toLowerCase()) {
        case 'a': mappedKey = '1'; break;
        case 'e': mappedKey = '5'; break;
        case 'n': mappedKey = '9'; break;
      }
    }
    
    // RST mode: only allow 0-9 and backspace
    // TODO: When RecvExchTypes is implemented, handle etOpName and etFdClass cases
    const validRSTChars = /^[0-9\b]$/;
    if (!validRSTChars.test(mappedKey) && mappedKey !== '\b') {
      return false; // Invalid character
    }
    
    return true;
  }, [runMode]);

  // {
  //   Exchange field 2 key press. This procedure is called upon any keystroke
  //   in the Exchange 2 field. Depending on the exchange field type, it will
  //   map some keys into an equivalent numeric value. For example, the 'N'
  //   key is mapped to it's equivalent '9' value. this allows the user
  //   to type what they hear and this function will convert to the equivalent
  //   numeric value.
  // }
  // procedure TMainForm.Edit3KeyPress(Sender: TObject; var Key: Char);
  // begin
  //   case RecvExchTypes.Exch2 of
  //     etSerialNr, etItuZone, etAge:
  //       begin
  //         if RunMode <> rmHst then
  //           case Key of
  //             'a', 'A': Key := '1';
  //             'n', 'N': Key := '9';
  //             't', 'T': Key := '0';
  //           end;
  //         // valid Zone or NR field characters...
  //         if not CharInSet(Key, ['0'..'9', #8]) then
  //           Key := #0;
  //       end;
  //     etCqZone:
  //       begin
  //         if RunMode <> rmHst then
  //           case Key of
  //             'a', 'A': Key := '1';
  //             'n', 'N': Key := '9';
  //             'o', 'O': Key := '0';
  //             't', 'T': Key := '0';
  //           end;
  //         // valid CQ-Zone field characters...
  //         if not CharInSet(Key, ['0'..'9', #8]) then
  //           Key := #0;
  //       end;
  //     etGenericField:
  //       begin
  //         // log what the user types - assuming alpha numeric characters
  //         if not CharInSet(Key, ['0'..'9', 'A'..'Z', 'a'..'z', #8]) then
  //           Key := #0;
  //       end;
  //     etPower:
  //       begin
  //         // valid Power characters, including KW...
  //         if not CharInSet(Key, ['0'..'9', 'K', 'k', 'W', 'w', 'A', 'a',
  //                                'n', 'N', 'o', 'O', 't', 'T', #8]) then
  //           Key := #0;
  //       end;
  //     etArrlSection:
  //       begin
  //         // valid Section characters (e.g. OR or STX)
  //         if not CharInSet(Key, ['A'..'Z', 'a'..'z', #8]) then
  //           Key := #0;
  //       end;
  //     etStateProv:
  //       begin
  //         // valid State/Prov characters (e.g. OR or BC)
  //         if not CharInSet(Key, ['A'..'Z', 'a'..'z', #8]) then
  //           Key := #0;
  //       end;
  //     etNaQPExch2, etNaQpNonNaExch2:
  //       begin
  //         // valid NAQP Multiplier characters (e.g. OR, BC, or KP4)
  //         if not CharInSet(Key, ['0'..'9', 'A'..'Z', 'a'..'z', '/', #8]) then
  //           Key := #0;
  //       end;
  //     etJaPref, etJaCity:
  //       begin
  //         // valid Pref/City/Gun/Ku characters(numeric) and power characters (e.g. P|L|M|H)
  //         if not CharInSet(Key, ['0'..'9', 'L', 'M', 'H', 'P', 'l', 'm', 'h', 'p', #8]) then
  //           Key := #0;
  //       end;
  //     etSSCheckSection:
  //       begin
  //         // valid NR/Prec/Call/Check/Section characters
  //         if not CharInSet(Key, ['0'..'9', 'A'..'Z', 'a'..'z', '/', #32, #8]) then
  //           Key := #0;
  //       end
  //     else
  //       assert(false, Format('invalid exchange field 2 type: %s',
  //         [ToStr(RecvExchTypes.Exch2)]));
  //   end;
  // end;
  const Edit3KeyPress = useCallback((sender: any, key: string) => {
    console.log('Edit3KeyPress called with:', key);
    // TODO: Use RecvExchTypes.Exch2 when implemented
    // For now, default to SerialNr mode (most common case)
    // When RecvExchTypes is implemented, use: case RecvExchTypes.Exch2 of ...
    
    // Default to SerialNr mode
    let mappedKey = key;
    
    // SerialNr/ItuZone/Age mode: map A/N/T to 1/9/0 (unless HST mode)
    if (runMode !== 'HST Competition') {
      switch (key.toLowerCase()) {
        case 'a': mappedKey = '1'; break;
        case 'n': mappedKey = '9'; break;
        case 't': mappedKey = '0'; break;
      }
    }
    
    // SerialNr mode: only allow 0-9 and backspace
    // TODO: When RecvExchTypes is implemented, handle all cases (etCqZone, etGenericField, etPower, etc.)
    const validSerialNrChars = /^[0-9\b]$/;
    if (!validSerialNrChars.test(mappedKey) && mappedKey !== '\b') {
      return false; // Invalid character
    }
    
    return true;
  }, [runMode]);

  // procedure TMainForm.Edit3KeyUp(Sender: TObject; var Key: Word; Shift: TShiftState);
  // begin
  //   // some contests have additional processing (e.g. ARRL SS)
  //   // (exclude function keys so we can use the debugger)
  //   var ExchSummary, ExchError: string;
  //   if (SimContest in [scArrlSS]) and ((Key < VK_F1) or (Key > VK_F12)) then
  //     begin
  //       if Tst.OnExchangeEdit(Edit1.Text, Edit2.Text, Edit3.Text,
  //         ExchSummary, ExchError) then
  //         begin
  //           Log.SBarUpdateSummary(ExchSummary);
  //           if not Log.SBarErrorMsg.IsEmpty and ExchError.IsEmpty then
  //             Log.DisplayError('', clDefault);
  //         end;
  //     end;
  // end;
  const Edit3KeyUp = useCallback((sender: any, key: string, shift: any) => {
    console.log('Edit3KeyUp called with:', key, shift);
    // TODO: Implement special processing for ARRL SS contest
    // - Check if SimContest = scArrlSS
    // - Exclude function keys (F1-F12)
    // - Call Tst.OnExchangeEdit(Edit1.Text, Edit2.Text, Edit3.Text, ExchSummary, ExchError)
    // - Update status bar with ExchSummary
    // - Display error if needed
  }, []);

  // procedure TMainForm.Edit1Enter(Sender: TObject);
  // var
  //   P: integer;
  // begin
  //   P := Pos('?', Edit1.Text);
  //   if P > 0 then
  //   begin
  //     Edit1.SelStart := P-1;
  //     Edit1.SelLength := 1;
  //   end;
  // end;
  const Edit1Enter = useCallback((sender: any) => {
    console.log('Edit1Enter called');
    // Find position of '?' character in Edit1.Text
    const p = edit1Text.indexOf('?');
    if (p >= 0) {
      // Select the '?' character (P-1 in Pascal is 0-based, so p is already 0-based)
      // Use setTimeout to ensure TextInput is focused before setting selection
      setTimeout(() => {
        if (edit1TextInputRef.current) {
          // Try setNativeProps first (for native platforms)
          if (typeof edit1TextInputRef.current.setNativeProps === 'function') {
            edit1TextInputRef.current.setNativeProps({
              selection: { start: p, end: p + 1 }
            });
          } else {
            // Fallback for web: use selection state prop
            setEdit1Selection({ start: p, end: p + 1 });
            // Also try DOM API as backup
            const inputElement = edit1TextInputRef.current;
            if (inputElement) {
              // Try to access the underlying DOM element
              let domElement: HTMLInputElement | null = null;
              
              // Check various possible ways to access the DOM element
              if ((inputElement as any)._internalFiberInstanceHandleDEV) {
                const stateNode = (inputElement as any)._internalFiberInstanceHandleDEV?.stateNode;
                if (stateNode?._node) {
                  domElement = stateNode._node;
                } else if (stateNode?.input) {
                  domElement = stateNode.input;
                }
              } else if ((inputElement as any)._nativeNode) {
                domElement = (inputElement as any)._nativeNode;
              } else if (inputElement instanceof HTMLInputElement) {
                domElement = inputElement;
              }
              
              if (domElement && typeof domElement.setSelectionRange === 'function') {
                domElement.setSelectionRange(p, p + 1);
                domElement.focus();
              }
            }
          }
        }
      }, 10); // Slightly longer delay for web
    }
  }, [edit1Text]);

  // procedure TMainForm.Edit2Enter(Sender: TObject);
  // begin
  //   if Edit2IsRST then
  //     begin
  //       // for RST field, select middle digit
  //       if Length(Edit2.Text) = 3 then
  //         begin
  //           Edit2.SelStart := 1;
  //           Edit2.SelLength := 1;
  //         end;
  //     end
  //   else // otherwise select entire field
  //     begin
  //       Edit2.SelStart := 0;
  //       Edit2.SelLength := Edit2.GetTextLen;
  //     end;
  // end;
  const Edit2Enter = useCallback((sender: any) => {
    console.log('Edit2Enter called');
    // TODO: Use Edit2IsRST (which checks RecvExchTypes.Exch1 = etRST) when RecvExchTypes is implemented
    // For now, default to RST mode behavior
    const isRST = true; // TODO: Replace with Edit2IsRST check when RecvExchTypes is implemented
    
    if (isRST) {
      // For RST field: select middle digit if length is 3
      if (edit2Text.length === 3) {
        setTimeout(() => {
          if (edit2TextInputRef.current) {
            // Try setNativeProps first (for native platforms)
            if (typeof edit2TextInputRef.current.setNativeProps === 'function') {
              edit2TextInputRef.current.setNativeProps({
                selection: { start: 1, end: 2 }
              });
            } else {
              // Fallback for web: use selection state prop
              setEdit2Selection({ start: 1, end: 2 });
              // Also try DOM API as backup
              const inputElement = edit2TextInputRef.current;
              if (inputElement) {
                let domElement: HTMLInputElement | null = null;
                if ((inputElement as any)._internalFiberInstanceHandleDEV) {
                  const stateNode = (inputElement as any)._internalFiberInstanceHandleDEV?.stateNode;
                  if (stateNode?._node) {
                    domElement = stateNode._node;
                  } else if (stateNode?.input) {
                    domElement = stateNode.input;
                  }
                } else if ((inputElement as any)._nativeNode) {
                  domElement = (inputElement as any)._nativeNode;
                } else if (inputElement instanceof HTMLInputElement) {
                  domElement = inputElement;
                }
                if (domElement && typeof domElement.setSelectionRange === 'function') {
                  domElement.setSelectionRange(1, 2);
                  domElement.focus();
                }
              }
            }
          }
        }, 10);
      }
    } else {
      // Otherwise: select entire field
      setTimeout(() => {
        if (edit2TextInputRef.current) {
          if (typeof edit2TextInputRef.current.setNativeProps === 'function') {
            edit2TextInputRef.current.setNativeProps({
              selection: { start: 0, end: edit2Text.length }
            });
          } else {
            setEdit2Selection({ start: 0, end: edit2Text.length });
            const inputElement = edit2TextInputRef.current;
            if (inputElement) {
              let domElement: HTMLInputElement | null = null;
              if ((inputElement as any)._internalFiberInstanceHandleDEV) {
                const stateNode = (inputElement as any)._internalFiberInstanceHandleDEV?.stateNode;
                if (stateNode?._node) {
                  domElement = stateNode._node;
                } else if (stateNode?.input) {
                  domElement = stateNode.input;
                }
              } else if ((inputElement as any)._nativeNode) {
                domElement = (inputElement as any)._nativeNode;
              } else if (inputElement instanceof HTMLInputElement) {
                domElement = inputElement;
              }
              if (domElement && typeof domElement.setSelectionRange === 'function') {
                domElement.setSelectionRange(0, edit2Text.length);
                domElement.focus();
              }
            }
          }
        }
      }, 10);
    }
  }, [edit2Text]);

  // procedure TMainForm.Edit3Enter(Sender: TObject);
  // begin
  //   Edit3.SelStart := 0;
  //   Edit3.SelLength := Edit3.GetTextLen;
  // end;
  const Edit3Enter = useCallback((sender: any) => {
    console.log('Edit3Enter called');
    // Select entire field
    setTimeout(() => {
      if (edit3TextInputRef.current) {
        if (typeof edit3TextInputRef.current.setNativeProps === 'function') {
          edit3TextInputRef.current.setNativeProps({
            selection: { start: 0, end: edit3Text.length }
          });
        } else {
          // Fallback for web: use selection state prop
          setEdit3Selection({ start: 0, end: edit3Text.length });
          // Also try DOM API as backup
          const inputElement = edit3TextInputRef.current;
          if (inputElement) {
            let domElement: HTMLInputElement | null = null;
            if ((inputElement as any)._internalFiberInstanceHandleDEV) {
              const stateNode = (inputElement as any)._internalFiberInstanceHandleDEV?.stateNode;
              if (stateNode?._node) {
                domElement = stateNode._node;
              } else if (stateNode?.input) {
                domElement = stateNode.input;
              }
            } else if ((inputElement as any)._nativeNode) {
              domElement = (inputElement as any)._nativeNode;
            } else if (inputElement instanceof HTMLInputElement) {
              domElement = inputElement;
            }
            if (domElement && typeof domElement.setSelectionRange === 'function') {
              domElement.setSelectionRange(0, edit3Text.length);
              domElement.focus();
            }
          }
        }
      }
    }, 10);
  }, [edit3Text]);

  // {
  //   Called whenever callsign field (Edit1) changes. Any callsign edit will
  //   invalidate the callsign already sent by clearing the CallSent value.
  //   If the Callsign is empty, also clear the NrSent value.
  // }
  // procedure TMainForm.Edit1Change(Sender: TObject);
  // begin
  //     if Edit1.Text = '' then
  //         NrSent := false;
  //     if not Tst.Me.UpdateCallInMessage(Edit1.Text) then
  //         CallSent := false;
  // end;
  const Edit1Change = useCallback((sender: any) => {
    console.log('Edit1Change called');
    // Clear NrSent if Edit1.Text is empty
    if (edit1Text === '') {
      setNrSent(false);
    }
    // TODO: Call Tst.Me.UpdateCallInMessage(edit1Text) - update call in message
    // If UpdateCallInMessage returns false, clear CallSent
    // For now, we'll clear CallSent when the text changes (simplified implementation)
    // Full implementation requires UpdateCallInMessage method on Station class
    setCallSent(false);
  }, [edit1Text]);

  // procedure TMainForm.Edit4Change(Sender: TObject);
  // begin
  //   // user callsign edit has occurred; allows SetMyCall to be called.
  //   UserCallsignDirty := True;
  // end;
  const Edit4Change = useCallback((sender: any) => {
    // user callsign edit has occurred; allows SetMyCall to be called.
    userCallsignDirtyRef.current = true;
  }, []);

  // function TMainForm.SetMyCall(ACall: string) : Boolean;
  // var
  //   err : string;
  // begin
  //   Ini.Call := ACall;
  //   Edit4.Text := ACall;
  //   Tst.Me.MyCall := ACall;
  //
  //   // some contests have contest-specific settings (e.g location local/dx).
  //   // sets Tst.Me.SentExchTypes.
  //   if not Tst.OnSetMyCall(ACall, err) then
  //   begin
  //     MessageDlg(err, mtError, [mbOK], 0);
  //     Result := False;
  //     Exit;
  //   end;
  //   assert(Tst.Me.SentExchTypes = Tst.GetSentExchTypes(skMyStation, ACall));
  //
  //   // update my "sent" exchange information.
  //   // depends on: contest, my call, sent exchange (ExchangeEdit).
  //   // SetMyExchange() may report an error in the status field.
  //   Result := SetMyExchange(Trim(ExchangeEdit.Text));
  //
  //   // update "received" Exchange field types, labels and length settings
  //   // (e.g. RST, Nr.). depends on: contest, my call and dx station's call.
  //   ConfigureExchangeFields;
  //
  //   UserCallsignDirty := False;
  // end;
  const SetMyCall = useCallback((aCall: string): boolean => {
    // TODO: Implement from Pascal SetMyCall
    // - Update Ini.Call := ACall
    // - Update Edit4.Text := ACall (already updated via onChangeText)
    // - Update Tst.Me.MyCall := ACall
    // - Call Tst.OnSetMyCall(ACall, err) - may return error
    // - Call SetMyExchange(Trim(ExchangeEdit.Text))
    // - Call ConfigureExchangeFields
    // - Clear UserCallsignDirty := False
    // - Return boolean result
    console.log('SetMyCall called with:', aCall);
    userCallsignDirtyRef.current = false;
    return true;
  }, []);

  // procedure TMainForm.Edit4Exit(Sender: TObject);
  // begin
  //   // call SetMyCall if the callsign has been edited
  //   if UserCallsignDirty then
  //     SetMyCall(Trim(Edit4.Text));
  // end;
  const Edit4Exit = useCallback((sender: any) => {
    // call SetMyCall if the callsign has been edited
    if (userCallsignDirtyRef.current) {
      const trimmedCall = edit4Text.trim();
      SetMyCall(trimmedCall);
    }
  }, [edit4Text, SetMyCall]);

  const ExchangeEditChange = useCallback((sender: any) => {
    console.log('ExchangeEditChange called');
    // TODO: Implement from Pascal ExchangeEditChange
    // - Set UserExchangeDirty = true
  }, []);

  const ExchangeEditExit = useCallback((sender: any) => {
    console.log('ExchangeEditExit called');
    // TODO: Implement from Pascal ExchangeEditExit
    // - Call SetMyExchange if UserExchangeDirty
  }, []);

  // ============================================================================
  // EVENT HANDLERS - Button Events
  // ============================================================================

  // procedure TMainForm.SendMsg(AMsg: TStationMessage);
  // begin
  //   // special case for CW Speed control having focus and user presses
  //   // a key or function key (which do not cause a leave-focus event).
  //   if SpinEdit1.Focused then
  //     SpinEdit1Exit(SpinEdit1);

  //   if AMsg = msgHisCall then begin
  //     // retain current callsign, including ''.
  //     Tst.SetHisCall(Edit1.Text);   // virtual; sets Tst.Me.HisCall and Log.CallSent

  //     // update "received" Exchange field types. Some contests change field
  //     // types based on MyCall and/or DX station's call (Tst.Me.HisCall).
  //     RecvExchTypes:= Tst.GetRecvExchTypes(skMyStation, Tst.Me.MyCall, Tst.Me.HisCall);
  //   end;
  //   if AMsg = msgNR then
  //     NrSent := true;
  //   Tst.Me.SendMsg(AMsg);
  // end;

  // SendMsg() is called whenever MyStation sends a new CW Message.
  // TODO: Full implementation - connect to contest simulator/test instance
  const SendMsg = useCallback((msg: Station.TStationMessage) => {
    console.log('SendMsg called with message:', msg);
    // TODO: Implement full SendMsg logic from Pascal:
    // - Handle special case for CW Speed control having focus
    // - If msg = msgHisCall: SetHisCall(Edit1.Text) and update RecvExchTypes
    // - If msg = msgNR: Set NrSent = true
    // - Call Tst.Me.SendMsg(AMsg) - send message to my station
  }, []);

  // procedure TMainForm.SendClick(Sender: TObject);
  // var
  //   Msg: TStationMessage;
  // begin
  //   // Validate MenuItem tags
  //   assert(CQ1.Tag = Ord(msgCQ));               // CQ     F1
  //   assert(Exchange1.Tag = Ord(msgNR));         // Exch   F2
  //   assert(TU1.Tag = Ord(msgTU));               // TU     F3
  //   assert(MyCall1.Tag = Ord(msgMyCall));       // <my>   F4
  //   assert(HisCall1.Tag = Ord(msgHisCall));     // <his>  F5
  //   assert(QSOB41.Tag = Ord(msgB4));            // B4     F6
  //   assert(N1.Tag = Ord(msgQm));                // ?      F7
  //   assert(AGN1.Tag = Ord(msgNIL));             // NIL    F8
  //   assert(NRQM.Tag = Ord(msgNrQm));            // NR?    F12

  //   // Validate Control button tags
  //   assert(SpeedButton4.Tag = Ord(msgCQ));      // CQ     F1
  //   assert(SpeedButton5.Tag = Ord(msgNR));      // Exch   F2
  //   assert(SpeedButton6.Tag = Ord(msgTU));      // TU     F3
  //   assert(SpeedButton7.Tag = Ord(msgMyCall));  // <my>   F4
  //   assert(SpeedButton8.Tag = Ord(msgHisCall)); // <his>  F5
  //   assert(SpeedButton9.Tag = Ord(msgB4));      // B4     F6
  //   assert(SpeedButton10.Tag = Ord(msgQm));     // ?      F7
  //   assert(SpeedButton11.Tag = Ord(msgNIL));    // NIL    F8

  //   Msg := TStationMessage((Sender as TComponent).Tag);

  //   SendMsg(Msg);
  // end;
  const SendClick = useCallback((sender: any) => {
    console.log('SendClick called with sender:', sender);
    // Get message from sender Tag
    // Pascal: Msg := TStationMessage((Sender as TComponent).Tag);
    const tag = sender?.tag;
    if (tag === undefined || tag === null) {
      console.warn('SendClick: sender.tag is missing');
      return;
    }

    // Convert tag to TStationMessage enum
    // Pascal enum: msgNone=0, msgCQ=1, msgNR=2, msgTU=3, msgMyCall=4, msgHisCall=5, msgB4=6, msgQm=7, msgNIL=8
    let msg: Station.TStationMessage | null = null;
    switch (tag) {
      case 1: msg = Station.TStationMessage.CQ; break;
      case 2: msg = Station.TStationMessage.NR; break;
      case 3: msg = Station.TStationMessage.TU; break;
      case 4: msg = Station.TStationMessage.MY_CALL; break;
      case 5: msg = Station.TStationMessage.HIS_CALL; break;
      case 6: msg = Station.TStationMessage.B4; break;
      case 7: msg = Station.TStationMessage.QM; break;
      case 8: msg = Station.TStationMessage.NIL; break;
      case 12: msg = Station.TStationMessage.NR_QM; break; // NR? F12
      default:
        console.warn(`SendClick: Invalid tag value: ${tag}`);
        return;
    }

    // Call SendMsg with appropriate TStationMessage
    SendMsg(msg);
  }, [SendMsg]);

  // procedure TMainForm.RunBtnClick(Sender: TObject);
  // begin
  //   if RunMode = rmStop then
  //     Run(DefaultRunMode)
  //   else
  //     Tst.FStopPressed := true;
  // end;
  const RunBtnClick = useCallback((sender: any, isDropdownArea?: boolean, mode?: string) => {
    console.log('RunBtnClick called', isDropdownArea ? '(dropdown area)' : '', mode ? `with mode: ${mode}` : '');
    // Toggle dropdown if stopped, or stop if running
    if (!runButtonDown) {
      if (isDropdownArea) {
        // Toggle dropdown
        setRunDropdownVisible(!runDropdownVisible);
      } else {
        // Run with specified mode or current mode
        const runMode = mode || currentRunMode;
        setCurrentRunMode(runMode);
        setRunDropdownVisible(false);
        // TODO: Implement Run(mode) - actual run logic
        setRunButtonDown(true);
        setRunButtonCaption('Stop');
      }
    } else {
      // When running, clicking stops
      setRunButtonDown(false);
      setRunButtonCaption('   Run   ');
      setRunDropdownVisible(false);
    }
  }, [runButtonDown, runDropdownVisible, currentRunMode]);

  // procedure TMainForm.SetQsk(Value: boolean);
  // begin
  //   Qsk := Value;
  //   CheckBox1.Checked := Qsk;
  // end;
  const SetQsk = useCallback((value: boolean) => {
    setQsk(value);
  }, []);

  // ============================================================================
  // EVENT HANDLERS - Checkbox Events
  // ============================================================================

  // procedure TMainForm.CheckBox1Click(Sender: TObject);
  // begin
  //   SetQsk(CheckBox1.Checked);
  //   ActiveControl := Edit1;
  // end;
  const CheckBox1Click = useCallback((sender: any) => {
    console.log('CheckBox1Click called');
    SetQsk(!qsk); // Toggle QSK
    // Set ActiveControl to Edit1 - focus the callsign input field
    if (edit1Ref.current) {
      edit1Ref.current();
    }
  }, [qsk, SetQsk]);

  // procedure TMainForm.ReadCheckboxes;
  // begin
  //   Ini.Qrn := CheckBox4.Checked;
  //   Ini.Qrm := CheckBox3.Checked;
  //   Ini.Qsb := CheckBox2.Checked;
  //   Ini.Flutter := CheckBox5.Checked;
  //   Ini.Lids := CheckBox6.Checked;
  // end;
  const ReadCheckboxes = useCallback(async () => {
    // Read checkbox states and update settings
    // Pascal: CheckBox4 = QRN, CheckBox3 = QRM, CheckBox2 = QSB, CheckBox5 = Flutter, CheckBox6 = LIDs
    await Ini.Ini.updateSettings({
      qrn: checkBox4Checked,
      qrm: checkBox3Checked,
      qsb: checkBox2Checked,
      flutter: checkBox5Checked,
      lids: checkBox6Checked,
    });
  }, [checkBox2Checked, checkBox3Checked, checkBox4Checked, checkBox5Checked, checkBox6Checked]);

  // procedure TMainForm.CheckBoxClick(Sender: TObject);
  // begin
  //   ReadCheckboxes;
  //   ActiveControl := Edit1;
  // end;
  const CheckBoxClick = useCallback((sender: any) => {
    console.log('CheckBoxClick called');
    // Read checkbox states and update settings
    ReadCheckboxes();
    // Set ActiveControl to Edit1 - focus the callsign input field
    if (edit1Ref.current) {
      edit1Ref.current();
    }
  }, [ReadCheckboxes]);

  // ============================================================================
  // EVENT HANDLERS - SpinEdit Events
  // ============================================================================

  // procedure TMainForm.SetWpm(AWpm : integer);
  // begin
  //   Wpm := Max(10, Min(120, AWpm));
  //   SpinEdit1.Value := Wpm;
  //   Tst.Me.SetWpm(Wpm);
  //   CWSpeedDirty := False;
  // end;
  const SetWpm = useCallback((aWpm: number) => {
    // Clamp WPM to valid range (10-120)
    const clampedWpm = Math.max(10, Math.min(120, aWpm));
    
    // Skip update if value hasn't changed
    if (spinEdit1ValueRef.current === clampedWpm) {
      console.log(`SetWpm called with ${aWpm}, clamped to ${clampedWpm} - no change needed`);
      cwSpeedDirtyRef.current = false;
      return;
    }
    
    console.log(`SetWpm called with ${aWpm}, clamped to ${clampedWpm}`);
    
    // Update SpinEdit1 value
    setSpinEdit1Value(clampedWpm);
    
    // TODO: Call Tst.Me.SetWpm(clampedWpm) when Test/Station service is fully implemented
    // For now, we'll just update the UI value
    
    // Clear the dirty flag
    cwSpeedDirtyRef.current = false;
  }, []);

  // procedure TMainForm.SpinEdit1Change(Sender: TObject);
  // begin
  //   if SpinEdit1.Focused then
  //   begin
  //     // CW Speed edit has occurred while focus is within the spin edit control.
  //     // Mark this value as dirty and defer the call to SetWpm until edit is
  //     // completed by user.
  //     CWSpeedDirty := True
  //   end
  //   else
  //     SetWpm(SpinEdit1.Value);
  // end;
  const SpinEdit1Change = useCallback((sender: any, newValue?: number) => {
    const isFocused = spinEdit1FocusedRef.current;
    // Use provided value if available, otherwise use ref (for async state updates)
    const currentValue = newValue !== undefined ? newValue : spinEdit1ValueRef.current;
    console.log(`SpinEdit1Change: focused=${isFocused}, value=${currentValue}${newValue !== undefined ? ' (provided)' : ' (from ref)'}`);
    
    if (isFocused) {
      // CW Speed edit has occurred while focus is within the spin edit control.
      // Mark this value as dirty and defer the call to SetWpm until edit is
      // completed by user.
      cwSpeedDirtyRef.current = true;
      console.log('SpinEdit1Change: Marked as dirty (deferred)');
    } else {
      // Not focused, so apply the change immediately
      // Use provided value or ref to get the current value (handles async state updates)
      console.log('SpinEdit1Change: Applying immediately (not focused)');
      SetWpm(currentValue);
    }
  }, [SetWpm]);

  // {
  //   Called when user leaves CW Speed Control or user presses Enter key.
  // }
  // procedure TMainForm.SpinEdit1Exit(Sender: TObject);
  // begin
  //   // call SetWpm if the CW Speed has been edited
  //   if CWSpeedDirty then
  //     SetWpm(SpinEdit1.Value);
  // end;
  const SpinEdit1Exit = useCallback((sender: any) => {
    // Clear focus state
    spinEdit1FocusedRef.current = false;
    
    const isDirty = cwSpeedDirtyRef.current;
    const currentValue = spinEdit1ValueRef.current;
    console.log(`SpinEdit1Exit: dirty=${isDirty}, value=${currentValue}`);
    
    // Always validate and clamp the value on exit, even if not dirty
    // This ensures values outside 10-120 are corrected
    const clampedValue = Math.max(10, Math.min(120, currentValue));
    
    // If value was outside valid range, update it
    if (clampedValue !== currentValue) {
      console.log(`SpinEdit1Exit: Clamping value from ${currentValue} to ${clampedValue}`);
      setSpinEdit1Value(clampedValue);
      SetWpm(clampedValue);
    } else if (isDirty) {
      // Value is in valid range and was edited, apply it
      console.log('SpinEdit1Exit: Applying deferred change');
      SetWpm(currentValue);
    } else {
      console.log('SpinEdit1Exit: No changes to apply');
    }
  }, [SetWpm]);

  // Handler for when SpinEdit1 gains focus
  const SpinEdit1Enter = useCallback((sender: any) => {
    spinEdit1FocusedRef.current = true;
    console.log('SpinEdit1Enter: Focus gained');
  }, []);

  const SpinEdit2Change = useCallback((sender: any) => {
    console.log('SpinEdit2Change called');
    // TODO: Implement from Pascal SpinEdit2Change
    // - Set Ini.Duration = SpinEdit2.Value
    // - Histo.ReCalc(Ini.Duration)
  }, []);

  // procedure TMainForm.SpinEdit3Change(Sender: TObject);
  // begin
  //   Ini.Activity := SpinEdit3.Value;
  // end;
  const SpinEdit3Change = useCallback(async (sender: any) => {
    console.log('SpinEdit3Change called');
    // Implement from Pascal SpinEdit3Change
    // - Set Ini.Activity = SpinEdit3.Value
    await Ini.Ini.updateSetting('activity', spinEdit3Value);
  }, [spinEdit3Value]);

  // ============================================================================
  // EVENT HANDLERS - ComboBox Events
  // ============================================================================

  const ComboBox1Change = useCallback((sender: any) => {
    console.log('ComboBox1Change called');
    // TODO: Implement from Pascal ComboBox1Change
    // - SetPitch(ComboBox1.ItemIndex)
  }, []);

  const ComboBox2Change = useCallback((sender: any) => {
    console.log('ComboBox2Change called');
    // TODO: Implement from Pascal ComboBox2Change
    // - SetBw(ComboBox2.ItemIndex)
  }, []);

  const SimContestComboChange = useCallback((sender: any) => {
    console.log('SimContestComboChange called');
    // TODO: Implement from Pascal SimContestComboChange
    // - SetContest(FindContestByName(...))
  }, []);

  const SimContestComboRefresh = useCallback(() => {
    console.log('SimContestComboRefresh called');
    // TODO: Implement from Pascal SimContestComboRefresh
    // - Clear and populate SimContestCombo.Items
    // - Sort items
    // - Set ItemIndex
  }, []);

  // ============================================================================
  // EVENT HANDLERS - VolumeSlider Events
  // ============================================================================

  const VolumeSliderDblClick = useCallback((sender: any) => {
    console.log('VolumeSliderDblClick called');
    // TODO: Implement from Pascal VolumeSliderDblClick
    // - Set Value = 1 (full volume, 0 dB)
    // - Trigger OnChange
  }, []);

  const VolumeSlider1Change = useCallback((sender: any) => {
    console.log('VolumeSlider1Change called');
    // TODO: Implement from Pascal VolumeSlider1Change
    // - Set Ini.MonLevel = round(VolumeSlider1.Db)
  }, []);

  // ============================================================================
  // EVENT HANDLERS - PaintBox Events
  // ============================================================================

  const PaintBox1Paint = useCallback((sender: any) => {
    console.log('PaintBox1Paint called');
    // TODO: Implement from Pascal PaintBox1Paint
    // - Histo.Repaint
  }, []);

  // ============================================================================
  // PRIVATE METHODS - RIT Functions
  // ============================================================================

  // procedure TMainForm.UpdateRitIndicator;
  // begin
  //   Shape2.Width := Ini.Bandwidth div 9;
  //   Shape2.Left := ((Panel8.Width - Shape2.Width) div 2) + (Ini.Rit div 9);
  // end;
  const UpdateRitIndicator = useCallback(() => {
    // Update the RIT indicator position based on current RIT value
    // The position is calculated in MainForm.tsx based on ritValue state
    // This function is kept for consistency with Pascal code structure
    // The actual positioning is handled by the ritValue state in the UI
  }, []);

  // procedure TMainForm.IncRit(dF: integer);
  // var
  //   RitStepIncr : integer;
  // begin
  //   RitStepIncr := IfThen(RunMode = rmHST, 50, Ini.RitStepIncr);

  //   // A negative RitStepInc will change direction of arrow/wheel movement
  //   if RitStepIncr < 0 then begin
  //     dF := -dF;
  //     RitStepIncr := -RitStepIncr;
  //   end;

  //   case dF of
  //    -2: if Ini.Rit > -500 then Inc(RitLocal, -5);
  //    -1: if Ini.Rit > -500 then Inc(RitLocal, -RitStepIncr);
  //     0: RitLocal := 0;
  //     1: if Ini.Rit < 500 then Inc(RitLocal, RitStepIncr);
  //     2: if Ini.Rit < 500 then Inc(RitLocal, 5);
  //   end;

  //   Ini.Rit := Min(500, Max(-500, RitLocal));
  //   UpdateRitIndicator;
  // end;
  const IncRit = useCallback((dF: number) => {
    const settings = Ini.Ini.getSettings();
    const isHST = runMode === 'H S T' || runMode === 'HST Competition';
    const ritStepIncr = isHST ? 50 : ((settings as any).ritStepIncr || 10); // Default to 10 if not set

    let adjustedDF = dF;
    let adjustedRitStepIncr = ritStepIncr;

    // A negative RitStepInc will change direction of arrow/wheel movement
    if (ritStepIncr < 0) {
      adjustedDF = -adjustedDF;
      adjustedRitStepIncr = -adjustedRitStepIncr;
    }

    // Sync ritLocalRef with current ritValue (like Pascal's RitLocal tracking Ini.Rit)
    // Pascal checks Ini.Rit (current value) before incrementing, not RitLocal
    const currentRit = ritValue; // This is like Ini.Rit in Pascal
    if (ritLocalRef.current !== currentRit) {
      ritLocalRef.current = currentRit;
    }

    // Update ritLocal based on dF value
    // Note: Pascal checks Ini.Rit (not RitLocal) before incrementing
    switch (adjustedDF) {
      case -2:
        if (currentRit > -500) {
          ritLocalRef.current = ritLocalRef.current - 5;
        }
        break;
      case -1:
        if (currentRit > -500) {
          ritLocalRef.current = ritLocalRef.current - adjustedRitStepIncr;
        }
        break;
      case 0:
        ritLocalRef.current = 0;
        break;
      case 1:
        if (currentRit < 500) {
          ritLocalRef.current = ritLocalRef.current + adjustedRitStepIncr;
        }
        break;
      case 2:
        if (currentRit < 500) {
          ritLocalRef.current = ritLocalRef.current + 5;
        }
        break;
    }

    // Clamp RIT value between -500 and 500
    // Pascal: Ini.Rit := Min(500, Max(-500, RitLocal));
    const newRit = Math.min(500, Math.max(-500, ritLocalRef.current));
    setRitValue(newRit);
    
    // Update RIT in settings if needed (assuming we want to persist it)
    // Ini.updateSetting('rit', newRit); // Uncomment if RIT should be persisted

    UpdateRitIndicator();
  }, [runMode, ritValue]); // Need ritValue to check boundaries like Pascal checks Ini.Rit

  // ============================================================================
  // EVENT HANDLERS - Panel/Shape Events
  // ============================================================================

  // procedure TMainForm.Panel8MouseDown(Sender: TObject; Button: TMouseButton;
  //   Shift: TShiftState; X, Y: Integer);
  // begin
  //   if X < Shape2.Left then
  //     IncRit(-1)
  //   else
  //     if X > (Shape2.Left + Shape2.Width) then
  //       IncRit(1);
  // end;
  const Panel8MouseDown = useCallback((sender: any, button: any, shift: any, x: number, y: number, shape2Left: number, shape2Width: number) => {
    console.log('Panel8MouseDown called', { x, shape2Left, shape2Width });
    
    // From Pascal: if X < Shape2.Left then IncRit(-1), else if X > Shape2.Left + Shape2.Width then IncRit(1)
    // In Pascal, Shape2.Left and Shape2.Width are component properties that are directly accessible
    // In React Native, we pass these values from the component's measured layout
    if (shape2Left === undefined || shape2Width === undefined) {
      console.warn('Panel8MouseDown: Shape2 layout not available, skipping RIT adjustment');
      return;
    }
    
    if (x < shape2Left) {
      IncRit(-1);
    } else if (x > (shape2Left + shape2Width)) {
      IncRit(1);
    }
  }, [IncRit]);

  // procedure TMainForm.Shape2MouseDown(Sender: TObject; Button: TMouseButton;
  //   Shift: TShiftState; X, Y: Integer);
  // begin
  //   IncRit(0);
  // end;
  const Shape2MouseDown = useCallback((sender: any, button: any, shift: any, x: number, y: number) => {
    console.log('Shape2MouseDown called');
    IncRit(0);
  }, [IncRit]);

  // ============================================================================
  // EVENT HANDLERS - ListView Events
  // ============================================================================

  const ListView2CustomDrawSubItem = useCallback((sender: any, item: any, subItem: number, state: any, defaultDraw: boolean) => {
    console.log('ListView2CustomDrawSubItem called');
    // TODO: Implement from Pascal ListView2CustomDrawSubItem
    // - Handle color coding for errors
    // - Handle strikeout for HST Score errors
  }, []);

  const ListView2SelectItem = useCallback((sender: any, item: any, selected: boolean) => {
    console.log('ListView2SelectItem called');
    // TODO: Implement from Pascal ListView2SelectItem
    // - If selected and mnuShowCallsignInfo.Checked: SbarUpdateStationInfo(...)
  }, []);

  // ============================================================================
  // EVENT HANDLERS - Menu Item Events
  // ============================================================================

  const Exit1Click = useCallback((sender: any) => {
    console.log('Exit1Click called');
    // TODO: Implement from Pascal Exit1Click
    // - Close form
  }, []);

  const FirstTime1Click = useCallback((sender: any) => {
    console.log('FirstTime1Click called');
    // TODO: Implement from Pascal FirstTime1Click
    // - Show first-time setup message box
  }, []);

  const About1Click = useCallback((sender: any) => {
    console.log('About1Click called');
    // TODO: Implement from Pascal About1Click
    // - Show about dialog with version info
  }, []);

  const Readme1Click = useCallback((sender: any) => {
    console.log('Readme1Click called');
    // TODO: Implement from Pascal Readme1Click
    // - Open readme.txt file
  }, []);

  // procedure TMainForm.RunMNUClick(Sender: TObject);
  // begin
  //   SetDefaultRunMode((Sender as TComponent).Tag);
  //   Run(DefaultRunMode);
  // end;
  const RunMNUClick = useCallback((sender: any) => {
    console.log('RunMNUClick called with tag:', sender?.tag);
    // Map tag to mode: 1=Pile-Up, 2=Single Calls, 3=WPX Competition, 4=HST Competition
    const modeMap: { [key: number]: string } = {
      1: 'Pile-Up',
      2: 'Single Calls',
      3: 'WPX Competition',
      4: 'HST Competition',
    };
    const mode = modeMap[sender?.tag] || 'Pile-Up';
    // Inline the run logic (equivalent to handleRunModeSelect)
    setCurrentRunMode(mode);
    setRunDropdownVisible(false);
    // TODO: Implement Run(mode) - actual run logic
    setRunButtonDown(true);
    setRunButtonCaption('Stop');
  }, []);

  // procedure TMainForm.StopMNUClick(Sender: TObject);
  // begin
  //   Tst.FStopPressed := true;
  // end;
  const StopMNUClick = useCallback((sender: any) => {
    console.log('StopMNUClick called');
    // Stop the run
    setRunButtonDown(false);
    setRunButtonCaption('   Run   ');
    setRunDropdownVisible(false);
    // TODO: Implement Run(rmStop) - actual stop logic
  }, []);

  const ViewScoreBoardMNUClick = useCallback((sender: any) => {
    console.log('ViewScoreBoardMNUClick called');
    // TODO: Implement from Pascal ViewScoreBoardMNUClick
    // - OpenWebPage(WebServer)
  }, []);

  const ViewScoreTable1Click = useCallback((sender: any) => {
    console.log('ViewScoreTable1Click called');
    // TODO: Implement from Pascal ViewScoreTable1Click
    // - Show RichEdit1 with score table from .lst file
  }, []);

  const WebPage1Click = useCallback((sender: any) => {
    console.log('WebPage1Click called');
    // TODO: Implement from Pascal WebPage1Click
    // - OpenWebPage('https://www.github.com/w7sst/MorseRunner#readme')
  }, []);

  const Call1Click = useCallback((sender: any) => {
    console.log('Call1Click called');
    // TODO: Implement from Pascal Call1Click
    // - InputBox for callsign, then SetMyCall
  }, []);

  // procedure TMainForm.QSK1Click(Sender: TObject);
  // begin
  //   SetQsk(not QSK1.Checked);
  // end;
  const QSK1Click = useCallback((sender: any) => {
    console.log('QSK1Click called');
    SetQsk(!qsk); // Toggle QSK
  }, [qsk, SetQsk]);

  const NWPMClick = useCallback((sender: any) => {
    console.log('NWPMClick called');
    // TODO: Implement from Pascal NWPMClick
    // - SetWpm((Sender as TMenuItem).Tag)
  }, []);

  const Pitch1Click = useCallback((sender: any) => {
    console.log('Pitch1Click called');
    // TODO: Implement from Pascal Pitch1Click
    // - SetPitch((Sender as TMenuItem).Tag)
  }, []);

  const Bw1Click = useCallback((sender: any) => {
    console.log('Bw1Click called');
    // TODO: Implement from Pascal Bw1Click
    // - SetBw((Sender as TMenuItem).Tag)
  }, []);

  const File1Click = useCallback((sender: any) => {
    console.log('File1Click called');
    // TODO: Implement from Pascal File1Click
    // - Update menu item enabled states
  }, []);

  const PlayRecordedAudio1Click = useCallback((sender: any) => {
    console.log('PlayRecordedAudio1Click called');
    // TODO: Implement from Pascal PlayRecordedAudio1Click
    // - ShellExecute to play .wav file
  }, []);

  const AudioRecordingEnabled1Click = useCallback((sender: any) => {
    console.log('AudioRecordingEnabled1Click called');
    // TODO: Implement from Pascal AudioRecordingEnabled1Click
    // - Toggle Ini.SaveWav
  }, []);

  const SelfMonClick = useCallback((sender: any) => {
    console.log('SelfMonClick called');
    // TODO: Implement from Pascal SelfMonClick
    // - VolumeSlider1.Db = (Sender as TMenuItem).Tag
  }, []);

  const Settings1Click = useCallback((sender: any) => {
    console.log('Settings1Click called');
    // TODO: Implement from Pascal Settings1Click
    // - Update menu item checked states from Ini
  }, []);

  const LIDS1Click = useCallback((sender: any) => {
    console.log('LIDS1Click called');
    // TODO: Implement from Pascal LIDS1Click
    // - Toggle checked state, update checkboxes, ReadCheckboxes
  }, []);

  const CWMaxRxSpeedClick = useCallback((sender: any) => {
    console.log('CWMaxRxSpeedClick called');
    // TODO: Implement from Pascal CWMaxRxSpeedClick
    // - UpdCWMaxRxSpeed((Sender as TMenuItem).Tag)
  }, []);

  const CWMinRxSpeedClick = useCallback((sender: any) => {
    console.log('CWMinRxSpeedClick called');
    // TODO: Implement from Pascal CWMinRxSpeedClick
    // - UpdCWMinRxSpeed((Sender as TMenuItem).Tag)
  }, []);

  const NRDigitsClick = useCallback((sender: any) => {
    console.log('NRDigitsClick called');
    // TODO: Implement from Pascal NRDigitsClick
    // - UpdSerialNR((Sender as TMenuItem).Tag)
  }, []);

  const SerialNRCustomRangeClick = useCallback((sender: any) => {
    console.log('SerialNRCustomRangeClick called');
    // TODO: Implement from Pascal SerialNRCustomRangeClick
    // - InputQuery for custom range, validate, then UpdSerialNR
  }, []);

  const Activity1Click = useCallback((sender: any) => {
    console.log('Activity1Click called');
    // TODO: Implement from Pascal Activity1Click
    // - Set Ini.Activity = (Sender as TMenuItem).Tag
    // - SpinEdit3.Value = Ini.Activity
  }, []);

  const Duration1Click = useCallback((sender: any) => {
    console.log('Duration1Click called');
    // TODO: Implement from Pascal Duration1Click
    // - Set Ini.Duration = (Sender as TMenuItem).Tag
    // - SpinEdit2.Value = Ini.Duration
  }, []);

  const Operator1Click = useCallback((sender: any) => {
    console.log('Operator1Click called');
    // TODO: Implement from Pascal Operator1Click
    // - InputBox for operator name, update HamName, UpdateTitleBar
  }, []);

  const mnuShowCallsignInfoClick = useCallback((sender: any) => {
    console.log('mnuShowCallsignInfoClick called');
    // TODO: Implement from Pascal mnuShowCallsignInfoClick
    // - Toggle checked state, show/hide sbar
  }, []);

  // ============================================================================
  // EVENT HANDLERS - Sound/Audio Events
  // ============================================================================

  const AlSoundOut1BufAvailable = useCallback((sender: any) => {
    console.log('AlSoundOut1BufAvailable called');
    // TODO: Implement from Pascal AlSoundOut1BufAvailable
    // - If AlSoundOut1.Enabled: AlSoundOut1.PutData(Tst.GetAudio)
  }, []);

  // ============================================================================
  // PUBLIC METHODS (to be implemented)
  // ============================================================================

  // TODO: Implement all public methods from TMainForm:
  // - Run(Value: TRunMode)
  // - WipeBoxes()
  // - PopupScoreWpx()
  // - PopupScoreHst()
  // - Advance()
  // - SetContest(AContestNum: TSimContest)
  // - SetMyExchange(const AExchange: string): Boolean
  // - SetDefaultRunMode(V: Integer)
  // - SetMySerialNR()
  // - SetQsk(Value: boolean)
  // - SetPitch(PitchNo: integer)
  // - SetBw(BwNo: integer)
  // - UpdateTitleBar()
  // - PostHiScore(const sScore: string)
  // - UpdSerialNR(V: integer)
  // - UpdSerialNRCustomRange(const ARange: string)
  // - UpdCWMinRxSpeed(minspd: integer)
  // - UpdCWMaxRxSpeed(Maxspd: integer)
  // - ClientHTTP1Redirect(...)

  // ============================================================================
  // PRIVATE METHODS (to be implemented)
  // ============================================================================

  // TODO: Implement all private methods from TMainForm:
  // - CreateContest(AContestId: TSimContest): TContest
  // - ConfigureExchangeFields()
  // - SetMyExch1(const AExchType: TExchange1Type; const Avalue: string)
  // - SetMyExch2(const AExchType: TExchange2Type; const Avalue: string)
  // - SaveRecvFieldSizes()
  // - RestoreRecvFields()
  // - ResizeRecvFields()
  // - ProcessSpace()
  // - SendMsg(AMsg: TStationMessage)
  // - ProcessEnter()
  // - EnableCtl(Ctl: TWinControl; AEnable: boolean)
  // - SetToolbuttonDown(Toolbutton: TToolbutton; ADown: boolean)
  // - DecSpeed()
  // - IncSpeed()

  return {
    // State variables and their setters
    edit1Text, setEdit1Text,
    edit1Selection, setEdit1Selection,
    edit2Text, setEdit2Text,
    edit2Selection, setEdit2Selection,
    edit3Text, setEdit3Text,
    edit3Selection, setEdit3Selection,
    edit4Text, setEdit4Text,
    exchangeEditText, setExchangeEditText,
    spinEdit1Value, setSpinEdit1Value,
    spinEdit2Value, setSpinEdit2Value,
    spinEdit3Value, setSpinEdit3Value,
    qsk, setQsk,
    checkBox2Checked, setCheckBox2Checked,
    checkBox3Checked, setCheckBox3Checked,
    checkBox4Checked, setCheckBox4Checked,
    checkBox5Checked, setCheckBox5Checked,
    checkBox6Checked, setCheckBox6Checked,
    comboBox1Index, setComboBox1Index,
    comboBox2Index, setComboBox2Index,
    simContestComboIndex, setSimContestComboIndex,
    volumeSlider1Value, setVolumeSlider1Value,
    competitionMode,
    runMode, setRunMode,
    ritValue, setRitValue,
    panel11Caption, setPanel11Caption,
    scorePtsRaw, setScorePtsRaw,
    scorePtsVerified, setScorePtsVerified,
    scoreMultRaw, setScoreMultRaw,
    scoreMultVerified, setScoreMultVerified,
    scoreTotalRaw, setScoreTotalRaw,
    scoreTotalVerified, setScoreTotalVerified,
    
    // Panel6 state
    listView2Visible, setListView2Visible,
    richEdit1Visible, setRichEdit1Visible,
    sbarVisible, setSbarVisible,
    sbarCaption, setSbarCaption,
    richEdit1Text, setRichEdit1Text,
    listView2Data, setListView2Data,
    appVersion, setAppVersion,
    
    // Panel9 state
    simContestComboItems, setSimContestComboItems,
    comboBox1Items,
    comboBox2Items,
    runButtonDown, setRunButtonDown,
    runButtonCaption, setRunButtonCaption,
    runDropdownVisible, setRunDropdownVisible,
    currentRunMode, setCurrentRunMode,
    
    // Form event handlers
    FormCreate,
    FormDestroy,
    FormClose,
    FormKeyPress,
    FormKeyDown,
    FormKeyUp,
    FormMouseWheelDown,
    FormMouseWheelUp,
    
    // Edit event handlers
    Edit1KeyPress,
    Edit2KeyPress,
    Edit3KeyPress,
    Edit3KeyUp,
    Edit1Enter,
    Edit2Enter,
    Edit3Enter,
    Edit1Change,
    Edit4Change,
    Edit4Exit,
    ExchangeEditChange,
    ExchangeEditExit,
    
    // Button event handlers
    SendClick,
    RunBtnClick,
    
    // Checkbox event handlers
    CheckBox1Click,
    CheckBoxClick,
    SetQsk,
    
    // SpinEdit event handlers
    SpinEdit1Change,
    SpinEdit1Exit,
    SpinEdit1Enter,
    SpinEdit2Change,
    SpinEdit3Change,
    
    // ComboBox event handlers
    ComboBox1Change,
    ComboBox2Change,
    SimContestComboChange,
    SimContestComboRefresh,
    
    // VolumeSlider event handlers
    VolumeSliderDblClick,
    VolumeSlider1Change,
    
    // PaintBox event handlers
    PaintBox1Paint,
    
    // Panel/Shape event handlers
    Panel8MouseDown,
    Shape2MouseDown,
    
    // ListView event handlers
    ListView2CustomDrawSubItem,
    ListView2SelectItem,
    
    // Menu item event handlers
    Exit1Click,
    FirstTime1Click,
    About1Click,
    Readme1Click,
    RunMNUClick,
    StopMNUClick,
    ViewScoreBoardMNUClick,
    ViewScoreTable1Click,
    WebPage1Click,
    Call1Click,
    QSK1Click,
    NWPMClick,
    Pitch1Click,
    Bw1Click,
    File1Click,
    PlayRecordedAudio1Click,
    AudioRecordingEnabled1Click,
    SelfMonClick,
    Settings1Click,
    LIDS1Click,
    CWMaxRxSpeedClick,
    CWMinRxSpeedClick,
    NRDigitsClick,
    SerialNRCustomRangeClick,
    Activity1Click,
    Duration1Click,
    Operator1Click,
    mnuShowCallsignInfoClick,
    
    // Sound/Audio event handlers
    AlSoundOut1BufAvailable,
  };
};

