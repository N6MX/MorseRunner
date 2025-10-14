import { ContestCall } from '../data/Contest';
import { Station, StationState, StationMessage } from '../data/Station';
import AudioEngine from './AudioEngine';
import DataLoader from './DataLoader';

export interface SimulatedStation {
  id: string;
  call: string;
  exchange1: string;
  exchange2: string;
  state: StationState;
  lastAction: number; // timestamp
  nextAction: number; // timestamp
  messageQueue: StationMessage[];
  isMultiplier: boolean;
  isNewMultiplier: boolean;
  strength: number; // signal strength 1-9
}

export interface ContestStats {
  qsos: number;
  points: number;
  multipliers: number;
  score: number;
  rate: number; // QSOs per hour
  startTime: number;
  endTime: number;
}

class ContestSimulator {
  private stations: SimulatedStation[] = [];
  private callHistory: ContestCall[] = [];
  private isRunning: boolean = false;
  private activity: number = 3; // 1-9 scale
  private myCall: string = 'VE3NEA';
  private contestType: string = 'wpx';
  private stats: ContestStats = {
    qsos: 0,
    points: 0,
    multipliers: 0,
    score: 0,
    rate: 0,
    startTime: 0,
    endTime: 0
  };
  private listeners: ((stations: SimulatedStation[], stats: ContestStats) => void)[] = [];
  private simulationTimer: NodeJS.Timeout | null = null;

  constructor() {
    this.initializeSimulation();
  }

  // Initialize the simulation
  private async initializeSimulation(): Promise<void> {
    // Load call history for the contest
    this.callHistory = await DataLoader.loadContestData('CQWWCW.txt');
    console.log(`Loaded ${this.callHistory.length} calls for simulation`);
  }

  // Start the contest simulation
  async startContest(contestType: string, myCall: string, activity: number): Promise<void> {
    this.contestType = contestType;
    this.myCall = myCall;
    this.activity = activity;
    this.isRunning = true;
    this.stats.startTime = Date.now();
    this.stats.endTime = this.stats.startTime + (30 * 60 * 1000); // 30 minutes default

    // Clear existing stations
    this.stations = [];
    this.stats = {
      qsos: 0,
      points: 0,
      multipliers: 0,
      score: 0,
      rate: 0,
      startTime: this.stats.startTime,
      endTime: this.stats.endTime
    };

    // Start the simulation timer
    this.startSimulationTimer();

    console.log(`Contest simulation started: ${contestType}, Activity: ${activity}`);
  }

  // Stop the contest simulation
  stopContest(): void {
    this.isRunning = false;
    if (this.simulationTimer) {
      clearInterval(this.simulationTimer);
      this.simulationTimer = null;
    }
    console.log('Contest simulation stopped');
  }

  // Start the simulation timer
  private startSimulationTimer(): void {
    this.simulationTimer = setInterval(() => {
      if (this.isRunning) {
        this.updateSimulation();
      }
    }, 1000); // Update every second
  }

  // Update the simulation
  private updateSimulation(): void {
    const now = Date.now();
    
    // Update existing stations
    this.updateStations(now);
    
    // Generate new stations based on activity level
    this.generateNewStations(now);
    
    // Remove old stations
    this.removeOldStations(now);
    
    // Update stats
    this.updateStats();
    
    // Notify listeners
    this.notifyListeners();
  }

  // Update existing stations
  private updateStations(now: number): void {
    for (const station of this.stations) {
      if (station.state === StationState.LISTENING && now >= station.nextAction) {
        this.processStationAction(station, now);
      }
    }
  }

  // Process a station's action
  private processStationAction(station: SimulatedStation, now: number): void {
    if (station.messageQueue.length === 0) {
      // Generate new message sequence
      this.generateStationMessageSequence(station);
    }

    const message = station.messageQueue.shift();
    if (message) {
      // Only send CQ calls, not responses, unless we're in a conversation
      if (message === StationMessage.CQ || station.state === StationState.SENDING) {
        this.sendStationMessage(station, message);
        station.lastAction = now;
        station.nextAction = now + this.getNextActionDelay();
      } else {
        // For responses, wait longer and only respond if we're in a conversation
        station.nextAction = now + this.getResponseDelay();
      }
    }
  }

  // Generate message sequence for a station
  private generateStationMessageSequence(station: SimulatedStation): void {
    // Only generate CQ sequences for new stations
    const sequences = [
      [StationMessage.CQ, StationMessage.MY_CALL, StationMessage.MY_CALL],
      [StationMessage.CQ, StationMessage.MY_CALL],
      [StationMessage.CQ, StationMessage.MY_CALL, StationMessage.MY_CALL, StationMessage.MY_CALL],
    ];

    const sequence = sequences[Math.floor(Math.random() * sequences.length)];
    station.messageQueue = [...sequence];
  }

  // Send a message from a station
  private sendStationMessage(station: SimulatedStation, message: StationMessage): void {
    let text = '';
    
    switch (message) {
      case StationMessage.CQ:
        text = 'CQ CQ CQ';
        break;
      case StationMessage.MY_CALL:
        text = station.call;
        break;
      case StationMessage.HIS_CALL:
        text = this.myCall;
        break;
      case StationMessage.NR:
        text = `${station.exchange1} ${station.exchange2}`;
        break;
      case StationMessage.TU:
        text = 'TU';
        break;
      default:
        text = station.call;
    }

    console.log(`Station ${station.call} sending: ${text}`);
    
    // Play the message
    AudioEngine.playMorseCode(text, 30).catch(error => {
      console.error('Error playing station message:', error);
    });
  }

