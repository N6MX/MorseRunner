import { Contest, ContestType, ContestDefinition, CONTEST_DEFINITIONS } from '../data/Contest';
import { Station, StationState, StationMessage } from '../data/Station';
import AudioEngine from './AudioEngine';
import DataLoader from './DataLoader';

class ContestManager {
  private currentContest: Contest | null = null;
  private stations: Station[] = [];
  private myStation: Station = new Station();
  private isRunning: boolean = false;
  private blockNumber: number = 0;
  private activity: number = 3;
  private duration: number = 30; // minutes

  constructor() {
    this.myStation.myCall = 'VE3NEA'; // Default callsign
  }

  // Initialize contest
  async setContest(contestType: ContestType): Promise<boolean> {
    const contestDef = CONTEST_DEFINITIONS.find(c => c.type === contestType);
    if (!contestDef) {
      console.error('Contest not found:', contestType);
      return false;
    }

    this.currentContest = new Contest(
      contestDef.name,
      contestDef.type,
      contestDef.exchType1,
      contestDef.exchType2
    );

    // Load call history based on contest type
    let callData;
    switch (contestType) {
      case ContestType.CQ_WW:
        callData = await DataLoader.loadCQWWData();
        break;
      case ContestType.WPX:
        callData = await DataLoader.loadWPXData();
        break;
      case ContestType.FIELD_DAY:
        callData = await DataLoader.loadFieldDayData();
        break;
      case ContestType.SST:
        callData = await DataLoader.loadSSTData();
        break;
      default:
        callData = await DataLoader.loadCQWWData(); // Default fallback
    }

    if (callData.length === 0) {
      console.error('Failed to load call history');
      return false;
    }

    // Set the call data in the contest
    this.currentContest.callList = callData;
    return true;
  }

  // Start contest simulation
  startContest(): void {
    if (!this.currentContest) {
      console.error('No contest selected');
      return;
    }

    this.isRunning = true;
    this.blockNumber = 0;
    this.stations = [];
    this.generateStations();
  }

  // Stop contest simulation
  stopContest(): void {
    this.isRunning = false;
    this.stations = [];
    AudioEngine.stop();
  }

  // Generate initial stations
  private generateStations(): void {
    if (!this.currentContest) return;

    const numStations = Math.min(this.activity * 2, this.currentContest.callList.length);
    for (let i = 0; i < numStations; i++) {
      const stationId = this.currentContest.pickStation();
      if (stationId >= 0) {
        const callData = this.currentContest.getExchange(stationId);
        if (callData) {
          const station = new Station();
          station.myCall = this.myStation.myCall;
          station.hisCall = callData.call;
          station.exch1 = callData.exchange1;
          station.exch2 = callData.exchange2;
          station.state = StationState.LISTENING;
          this.stations.push(station);
        }
      }
    }
  }

  // Port from Contest.pas - GetAudio function
  getAudio(): number[] {
    if (this.blockNumber < 6) return [0];
    
    const bufferSize = 512;
    const result = new Array(bufferSize).fill(0);
    
    // Add noise (QRN simulation)
    for (let i = 0; i < bufferSize; i++) {
      result[i] = (Math.random() - 0.5) * 0.1;
    }
    
    // Add station audio
    this.stations.forEach(station => {
      if (station.state === StationState.SENDING) {
        const stationAudio = station.getBlock();
        for (let i = 0; i < Math.min(stationAudio.length, bufferSize); i++) {
          result[i] += stationAudio[i] * station.amplitude;
        }
      }
    });
    
    this.blockNumber++;
    return result;
  }

  // Port from Contest.pas - SendMsg function
  async sendMessage(station: Station, message: StationMessage): Promise<void> {
    let messageText = '';
    
    switch (message) {
      case StationMessage.CQ:
        messageText = 'CQ CQ CQ';
        break;
      case StationMessage.NR:
        messageText = station.nrAsText();
        break;
      case StationMessage.TU:
        messageText = 'TU';
        break;
      case StationMessage.MY_CALL:
        messageText = this.myStation.myCall;
        break;
      case StationMessage.HIS_CALL:
        messageText = station.hisCall;
        break;
      case StationMessage.B4:
        messageText = 'B4';
        break;
      case StationMessage.QM:
        messageText = '?';
        break;
      case StationMessage.NIL:
        messageText = 'NIL';
        break;
      default:
        return;
    }
    
    // Use current user settings instead of station's hardcoded WPM
    console.log(`ContestManager sending message: "${messageText}" using current user settings`);
    await AudioEngine.playMorseCode(messageText);
  }

  // Port from Contest.pas - PickStation function
  pickStation(): number {
    if (!this.currentContest) return -1;
    return this.currentContest.pickStation();
  }

  // Port from Contest.pas - DropStation function
  dropStation(id: number): void {
    if (id >= 0 && id < this.stations.length) {
      this.stations.splice(id, 1);
    }
  }

  // Get current contest
  getCurrentContest(): Contest | null {
    return this.currentContest;
  }

  // Get my station
  getMyStation(): Station {
    return this.myStation;
  }

  // Get all stations
  getStations(): Station[] {
    return this.stations;
  }

  // Check if contest is running
  isContestRunning(): boolean {
    return this.isRunning;
  }

  // Set my callsign
  setMyCall(callSign: string): void {
    this.myStation.myCall = callSign;
  }

  // Set activity level
  setActivity(activity: number): void {
    this.activity = activity;
  }

  // Set duration
  setDuration(duration: number): void {
    this.duration = duration;
  }

  // Get available contests
  getAvailableContests(): ContestDefinition[] {
    return CONTEST_DEFINITIONS;
  }
}

export default new ContestManager();
