// ============================================================================
// COMMENTED PASCAL CODE FROM Main.dfm - FOR REFERENCE ONLY
// ============================================================================
// This section contains the original Delphi Form definition (DFM) code
// from Main.dfm, commented out for reference during porting.
// As components are ported to React Native, they will be uncommented above
// and the corresponding TypeScript/React Native implementation added below.
// ============================================================================

//object MainForm: TMainForm
//  Left = 238
//  Top = 115
//  BorderIcons = [biSystemMenu, biMinimize]
//  BorderStyle = bsSingle
//  Caption = 'Morse Runner'
//  ClientHeight = 506
//  ClientWidth = 729
//  Color = clBtnFace
//  Font.Charset = ANSI_CHARSET
//  Font.Color = clWindowText
//  Font.Height = -12
//  Font.Name = 'Segoe UI'
//  Font.Style = []
//  Icon.Data = {
//    0000010002002020100000000000E80200002600000010101000000000002801
//    00000E0300002800000020000000400000000100040000000000800200000000
//    0000000000000000000000000000000000000000800000800000008080008000
//    0000800080008080000080808000C0C0C0000000FF0000FF000000FFFF00FF00
//    0000FF00FF00FFFF0000FFFFFF00000000000000000008800000000000000000
//    0000000000000770000000000000000000000000000777777000000000000000
//    000000000777FF8777700000000000000000000777FF70888777700000000000
//    00080777FF70F7708887777000000000000777FF70F770F70F88877000000000
//    0007FF70F770F70FF8870000000000000008788770F70FF88700787800000000
//    00000778870FF8870078887000000000000000077FF88700788FF88700000000
//    00000000077700788FFCCF8700000000000000000070788FFCCCCCF870000000
//    00000000007888FCCCCCCCF88700000000000000000780CCCCCCCCCF87000000
//    09999900000780CCCCCCCCCF8870000998FFF8990000780CCCCCCCC0F8700099
//    FFFCFFF99000780CCCCCC0088770009FFFFFFFCF90000780CFC008877000098F
//    F0FFFFFF89000780C0088770000009FFFF0FFFFFF900007808877000000009FC
//    FFF90000F900007887700000000009FFFFFFFFFFF9000007700000000000098F
//    FFFFFFFF89000000000000000000009FCFFFFFCF900000000000000000000099
//    FFFCFFF990000000000000000000000998FCF899000000000000000000000000
//    0999990000000000000000000000000000000000000000000000000000000000
//    0000000000000000000000000000000000000000000000000000000000000000
//    0000000000000000000000000000FFFF9FFFFFFE07FFFFF801FFFFE0007FFF80
//    001FFE00000FFE00000FFE00000FFE00000FFF80000FFFE00007FFF80007FFFC
//    0003FFFC0001F83E0001E00E0000C007000080030001800380070001801F0001
//    C07F0001C1FF0001E7FF0001FFFF8003FFFF8003FFFFC007FFFFE00FFFFFF83F
//    FFFFFEFFFFFFFC7FFFFFFC7FFFFF280000001000000020000000010004000000
//    0000C00000000000000000000000000000000000000000000000000080000080
//    00000080800080000000800080008080000080808000C0C0C0000000FF0000FF
//    000000FFFF00FF000000FF00FF00FFFF0000FFFFFF0000000000770000000000
//    0007F7750000000007F8778775000007887778887000000078788F0087000000
//    008800FF8850000000078FCCCF70001115003CCCC88501F8F91084CCC4F71F8F
//    FF1007C4780018F77785087800001FFFFF75000000005988F810000000000117
//    71000000000000005000000000000000500000000000FF3F0000FC0F0000F003
//    0000E0030000F0030000FC010000FE010000C30000008100000001830000008F
//    000000FF000001FF000083FF0000E7FF0000E7FF0000}
//  KeyPreview = True
//  Menu = MainMenu1
//  Position = poScreenCenter
//  OnClose = FormClose
//  OnCreate = FormCreate
//  OnDestroy = FormDestroy
//  OnKeyDown = FormKeyDown
//  OnKeyPress = FormKeyPress
//  OnKeyUp = FormKeyUp
//  OnMouseWheelDown = FormMouseWheelDown
//  OnMouseWheelUp = FormMouseWheelUp
//  TextHeight = 15
//  object Panel5: TPanel
//    Left = 0
//    Top = 361
//    Width = 729
//    Height = 10
//    Align = alBottom
//    BevelOuter = bvNone
//    TabOrder = 1
//  end
//  object Panel6: TPanel
//    Left = 0
//    Top = 2
//    Width = 517
//    Height = 359
//    Align = alClient
//    BevelOuter = bvNone
//    BorderStyle = bsSingle
//    TabOrder = 2
//    object Shape1: TShape
//      Left = 0
//      Top = 54
//      Width = 513
//      Height = 238
//      Align = alClient
//      Brush.Color = 16711401
//      Pen.Style = psClear
//      ExplicitLeft = 2
//      ExplicitTop = 48
//    end
//    object Label14: TLabel
//      Left = 100
//      Top = 61
//      Width = 310
//      Height = 40
//      Caption = 'Morse Runner 1.xx'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = 12369084
//      Font.Height = -35
//      Font.Name = 'Arial'
//      Font.Style = [fsBold, fsItalic]
//      ParentFont = False
//      Transparent = True
//    end
//    object Label12: TLabel
//      Left = 95
//      Top = 57
//      Width = 310
//      Height = 40
//      Caption = 'Morse Runner 1.xx'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clAqua
//      Font.Height = -35
//      Font.Name = 'Arial'
//      Font.Style = [fsBold, fsItalic]
//      ParentFont = False
//      Transparent = True
//    end
//    object Label13: TLabel
//      Left = 94
//      Top = 56
//      Width = 310
//      Height = 40
//      Caption = 'Morse Runner 1.xx'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clGreen
//      Font.Height = -35
//      Font.Name = 'Arial'
//      Font.Style = [fsBold, fsItalic]
//      ParentFont = False
//      Transparent = True
//    end
//    object Label15: TLabel
//      Left = 106
//      Top = 170
//      Width = 315
//      Height = 15
//      Caption = 'Copyright '#169'2004-2016 Alex Shovkoplyas, VE3NEA'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clWindowText
//      Font.Height = -13
//      Font.Name = 'Consolas'
//      Font.Style = []
//      ParentFont = False
//      Transparent = True
//    end
//    object Label16: TLabel
//      Left = 221
//      Top = 127
//      Width = 56
//      Height = 15
//      Caption = 'FREEWARE'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clWindowText
//      Font.Height = -13
//      Font.Name = 'Consolas'
//      Font.Style = []
//      ParentFont = False
//      Transparent = True
//    end
//    object Label19: TLabel
//      Left = 28
//      Top = 234
//      Width = 448
//      Height = 15
//      Caption = 'Copyright '#169'2022-2025 Morse Runner Community Edition Contributors'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clWindowText
//      Font.Height = -13
//      Font.Name = 'Consolas'
//      Font.Style = []
//      ParentFont = False
//      Transparent = True
//    end
//    object Label20: TLabel
//      Left = 178
//      Top = 106
//      Width = 140
//      Height = 15
//      Caption = 'CW CONTEST SIMULATOR'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clWindowText
//      Font.Height = -13
//      Font.Name = 'Consolas'
//      Font.Style = []
//      ParentFont = False
//      Transparent = True
//    end
//    object Label21: TLabel
//      Left = 142
//      Top = 191
//      Width = 238
//      Height = 15
//      Caption = 'http://www.dxatlas.com/MorseRunner'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clWindowText
//      Font.Height = -13
//      Font.Name = 'Consolas'
//      Font.Style = []
//      ParentFont = False
//      Transparent = True
//    end
//    object Label22: TLabel
//      Left = 126
//      Top = 255
//      Width = 280
//      Height = 15
//      Caption = 'https://www.github.com/w7sst/MorseRunner'
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clWindowText
//      Font.Height = -13
//      Font.Name = 'Consolas'
//      Font.Style = []
//      ParentFont = False
//      Transparent = True
//    end
//    object RichEdit1: TRichEdit
//      Left = 0
//      Top = 314
//      Width = 513
//      Height = 41
//      TabStop = False
//      Align = alBottom
//      BorderStyle = bsNone
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clWindowText
//      Font.Height = -13
//      Font.Name = 'Consolas'
//      Font.Style = []
//      ParentFont = False
//      ReadOnly = True
//      ScrollBars = ssVertical
//      TabOrder = 1
//      Visible = False
//    end
//    object ListView2: TListView
//      Left = 0
//      Top = 0
//      Width = 513
//      Height = 54
//      Align = alTop
//      BevelInner = bvNone
//      BorderStyle = bsNone
//      Columns = <
//        item
//          Caption = 'UTC'
//          Width = 80
//        end
//        item
//          Caption = 'Call'
//          Width = 104
//        end
//        item
//          Caption = 'Recv'
//          Width = 90
//        end
//        item
//          Caption = 'Sent'
//          Width = 84
//        end
//        item
//          Caption = 'Pref'
//        end
//        item
//          Caption = 'Chk'
//          Width = 40
//        end
//        item
//          Caption = 'Wpm'
//          Width = 40
//        end>
//      ColumnClick = False
//      DoubleBuffered = True
//      Font.Charset = ANSI_CHARSET
//      Font.Color = clWindowText
//      Font.Height = -15
//      Font.Name = 'Consolas'
//      Font.Style = []
//      ReadOnly = True
//      RowSelect = True
//      ParentDoubleBuffered = False
//      ParentFont = False
//      ParentShowHint = False
//      ShowWorkAreas = True
//      ShowHint = True
//      TabOrder = 0
//      TabStop = False
//      ViewStyle = vsReport
//      OnCustomDrawSubItem = ListView2CustomDrawSubItem
//      OnSelectItem = ListView2SelectItem
//    end
//    object sbar: TPanel
//      Left = 0
//      Top = 292
//      Width = 513
//      Height = 22
//      Align = alBottom
//      Alignment = taLeftJustify
//      BevelOuter = bvNone
//      ParentBackground = False
//      TabOrder = 2
//      Visible = False
//    end
//  end
//  object Panel9: TPanel
//    Left = 517
//    Top = 2
//    Width = 212
//    Height = 359
//    Align = alRight
//    BevelOuter = bvNone
//    TabOrder = 3
//    object GroupBox3: TGroupBox
//      Left = 6
//      Top = 238
//      Width = 194
//      Height = 84
//      Caption = ' Band Conditions '
//      TabOrder = 0
//      object Label11: TLabel
//        Left = 144
//        Top = 19
//        Width = 40
//        Height = 15
//        Caption = 'Activity'
//      end
//      object CheckBox2: TCheckBox
//        Left = 12
//        Top = 61
//        Width = 45
//        Height = 17
//        TabStop = False
//        Caption = 'QSB'
//        TabOrder = 0
//        OnClick = CheckBoxClick
//      end
//      object CheckBox3: TCheckBox
//        Left = 12
//        Top = 41
//        Width = 45
//        Height = 17
//        TabStop = False
//        Caption = 'QRM'
//        TabOrder = 1
//        OnClick = CheckBoxClick
//      end
//      object CheckBox4: TCheckBox
//        Left = 12
//        Top = 21
//        Width = 45
//        Height = 17
//        TabStop = False
//        Caption = 'QRN'
//        TabOrder = 2
//        OnClick = CheckBoxClick
//      end
//      object CheckBox5: TCheckBox
//        Left = 76
//        Top = 21
//        Width = 53
//        Height = 17
//        TabStop = False
//        Caption = 'Flutter'
//        TabOrder = 3
//        OnClick = CheckBoxClick
//      end
//      object CheckBox6: TCheckBox
//        Left = 76
//        Top = 41
//        Width = 45
//        Height = 17
//        TabStop = False
//        Caption = 'LIDs'
//        TabOrder = 4
//        OnClick = CheckBoxClick
//      end
//      object SpinEdit3: TSpinEdit
//        Left = 144
//        Top = 35
//        Width = 37
//        Height = 24
//        TabStop = False
//        MaxLength = 1
//        MaxValue = 9
//        MinValue = 1
//        TabOrder = 5
//        Value = 3
//        OnChange = SpinEdit3Change
//      end
//    end
//    object GroupBox1: TGroupBox
//      Left = 6
//      Top = 81
//      Width = 194
//      Height = 155
//      Caption = ' Station '
//      TabOrder = 1
//      object Label4: TLabel
//        Left = 12
//        Top = 21
//        Width = 20
//        Height = 15
//        Caption = 'Call'
//      end
//      object Label5: TLabel
//        Left = 162
//        Top = 46
//        Width = 29
//        Height = 15
//        Caption = 'WPM'
//      end
//      object Label6: TLabel
//        Left = 12
//        Top = 46
//        Width = 54
//        Height = 15
//        Caption = 'CW Speed'
//      end
//      object Label7: TLabel
//        Left = 13
//        Top = 76
//        Width = 49
//        Height = 15
//        Caption = 'CW Pitch'
//      end
//      object Label9: TLabel
//        Left = 12
//        Top = 106
//        Width = 74
//        Height = 15
//        Caption = 'RX Bandwidth'
//      end
//      object VolumeSlider1: TVolumeSlider
//        Left = 92
//        Top = 129
//        Width = 60
//        Height = 20
//        Hint = '-15.0 dB'
//        ShowHint = True
//        HintStep = 0
//        Margin = 5
//        Value = 0.750000000000000000
//        Overloaded = False
//        OnChange = VolumeSlider1Change
//        OnDblClick = VolumeSliderDblClick
//        DbScale = 60.000000000000000000
//        Db = -15.000000000000000000
//      end
//      object Label18: TLabel
//        Left = 12
//        Top = 134
//        Width = 58
//        Height = 15
//        Caption = 'Mon. Level'
//      end
//      object Edit4: TEdit
//        Left = 45
//        Top = 15
//        Width = 89
//        Height = 23
//        CharCase = ecUpperCase
//        Font.Charset = ANSI_CHARSET
//        Font.Color = clWindowText
//        Font.Height = -13
//        Font.Name = 'Consolas'
//        Font.Style = []
//        ParentFont = False
//        TabOrder = 0
//        Text = 'VE3NEA'
//        OnChange = Edit4Change
//        OnExit = Edit4Exit
//      end
//      object SpinEdit1: TSpinEdit
//        Left = 91
//        Top = 43
//        Width = 65
//        Height = 24
//        TabStop = False
//        MaxLength = 3
//        MaxValue = 120
//        MinValue = 10
//        TabOrder = 2
//        Value = 25
//        OnChange = SpinEdit1Change
//        OnExit = SpinEdit1Exit
//      end
//      object CheckBox1: TCheckBox
//        Left = 140
//        Top = 17
//        Width = 45
//        Height = 17
//        TabStop = False
//        Caption = 'QSK'
//        TabOrder = 1
//        OnClick = CheckBox1Click
//      end
//      object ComboBox1: TComboBox
//        Left = 92
//        Top = 73
//        Width = 65
//        Height = 23
//        Style = csDropDownList
//        DropDownCount = 12
//        TabOrder = 3
//        TabStop = False
//        OnChange = ComboBox1Change
//        Items.Strings = (
//          '300 Hz'
//          '350 Hz'
//          '400 Hz'
//          '450 Hz'
//          '500 Hz'
//          '550 Hz'
//          '600 Hz'
//          '650 Hz'
//          '700 Hz'
//          '750 Hz'
//          '800 Hz'
//          '850 Hz'
//          '900 Hz')
//      end
//      object ComboBox2: TComboBox
//        Left = 92
//        Top = 102
//        Width = 65
//        Height = 23
//        Style = csDropDownList
//        DropDownCount = 12
//        TabOrder = 4
//        TabStop = False
//        OnChange = ComboBox2Change
//        Items.Strings = (
//          '100 Hz'
//          '150 Hz'
//          '200 Hz'
//          '250 Hz'
//          '300 Hz'
//          '350 Hz'
//          '400 Hz'
//          '450 Hz'
//          '500 Hz'
//          '550 Hz'
//          '600 Hz')
//      end
//    end
//    object Panel10: TPanel
//      Left = 0
//      Top = 322
//      Width = 212
//      Height = 37
//      Align = alBottom
//      BevelOuter = bvNone
//      TabOrder = 2
//      object Label8: TLabel
//        Left = 179
//        Top = 13
//        Width = 24
//        Height = 15
//        Caption = 'min.'
//      end
//      object Label10: TLabel
//        Left = 107
//        Top = 13
//        Width = 15
//        Height = 15
//        Caption = 'for'
//      end
//      object SpinEdit2: TSpinEdit
//        Left = 128
//        Top = 10
//        Width = 45
//        Height = 24
//        TabStop = False
//        MaxLength = 2
//        MaxValue = 240
//        MinValue = 1
//        TabOrder = 0
//        Value = 30
//        OnChange = SpinEdit2Change
//      end
//      object ToolBar1: TToolBar
//        Left = 6
//        Top = 6
//        Width = 97
//        Height = 29
//        Align = alNone
//        ButtonHeight = 30
//        ButtonWidth = 72
//        Caption = 'ToolBar1'
//        Flat = False
//        Images = ImageList1
//        Indent = 3
//        List = True
//        ShowCaptions = True
//        TabOrder = 1
//        object ToolButton1: TToolButton
//          Tag = 1
//          Left = 3
//          Top = 0
//          AllowAllUp = True
//          AutoSize = True
//          Caption = '   Run   '
//          DropdownMenu = PopupMenu1
//          Grouped = True
//          ImageIndex = 0
//          Style = tbsDropDown
//          OnClick = RunBtnClick
//        end
//      end
//    end
//    object ContestGroup: TGroupBox
//      Left = 6
//      Top = 6
//      Width = 195
//      Height = 74
//      Caption = 'Contest'
//      TabOrder = 3
//      object Label17: TLabel
//        Left = 12
//        Top = 47
//        Width = 50
//        Height = 15
//        Caption = 'Exchange'
//      end
//      object SimContestCombo: TComboBox
//        Left = 23
//        Top = 18
//        Width = 169
//        Height = 23
//        Style = csDropDownList
//        TabOrder = 0
//        TabStop = False
//        OnChange = SimContestComboChange
//      end
//      object ExchangeEdit: TEdit
//        Left = 76
//        Top = 44
//        Width = 116
//        Height = 23
//        CharCase = ecUpperCase
//        TabOrder = 1
//        Text = '3A ON'
//        OnChange = ExchangeEditChange
//        OnExit = ExchangeEditExit
//      end
//    end
//  end
//  object AlSoundOut1: TAlSoundOut
//    SamplesPerSec = 11025
//    BufCount = 8
//    OnBufAvailable = AlSoundOut1BufAvailable
//    Left = 384
//    Top = 148
//  end
//  object MainMenu1: TMainMenu
//    Images = ImageList1
//    Left = 356
//    Top = 148
//    object File1: TMenuItem
//      Caption = 'File'
//      OnClick = File1Click
//      object ViewScoreTable1: TMenuItem
//        Caption = 'View Score Table'
//        OnClick = ViewScoreTable1Click
//      end
//      object ViewScoreBoardMNU: TMenuItem
//        Caption = 'View Hi-Score web page...'
//        OnClick = ViewScoreBoardMNUClick
//      end
//      object N9: TMenuItem
//        Caption = '-'
//      end
//      object AudioRecordingEnabled1: TMenuItem
//        Caption = 'Audio Recording Enabled'
//        OnClick = AudioRecordingEnabled1Click
//      end
//      object PlayRecordedAudio1: TMenuItem
//        Caption = 'Play Recorded Audio'
//        Enabled = False
//        OnClick = PlayRecordedAudio1Click
//      end
//      object N8: TMenuItem
//        Caption = '-'
//      end
//      object Exit1: TMenuItem
//        Caption = 'Exit'
//        ImageIndex = 2
//        OnClick = Exit1Click
//      end
//    end
//    object Run1: TMenuItem
//      Caption = 'Run'
//      object PileUp1: TMenuItem
//        Tag = 1
//        Caption = 'Pile-Up'
//        ShortCut = 120
//        OnClick = RunMNUClick
//      end
//      object SingleCalls1: TMenuItem
//        Tag = 2
//        Caption = 'Single Calls'
//        ShortCut = 8312
//        OnClick = RunMNUClick
//      end
//      object Competition1: TMenuItem
//        Tag = 3
//        Caption = 'WPX Competition'
//        OnClick = RunMNUClick
//      end
//      object HSTCompetition2: TMenuItem
//        Tag = 4
//        Caption = 'HST Competition'
//        ShortCut = 16504
//        OnClick = RunMNUClick
//      end
//      object Stop1MNU: TMenuItem
//        Caption = 'Stop'
//        Enabled = False
//        ImageIndex = 8
//        OnClick = StopMNUClick
//      end
//    end
//    object Send1: TMenuItem
//      Caption = 'Send'
//      object CQ1: TMenuItem
//        Tag = 1
//        Caption = 'CQ'
//        ShortCut = 112
//        OnClick = SendClick
//      end
//      object Exchange1: TMenuItem
//        Tag = 2
//        Caption = 'Exchange'
//        ShortCut = 113
//        OnClick = SendClick
//      end
//      object TU1: TMenuItem
//        Tag = 3
//        Caption = 'TU'
//        ShortCut = 114
//        OnClick = SendClick
//      end
//      object MyCall1: TMenuItem
//        Tag = 4
//        Caption = 'My Call'
//        ShortCut = 115
//        OnClick = SendClick
//      end
//      object HisCall1: TMenuItem
//        Tag = 5
//        Caption = 'His Call'
//        ShortCut = 116
//        OnClick = SendClick
//      end
//      object QSOB41: TMenuItem
//        Tag = 6
//        Caption = 'QSO B4'
//        ShortCut = 117
//        OnClick = SendClick
//      end
//      object N1: TMenuItem
//        Tag = 7
//        Caption = '<?>'
//        ShortCut = 118
//        OnClick = SendClick
//      end
//      object AGN1: TMenuItem
//        Tag = 8
//        Caption = 'NIL'
//        ShortCut = 119
//        OnClick = SendClick
//      end
//      object NRQM: TMenuItem
//        Tag = 19
//        Caption = 'NR?'
//        ShortCut = 123
//        OnClick = SendClick
//      end
//    end
//    object Settings1: TMenuItem
//      Caption = 'Settings'
//      OnClick = Settings1Click
//      object Call1: TMenuItem
//        Caption = 'Call...'
//        OnClick = Call1Click
//      end
//      object QSK1: TMenuItem
//        Caption = 'QSK'
//        OnClick = QSK1Click
//      end
//      object CWSpeed1: TMenuItem
//        Caption = 'CW Speed'
//        object N10WPM1: TMenuItem
//          Tag = 10
//          Caption = '10 WPM'
//          OnClick = NWPMClick
//        end
//        object N15WPM1: TMenuItem
//          Tag = 15
//          Caption = '15 WPM'
//          OnClick = NWPMClick
//        end
//        object N20WPM1: TMenuItem
//          Tag = 20
//          Caption = '20 WPM'
//          OnClick = NWPMClick
//        end
//        object N25WPM1: TMenuItem
//          Tag = 25
//          Caption = '25 WPM'
//          OnClick = NWPMClick
//        end
//        object N30WPM1: TMenuItem
//          Tag = 30
//          Caption = '30 WPM'
//          OnClick = NWPMClick
//        end
//        object N35WPM1: TMenuItem
//          Tag = 35
//          Caption = '35 WPM'
//          OnClick = NWPMClick
//        end
//        object N40WPM1: TMenuItem
//          Tag = 40
//          Caption = '40 WPM'
//          OnClick = NWPMClick
//        end
//        object N45WPM1: TMenuItem
//          Tag = 45
//          Caption = '45 WPM'
//          OnClick = NWPMClick
//        end
//        object N50WPM1: TMenuItem
//          Tag = 50
//          Caption = '50 WPM'
//          OnClick = NWPMClick
//        end
//        object N55WPM1: TMenuItem
//          Tag = 55
//          Caption = '55 WPM'
//          OnClick = NWPMClick
//        end
//        object N60WPM1: TMenuItem
//          Tag = 60
//          Caption = '60 WPM'
//          OnClick = NWPMClick
//        end
//      end
//      object CWMinRxSpeed1: TMenuItem
//        Caption = 'CW Min Rx Speed'
//        object CWMinRxSpeedSet0: TMenuItem
//          Caption = '0'
//          OnClick = CWMinRxSpeedClick
//        end
//        object CWMinRxSpeedSet1: TMenuItem
//          Tag = 1
//          Caption = '-1'
//          OnClick = CWMinRxSpeedClick
//        end
//        object CWMinRxSpeedSet2: TMenuItem
//          Tag = 2
//          Caption = '-2'
//          OnClick = CWMinRxSpeedClick
//        end
//        object CWMinRxSpeedSet4: TMenuItem
//          Tag = 4
//          Caption = '-4'
//          OnClick = CWMinRxSpeedClick
//        end
//        object CWMinRxSpeedSet6: TMenuItem
//          Tag = 6
//          Caption = '-6'
//          OnClick = CWMinRxSpeedClick
//        end
//        object CWMinRxSpeedSet8: TMenuItem
//          Tag = 8
//          Caption = '-8'
//          OnClick = CWMinRxSpeedClick
//        end
//        object CWMinRxSpeedSet10: TMenuItem
//          Tag = 10
//          Caption = '-10'
//          OnClick = CWMinRxSpeedClick
//        end
//      end
//      object CWMaxRxSpeed1: TMenuItem
//        Caption = 'CW Max Rx Speed'
//        object CWMaxRxSpeedSet0: TMenuItem
//          Caption = '0'
//          OnClick = CWMaxRxSpeedClick
//        end
//        object CWMaxRxSpeedSet1: TMenuItem
//          Tag = 1
//          Caption = '+1'
//          OnClick = CWMaxRxSpeedClick
//        end
//        object CWMaxRxSpeedSet2: TMenuItem
//          Tag = 2
//          Caption = '+2'
//          OnClick = CWMaxRxSpeedClick
//        end
//        object CWMaxRxSpeedSet4: TMenuItem
//          Tag = 4
//          Caption = '+4'
//          OnClick = CWMaxRxSpeedClick
//        end
//        object CWMaxRxSpeedSet6: TMenuItem
//          Tag = 6
//          Caption = '+6'
//          OnClick = CWMaxRxSpeedClick
//        end
//        object CWMaxRxSpeedSet8: TMenuItem
//          Tag = 8
//          Caption = '+8'
//          OnClick = CWMaxRxSpeedClick
//        end
//        object CWMaxRxSpeedSet10: TMenuItem
//          Tag = 10
//          Caption = '+10'
//          OnClick = CWMaxRxSpeedClick
//        end
//      end
//      object CWBandwidth1: TMenuItem
//        Caption = 'CW Pitch'
//        object N300Hz1: TMenuItem
//          Caption = '300 Hz'
//          OnClick = Pitch1Click
//        end
//        object N350Hz1: TMenuItem
//          Tag = 1
//          Caption = '350 Hz'
//          OnClick = Pitch1Click
//        end
//        object N400Hz1: TMenuItem
//          Tag = 2
//          Caption = '400 Hz'
//          OnClick = Pitch1Click
//        end
//        object N450Hz1: TMenuItem
//          Tag = 3
//          Caption = '450 Hz'
//          OnClick = Pitch1Click
//        end
//        object N500Hz1: TMenuItem
//          Tag = 4
//          Caption = '500 Hz'
//          OnClick = Pitch1Click
//        end
//        object N550Hz1: TMenuItem
//          Tag = 5
//          Caption = '550 Hz'
//          OnClick = Pitch1Click
//        end
//        object N600Hz1: TMenuItem
//          Tag = 6
//          Caption = '600 Hz'
//          OnClick = Pitch1Click
//        end
//        object N650Hz1: TMenuItem
//          Tag = 7
//          Caption = '650 Hz'
//          OnClick = Pitch1Click
//        end
//        object N700Hz1: TMenuItem
//          Tag = 8
//          Caption = '700 Hz'
//          OnClick = Pitch1Click
//        end
//        object N750Hz1: TMenuItem
//          Tag = 9
//          Caption = '750 Hz'
//          OnClick = Pitch1Click
//        end
//        object N800Hz1: TMenuItem
//          Tag = 10
//          Caption = '800 Hz'
//          OnClick = Pitch1Click
//        end
//        object N850Hz1: TMenuItem
//          Tag = 11
//          Caption = '850 Hz'
//          OnClick = Pitch1Click
//        end
//        object N900Hz1: TMenuItem
//          Tag = 12
//          Caption = '900 Hz'
//          OnClick = Pitch1Click
//        end
//      end
//      object CWBandwidth2: TMenuItem
//        Caption = 'CW Bandwidth'
//        object N100Hz1: TMenuItem
//          Caption = '100 Hz'
//          OnClick = Bw1Click
//        end
//        object N150Hz1: TMenuItem
//          Tag = 1
//          Caption = '150 Hz'
//          OnClick = Bw1Click
//        end
//        object N200Hz1: TMenuItem
//          Tag = 2
//          Caption = '200 Hz'
//          OnClick = Bw1Click
//        end
//        object N250Hz1: TMenuItem
//          Tag = 3
//          Caption = '250 Hz'
//          OnClick = Bw1Click
//        end
//        object N300Hz2: TMenuItem
//          Tag = 4
//          Caption = '300 Hz'
//          OnClick = Bw1Click
//        end
//        object N350Hz2: TMenuItem
//          Tag = 5
//          Caption = '350 Hz'
//          OnClick = Bw1Click
//        end
//        object N400Hz2: TMenuItem
//          Tag = 6
//          Caption = '400 Hz'
//          OnClick = Bw1Click
//        end
//        object N450Hz2: TMenuItem
//          Tag = 7
//          Caption = '450 Hz'
//          OnClick = Bw1Click
//        end
//        object N500Hz2: TMenuItem
//          Tag = 8
//          Caption = '500 Hz'
//          OnClick = Bw1Click
//        end
//        object N550Hz2: TMenuItem
//          Tag = 9
//          Caption = '550 Hz'
//          OnClick = Bw1Click
//        end
//        object N600Hz2: TMenuItem
//          Tag = 10
//          Caption = '600 Hz'
//          OnClick = Bw1Click
//        end
//      end
//      object MonLevel1: TMenuItem
//        Tag = -30
//        Caption = 'Mon. Level'
//        object N30dB1: TMenuItem
//          Tag = -60
//          Caption = '-60 dB'
//          OnClick = SelfMonClick
//        end
//        object N20dB1: TMenuItem
//          Tag = -40
//          Caption = '-40 dB'
//          OnClick = SelfMonClick
//        end
//        object N10dB1: TMenuItem
//          Tag = -20
//          Caption = '-20 dB'
//          OnClick = SelfMonClick
//        end
//        object N0dB1: TMenuItem
//          Caption = '0 dB'
//          OnClick = SelfMonClick
//        end
//      end
//      object NRDigits1: TMenuItem
//        Tag = 3
//        Caption = 'Serial NR'
//        object SerialNRSet1: TMenuItem
//          Caption = 'Start of Contest (Default)'
//          Checked = True
//          OnClick = NRDigitsClick
//        end
//        object SerialNRSet2: TMenuItem
//          Tag = 1
//          Caption = 'Mid-Contest (50-500)'
//          OnClick = NRDigitsClick
//        end
//        object SerialNRSet3: TMenuItem
//          Tag = 2
//          Caption = 'End of Contest (500-5000)'
//          OnClick = NRDigitsClick
//        end
//        object SerialNRCustomRange: TMenuItem
//          Tag = 3
//          Caption = 'Custom Range (01-99)...'
//          OnClick = SerialNRCustomRangeClick
//        end
//      end
//      object N6: TMenuItem
//        Caption = '-'
//      end
//      object QRN1: TMenuItem
//        Caption = 'QRN'
//        OnClick = LIDS1Click
//      end
//      object QRM1: TMenuItem
//        Caption = 'QRM'
//        OnClick = LIDS1Click
//      end
//      object QSB1: TMenuItem
//        Caption = 'QSB'
//        OnClick = LIDS1Click
//      end
//      object Flutter1: TMenuItem
//        Caption = 'Flutter'
//        OnClick = LIDS1Click
//      end
//      object LIDS1: TMenuItem
//        Caption = 'LIDS'
//        OnClick = LIDS1Click
//      end
//      object Activity1: TMenuItem
//        Caption = 'Activity'
//        object N11: TMenuItem
//          Tag = 1
//          Caption = '1'
//          OnClick = Activity1Click
//        end
//        object N21: TMenuItem
//          Tag = 2
//          Caption = '2'
//          OnClick = Activity1Click
//        end
//        object N31: TMenuItem
//          Tag = 3
//          Caption = '3'
//          OnClick = Activity1Click
//        end
//        object N41: TMenuItem
//          Tag = 4
//          Caption = '4'
//          OnClick = Activity1Click
//        end
//        object N51: TMenuItem
//          Tag = 5
//          Caption = '5'
//          OnClick = Activity1Click
//        end
//        object N61: TMenuItem
//          Tag = 6
//          Caption = '6'
//          OnClick = Activity1Click
//        end
//        object N71: TMenuItem
//          Tag = 7
//          Caption = '7'
//          OnClick = Activity1Click
//        end
//        object N81: TMenuItem
//          Tag = 8
//          Caption = '8'
//          OnClick = Activity1Click
//        end
//        object N91: TMenuItem
//          Tag = 9
//          Caption = '9'
//          OnClick = Activity1Click
//        end
//      end
//      object N7: TMenuItem
//        Caption = '-'
//      end
//      object Duration1: TMenuItem
//        Caption = 'Duration'
//        object N5min1: TMenuItem
//          Tag = 5
//          Caption = '5 min'
//          OnClick = Duration1Click
//        end
//        object N10min1: TMenuItem
//          Tag = 10
//          Caption = '10 min'
//          OnClick = Duration1Click
//        end
//        object N15min1: TMenuItem
//          Tag = 15
//          Caption = '15 min'
//          OnClick = Duration1Click
//        end
//        object N30min1: TMenuItem
//          Tag = 30
//          Caption = '30 min'
//          OnClick = Duration1Click
//        end
//        object N60min1: TMenuItem
//          Tag = 60
//          Caption = '60 min'
//          OnClick = Duration1Click
//        end
//        object N90min1: TMenuItem
//          Tag = 90
//          Caption = '90 min'
//          OnClick = Duration1Click
//        end
//        object N120min1: TMenuItem
//          Tag = 120
//          Caption = '120 min'
//          OnClick = Duration1Click
//        end
//      end
//      object Operator1: TMenuItem
//        Caption = 'HST Operator'
//        OnClick = Operator1Click
//      end
//      object mnuShowCallsignInfo: TMenuItem
//        Caption = 'Show Callsign Info'
//        OnClick = mnuShowCallsignInfoClick
//      end
//    end
//    object Help1: TMenuItem
//      Caption = 'Help'
//      object FirstTime1: TMenuItem
//        Caption = 'First Time Setup'
//        OnClick = FirstTime1Click
//      end
//      object WebPage1: TMenuItem
//        Caption = 'Community Edition Home Page'
//        OnClick = WebPage1Click
//      end
//      object Readme1: TMenuItem
//        Caption = 'Readme'
//        OnClick = Readme1Click
//      end
//      object N2: TMenuItem
//        Caption = '-'
//      end
//      object About1: TMenuItem
//        Caption = 'About Morse Runner'
//        OnClick = About1Click
//      end
//    end
//  end
//  object PopupMenu1: TPopupMenu
//    Left = 356
//    Top = 176
//    object PileupMNU: TMenuItem
//      Tag = 1
//      Caption = 'Pile-Up'
//      Default = True
//      OnClick = RunMNUClick
//    end
//    object SingleCallsMNU: TMenuItem
//      Tag = 2
//      Caption = 'Single Calls'
//      OnClick = RunMNUClick
//    end
//    object CompetitionMNU: TMenuItem
//      Tag = 3
//      Caption = 'WPX Competition'
//      OnClick = RunMNUClick
//    end
//    object HSTCompetition1: TMenuItem
//      Tag = 4
//      Caption = 'HST Competition'
//      OnClick = RunMNUClick
//    end
//    object StopMNU: TMenuItem
//      Caption = 'Stop'
//      Enabled = False
//      OnClick = StopMNUClick
//    end
//  end
//  object ImageList1: TImageList
//    Left = 384
//    Top = 176
//    Bitmap = {
    // 494C01010B00D800040010001000FFFFFFFFFF10FFFFFFFFFFFFFFFF424D3600
    // 0000000000003600000028000000400000003000000001002000000000000030
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF0000FFFF0000FFFF0000FFFF
    // 0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF
    // 0000FFFF0000FFFF0000FFFF0000000000000000000000000000FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00000000000000000000FFFF000000000000000000007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F00FFFFFF0000000000000000002B1BEE00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED002B1BEE00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 00000000000000000000FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CEE00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F00FFFFFF000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00251DED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F00FFFFFF000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F00FFFFFF000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00241CEE00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F00FFFFFF000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F00000000000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F00FFFFFF000000000000000000241CED00241CED00241C
    // ED00241CED00241CEC00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00FFFFFF0000000000FFFF000000000000000000007F7F7F00FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00FFFFFF007F7F7F00FFFFFF0000000000000000002A1BEE00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00000000000000000000FFFF000000000000000000007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F00000000000000000000000000241CED00241CED00241C
    // ED00241CED00241CED00241CED00241CED00241CED00241CED00241CED00241C
    // ED00241CED00241CED0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000FFFF0000FFFF0000FFFF0000FFFF
    // 0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF
    // 0000FFFF0000FFFF0000FFFF0000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F0000000000000000000000000000000000000000007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F0000000000FFFFFF00FFFF0000FFFF0000FFFF0000FFFF
    // 0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF
    // 0000FFFF0000FFFF0000FFFF0000000000000000000000000000FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00000000000000000000000000000000000000
    // 0000000000007F7F7F00BFBFBF00BFBFBF00BFBFBF00BFBFBF00BFBFBF00BFBF
    // BF00000000000000000000000000000000007F7F7F00FFFFFF00000000000000
    // 0000000000007F7F7F00FFFFFF0000000000FFFFFF00FFFFFF00000000007F7F
    // 7F00FFFFFF00000000007F7F7F00FFFFFF00FFFF000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00000000000000000000FFFF000000000000000000007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F00FFFFFF00000000000000000000000000000000000000
    // 0000000000007F7F7F00BFBFBF000000000000000000BFBFBF00BFBFBF00BFBF
    // BF00000000000000000000000000000000007F7F7F00FFFFFF00000000000000
    // 0000000000007F7F7F00FFFFFF007F7F7F007F7F7F00FFFFFF00000000007F7F
    // 7F00FFFFFF00000000007F7F7F00FFFFFF00FFFF000000000000FFFFFF007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F00FFFFFF00000000000000000000000000000000000000
    // 0000000000007F7F7F00BFBFBF000000000000000000BFBFBF00BFBFBF00BFBF
    // BF00000000000000000000000000000000007F7F7F00FFFFFF00000000000000
    // 0000000000007F7F7F00FFFFFF007F7F7F007F7F7F00FFFFFF00FFFFFF007F7F
    // 7F00FFFFFF00000000007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F00FFFFFF00000000000000000000000000000000000000
    // 0000000000007F7F7F00BFBFBF00BFBFBF00BFBFBF00BFBFBF00BFBFBF00BFBF
    // BF00000000000000000000000000000000007F7F7F00FFFFFF00000000000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F0000000000000000007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000FFFFFF00FFFFFF00FFFFFF00000000000000
    // 0000000000007F7F7F00FFFFFF00000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000007F7F7F00FFFFFF0000000000FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000007F7F7F000000000000000000000000007F7F7F00000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 000000000000000000007F7F7F007F7F7F007F7F7F00FFFFFF00FFFFFF000000
    // 0000000000007F7F7F00FFFFFF00000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000007F7F7F00FFFFFF007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F00FFFFFF007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F00FFFFFF000000
    // 0000000000007F7F7F00FFFFFF0000000000000000000000000000000000FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00000000000000000000000000000000007F7F7F00FFFFFF007F7F7F00FFFF
    // FF00000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F00FFFFFF007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F00FFFFFF000000
    // 0000000000007F7F7F00FFFFFF0000000000000000000000000000000000FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00000000000000000000000000000000007F7F7F00FFFFFF007F7F7F00FFFF
    // FF00000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F00FFFFFF007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F00000000000000
    // 0000000000007F7F7F00FFFFFF0000000000000000000000000000000000FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00000000000000000000000000000000007F7F7F00FFFFFF007F7F7F00FFFF
    // FF00000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F00FFFFFF007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000007F7F7F000000000000000000000000007F7F7F00000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 000000000000000000007F7F7F007F7F7F007F7F7F0000000000000000000000
    // 0000000000007F7F7F00FFFFFF0000000000000000000000000000000000FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00000000000000000000000000000000007F7F7F00FFFFFF007F7F7F00FFFF
    // FF00000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F00FFFFFF007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F00FFFFFF0000000000000000000000000000000000FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00000000000000000000000000000000007F7F7F00FFFFFF007F7F7F00FFFF
    // FF00000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F00FFFFFF007F7F7F00FFFFFF00FFFF000000000000FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F0000000000FFFF000000000000000000007F7F7F00FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000007F7F7F00FFFFFF0000000000000000000000000000000000FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00000000007F7F7F0000000000000000007F7F7F00FFFFFF007F7F7F00FFFF
    // FF00000000000000000000000000000000000000000000000000000000000000
    // 00007F7F7F007F7F7F007F7F7F00FFFFFF00FFFF000000000000FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00FFFFFF0000000000FFFF000000000000000000007F7F7F00FFFFFF00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00FFFFFF007F7F7F00FFFFFF0000000000000000000000000000000000FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF00000000000000000000000000000000007F7F7F00000000007F7F7F00FFFF
    // FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF007F7F7F00FFFFFF007F7F7F0000000000FFFF000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00000000000000000000FFFF000000000000000000007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F0000000000000000000000000000000000000000000000
    // FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF000000
    // FF0000000000000000000000000000000000000000007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F007F7F7F000000000000000000FFFF0000FFFF0000FFFF0000FFFF
    // 0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF
    // 0000FFFF0000FFFF0000FFFF0000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000008484840000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00000000000000000000000000000000000000000000000000007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 0000000000008484840084848400000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000848484000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 800000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F007F7F
    // 7F0000000000FFFFFF0000000000000000000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 0000000000000000000084848400848484000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00008484840084848400FFFFFF00000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 80000000800000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF007F7F7F0000000000FFFFFF00000000000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000000000848484008484840000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF0084848400FFFFFF000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 8000000080000000800000FFFF0000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF00000000007F7F7F0000000000FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF0000000000008484840084848400000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C60084848400FFFFFF0000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 800000008000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000000000007F7F7F00FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF000000FF00000000000084848400848484000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C600C6C6C60084848400FFFFFF00000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 800000008000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000000000007F7F7F00FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF000000FF000000FF000000000000848484008484
    // 8400000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C600C6C6C600C6C6C60084848400FFFFFF000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 800000008000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000000000007F7F7F00FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF000000FF000000FF000000FF0000000000008484
    // 8400848484000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C600C6C6C600C6C6C600C6C6C600848484000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 800000008000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000000000007F7F7F00FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF000000FF000000FF000000FF000000FF00000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C600C6C6C600C6C6C600C6C6C600C6C6C6008484
    // 8400000000000000000000000000000000000000000000000000000000000000
    // 800000008000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000000000007F7F7F00FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF000000FF000000FF000000FF0000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C600C6C6C600C6C6C600C6C6C600848484000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 800000008000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000000000007F7F7F00FFFFFF00FFFFFF0000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF000000FF000000FF000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C600C6C6C600C6C6C60084848400000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 8000000080000000800000FFFF000000000000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000000000007F7F7F007F7F7F000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF000000FF00000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C600C6C6C6008484840000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 800000008000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000000000007F7F7F00FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000FF0000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF00C6C6C600848484000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 800000008000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF0000000000FFFFFF007F7F7F00FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 00000000000000FF000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 000084848400FFFFFF0084848400000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 8000FFFF0000000080000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF007F7F7F00FFFFFF007F7F7F00FFFFFF000000000000000000000000000000
    // 00007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000848484008484840000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 8000FFFF0000FFFF00000000000000FFFF0000FFFF0000FFFF0000FFFF0000FF
    // FF000000000000000000000000000000000000000000000000007F7F7F00FFFF
    // FF007F7F7F007F7F7F007F7F7F00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF
    // FF007F7F7F00FFFFFF0000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000848484000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 0000000000000000000000000000000000000000000000000000000000000000
    // 00000000000000000000000000000000000000000000000000007F7F7F007F7F
    // 7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F7F007F7F
    // 7F007F7F7F00000000000000000000000000424D3E000000000000003E000000
    // 2800000040000000300000000100010000000000800100000000000000000000
    // 000000000000000000000000FFFFFF00FFFFFFFFFFFF00000001C00180010000
    // 000180018001000000019FF9800100001FF19FF9800100001FF19C1980010000
    // 1831981980010000183198198001000018319819800100001831981980010000
    // 18319839800100001FF19FF9800100001FF19FF9800100000001800180010000
    // 00018003800100000001FFFFFFFF0000FFFFC001FFFFFFFF800380020001C001
    // 00013924000180010001382400019FF9000138041FF19FF90001380C1FF19E39
    // 0001200018319C19000100001831981900010FF01831981900010FF018319839
    // 00010FF018319C7900010FF01FF19FF900010FF01FF19FF900010FF000018001
    // 0001400100018003800380030001FFFFFBFFFFFFC007C003F1FFF7FFC007CBF3
    // F0FFF1FFC007C5F3F07FF0FFC007CAF3F03FF07FC007CCF3F01FF03FC007CCF3
    // F00FF01FC007CCF3F007F01FC007CCF3F00FF00FC007CCF3F01FF01FC007CC73
    // F03FF03FC007CCF3F07FF07FC007CCF3F0FFF0FFC007C8F3F1FFF1FFC007C0F3
    // F3FFF3FFC007C003F7FFF7FFC007C00700000000000000000000000000000000
    // 000000000000}