  // Get delay until next action
  private getNextActionDelay(): number {
    // Base delay between actions (2-8 seconds)
    const baseDelay = 2000 + Math.random() * 6000;
    
    // Adjust based on activity level
    const activityFactor = (10 - this.activity) / 10; // Higher activity = shorter delays
    
    return baseDelay * activityFactor;
  }

  // Get delay for responses (longer than CQ calls)
  private getResponseDelay(): number {
    // Base delay for responses (5-15 seconds)
    const baseDelay = 5000 + Math.random() * 10000;
    
    // Adjust based on activity level
    const activityFactor = (10 - this.activity) / 10;
    
    return baseDelay * activityFactor;
  }

  // Generate new stations
  private generateNewStations(now: number): void {
    if (this.stations.length >= this.getMaxStations()) {
      return;
    }

    // Much lower probability of generating new stations initially
    // They should mostly appear in response to CQ calls
    const probability = this.activity / 200; // 0.005 to 0.045 (much lower)
    
    if (Math.random() < probability) {
      const station = this.createNewStation();
      this.stations.push(station);
      console.log(`New station appeared: ${station.call}`);
    }
  }

  // Create a new station
  private createNewStation(): SimulatedStation {
    const callData = this.callHistory[Math.floor(Math.random() * this.callHistory.length)];
    
    return {
      id: `station_${Date.now()}_${Math.random()}`,
      call: callData.call,
      exchange1: callData.exchange1,
      exchange2: callData.exchange2,
      state: StationState.LISTENING,
      lastAction: Date.now(),
      nextAction: Date.now() + 1000 + Math.random() * 5000,
      messageQueue: [],
      isMultiplier: Math.random() < 0.3, // 30% chance of being a multiplier
      isNewMultiplier: false,
      strength: Math.floor(Math.random() * 9) + 1
    };
  }

  // Get maximum number of stations based on activity
  private getMaxStations(): number {
    return Math.min(20, this.activity * 2);
  }

  // Remove old stations
  private removeOldStations(now: number): void {
    const maxAge = 30000; // 30 seconds
    this.stations = this.stations.filter(station => 
      now - station.lastAction < maxAge
    );
  }

  // Update contest statistics
  private updateStats(): void {
    const now = Date.now();
    const elapsed = (now - this.stats.startTime) / 1000 / 60; // minutes
    
    if (elapsed > 0) {
      this.stats.rate = this.stats.qsos / elapsed;
    }
    
    this.stats.score = this.stats.points * this.stats.multipliers;
  }

  // Handle user sending a message (like CQ)
  onUserMessage(message: StationMessage): void {
    if (message === StationMessage.CQ) {
      // When user calls CQ, some stations might respond
      this.handleCQResponse();
    }
  }

  // Handle stations responding to CQ
  private handleCQResponse(): void {
    // Sometimes generate a new station to respond
    if (Math.random() < 0.4 && this.stations.length < this.getMaxStations()) {
      const newStation = this.createNewStation();
      this.stations.push(newStation);
      
      // Generate response sequence for the new station
      const responseSequence = [
        StationMessage.HIS_CALL, // Your call
        StationMessage.MY_CALL,  // Their call
        StationMessage.NR        // Their exchange
      ];
      
      newStation.messageQueue = [...responseSequence];
      newStation.state = StationState.SENDING;
      newStation.nextAction = Date.now() + 2000 + Math.random() * 3000; // Respond in 2-5 seconds
      
      console.log(`New station responding to CQ: ${newStation.call}`);
    }

    // Also have some existing stations respond
    const respondingStations = this.stations.filter(station => 
      Math.random() < 0.2 // 20% chance of responding
    );

    for (const station of respondingStations) {
      // Generate response sequence
      const responseSequence = [
        StationMessage.HIS_CALL, // Your call
        StationMessage.MY_CALL,  // Their call
        StationMessage.NR        // Their exchange
      ];
      
      station.messageQueue = [...responseSequence];
      station.state = StationState.SENDING;
      station.nextAction = Date.now() + 2000 + Math.random() * 3000; // Respond in 2-5 seconds
    }
  }

  // Complete a QSO with a station
  completeQSO(stationId: string): void {
    const station = this.stations.find(s => s.id === stationId);
    if (!station) return;

    // Remove the station
    this.stations = this.stations.filter(s => s.id !== stationId);
    
    // Update stats
    this.stats.qsos++;
    this.stats.points += this.getQSOValue(station);
    
    if (station.isMultiplier) {
      this.stats.multipliers++;
    }

    console.log(`QSO completed with ${station.call}: +${this.getQSOValue(station)} points`);
  }

  // Get QSO value based on station type
  private getQSOValue(station: SimulatedStation): number {
    if (station.isMultiplier) {
      return 3; // Multiplier stations are worth more
    }
    return 1; // Regular stations
  }

  // Get current stations
  getStations(): SimulatedStation[] {
    return [...this.stations];
  }

  // Get current stats
  getStats(): ContestStats {
    return { ...this.stats };
  }

  // Subscribe to simulation updates
  subscribe(listener: (stations: SimulatedStation[], stats: ContestStats) => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Notify all listeners
  private notifyListeners(): void {
    this.listeners.forEach(listener => 
      listener(this.getStations(), this.getStats())
    );
  }

  // Check if simulation is running
  isContestRunning(): boolean {
    return this.isRunning;
  }
}

export default new ContestSimulator();
