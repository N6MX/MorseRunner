import { Audio } from 'expo-av';
import { Vibration } from 'react-native';
import { encodeToMorse } from '../utils/MorseTable';
import * as Ini from './Ini';

class AudioEngine {
  private isPlaying: boolean = false;
  private currentSound: Audio.Sound | null = null;
  private whiteNoiseSound: Audio.Sound | null = null;
  private isNoisePlaying: boolean = false;
  private shouldStop: boolean = false; // Flag to interrupt ongoing playback
  private toneCache: Map<string, Audio.Sound> = new Map(); // Cache for pre-generated tones
  private agcRealBuf: Float32Array | null = null; // AGC ring buffer for real samples
  private agcMagBuf: Float32Array | null = null; // AGC ring buffer for magnitude
  private agcAttackShape: Float32Array | null = null; // AGC attack shape
  private agcBufIdx: number = 0; // AGC buffer index
  private agcWarmupSamples: number = 0; // Track warm-up progress
  private audioQueue: Audio.Sound[] = []; // Queue of ready-to-play sounds
  private currentPlayingSound: Audio.Sound | null = null; // Currently playing chunk
  private isGeneratingChunk: boolean = false; // Prevent overlapping generation
  private chunkSize: number = 1024; // Samples per chunk (~93ms)
  private maxQueueSize: number = 5; // Keep 5 chunks ready
  private queueMonitorInterval: NodeJS.Timeout | null = null;

  constructor() {
    // Initialize sound system
    this.initializeAudio();
    // Pre-generate common tones for faster playback
    this.preGenerateTones();
  }

