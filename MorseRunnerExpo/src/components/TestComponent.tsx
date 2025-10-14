import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AudioEngine from '../services/AudioEngine';

const TestComponent: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastMessage, setLastMessage] = useState('');

  const handleTestAudio = async () => {
    try {
      console.log('Testing audio...');
      setIsPlaying(true);
      setLastMessage('Playing CQ CQ CQ...');
      
      await AudioEngine.playMorseCode('CQ CQ CQ', 20);
      
      console.log('Audio test completed');
      setLastMessage('Audio test completed!');
      setIsPlaying(false);
    } catch (error) {
      console.error('Audio test failed:', error);
      setLastMessage('Audio test failed: ' + (error as Error).message);
      setIsPlaying(false);
    }
  };

  const handleTestShort = async () => {
    try {
      console.log('Testing short audio...');
      setIsPlaying(true);
      setLastMessage('Playing S...');
      
      await AudioEngine.playMorseCode('S', 20);
      
      console.log('Short test completed');
      setLastMessage('Short test completed!');
      setIsPlaying(false);
    } catch (error) {
      console.error('Short test failed:', error);
      setLastMessage('Short test failed: ' + (error as Error).message);
      setIsPlaying(false);
    }
  };

  const handleTestFast = async () => {
    try {
      console.log('Testing fast audio...');
      setIsPlaying(true);
      setLastMessage('Playing CQ at 40 WPM...');
      
      await AudioEngine.playMorseCode('CQ', 40);
      
      console.log('Fast test completed');
      setLastMessage('Fast test completed!');
      setIsPlaying(false);
    } catch (error) {
      console.error('Fast test failed:', error);
      setLastMessage('Fast test failed: ' + (error as Error).message);
      setIsPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MorseRunner Test</Text>
      <Text style={styles.subtitle}>Testing Audio & Vibration</Text>
      
      <TouchableOpacity 
        style={[styles.button, isPlaying && styles.buttonDisabled]} 
        onPress={handleTestAudio}
        disabled={isPlaying}
      >
        <Text style={styles.buttonText}>
          {isPlaying ? 'Playing...' : 'Test CQ CQ CQ'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, isPlaying && styles.buttonDisabled]} 
        onPress={handleTestShort}
        disabled={isPlaying}
      >
        <Text style={styles.buttonText}>
          {isPlaying ? 'Playing...' : 'Test S (short)'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, isPlaying && styles.buttonDisabled]} 
        onPress={handleTestFast}
        disabled={isPlaying}
      >
        <Text style={styles.buttonText}>
          {isPlaying ? 'Playing...' : 'Test CQ (fast 40 WPM)'}
        </Text>
      </TouchableOpacity>
      
      {lastMessage ? (
        <Text style={styles.statusText}>{lastMessage}</Text>
      ) : null}
      
      <Text style={styles.instructions}>
        You should feel vibration AND hear audio tones for dots and dashes.{'\n'}
        Check the console for detailed logs.{'\n'}
        Make sure your device volume is up!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 14,
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 12,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 18,
  },
});

export default TestComponent;
