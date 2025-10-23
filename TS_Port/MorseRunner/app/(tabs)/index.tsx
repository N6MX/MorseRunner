import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, View } from 'react-native';
import React from 'react';
import { Audio } from 'expo-av';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { CalculateCRC32 } from '../../../typescript_src/Crc32';

export default function HomeScreen() {
  const [isOn, setIsOn] = React.useState(false);
  const [crcInfo, setCrcInfo] = React.useState<string>('');

  async function playTone() {
    // Generate a 3-second 440Hz sine wave buffer and play it
    const sampleRate = 44100;
    const durationSec = 3;
    const numSamples = sampleRate * durationSec;
    const freq = 440;
    const volume = 0.2;

    const wavData = generateWavSine(numSamples, sampleRate, freq, volume);
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync({ uri: `data:audio/wav;base64,${wavData}` });
      await sound.playAsync();
    } finally {
      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) return;
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    }
  }

  function onTogglePress() {
    const next = !isOn;
    setIsOn(next);
    if (next) void playTone();
  }

  function rng(n: number) { return Math.floor(Math.random() * n); }
  function randomAsciiString(len: number) {
    let s = '';
    for (let i = 0; i < len; i++) s += String.fromCharCode(32 + rng(95));
    return s;
  }

  function onCrcPress() {
    const seed = (Math.floor(Math.random() * 0x100000000) >>> 0);
    const s = randomAsciiString(rng(32));
    const val = CalculateCRC32(s, seed) >>> 0;
    setCrcInfo(`seed=${seed} str="${s}" crc=0x${val.toString(16).toUpperCase()}`);
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
        <View style={{ marginTop: 16 }}>
          <Button title={isOn ? 'On (tap to play again)' : 'Toggle & Play 3s Tune'} onPress={onTogglePress} />
        </View>
        <View style={{ marginTop: 12 }}>
          <Button title="Random CRC32" onPress={onCrcPress} />
          {crcInfo ? <ThemedText>{crcInfo}</ThemedText> : null}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

function generateWavSine(numSamples: number, sampleRate: number, freq: number, volume: number): string {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);

  // PCM samples
  const samples = new Int16Array(numSamples);
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const s = Math.sin(2 * Math.PI * freq * t);
    samples[i] = Math.max(-1, Math.min(1, s)) * 0x7FFF * volume;
  }

  const dataSize = samples.length * 2;
  const riffSize = 36 + dataSize;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  let offset = 0;

  function writeString(str: string) {
    for (let i = 0; i < str.length; i++) view.setUint8(offset++, str.charCodeAt(i));
  }
  function writeUint32(v: number) { view.setUint32(offset, v, true); offset += 4; }
  function writeUint16(v: number) { view.setUint16(offset, v, true); offset += 2; }

  writeString('RIFF');
  writeUint32(riffSize);
  writeString('WAVE');
  writeString('fmt ');
  writeUint32(16); // PCM fmt chunk size
  writeUint16(1); // PCM
  writeUint16(numChannels);
  writeUint32(sampleRate);
  writeUint32(byteRate);
  writeUint16(blockAlign);
  writeUint16(bitsPerSample);
  writeString('data');
  writeUint32(dataSize);

  // PCM data
  for (let i = 0; i < samples.length; i++) view.setInt16(offset + i * 2, samples[i], true);

  // to base64
  const bytes = new Uint8Array(buffer);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return typeof btoa !== 'undefined' ? btoa(bin) : Buffer.from(bytes).toString('base64');
}
