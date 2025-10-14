// Station data model - ported from Station.pas
export enum StationState {
  LISTENING = 'listening',
  COPYING = 'copying',
  PREPARING_TO_SEND = 'preparing_to_send',
  SENDING = 'sending',
}

export enum StationMessage {
  NONE = 'none',
  CQ = 'cq',
  NR = 'nr',
  TU = 'tu',
  MY_CALL = 'my_call',
  HIS_CALL = 'his_call',
  B4 = 'b4',
  QM = 'qm',
  NIL = 'nil',
  GARBAGE = 'garbage',
  R_NR = 'r_nr',
  R_NR2 = 'r_nr2',
  DE_MY_CALL1 = 'de_my_call1',
  DE_MY_CALL2 = 'de_my_call2',
  DE_MY_CALL_NR1 = 'de_my_call_nr1',
  DE_MY_CALL_NR2 = 'de_my_call_nr2',
  MY_CALL_NR1 = 'my_call_nr1',
  MY_CALL_NR2 = 'my_call_nr2',
  MY_CALL2 = 'my_call2',
  NR_QM = 'nr_qm',
  LONG_CQ = 'long_cq',
  QRL = 'qrl',
  QRL2 = 'qrl2',
  QSY = 'qsy',
  AGN = 'agn',
}

export class Station {
  // Basic station properties
  public myCall: string = '';
  public hisCall: string = '';
  public nr: number = 0;
  public rst: number = 599;
  public exch1: string = '';
  public exch2: string = '';
  
  // Station state
  public state: StationState = StationState.LISTENING;
  public amplitude: number = 1.0;
  public wpmS: number = 30; // Words per minute, sending speed
  public wpmC: number = 25; // Words per minute, character speed
  
  // Timing and audio
  public timeout: number = -1;
  public sendPos: number = 0;
  public envelope: number[] = [];
  
  // Exchange types
  public sentExchTypes: { exch1: string; exch2: string } = { exch1: '', exch2: '' };
  
  constructor() {
    this.init();
  }

  private init(): void {
    this.state = StationState.LISTENING;
    this.timeout = -1;
    this.sendPos = 0;
    this.amplitude = 1.0;
  }

  // Port from Station.pas - NrAsText function
  nrAsText(): string {
    // This would contain the logic to format the exchange
    // For now, return a simple format
    if (this.exch1 && this.exch2) {
      return `${this.exch1} ${this.exch2}`;
    } else if (this.nr > 0) {
      return this.nr.toString().padStart(3, '0');
    }
    return '';
  }

  // Port from Station.pas - SendMorse function
  async sendMorse(morseString: string): Promise<void> {
    // This would handle the actual Morse code sending
    // For now, just log the action
    console.log(`Station ${this.myCall} sending Morse: ${morseString}`);
    this.state = StationState.SENDING;
  }

  // Port from Station.pas - Tick function
  tick(): void {
    if (this.state === StationState.SENDING && this.envelope.length === 0) {
      this.state = StationState.LISTENING;
    } else if (this.state !== StationState.SENDING) {
      if (this.timeout > -1) {
        this.timeout--;
        if (this.timeout === 0) {
          // Handle timeout event
          this.handleTimeout();
        }
      }
    }
  }

  private handleTimeout(): void {
    // Handle timeout event
    console.log(`Station ${this.myCall} timeout`);
  }

  getBlock(): number[] {
    // Return audio block for this station
    // This would contain the actual audio data
    return this.envelope;
  }
}
