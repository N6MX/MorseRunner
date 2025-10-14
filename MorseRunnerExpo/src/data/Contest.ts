// Contest data model - ported from Contest.pas and Ini.pas
export enum ContestType {
  WPX = 'wpx',
  CWT = 'cwt',
  FIELD_DAY = 'field_day',
  NAQP = 'naqp',
  HST = 'hst',
  CQ_WW = 'cq_ww',
  ARRL_DX = 'arrl_dx',
  SST = 'sst',
  ALL_JA = 'all_ja',
  ACAG = 'acag',
  IARU_HF = 'iaru_hf',
  ARRL_SS = 'arrl_ss',
}

export enum Exchange1Type {
  RST = 'rst',
  OP_NAME = 'op_name',
  FD_CLASS = 'fd_class',
  SS_NR_PRECEDENCE = 'ss_nr_precedence',
}

export enum Exchange2Type {
  SERIAL_NR = 'serial_nr',
  GENERIC_FIELD = 'generic_field',
  ARRL_SECTION = 'arrl_section',
  STATE_PROV = 'state_prov',
  CQ_ZONE = 'cq_zone',
  ITU_ZONE = 'itu_zone',
  POWER = 'power',
  JA_PREF = 'ja_pref',
  JA_CITY = 'ja_city',
  SS_CHECK_SECTION = 'ss_check_section',
  NAQP_EXCH2 = 'naqp_exch2',
  NAQP_NON_NA_EXCH2 = 'naqp_non_na_exch2',
}

export enum StationMessage {
  CQ = 'cq',
  NR = 'nr',
  TU = 'tu',
  MY_CALL = 'my_call',
  HIS_CALL = 'his_call',
  B4 = 'b4',
  QTH = 'qth',
  NAME = 'name',
}

export interface ContestDefinition {
  name: string;
  key: string;
  exchType1: Exchange1Type;
  exchType2: Exchange2Type;
  exchCaptions: [string, string];
  exchFieldEditable: boolean;
  exchDefault: string;
  msg: string;
  type: ContestType;
}

export interface ContestCall {
  call: string;
  exchange1: string;
  exchange2: string;
  userText: string;
}

export class Contest {
  public name: string;
  public type: ContestType;
  public exchangeType1: Exchange1Type;
  public exchangeType2: Exchange2Type;
  public callList: ContestCall[] = [];
  public isRunning: boolean = false;
  public blockNumber: number = 0;

  constructor(
    name: string,
    type: ContestType,
    exchangeType1: Exchange1Type,
    exchangeType2: Exchange2Type
  ) {
    this.name = name;
    this.type = type;
    this.exchangeType1 = exchangeType1;
    this.exchangeType2 = exchangeType2;
  }

  // Port from Contest.pas - LoadCallHistory function
  async loadCallHistory(userCallsign: string): Promise<boolean> {
    try {
      // In a real implementation, this would load from contest data files
      // For now, we'll use sample data
      this.callList = [
        { call: 'W1ABC', exchange1: '599', exchange2: '001', userText: '' },
        { call: 'W2DEF', exchange1: '599', exchange2: '002', userText: '' },
        { call: 'W3GHI', exchange1: '599', exchange2: '003', userText: '' },
        // ... more sample data
      ];
      return true;
    } catch (error) {
      console.error('Error loading call history:', error);
      return false;
    }
  }

  // Port from Contest.pas - PickStation function
  pickStation(): number {
    if (this.callList.length === 0) return -1;
    return Math.floor(Math.random() * this.callList.length);
  }

  // Port from Contest.pas - DropStation function
  dropStation(id: number): void {
    if (id >= 0 && id < this.callList.length) {
      this.callList.splice(id, 1);
    }
  }

  // Port from Contest.pas - GetCall function
  getCall(id: number): string {
    if (id >= 0 && id < this.callList.length) {
      return this.callList[id].call;
    }
    return '';
  }

  // Port from Contest.pas - GetExchange function
  getExchange(id: number): ContestCall | null {
    if (id >= 0 && id < this.callList.length) {
      return this.callList[id];
    }
    return null;
  }

  // Port from Contest.pas - GetStationInfo function
  getStationInfo(callsign: string): string {
    const station = this.callList.find(s => s.call === callsign);
    if (station && station.userText) {
      return `${station.call} - ${station.userText}`;
    }
    return station?.call || '';
  }

  // Port from Contest.pas - ExtractMultiplier function
  extractMultiplier(qso: any): string {
    // This would contain contest-specific multiplier logic
    // For now, return a simple multiplier
    return qso.prefix || '';
  }
}

// Contest definitions - ported from Ini.pas
export const CONTEST_DEFINITIONS: ContestDefinition[] = [
  {
    name: 'CQ WPX',
    key: 'wpx',
    exchType1: Exchange1Type.RST,
    exchType2: Exchange2Type.SERIAL_NR,
    exchCaptions: ['RST', 'Serial #'],
    exchFieldEditable: true,
    exchDefault: '599 001',
    msg: 'expecting RST and Serial Number',
    type: ContestType.WPX,
  },
  {
    name: 'ARRL Field Day',
    key: 'field_day',
    exchType1: Exchange1Type.FD_CLASS,
    exchType2: Exchange2Type.ARRL_SECTION,
    exchCaptions: ['Class', 'Section'],
    exchFieldEditable: true,
    exchDefault: '3A OR',
    msg: 'expecting Class and Section',
    type: ContestType.FIELD_DAY,
  },
  {
    name: 'CQ WW',
    key: 'cq_ww',
    exchType1: Exchange1Type.RST,
    exchType2: Exchange2Type.CQ_ZONE,
    exchCaptions: ['RST', 'Zone'],
    exchFieldEditable: true,
    exchDefault: '599 14',
    msg: 'expecting RST and CQ Zone',
    type: ContestType.CQ_WW,
  },
  // ... more contest definitions
];
