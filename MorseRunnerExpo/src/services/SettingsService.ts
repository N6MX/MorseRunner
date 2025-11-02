import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContestType } from '../data/Contest';

export interface UserSettings {
  myCall: string;
  activity: number;
  duration: number;
  selectedContest: ContestType;
  wpm: number;
  pitch: number;
  volume: number;
  vibrationEnabled: boolean;
  audioEnabled: boolean;
  whiteNoiseEnabled: boolean;
  whiteNoiseVolume: number;
  rxBandwidth: number; // 100Hz to 600Hz in 50Hz increments
}

const DEFAULT_SETTINGS: UserSettings = {
  myCall: 'VE3NEA',
  activity: 3,
  duration: 30,
  selectedContest: ContestType.WPX,
  wpm: 30,
  pitch: 600,
  volume: 0.5,
  vibrationEnabled: true,
  audioEnabled: true,
  whiteNoiseEnabled: true,
  whiteNoiseVolume: 0.3,
  rxBandwidth: 300, // Default to 300Hz bandwidth
};

const SETTINGS_KEY = 'morserunner_settings';

class SettingsService {
  private settings: UserSettings = { ...DEFAULT_SETTINGS };
  private listeners: ((settings: UserSettings) => void)[] = [];

  constructor() {
    this.loadSettings();
  }

  // Load settings from AsyncStorage
  async loadSettings(): Promise<void> {
    try {
      const stored = await AsyncStorage.getItem(SETTINGS_KEY);
      if (stored) {
        const parsedSettings = JSON.parse(stored);
        this.settings = { ...DEFAULT_SETTINGS, ...parsedSettings };
        this.notifyListeners();
      }
    } catch (error) {
      console.error('Error loading settings:', error);
      this.settings = { ...DEFAULT_SETTINGS };
    }
  }

  // Save settings to AsyncStorage
  async saveSettings(): Promise<void> {
    try {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
      this.notifyListeners();
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  }

  // Get current settings
  getSettings(): UserSettings {
    return { ...this.settings };
  }

  // Update a specific setting
  async updateSetting<K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ): Promise<void> {
    this.settings[key] = value;
    await this.saveSettings();
  }

  // Update multiple settings at once
  async updateSettings(updates: Partial<UserSettings>): Promise<void> {
    this.settings = { ...this.settings, ...updates };
    await this.saveSettings();
  }

  // Reset to default settings
  async resetSettings(): Promise<void> {
    this.settings = { ...DEFAULT_SETTINGS };
    await this.saveSettings();
  }

  // Subscribe to settings changes
  subscribe(listener: (settings: UserSettings) => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Notify all listeners of settings changes
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.settings));
  }

  // Get individual setting values
  getMyCall(): string {
    return this.settings.myCall;
  }

  getActivity(): number {
    return this.settings.activity;
  }

  getDuration(): number {
    return this.settings.duration;
  }

  getSelectedContest(): ContestType {
    return this.settings.selectedContest;
  }

  getWpm(): number {
    return this.settings.wpm;
  }

  getPitch(): number {
    return this.settings.pitch;
  }

  getVolume(): number {
    return this.settings.volume;
  }

  isVibrationEnabled(): boolean {
    return this.settings.vibrationEnabled;
  }

  isAudioEnabled(): boolean {
    return this.settings.audioEnabled;
  }
}

export default new SettingsService();
