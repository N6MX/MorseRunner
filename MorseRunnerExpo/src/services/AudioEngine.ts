import { Audio } from 'expo-av';
import { Vibration } from 'react-native';
import { encodeToMorse } from '../utils/MorseTable';
import SettingsService from './SettingsService';

class AudioEngine {
  private isPlaying: boolean = false;
  private currentSound: Audio.Sound | null = null;

  constructor() {
    // Initialize sound system
    this.initializeAudio();
  }

  private async initializeAudio(): Promise<void> {
    // Configure audio mode for playback
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
  }

  async playMorseCode(text: string, wpm?: number): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        // Get settings
        const settings = SettingsService.getSettings();
        const actualWpm = wpm || settings.wpm;
        const pitch = settings.pitch;
        const volume = settings.volume;
        const audioEnabled = settings.audioEnabled;
        const vibrationEnabled = settings.vibrationEnabled;

        const morseString = encodeToMorse(text);
        console.log(`Playing Morse: ${text} -> ${morseString} at ${actualWpm} WPM, ${pitch}Hz, ${Math.round(volume * 100)}%`);
        
        this.isPlaying = true;
        
        // Play Morse code with proper timing
        await this.playMorseSequence(morseString, actualWpm, pitch, volume, audioEnabled, vibrationEnabled);
        
        this.isPlaying = false;
        resolve();
      } catch (error) {
        this.isPlaying = false;
        reject(error);
      }
    });
  }

  private async playMorseSequence(morseString: string, wpm: number, pitch: number, volume: number, audioEnabled: boolean, vibrationEnabled: boolean): Promise<void> {
    const dotDuration = this.getDotDuration(wpm); // Duration of a dot in ms
    const dashDuration = dotDuration * 3; // Dash is 3 times longer than dot
    const elementGap = dotDuration; // Gap between dots and dashes within a character
    const characterGap = dotDuration * 2; // Gap between characters (reduced from 3 to 2 for better timing)
    const wordGap = dotDuration * 7; // Gap between words

    for (let i = 0; i < morseString.length; i++) {
      const char = morseString[i];
      const nextChar = morseString[i + 1];
      
      if (char === '.') {
        // Play dot with audio and/or vibration
        await this.playTone(dotDuration, 'dot', pitch, volume, audioEnabled, vibrationEnabled);
        // Add element gap if next character is also a dot or dash (same character)
        if (nextChar === '.' || nextChar === '-') {
          await this.sleep(elementGap);
        }
      } else if (char === '-') {
        // Play dash with audio and/or vibration
        await this.playTone(dashDuration, 'dash', pitch, volume, audioEnabled, vibrationEnabled);
        // Add element gap if next character is also a dot or dash (same character)
        if (nextChar === '.' || nextChar === '-') {
          await this.sleep(elementGap);
        }
      } else if (char === ' ') {
        // This is a character gap (space between characters)
        // The characterGap is already 3 units, which is correct
        await this.sleep(characterGap);
      } else if (char === '~') {
        // End of message
        await this.sleep(wordGap);
      }
    }
  }

  private async playTone(duration: number, type: 'dot' | 'dash', pitch: number, volume: number, audioEnabled: boolean, vibrationEnabled: boolean): Promise<void> {
    try {
      console.log(`Playing ${type} for ${duration}ms at ${pitch}Hz, ${Math.round(volume * 100)}%`);
      
      // Play vibration if enabled
      if (vibrationEnabled) {
        Vibration.vibrate(duration);
      }
      
      // Play audio if enabled
      if (audioEnabled) {
        await this.playSimpleTone(duration, pitch, volume);
      } else {
        // Just wait for the duration if audio is disabled
        await this.sleep(duration);
      }
      
    } catch (error) {
      console.warn('Could not play tone:', error);
      // Fallback to simple simulation
      await this.sleep(duration);
    }
  }

  private async playSimpleTone(duration: number, pitch: number, volume: number): Promise<void> {
    try {
      // Create a simple audio file with a tone using data URI
      const sampleRate = 44100;
      
      // Generate WAV file data
      const wavData = this.generateWavData(pitch, duration, sampleRate);
      const base64Data = this.arrayBufferToBase64(wavData);
      
      console.log(`Playing ${duration}ms tone at ${pitch}Hz, ${Math.round(volume * 100)}%`);
      
      // Create and play the audio
      const { sound } = await Audio.Sound.createAsync(
        { uri: `data:audio/wav;base64,${base64Data}` },
        { shouldPlay: true, volume: volume }
      );
      
      // Wait for the sound to finish
      await new Promise<void>((resolve) => {
        const checkStatus = (status: any) => {
          if (status.isLoaded && status.didJustFinish) {
            sound.unloadAsync();
            resolve();
          }
        };
        
        sound.setOnPlaybackStatusUpdate(checkStatus);
        
        // Fallback timeout
      setTimeout(() => {
          sound.unloadAsync();
        resolve();
        }, duration + 100);
      });
      
    } catch (error) {
      console.warn('Audio tone failed, using vibration only:', error);
      await this.sleep(duration);
    }
  }

  private generateWavData(frequency: number, duration: number, sampleRate: number): ArrayBuffer {
    const samples = Math.floor((duration / 1000) * sampleRate);
    const buffer = new ArrayBuffer(44 + samples * 2);
    const view = new DataView(buffer);
    
    // WAV header
    const writeString = (offset: number, string: string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + samples * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, samples * 2, true);
    
    // Generate sine wave data
    for (let i = 0; i < samples; i++) {
      const sample = Math.sin(2 * Math.PI * frequency * i / sampleRate) * 0.3;
      view.setInt16(44 + i * 2, sample * 32767, true);
    }
    
    return buffer;
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getDotDuration(wpm: number): number {
    // Standard Morse code timing: 50 units per word, 5 units per dot
    // At 20 WPM: 1.2 seconds per word, 0.12 seconds per dot
    const unitsPerWord = 50;
    const unitsPerDot = 5;
    const secondsPerWord = 60 / wpm; // 60 seconds per minute / words per minute
    return (secondsPerWord / unitsPerWord) * unitsPerDot * 1000; // Convert to milliseconds
  }

  async playCQ(): Promise<void> {
    return this.playMorseCode('CQ CQ CQ');
  }

  async playExchange(exchange: string): Promise<void> {
    return this.playMorseCode(exchange);
  }

  async playTU(): Promise<void> {
    return this.playMorseCode('TU');
  }

  async playMyCall(callSign: string): Promise<void> {
    return this.playMorseCode(callSign);
  }

  async playHisCall(callSign: string): Promise<void> {
    return this.playMorseCode(callSign);
  }

  async stop(): Promise<void> {
    if (this.currentSound) {
      await this.currentSound.stopAsync();
      await this.currentSound.unloadAsync();
      this.currentSound = null;
    }
    this.isPlaying = false;
  }

  isCurrentlyPlaying(): boolean {
    return this.isPlaying;
  }
}

export default new AudioEngine();