  private async initializeAudio(): Promise<void> {
    // Configure audio mode for playback
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: false, // Changed to false
        playThroughEarpieceAndroid: false,
      });
      console.log('Audio mode initialized successfully');
    } catch (error) {
      console.error('Failed to initialize audio mode:', error);
    }
  }

  async playMorseCode(text: string, wpm?: number): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(`playMorseCode called with text: ${text}, wpm: ${wpm}`);
        
        // Reset stop flag
        this.shouldStop = false;
        
        // Get settings
        const settings = Ini.Ini.getSettings();
        const actualWpm = wpm || settings.wpm;
        const pitch = settings.pitch;
        const volume = settings.volume;
        const audioEnabled = settings.audioEnabled;
        const vibrationEnabled = settings.vibrationEnabled;

        console.log(`Settings: audioEnabled=${audioEnabled}, vibrationEnabled=${vibrationEnabled}, volume=${volume}`);

        const morseString = encodeToMorse(text);
        console.log(`Playing Morse: ${text} -> ${morseString} at ${actualWpm} WPM, ${pitch}Hz, ${Math.round(volume * 100)}%`);
        
        this.isPlaying = true;
        
        // Play Morse code with proper timing
        await this.playMorseSequence(morseString, actualWpm, pitch, volume, audioEnabled, vibrationEnabled);
        
        // Check if we were interrupted
        if (this.shouldStop) {
          console.log('Morse code playback was interrupted');
          this.isPlaying = false;
          resolve();
          return;
        }
        
        this.isPlaying = false;
        console.log('Morse code playback completed');
        resolve();
      } catch (error) {
        console.error('Error in playMorseCode:', error);
        this.isPlaying = false;
        reject(error);
      }
    });
  }

  private async playMorseSequence(morseString: string, wpm: number, pitch: number, volume: number, audioEnabled: boolean, vibrationEnabled: boolean): Promise<void> {
    const dotDuration = this.getDotDuration(wpm); // Duration of a dot in ms
    const dashDuration = dotDuration * 3; // Dash is 3 times longer than dot
    const elementGap = dotDuration; // Gap between dots and dashes within a character (1 unit)
    const characterGap = dotDuration * 3; // Gap between characters (3 units)
    const wordGap = dotDuration * 7; // Gap between words (7 units)
    
    console.log(`Morse timing for ${wpm} WPM: dot=${dotDuration.toFixed(1)}ms, dash=${dashDuration.toFixed(1)}ms, elementGap=${elementGap.toFixed(1)}ms, charGap=${characterGap.toFixed(1)}ms`);

    for (let i = 0; i < morseString.length; i++) {
      // Check if we should stop
      if (this.shouldStop) {
        console.log('Morse sequence interrupted at character', i);
        return;
      }

      const char = morseString[i];
      const nextChar = morseString[i + 1];
      
      if (char === '.') {
        // Play dot with audio and/or vibration
        await this.playTone(dotDuration, 'dot', pitch, volume, audioEnabled, vibrationEnabled);
        // Check again after playing tone
        if (this.shouldStop) return;
        // Add element gap if next character is also a dot or dash (same character)
        if (nextChar === '.' || nextChar === '-') {
          await this.sleep(elementGap);
        }
      } else if (char === '-') {
        // Play dash with audio and/or vibration
        await this.playTone(dashDuration, 'dash', pitch, volume, audioEnabled, vibrationEnabled);
        // Check again after playing tone
        if (this.shouldStop) return;
        // Add element gap if next character is also a dot or dash (same character)
        if (nextChar === '.' || nextChar === '-') {
          await this.sleep(elementGap);
        }
      } else if (char === ' ') {
        // This is a character gap (space between characters)
        // The characterGap is already 3 units, which is correct
        await this.sleep(characterGap);
        // Check after gap
        if (this.shouldStop) return;
      } else if (char === '~') {
        // End of message
        await this.sleep(wordGap);
        // Check after gap
        if (this.shouldStop) return;
      }
    }
  }

  private async playTone(duration: number, type: 'dot' | 'dash', pitch: number, volume: number, audioEnabled: boolean, vibrationEnabled: boolean): Promise<void> {
    try {
      console.log(`playTone: ${type}, duration: ${duration}ms, audioEnabled: ${audioEnabled}, vibrationEnabled: ${vibrationEnabled}`);
      
      // Play vibration if enabled
      if (vibrationEnabled) {
        console.log('Playing vibration');
        Vibration.vibrate(duration);
      }
      
      // Play audio if enabled
      if (audioEnabled) {
        console.log('Playing audio tone');
        
        // Try to use cached tone first for faster playback
        const wpm = Math.round(60 / (duration / 1000) * 50); // Approximate WPM from duration
        const toneKey = `${type}_${wpm}_${pitch}`;
        
        if (this.toneCache.has(toneKey)) {
          console.log('Using cached tone for faster playback');
          const cachedSound = this.toneCache.get(toneKey)!;
          // Reset position to beginning for clean playback
          await cachedSound.setPositionAsync(0);
          await cachedSound.playAsync();
          await this.sleep(duration);
        } else {
          console.log('Generating tone on-demand');
          await this.playSimpleTone(duration, pitch, volume);
        }
      } else {
        console.log('Audio disabled, just waiting');
        // Just wait for the duration if audio is disabled
        await this.sleep(duration);
      }
      
    } catch (error) {
      console.error('Error in playTone:', error);
      // Fallback to simple simulation
      await this.sleep(duration);
    }
  }

  private async playSimpleTone(duration: number, pitch: number, volume: number): Promise<void> {
    try {
      console.log(`playSimpleTone: duration=${duration}ms, pitch=${pitch}Hz, volume=${volume}`);
      
      // Create a simple audio file with a tone using data URI
      const sampleRate = 44100;
      
      // Generate WAV file data
      const wavData = this.generateWavData(pitch, duration, sampleRate);
      const base64Data = this.arrayBufferToBase64(wavData);
      
      console.log(`Generated WAV data, base64 length: ${base64Data.length}`);
      
      // Create and play the audio
      console.log(`Creating audio with volume: ${volume}, pitch: ${pitch}, duration: ${duration}`);
      const { sound } = await Audio.Sound.createAsync(
        { uri: `data:audio/wav;base64,${base64Data}` },
        { shouldPlay: true, volume: Math.min(1.0, volume * 2) } // 2x louder, capped
      );
      
      console.log('Audio sound created successfully');
      
      // Wait for the sound to finish
      await new Promise<void>((resolve) => {
        const checkStatus = (status: any) => {
          console.log(`Audio status: isLoaded=${status.isLoaded}, isPlaying=${status.isPlaying}, didJustFinish=${status.didJustFinish}`);
          if (status.isLoaded && status.didJustFinish) {
            console.log('Audio finished playing');
            sound.unloadAsync();
            resolve();
          }
        };

        sound.setOnPlaybackStatusUpdate(checkStatus);

        // Fallback timeout
      setTimeout(() => {
          console.log('Audio timeout reached');
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
    
    // Generate sine wave data with fade-out envelope to prevent clicks
    const fadeOutSamples = Math.min(samples, Math.floor(sampleRate * 0.005)); // 5ms fade-out
    for (let i = 0; i < samples; i++) {
      const sineWave = Math.sin(2 * Math.PI * frequency * i / sampleRate);
      
      // Apply fade-out envelope to prevent clicks
      let envelope = 1.0;
      if (i >= samples - fadeOutSamples) {
        // Fade out over the last few samples
        const fadeProgress = (samples - i) / fadeOutSamples;
        envelope = fadeProgress * fadeProgress; // Quadratic fade for smoother transition
      }
      
      const sample = sineWave * 0.5 * envelope; // Moderate amplitude with envelope
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

  // Pre-generate common tones for faster playback
  private async preGenerateTones(): Promise<void> {
    try {
      const settings = Ini.Ini.getSettings();
      const pitch = settings.pitch;
      const volume = settings.volume;
      
      // Pre-generate dot and dash tones at common WPMs
      const commonWpms = [20, 25, 30, 35, 40];
      
      for (const wpm of commonWpms) {
        const dotDuration = this.getDotDuration(wpm);
        const dashDuration = dotDuration * 3;
        
        // Generate dot tone
        const dotKey = `dot_${wpm}_${pitch}`;
        if (!this.toneCache.has(dotKey)) {
          const dotData = this.generateWavData(pitch, dotDuration, 44100);
          const dotBase64 = this.arrayBufferToBase64(dotData);
          const { sound: dotSound } = await Audio.Sound.createAsync(
            { uri: `data:audio/wav;base64,${dotBase64}` },
            { shouldPlay: false, volume: Math.min(1.0, volume * 2) }
          );
          this.toneCache.set(dotKey, dotSound);
        }
        
        // Generate dash tone
        const dashKey = `dash_${wpm}_${pitch}`;
        if (!this.toneCache.has(dashKey)) {
          const dashData = this.generateWavData(pitch, dashDuration, 44100);
          const dashBase64 = this.arrayBufferToBase64(dashData);
          const { sound: dashSound } = await Audio.Sound.createAsync(
            { uri: `data:audio/wav;base64,${dashBase64}` },
            { shouldPlay: false, volume: Math.min(1.0, volume * 2) }
          );
          this.toneCache.set(dashKey, dashSound);
        }
      }
      
      console.log('Pre-generated tones cached successfully');
    } catch (error) {
      console.error('Error pre-generating tones:', error);
    }
  }

  private getDotDuration(wpm: number): number {
    // Modern Morse code timing (Farnsworth method)
    // Standard word "PARIS" = 50 units total
    // Dot = 1 unit, Dash = 3 units, Element gap = 1 unit, Character gap = 3 units, Word gap = 7 units
    // At 20 WPM: 1.2 seconds per word, so 1 unit = 24ms, dot = 24ms
    const unitsPerWord = 50; // PARIS standard
    const unitsPerDot = 1;   // Dot is 1 unit
    const secondsPerWord = 60 / wpm; // 60 seconds per minute / words per minute
    const millisecondsPerUnit = (secondsPerWord / unitsPerWord) * 1000;
    return millisecondsPerUnit * unitsPerDot;
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

  // Stop only Morse code (keep white noise running)
  async stopMorseCode(): Promise<void> {
    console.log('stopMorseCode() called - stopping only Morse code');
    try {
      // Set flag to interrupt ongoing playback
      this.shouldStop = true;
      
    if (this.currentSound) {
        console.log('Stopping current Morse code sound');
        await this.currentSound.stopAsync();
        await this.currentSound.unloadAsync();
      this.currentSound = null;
    }
    this.isPlaying = false;
      console.log('Morse code stopped - isPlaying:', this.isPlaying);
    } catch (error) {
      console.error('Error stopping Morse code:', error);
      this.isPlaying = false;
    }
  }

  async stop(): Promise<void> {
    console.log('stop() called - stopping all audio');
    try {
      // Set flag to interrupt ongoing playback
      this.shouldStop = true;
      
      // Stop current Morse code
      if (this.currentSound) {
        console.log('Stopping current Morse code sound');
        await this.currentSound.stopAsync();
        await this.currentSound.unloadAsync();
        this.currentSound = null;
      }
      
      // Stop white noise as well
      if (this.whiteNoiseSound) {
        console.log('Stopping white noise sound');
        await this.whiteNoiseSound.stopAsync();
        await this.whiteNoiseSound.unloadAsync();
        this.whiteNoiseSound = null;
      }
      
      // Reset all playing states
      this.isPlaying = false;
      this.isNoisePlaying = false;
      
      console.log('All audio stopped - isPlaying:', this.isPlaying, 'isNoisePlaying:', this.isNoisePlaying);
    } catch (error) {
      console.error('Error stopping audio:', error);
      // Even if there's an error, reset the states
      this.isPlaying = false;
      this.isNoisePlaying = false;
    }
  }

  // Start real-time white noise generation
  async startWhiteNoise(): Promise<void> {
    if (this.isNoisePlaying) return;

    try {
      const settings = Ini.Ini.getSettings();
      console.log(`Starting real-time white noise: audioEnabled=${settings.audioEnabled}, whiteNoiseEnabled=${settings.whiteNoiseEnabled}, volume=${settings.whiteNoiseVolume}`);
      
      if (!settings.audioEnabled || !settings.whiteNoiseEnabled) {
        console.log('White noise disabled in settings');
        return;
      }

      // Start real-time noise generation
      this.startRealTimeNoiseGeneration(settings);
      
    } catch (error) {
      console.error('Could not start white noise:', error);
    }
  }

  // Queue-based noise generation with small chunks
  private startRealTimeNoiseGeneration(settings: any): void {
    try {
      console.log('Starting queue-based noise generation');
      
      // Initialize audio queue with pre-generated chunks
      this.initializeAudioQueue(settings).then(() => {
        // Start playing first chunk
        this.playNextChunk(settings);
        this.isNoisePlaying = true;
        console.log('Queue-based white noise started successfully');
      }).catch((error) => {
        console.error('Error initializing audio queue:', error);
      });
      
    } catch (error) {
      console.error('Error in queue-based noise generation:', error);
    }
  }

  // Initialize audio queue with pre-generated chunks
  private async initializeAudioQueue(settings: any): Promise<void> {
    console.log(`Initializing audio queue with ${this.maxQueueSize} chunks`);
    
    // Clear existing queue
    this.audioQueue = [];
    
    // Generate initial chunks
    const generationPromises = [];
    for (let i = 0; i < this.maxQueueSize; i++) {
      generationPromises.push(this.generateAudioChunk(settings));
    }
    
    try {
      const chunks = await Promise.all(generationPromises);
      this.audioQueue = chunks;
      console.log(`Audio queue initialized with ${this.audioQueue.length} chunks`);
    } catch (error) {
      console.error('Error initializing audio queue:', error);
      throw error;
    }
  }

  // Generate single audio chunk (1024 samples)
  private async generateAudioChunk(settings: any): Promise<Audio.Sound> {
    const sampleRate = 11025;
    const NOISEAMP = 6000;
    
    // Generate complex noise like original
    const reIm = {
      re: new Float32Array(this.chunkSize),
      im: new Float32Array(this.chunkSize)
    };
    
    // Generate noise
    for (let i = 0; i < this.chunkSize; i++) {
      reIm.re[i] = 0.05 * NOISEAMP * (Math.random() - 0.5);
      reIm.im[i] = 0.05 * NOISEAMP * (Math.random() - 0.5);
    }
    
    // Apply filtering and modulation
    const filteredReIm = this.applyComplexFiltering(reIm, sampleRate, settings.rxBandwidth);
    const modulatedData = this.modulateComplexToPitch(filteredReIm, sampleRate, settings.pitch);
    const agcData = this.applyAGC(modulatedData);
    
    // Convert to WAV
    const wavData = this.chunkToWav(agcData);
    const base64Data = this.arrayBufferToBase64(wavData);
    
    // Create Audio.Sound object
    const { sound } = await Audio.Sound.createAsync(
      { uri: `data:audio/wav;base64,${base64Data}` },
      { 
        shouldPlay: false, // Don't play immediately
        volume: Math.min(1.0, settings.whiteNoiseVolume * 0.4),
        rate: 1.0,
        shouldCorrectPitch: false
      }
    );
    
    return sound;
  }

  // Play next chunk from queue
  private async playNextChunk(settings: any): Promise<void> {
    if (this.audioQueue.length === 0) {
      console.error('Audio queue is empty, cannot play next chunk');
      return;
    }
    
    try {
      // Get next chunk from queue
      const nextChunk = this.audioQueue.shift()!;
      this.currentPlayingSound = nextChunk;
      
      // Set up playback status callback
      nextChunk.setOnPlaybackStatusUpdate((status) => {
        this.handlePlaybackStatusUpdate(status, settings);
      });
      
      // Start playing
      await nextChunk.playAsync();
      console.log(`Playing chunk, ${this.audioQueue.length} chunks remaining in queue`);
      
      // Refill queue if needed
      this.refillQueue(settings);
      
    } catch (error) {
      console.error('Error playing next chunk:', error);
    }
  }

  // Callback for playback status updates
  private handlePlaybackStatusUpdate(status: any, settings: any): void {
    if (status.isLoaded && 'didJustFinish' in status && status.didJustFinish) {
      console.log('Chunk finished playing, switching to next');
      
      // Clean up finished sound
      if (this.currentPlayingSound) {
        this.currentPlayingSound.unloadAsync().catch(console.error);
        this.currentPlayingSound = null;
      }
      
      // Play next chunk if available
      if (this.audioQueue.length > 0) {
        this.playNextChunk(settings);
      } else {
        console.error('No chunks available in queue');
        // Emergency: generate chunk synchronously
        this.generateAudioChunk(settings).then((chunk) => {
          this.audioQueue.push(chunk);
          this.playNextChunk(settings);
        }).catch(console.error);
      }
    }
  }

  // Maintain queue size by generating new chunks
  private async refillQueue(settings: any): Promise<void> {
    if (this.isGeneratingChunk || this.audioQueue.length >= this.maxQueueSize) {
      return;
    }
    
    this.isGeneratingChunk = true;
    
    try {
      const newChunk = await this.generateAudioChunk(settings);
      this.audioQueue.push(newChunk);
      console.log(`Refilled queue, now has ${this.audioQueue.length} chunks`);
    } catch (error) {
      console.error('Error refilling queue:', error);
    } finally {
      this.isGeneratingChunk = false;
    }
  }

  // Convert small buffer to WAV
  private chunkToWav(buffer: Float32Array): ArrayBuffer {
    const sampleRate = 11025;
    const samples = buffer.length;
    const wavBuffer = new ArrayBuffer(44 + samples * 2);
    const view = new DataView(wavBuffer);
    
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
    
    // Convert to 16-bit PCM
    for (let i = 0; i < samples; i++) {
      const sample = Math.max(-1, Math.min(1, buffer[i]));
      view.setInt16(44 + i * 2, sample * 32767, true);
    }
    
    return wavBuffer;
  }
  

  // Stop white noise
  async stopWhiteNoise(): Promise<void> {
    console.log(`stopWhiteNoise called, isNoisePlaying: ${this.isNoisePlaying}`);
    
    // Stop current playing sound
    if (this.currentPlayingSound) {
      try {
        await this.currentPlayingSound.stopAsync();
        await this.currentPlayingSound.unloadAsync();
        console.log('Current playing sound stopped');
      } catch (error) {
        console.error('Error stopping current sound:', error);
      }
      this.currentPlayingSound = null;
    }
    
    // Clear audio queue
    const unloadPromises = this.audioQueue.map(sound => 
      sound.unloadAsync().catch(console.error)
    );
    await Promise.all(unloadPromises);
    this.audioQueue = [];
    
    // Clear intervals
    if (this.queueMonitorInterval) {
      clearInterval(this.queueMonitorInterval);
      this.queueMonitorInterval = null;
    }
    
    // Reset state
    this.isNoisePlaying = false;
    this.isGeneratingChunk = false;
    // Reset AGC warm-up counter only when actually stopping noise
    this.agcWarmupSamples = 0;
    
    console.log('Queue-based white noise stopped successfully');
  }

  // Restart white noise with new bandwidth (for when settings change)
  async restartWhiteNoise(): Promise<void> {
    if (this.isNoisePlaying) {
      await this.stopWhiteNoise();
      await this.startWhiteNoise();
    }
  }

  // Force stop all audio (emergency stop)
  async forceStopAllAudio(): Promise<void> {
    console.log('Force stopping all audio');
    try {
      // Set flag to interrupt ongoing playback
      this.shouldStop = true;
      
      // Stop current Morse code
      if (this.currentSound) {
        console.log('Stopping current Morse code sound');
        await this.currentSound.stopAsync();
        await this.currentSound.unloadAsync();
        this.currentSound = null;
      }
      
      // Stop white noise
      if (this.whiteNoiseSound) {
        console.log('Stopping white noise sound');
        await this.whiteNoiseSound.stopAsync();
        await this.whiteNoiseSound.unloadAsync();
        this.whiteNoiseSound = null;
      }
      
      // Reset all playing states
      this.isPlaying = false;
      this.isNoisePlaying = false;
      
      console.log('All audio force stopped - isPlaying:', this.isPlaying, 'isNoisePlaying:', this.isNoisePlaying);
    } catch (error) {
      console.error('Error force stopping audio:', error);
      // Even if there's an error, reset the states
      this.isPlaying = false;
      this.isNoisePlaying = false;
    }
  }

  // Generate SSB-like demodulated audio with Rx bandwidth filter
  private generateFilteredWhiteNoise(duration: number, bandwidth: number): ArrayBuffer {
    const sampleRate = 11025; // DEFAULTRATE from original Pascal code
    const samples = Math.floor(duration * sampleRate);
    const buffer = new ArrayBuffer(44 + samples * 2);
    const view = new DataView(buffer);
    
    // Use original Pascal buffer size: 512 samples per block
    const originalBufSize = 512; // DEFAULTBUFSIZE from original Pascal code
    
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
    
    // Port the original Pascal GetAudio function more faithfully
    const NOISEAMP = 6000; // Exact same as original
    const bufSize = samples; // Buffer size
    
    // Complex noise generation (ReIm arrays like original)
    const reIm = {
      re: new Float32Array(bufSize),
      im: new Float32Array(bufSize)
    };
    
    // Generate smooth complex noise for faster startup
    for (let i = 0; i < bufSize; i++) {
      // Use efficient random generation
      reIm.re[i] = 0.05 * NOISEAMP * (Math.random() - 0.5);
      reIm.im[i] = 0.05 * NOISEAMP * (Math.random() - 0.5);
    }
    
    // QRN (atmospheric noise) - disabled to eliminate "forge fire" effect
    // for (let i = 0; i < bufSize; i++) {
    //   if (Math.random() < 0.005) {
    //     reIm.re[i] = 0.5 * NOISEAMP * (Math.random() - 0.5);
    //   }
    // }
    
    // Apply filtering sequence exactly like original: Filt2.Filter(ReIm); ReIm := Filt.Filter(ReIm);
    const filteredReIm = this.applyComplexFiltering(reIm, sampleRate, bandwidth);
    
    // Modulate exactly like original: Result := Modul.Modulate(ReIm);
    const settings = Ini.Ini.getSettings();
    const modulatedData = this.modulateComplexToPitch(filteredReIm, sampleRate, settings.pitch);
    
    // AGC processing exactly like original: Result := Agc.Process(Result);
    const agcData = this.applyAGC(modulatedData);
    
        // Convert to 16-bit PCM with seamless looping using crossfading
        for (let i = 0; i < samples; i++) {
          let sample = Math.max(-1, Math.min(1, agcData[i]));
          
          // Apply crossfade at the beginning and end to eliminate loop artifacts
          const fadeSamples = Math.floor(sampleRate * 0.01); // 10ms fade
          if (i < fadeSamples) {
            // Fade in at the beginning
            sample *= i / fadeSamples;
          } else if (i >= samples - fadeSamples) {
            // Fade out at the end
            sample *= (samples - i) / fadeSamples;
          }
          
          view.setInt16(44 + i * 2, sample * 32767, true);
        }
    
    return buffer;
  }

  // Apply complex filtering exactly like original Pascal: Filt2.Filter(ReIm); ReIm := Filt.Filter(ReIm);
  private applyComplexFiltering(reIm: {re: Float32Array, im: Float32Array}, sampleRate: number, bandwidth: number): {re: Float32Array, im: Float32Array} {
    // Calculate filter parameters exactly like original
    const points = Math.round(0.7 * sampleRate / bandwidth); // Filt.Points := Round(0.7 * DEFAULTRATE / Ini.BandWidth);
    const passes = 3; // Filt.Passes := 3;
    
    // Apply Filt2.Filter(ReIm) - first filter pass
    let filtered = this.applyMovingAverageFilter(reIm, points, passes);
    
    // Apply Filt.Filter(ReIm) - second filter pass  
    filtered = this.applyMovingAverageFilter(filtered, points, passes);
    
    return filtered;
  }

  // Optimized moving average filter for faster generation
  private applyMovingAverageFilter(reIm: {re: Float32Array, im: Float32Array}, points: number, passes: number): {re: Float32Array, im: Float32Array} {
    const result = {
      re: new Float32Array(reIm.re.length),
      im: new Float32Array(reIm.im.length)
    };
    
    // Copy input
    result.re.set(reIm.re);
    result.im.set(reIm.im);
    
    // Use fewer passes for faster generation
    const extraPasses = 1; // Reduced smoothing passes
    for (let pass = 0; pass < passes + extraPasses; pass++) {
      const tempRe = new Float32Array(result.re.length);
      const tempIm = new Float32Array(result.im.length);
      
      for (let i = 0; i < result.re.length; i++) {
        let sumRe = 0, sumIm = 0;
        let count = 0;
        
        // Use smaller window for faster processing
        const windowSize = Math.min(points, i + 1); // Smaller window
        for (let j = Math.max(0, i - windowSize + 1); j <= i; j++) {
          sumRe += result.re[j];
          sumIm += result.im[j];
          count++;
        }
        
        tempRe[i] = sumRe / count;
        tempIm[i] = sumIm / count;
      }
      
      result.re.set(tempRe);
      result.im.set(tempIm);
    }
    
    return result;
  }

  // Modulate complex signal to pitch frequency exactly like original Modul.Modulate(ReIm)
  private modulateComplexToPitch(reIm: {re: Float32Array, im: Float32Array}, sampleRate: number, pitch: number): Float32Array {
    const result = new Float32Array(reIm.re.length);
    
    for (let i = 0; i < reIm.re.length; i++) {
      const time = i / sampleRate;
      const phase = 2 * Math.PI * pitch * time;
      
      // Complex modulation: ReIm.Re[i] * Cos(phase) - ReIm.Im[i] * Sin(phase)
      // This is the standard complex to real conversion for SSB
      result[i] = reIm.re[i] * Math.cos(phase) - reIm.im[i] * Math.sin(phase);
    }
    
    return result;
  }

  // Proper AGC implementation based on original Pascal VolumCtl.pas
  private applyAGC(data: Float32Array): Float32Array {
    const result = new Float32Array(data.length);
    
    // AGC parameters from original Contest.pas
    const noiseIn = 0.1; // Input noise level
    const noiseOut = 0.05; // Output noise level  
    const maxOut = 0.3; // Maximum output level
    const attackSamples = 155; // Attack time (from Contest.pas line 139)
    const holdSamples = 155; // Hold time (from Contest.pas line 140)
    
    // Calculate beta parameter like original
    const beta = noiseIn / Math.log(maxOut / (maxOut - noiseOut));
    const defaultGain = noiseOut / noiseIn;
    
    // Ring buffer length exactly like original: 2 * (155 + 155) + 1 = 621 samples
    const bufferLen = 2 * (attackSamples + holdSamples) + 1; // 621 samples at 11kHz = 56.3ms
    
    // Initialize ring buffers if not exists
    if (!this.agcRealBuf) {
      this.agcRealBuf = new Float32Array(bufferLen);
      this.agcMagBuf = new Float32Array(bufferLen);
      this.agcAttackShape = new Float32Array(bufferLen);
      this.agcBufIdx = 0;
      
      // Pre-populate buffers with reasonable initial values to reduce first-time bursts
      const initialLevel = noiseOut * 0.5; // Start with half the target level
      for (let i = 0; i < bufferLen; i++) {
        this.agcRealBuf[i] = initialLevel * (Math.random() - 0.5);
        this.agcMagBuf[i] = Math.log(initialLevel + 1e-10);
      }
      
      // Create attack shape like original
      for (let i = 0; i < attackSamples; i++) {
        const shape = Math.log(0.5 - 0.5 * Math.cos((i + 1) * Math.PI / (attackSamples + 1)));
        this.agcAttackShape[i] = shape;
        this.agcAttackShape[bufferLen - 1 - i] = shape;
      }
    }
    
    for (let i = 0; i < data.length; i++) {
      // Store data in ring buffer
      this.agcRealBuf![this.agcBufIdx] = data[i];
      this.agcMagBuf![this.agcBufIdx] = Math.log(Math.abs(data[i]) + 1e-10);
      
      // Calculate AGC gain using attack shape
      let envelope = 1e-10;
      let di = this.agcBufIdx;
      
      for (let wi = 0; wi < bufferLen; wi++) {
        const sample = this.agcMagBuf![di] + this.agcAttackShape![wi];
        if (sample > envelope) envelope = sample;
        di = (di + 1) % bufferLen;
      }
      
      // Apply exponential gain curve like original
      const expEnvelope = Math.exp(envelope);
      const gain = maxOut * (1 - Math.exp(-expEnvelope / beta)) / expEnvelope;
      
      // Output with delay like original (needs warm-up period)
      const midIdx = (this.agcBufIdx + Math.floor(bufferLen / 2)) % bufferLen;
      
      // During warm-up period, use default gain instead of AGC
      if (this.agcWarmupSamples < Math.floor(bufferLen / 2)) {
        result[i] = data[i] * defaultGain;
        this.agcWarmupSamples++;
      } else {
        // After warm-up, use proper AGC output
        result[i] = this.agcRealBuf![midIdx] * gain;
      }
      
      // Increment buffer index
      this.agcBufIdx = (this.agcBufIdx + 1) % bufferLen;
    }
    
    return result;
  }

  // Apply bandwidth filter to simulate SSB receiver
  private applyBandwidthFilter(data: Float32Array, sampleRate: number, bandwidth: number): Float32Array {
    const filtered = new Float32Array(data.length);
    const cutoff = bandwidth / (sampleRate / 2); // Normalize to Nyquist frequency
    
    // Multi-stage IIR filter for sharper SSB-like rolloff
    // Stage 1: First-order low-pass
    const alpha1 = Math.exp(-2 * Math.PI * cutoff);
    let prev1 = 0;
    
    // Stage 2: Second-order low-pass for sharper rolloff
    const alpha2 = Math.exp(-4 * Math.PI * cutoff);
    let prev2 = 0;
    let prev2_2 = 0;
    
    for (let i = 0; i < data.length; i++) {
      // First stage
      const stage1 = alpha1 * prev1 + (1 - alpha1) * data[i];
      prev1 = stage1;
      
      // Second stage (cascaded for sharper rolloff)
      const stage2 = alpha2 * prev2 + (1 - alpha2) * stage1;
      prev2_2 = prev2;
      prev2 = stage2;
      
      // Combine stages with some feedback for SSB-like characteristics
      filtered[i] = stage2 * 0.7 + stage1 * 0.3;
    }
    
    return filtered;
  }

  // Generate white noise WAV data (unfiltered - kept for compatibility)
  private generateWhiteNoise(duration: number): ArrayBuffer {
    return this.generateFilteredWhiteNoise(duration, 300); // Default 300Hz bandwidth
  }

  isCurrentlyPlaying(): boolean {
    return this.isPlaying;
  }

  // Check if any audio is playing (Morse code or white noise)
  isAnyAudioPlaying(): boolean {
    return this.isPlaying || this.isNoisePlaying;
  }

  // Get current audio status
  getAudioStatus(): { morsePlaying: boolean; noisePlaying: boolean; anyPlaying: boolean } {
    return {
      morsePlaying: this.isPlaying,
      noisePlaying: this.isNoisePlaying,
      anyPlaying: this.isPlaying || this.isNoisePlaying
    };
  }
}

export default new AudioEngine();