//  end
//  object AlWavFile1: TAlWavFile
//    Left = 384
//    Top = 204
//  end
//end

// ============================================================================
// TYPESCRIPT/REACT NATIVE IMPLEMENTATION BELOW
// ============================================================================

import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { useMainFormHandlers } from './MainFormHandlers';

const { width, height } = Dimensions.get('window');

/**
 * MainForm - Main application form component
 * Ported from Delphi TMainForm (Main.dfm)
 * 
 * This component contains only the UI/JSX structure.
 * All event handlers and logic are in MainFormHandlers.ts
 */
const MainForm: React.FC = () => {
  const handlers = useMainFormHandlers();

  // Initialize form on mount
  useEffect(() => {
    handlers.FormCreate(null);
    return () => {
      handlers.FormDestroy(null);
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Bevel1 - Top separator line */}
      <View style={styles.bevel1} />

      {/* Main content area - Left panel and Right sidebar */}
      <View style={styles.mainContent}>
        {/* Left Panel - Central Information Panel (~70%) */}
        <ScrollView style={styles.leftPanel} contentContainerStyle={styles.leftPanelContent}>

          {/* TODO: Add remaining panels and components:
              - Panel5: Main content area (ListView2, RichEdit1, sbar)
              - Panel6: Additional content
              - Panel9-Panel10: More panels
              - GroupBox1, GroupBox3, ContestGroup
              - All remaining controls
          */}
          <View style={styles.placeholderArea}>
            <Text style={styles.placeholderText}>Additional panels and controls will be implemented here</Text>
          </View>
        </ScrollView>

        {/* Right Sidebar - Controls Panel (~30%) */}
        <View style={styles.rightSidebar}>
          {/* Placeholder for right sidebar controls */}
          <View style={styles.placeholderArea}>
            <Text style={styles.placeholderText}>Right sidebar controls</Text>
          </View>
        </View>
      </View>

      {/* Panel5 - Bottom spacer panel */}
      <View style={styles.panel5} />

      {/* Panel1 - Bottom panel with Call, RST, Nr. fields, SpeedButtons, Timer */}
      <View style={styles.panel1}>
        {/* Left side: Input fields and buttons */}
        <View style={styles.panel1Left}>
          {/* Top row: Labels and Input fields */}
          <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.label1}>Call</Text>
              <TextInput
                style={styles.edit1}
                value={handlers.edit1Text}
                onChangeText={handlers.setEdit1Text}
                onChange={(e) => handlers.Edit1Change(e.nativeEvent)}
                onFocus={handlers.Edit1Enter}
                maxLength={12}
                autoCapitalize="characters"
                placeholder="Call"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label2}>RST</Text>
              <TextInput
                style={styles.edit2}
                value={handlers.edit2Text}
                onChangeText={handlers.setEdit2Text}
                onFocus={handlers.Edit2Enter}
                maxLength={10}
                autoCapitalize="characters"
                placeholder="RST"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label3}>Nr.</Text>
              <TextInput
                style={styles.edit3}
                value={handlers.edit3Text}
                onChangeText={handlers.setEdit3Text}
                onFocus={handlers.Edit3Enter}
                maxLength={4}
                autoCapitalize="characters"
                placeholder="Nr."
              />
            </View>
          </View>

          {/* Function Buttons - 2 rows of 4 */}
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
              {/* SpeedButton4 - F1 CQ */}
              <TouchableOpacity
                style={styles.speedButton}
                onPress={() => handlers.SendClick({ tag: 1 })}
              >
                <Text style={styles.speedButtonText}>F1 CQ</Text>
              </TouchableOpacity>

              {/* SpeedButton5 - F2 <exch> */}
              <TouchableOpacity
                style={styles.speedButton}
                onPress={() => handlers.SendClick({ tag: 2 })}
              >
                <Text style={styles.speedButtonText}>F2 {'<exch>'}</Text>
              </TouchableOpacity>

              {/* SpeedButton6 - F3 TU */}
              <TouchableOpacity
                style={styles.speedButton}
                onPress={() => handlers.SendClick({ tag: 3 })}
              >
                <Text style={styles.speedButtonText}>F3 TU</Text>
              </TouchableOpacity>

              {/* SpeedButton7 - F4 <my> */}
              <TouchableOpacity
                style={styles.speedButton}
                onPress={() => handlers.SendClick({ tag: 4 })}
              >
                <Text style={styles.speedButtonText}>F4 {'<my>'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              {/* SpeedButton8 - F5 <his> */}
              <TouchableOpacity
                style={styles.speedButton}
                onPress={() => handlers.SendClick({ tag: 5 })}
              >
                <Text style={styles.speedButtonText}>F5 {'<his>'}</Text>
              </TouchableOpacity>

              {/* SpeedButton9 - F6 B4 */}
              <TouchableOpacity
                style={styles.speedButton}
                onPress={() => handlers.SendClick({ tag: 6 })}
              >
                <Text style={styles.speedButtonText}>F6 B4</Text>
              </TouchableOpacity>

              {/* SpeedButton10 - F7 ? */}
              <TouchableOpacity
                style={styles.speedButton}
                onPress={() => handlers.SendClick({ tag: 7 })}
              >
                <Text style={styles.speedButtonText}>F7 ?</Text>
              </TouchableOpacity>

              {/* SpeedButton11 - F8 NIL */}
              <TouchableOpacity
                style={styles.speedButton}
                onPress={() => handlers.SendClick({ tag: 8 })}
              >
                <Text style={styles.speedButtonText}>F8 NIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Center panel */}
        <View style={styles.panel1Left}>
          {/* Panel4 and Panel7 - Run mode display and info panel */}
          <View style={styles.panel4Panel7Row}>
            {/* Panel4 - Run mode display */}
            <View style={styles.panel4}>
              <Text style={styles.panel4Text}>{handlers.runMode || ''}</Text>
            </View>
            {/* Panel7 - Info panel */}
            <View style={styles.panel7}>
              {/* TODO: Add content to Panel7 */}
            </View>
          </View>

          {/* Panel3 - Spectrum/PaintBox */}
          <View style={styles.panel3}>
            <View style={styles.paintBox1}>
              <Text style={styles.paintBoxPlaceholder}>Spectrum</Text>
            </View>
          </View>

            {/* Panel8 - RIT Indicator with Shape2 */}
            <TouchableOpacity 
            style={styles.panel8}
            onPressIn={(e) => {
                const { locationX } = e.nativeEvent;
                handlers.Panel8MouseDown(null, null, null, locationX, 0);
            }}
            activeOpacity={1}
            >
            {/* Shape2 - RIT indicator */}
            <TouchableOpacity
                style={[
                styles.shape2,
                {
                    // Position: centered (50%) plus RIT offset (Ini.Rit div 9 from Pascal)
                    left: '50%',
                    transform: [{ translateX: handlers.ritValue / 9 - 16 }], // RIT offset minus half width
                }
                ]}
                onPressIn={() => handlers.Shape2MouseDown(null, null, null, 0, 0)}
                activeOpacity={1}
            />
            </TouchableOpacity>
        </View>

        {/* Right side: Timer (Panel2) and Score (Panel11) */}
        <View style={styles.panel1Right}>
          <View style={styles.panel2}>
            <Text style={styles.panel2Text}>00:00:00</Text>
          </View>

          {/* Panel11 - Score Panel with ListView1 */}
          <View style={styles.panel11}>
            <Text style={styles.panel11Caption}>{handlers.panel11Caption}</Text>
            {/* ListView1 - Score table */}
            <View style={styles.listView1}>
              {/* Header row */}
              <View style={styles.listView1Header}>
                <View style={styles.listView1Col1} />
                <View style={styles.listView1Col2}>
                  <Text style={styles.listView1HeaderText}>Raw</Text>
                </View>
                <View style={styles.listView1Col3}>
                  <Text style={styles.listView1HeaderText}>Verified</Text>
                </View>
              </View>
              {/* Data rows */}
              <View style={styles.listView1Row}>
                <View style={styles.listView1Col1}>
                  <Text style={styles.listView1Label}>Pts</Text>
                </View>
                <View style={styles.listView1Col2}>
                  <Text style={styles.listView1Value}>{handlers.scorePtsRaw}</Text>
                </View>
                <View style={styles.listView1Col3}>
                  <Text style={styles.listView1Value}>{handlers.scorePtsVerified}</Text>
                </View>
              </View>
              <View style={styles.listView1Row}>
                <View style={styles.listView1Col1}>
                  <Text style={styles.listView1Label}>Mult</Text>
                </View>
                <View style={styles.listView1Col2}>
                  <Text style={styles.listView1Value}>{handlers.scoreMultRaw}</Text>
                </View>
                <View style={styles.listView1Col3}>
                  <Text style={styles.listView1Value}>{handlers.scoreMultVerified}</Text>
                </View>
              </View>
              <View style={styles.listView1Row}>
                <View style={styles.listView1Col1}>
                  <Text style={styles.listView1Label}>Score</Text>
                </View>
                <View style={styles.listView1Col2}>
                  <Text style={styles.listView1Value}>{handlers.scoreTotalRaw}</Text>
                </View>
                <View style={styles.listView1Col3}>
                  <Text style={styles.listView1Value}>{handlers.scoreTotalVerified}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  bevel1: {
    height: 2,
    backgroundColor: '#C0C0C0',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  panel5: {
    height: 10,
    backgroundColor: '#F0F0F0',
    width: '100%',
  },
  leftPanel: {
    flex: 0.7,
    backgroundColor: '#F0F0F0',
  },
  leftPanelContent: {
    padding: 8,
    paddingBottom: 8,
  },
  rightSidebar: {
    flex: 0.3,
    backgroundColor: '#F0F0F0',
    borderLeftWidth: 1,
    borderLeftColor: '#808080',
    padding: 8,
  },
  panel2: {
    width: 150,
    minHeight: 33,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
  panel2Text: {
    fontSize: 24,
    fontFamily: 'monospace',
    color: '#00FF00', // Bright green
    fontWeight: 'bold',
  },
  panel3: {
    width: '100%',
    minHeight: 67,
    borderWidth: 1,
    borderColor: '#808080',
    backgroundColor: '#FFFFE0',
    marginBottom: 8,
  },
  paintBox1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
  paintBoxPlaceholder: {
    fontSize: 10,
    color: '#666666',
  },
  placeholderArea: {
    padding: 8,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 12,
    color: '#666666',
  },
  panel1: {
    backgroundColor: '#F0F0F0',
    borderTopWidth: 1,
    borderTopColor: '#808080',
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    minHeight: 140,
    gap: 8,
  },
  panel1Left: {
    flex: 1,
  },
  panel4Panel7Row: {
    flexDirection: 'row',
    marginBottom: 6,
    gap: 4,
  },
  panel4: {
    width: 114,
    minHeight: 33,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
  panel4Text: {
    fontSize: 11,
    fontFamily: 'MS Sans Serif',
    fontWeight: 'bold',
    color: '#FF0000', // Red by default (clRed), will change to green for non-competition mode
  },
  panel7: {
    width: 104,
    minHeight: 33,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel8: {
    width: '100%',
    height: 10,
    backgroundColor: '#E0E0E0',
    borderWidth: 1,
    borderColor: '#808080',
    marginTop: 4,
    position: 'relative',
  },
  shape2: {
    position: 'absolute',
    width: 32,
    height: 7,
    backgroundColor: '#C4D3E8', // Color 12902431 in hex (clInfoBk-ish)
    top: 1,
  },
  panel1Right: {
    alignItems: 'flex-end',
    gap: 4,
  },
  panel11: {
    width: 191,
    minHeight: 85,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#808080',
    padding: 4,
  },
  panel11Caption: {
    fontSize: 19,
    fontFamily: 'MS Sans Serif',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 2,
  },
  listView1: {
    flex: 1,
    marginTop: 2,
  },
  listView1Header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    marginBottom: 2,
    paddingBottom: 2,
  },
  listView1Row: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  listView1Col1: {
    width: 48,
    justifyContent: 'center',
  },
  listView1Col2: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView1Col3: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView1HeaderText: {
    fontSize: 12,
    fontFamily: 'Consolas',
    fontWeight: 'bold',
    color: '#000000',
  },
  listView1Label: {
    fontSize: 12,
    fontFamily: 'Consolas',
    color: '#000000',
  },
  listView1Value: {
    fontSize: 12,
    fontFamily: 'Consolas',
    color: '#000000',
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 6,
    gap: 8,
  },
  inputGroup: {
    flex: 1,
    gap: 2,
  },
  label1: {
    fontSize: 11,
    color: '#000000',
    fontWeight: '500',
  },
  label2: {
    fontSize: 11,
    color: '#000000',
    fontWeight: '500',
  },
  label3: {
    fontSize: 11,
    color: '#000000',
    fontWeight: '500',
  },
  edit1: {
    flex: 1,
    minHeight: 27,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#808080',
    paddingHorizontal: 6,
    fontSize: 16,
    fontFamily: 'Consolas',
    fontWeight: 'bold',
  },
  edit2: {
    flex: 0.7,
    minHeight: 27,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#808080',
    paddingHorizontal: 6,
    fontSize: 16,
    fontFamily: 'Consolas',
    fontWeight: 'bold',
  },
  edit3: {
    flex: 0.4,
    minHeight: 27,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#808080',
    paddingHorizontal: 6,
    fontSize: 16,
    fontFamily: 'Consolas',
    fontWeight: 'bold',
  },
  buttonContainer: {
    gap: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 4,
  },
  speedButton: {
    flex: 1,
    height: 26,
    backgroundColor: '#E0E0E0',
    borderWidth: 1,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  speedButtonText: {
    fontSize: 11,
    color: '#000000',
    fontWeight: '500',
  },
});

export default MainForm;

