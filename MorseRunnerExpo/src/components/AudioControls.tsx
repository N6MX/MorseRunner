import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import SettingsService from '../services/SettingsService';
import AudioEngine from '../services/AudioEngine';

interface AudioControlsProps {
  isVisible: boolean;
  onClose: () => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({ isVisible, onClose }) => {
  const [volume, setVolume] = useState(0.5);
  const [pitch, setPitch] = useState(600);
  const [wpm, setWpm] = useState(30);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isTesting, setIsTesting] = useState(false);

  useEffect(() => {
    if (isVisible) {
      loadSettings();
    }
  }, [isVisible]);

  const loadSettings = async () => {
    const settings = SettingsService.getSettings();
    setVolume(settings.volume);
    setPitch(settings.pitch);
    setWpm(settings.wpm);
    setVibrationEnabled(settings.vibrationEnabled);
    setAudioEnabled(settings.audioEnabled);
  };

  const handleVolumeChange = async (value: number) => {
    setVolume(value);
    await SettingsService.updateSetting('volume', value);
  };

  const handlePitchChange = async (value: number) => {
    setPitch(value);
    await SettingsService.updateSetting('pitch', value);
  };

  const handleWpmChange = async (value: number) => {
    setWpm(value);
    await SettingsService.updateSetting('wpm', value);
  };

  const handleVibrationToggle = async () => {
    const newValue = !vibrationEnabled;
    setVibrationEnabled(newValue);
    await SettingsService.updateSetting('vibrationEnabled', newValue);
  };

  const handleAudioToggle = async () => {
    const newValue = !audioEnabled;
    setAudioEnabled(newValue);
    await SettingsService.updateSetting('audioEnabled', newValue);
  };

  const applyPreset = async (preset: 'contest' | 'practice' | 'slow' | 'fast') => {
    let newVolume = volume;
    let newPitch = pitch;
    let newWpm = wpm;

    switch (preset) {
      case 'contest':
        newVolume = 0.7;
        newPitch = 600;
        newWpm = 35;
        break;
      case 'practice':
        newVolume = 0.5;
        newPitch = 600;
        newWpm = 20;
        break;
      case 'slow':
        newVolume = 0.6;
        newPitch = 500;
        newWpm = 15;
        break;
      case 'fast':
        newVolume = 0.8;
        newPitch = 700;
        newWpm = 50;
        break;
    }

    setVolume(newVolume);
    setPitch(newPitch);
    setWpm(newWpm);

    await SettingsService.updateSettings({
      volume: newVolume,
      pitch: newPitch,
      wpm: newWpm,
    });
  };

  const testAudio = async () => {
    if (isTesting) return;
    
    setIsTesting(true);
    try {
      // Play a short test pattern: dash-dot-dash (T-E-T)
      await AudioEngine.playMorseCode('TET', wpm);
    } catch (error) {
      console.error('Test audio failed:', error);
    } finally {
      setIsTesting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Audio Controls</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Audio Presets */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Presets</Text>
            <View style={styles.presetButtons}>
              <TouchableOpacity
                style={styles.presetButton}
                onPress={() => applyPreset('contest')}
              >
                <Text style={styles.presetButtonText}>Contest</Text>
                <Text style={styles.presetButtonSubtext}>35 WPM, 600Hz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.presetButton}
                onPress={() => applyPreset('practice')}
              >
                <Text style={styles.presetButtonText}>Practice</Text>
                <Text style={styles.presetButtonSubtext}>20 WPM, 600Hz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.presetButton}
                onPress={() => applyPreset('slow')}
              >
                <Text style={styles.presetButtonText}>Slow</Text>
                <Text style={styles.presetButtonSubtext}>15 WPM, 500Hz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.presetButton}
                onPress={() => applyPreset('fast')}
              >
                <Text style={styles.presetButtonText}>Fast</Text>
                <Text style={styles.presetButtonSubtext}>50 WPM, 700Hz</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Volume Control */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Volume</Text>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>0%</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                value={volume}
                onValueChange={handleVolumeChange}
                minimumTrackTintColor="#2196F3"
                maximumTrackTintColor="#E0E0E0"
                thumbStyle={styles.sliderThumb}
              />
              <Text style={styles.sliderLabel}>100%</Text>
            </View>
            <Text style={styles.sliderValue}>{Math.round(volume * 100)}%</Text>
          </View>

          {/* Pitch Control */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pitch (Frequency)</Text>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>400Hz</Text>
              <Slider
                style={styles.slider}
                minimumValue={400}
                maximumValue={800}
                value={pitch}
                onValueChange={handlePitchChange}
                minimumTrackTintColor="#4CAF50"
                maximumTrackTintColor="#E0E0E0"
                thumbStyle={styles.sliderThumb}
              />
              <Text style={styles.sliderLabel}>800Hz</Text>
            </View>
            <Text style={styles.sliderValue}>{Math.round(pitch)}Hz</Text>
          </View>

          {/* Speed Control */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Speed (WPM)</Text>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>10</Text>
              <Slider
                style={styles.slider}
                minimumValue={10}
                maximumValue={60}
                value={wpm}
                onValueChange={handleWpmChange}
                minimumTrackTintColor="#FF9800"
                maximumTrackTintColor="#E0E0E0"
                thumbStyle={styles.sliderThumb}
              />
              <Text style={styles.sliderLabel}>60</Text>
            </View>
            <Text style={styles.sliderValue}>{Math.round(wpm)} WPM</Text>
          </View>

          {/* Toggle Controls */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Audio & Vibration</Text>
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[styles.toggleButton, audioEnabled && styles.toggleButtonActive]}
                onPress={handleAudioToggle}
              >
                <Text style={[styles.toggleButtonText, audioEnabled && styles.toggleButtonTextActive]}>
                  Audio
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleButton, vibrationEnabled && styles.toggleButtonActive]}
                onPress={handleVibrationToggle}
              >
                <Text style={[styles.toggleButtonText, vibrationEnabled && styles.toggleButtonTextActive]}>
                  Vibration
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Test Button */}
          <View style={styles.section}>
            <TouchableOpacity 
              style={[styles.testButton, isTesting && styles.testButtonDisabled]}
              onPress={testAudio}
              disabled={isTesting}
            >
              <Text style={styles.testButtonText}>
                {isTesting ? 'Testing...' : 'Test Audio Settings'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 20,
    maxHeight: '80%',
    width: '90%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  debugText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  presetButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  presetButton: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
  },
  presetButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  presetButtonSubtext: {
    fontSize: 12,
    color: '#666',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  sliderLabel: {
    fontSize: 12,
    color: '#666',
    minWidth: 40,
    textAlign: 'center',
  },
  sliderValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  sliderThumb: {
    backgroundColor: '#2196F3',
    width: 20,
    height: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  toggleButtonActive: {
    backgroundColor: '#2196F3',
    borderColor: '#1976D2',
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  toggleButtonTextActive: {
    color: 'white',
  },
  testButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  testButtonDisabled: {
    backgroundColor: '#9E9E9E',
  },
  testButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AudioControls;
