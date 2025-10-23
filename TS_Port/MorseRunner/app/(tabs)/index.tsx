import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, View, Text, TextInput, Switch, ScrollView } from 'react-native';
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

  // Skeleton state (non-functional placeholders)
  const [call, setCall] = React.useState('VE3NEA');
  const [rst, setRst] = React.useState('599');
  const [nr, setNr] = React.useState('001');

  const [qrn, setQrn] = React.useState(false);
  const [qrm, setQrm] = React.useState(false);
  const [qsb, setQsb] = React.useState(false);
  const [flutter, setFlutter] = React.useState(false);
  const [lids, setLids] = React.useState(false);
  const [activity, setActivity] = React.useState('3');

  const [stationCall, setStationCall] = React.useState('VE3NEA');
  const [wpm, setWpm] = React.useState('25');
  const [qsk, setQsk] = React.useState(false);
  const [cwPitch, setCwPitch] = React.useState('500 Hz');
  const [rxBw, setRxBw] = React.useState('300 Hz');
  const [monLevel, setMonLevel] = React.useState(0.75); // 0..1 placeholder

  const [durationMin, setDurationMin] = React.useState('30');
  const [contest, setContest] = React.useState('Pile-Up');
  const [exchange, setExchange] = React.useState('3A ON');

  const logHeaders = ['UTC', 'Call', 'Recv', 'Sent', 'Pref', 'Chk', 'Wpm'];
  const logRows = new Array(3).fill(0).map((_, i) => ({
    key: String(i),
    UTC: '00:00',
    Call: 'N0CALL',
    Recv: '599 001',
    Sent: '599 001',
    Pref: '',
    Chk: '',
    Wpm: wpm,
  }));

  async function playTone() {
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
      {/* Existing demo header */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Quick demo buttons retained */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Demo Controls</ThemedText>
        <View style={{ marginTop: 8 }}>
          <Button title={isOn ? 'On (tap to play again)' : 'Toggle & Play 3s Tune'} onPress={onTogglePress} />
        </View>
        <View style={{ marginTop: 8 }}>
          <Button title="Random CRC32" onPress={onCrcPress} />
          {crcInfo ? <ThemedText>{crcInfo}</ThemedText> : null}
        </View>
      </ThemedView>

      {/* MorseRunner UI Skeleton */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">MorseRunner UI Skeleton</ThemedText>
        <ScrollView horizontal={false} contentContainerStyle={{ gap: 12 }}>
          {/* TOP ROW: Left main area + Right sidebar */}
          <View style={styles.topRow}>
            {/* Left main area */}
            <View style={[styles.panel, styles.mainArea]}>
              <Text style={styles.panelTitle}>Main Area</Text>
              {/* Log header like original at top */}
              <View style={[styles.panel, { padding: 6 }]}> 
                <Text style={styles.panelTitle}>Log</Text>
                <ScrollView horizontal>
                  <View>
                    <View style={styles.logHeader}>
                      {logHeaders.map((h) => (
                        <Text key={h} style={[styles.logCell, styles.logHeaderCell]}>{h}</Text>
                      ))}
                    </View>
                    {logRows.map((r) => (
                      <View key={r.key} style={styles.logRow}>
                        <Text style={styles.logCell}>{r.UTC}</Text>
                        <Text style={styles.logCell}>{r.Call}</Text>
                        <Text style={styles.logCell}>{r.Recv}</Text>
                        <Text style={styles.logCell}>{r.Sent}</Text>
                        <Text style={styles.logCell}>{r.Pref}</Text>
                        <Text style={styles.logCell}>{r.Chk}</Text>
                        <Text style={styles.logCell}>{r.Wpm}</Text>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
              {/* Branding placeholder */}
              <View style={[styles.centerFill, { backgroundColor: '#eef9f9' }]}> 
                <Text style={{ fontSize: 28, fontWeight: '700', color: '#17a', textAlign: 'center' }}>Morse Runner 1.xx</Text>
                <Text style={{ textAlign: 'center', marginTop: 8 }}>CW CONTEST SIMULATOR</Text>
              </View>
            </View>

            {/* Right sidebar */}
            <View style={styles.sidebar}>
              <View style={[styles.panel]}>
                <Text style={styles.groupTitle}>Station</Text>
                <View style={styles.row}>
                  <View style={{ flex: 1, gap: 6 }}>
                    <Text>Call</Text>
                    <TextInput style={styles.input} value={stationCall} onChangeText={setStationCall} />
                  </View>
                  <View style={{ flex: 1, gap: 6 }}>
                    <Text>WPM</Text>
                    <TextInput style={styles.input} value={wpm} onChangeText={setWpm} />
                  </View>
                  <View style={{ flex: 1, gap: 6 }}>
                    <Text>QSK</Text>
                    <View style={styles.row}><Switch value={qsk} onValueChange={setQsk} /></View>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{ flex: 1, gap: 6 }}>
                    <Text>CW Pitch</Text>
                    <TextInput style={styles.input} value={cwPitch} onChangeText={setCwPitch} />
                  </View>
                  <View style={{ flex: 1, gap: 6 }}>
                    <Text>RX Bandwidth</Text>
                    <TextInput style={styles.input} value={rxBw} onChangeText={setRxBw} />
                  </View>
                  <View style={{ flex: 1, gap: 6 }}>
                    <Text>Mon. Level</Text>
                    <View style={styles.sliderTrack}>
                      <View style={[styles.sliderFill, { width: `${monLevel * 100}%` }]} />
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.panel]}>
                <Text style={styles.groupTitle}>Band Conditions</Text>
                <View style={styles.row}>
                  <View style={{ flex: 1 }}>
                    <View style={styles.rowBetween}><Text>QRN</Text><Switch value={qrn} onValueChange={setQrn} /></View>
                    <View style={styles.rowBetween}><Text>QRM</Text><Switch value={qrm} onValueChange={setQrm} /></View>
                    <View style={styles.rowBetween}><Text>QSB</Text><Switch value={qsb} onValueChange={setQsb} /></View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.rowBetween}><Text>Flutter</Text><Switch value={flutter} onValueChange={setFlutter} /></View>
                    <View style={styles.rowBetween}><Text>LIDs</Text><Switch value={lids} onValueChange={setLids} /></View>
                    <View style={styles.rowBetween}>
                      <Text>Activity</Text>
                      <TextInput style={[styles.input, { width: 50 }]} value={activity} onChangeText={setActivity} />
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.panel]}>
                <Text style={styles.groupTitle}>Duration & Run</Text>
                <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Text>for</Text>
                    <TextInput style={[styles.input, { width: 60 }]} value={durationMin} onChangeText={setDurationMin} />
                    <Text>min.</Text>
                  </View>
                  <View style={{ marginLeft: 16 }}>
                    <Button title="Run ▾" onPress={() => {}} />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* BOTTOM ROW: Controls | Middle scope+RIT | Timer+Score */}
          <View style={styles.bottomRow}>
            {/* Left: Controls */}
            <View style={[styles.panel, { flex: 2 }]}>
              <Text style={styles.panelTitle}>Controls</Text>
              <View style={styles.row}>
                <View style={{ flex: 2, gap: 6 }}>
                  <Text>Call</Text>
                  <TextInput style={styles.input} value={call} onChangeText={setCall} />
                </View>
                <View style={{ flex: 1, gap: 6 }}>
                  <Text>RST</Text>
                  <TextInput style={styles.input} value={rst} onChangeText={setRst} />
                </View>
                <View style={{ flex: 1, gap: 6 }}>
                  <Text>Nr.</Text>
                  <TextInput style={styles.input} value={nr} onChangeText={setNr} />
                </View>
              </View>
              <View style={[styles.row, { flexWrap: 'wrap', gap: 8, marginTop: 8 }]}>
                {[
                  'F1  CQ','F2  <exch>','F3  TU','F4  <my>',
                  'F5  <his>','F6  B4','F7  ?','F8  NIL'
                ].map((label) => (
                  <Button key={label} title={label} onPress={() => {}} />
                ))}
              </View>
            </View>

            {/* Middle: two small fields + Scope + RIT */}
            <View style={{ flex: 2, gap: 8 }}>
              <View style={[styles.panel]}>
                <View style={styles.row}>
                  <TextInput style={[styles.input, { flex: 1 }]} placeholder="Info 1" />
                  <TextInput style={[styles.input, { flex: 1 }]} placeholder="Info 2" />
                </View>
              </View>
              <View style={[styles.panel]}>
                <Text style={styles.panelTitle}>Scope (PaintBox)</Text>
                <View style={styles.scopeBox} />
              </View>
              <View style={[styles.panel]}>
                <Text style={styles.panelTitle}>RIT</Text>
                <View style={styles.ritBar}>
                  <View style={styles.ritThumb} />
                </View>
                <Text style={styles.hint}>Use Up/Down or Mouse Wheel (placeholder)</Text>
              </View>
            </View>

            {/* Right: Timer + Score */}
            <View style={{ flex: 1, gap: 8 }}>
              <View style={[styles.panel]}>
                <Text style={styles.panelTitle}>Timer</Text>
                <Text style={styles.timerText}>00:00:00</Text>
              </View>
              <View style={[styles.panel]}>
                <Text style={styles.panelTitle}>Score</Text>
                <View style={styles.table}>
                  <View style={styles.tableHeader}>
                    <Text style={[styles.th, { width: 48 }]} />
                    <Text style={[styles.th, { width: 70 }]}>Raw</Text>
                    <Text style={[styles.th, { width: 70 }]}>Verified</Text>
                  </View>
                  {[0, 1, 2].map((i) => (
                    <View key={i} style={styles.tableRow}>
                      <Text style={[styles.td, { width: 48 }]} />
                      <Text style={[styles.td, { width: 70 }]}>0</Text>
                      <Text style={[styles.td, { width: 70 }]}>0</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Contest block under everything (like bottom right grouping in original menus) */}
          <View style={[styles.panel]}>
            <Text style={styles.groupTitle}>Contest</Text>
            <View style={styles.row}>
              <View style={{ flex: 1, gap: 6 }}>
                <Text>Contest</Text>
                <TextInput style={styles.input} value={contest} onChangeText={setContest} />
              </View>
              <View style={{ flex: 1, gap: 6 }}>
                <Text>Exchange</Text>
                <TextInput style={styles.input} value={exchange} onChangeText={setExchange} />
              </View>
            </View>
          </View>
        </ScrollView>
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
  section: {
    gap: 8,
    paddingVertical: 8,
  },
  topRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'stretch',
  },
  bottomRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'stretch',
  },
  mainArea: {
    flex: 3,
    minHeight: 220,
  },
  centerFill: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dfe',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  sidebar: {
    flex: 2,
    gap: 8,
  },
  panel: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#fff',
    gap: 8,
  },
  panelTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  groupTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#fff',
  },
  timerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  scopeBox: {
    height: 80,
    backgroundColor: '#eef7ff',
    borderWidth: 1,
    borderColor: '#c6def7',
    borderRadius: 4,
  },
  ritBar: {
    height: 12,
    backgroundColor: '#eee',
    borderRadius: 6,
    justifyContent: 'center',
  },
  ritThumb: {
    width: 28,
    height: 8,
    backgroundColor: '#ffd27f',
    borderRadius: 4,
    marginLeft: 80,
  },
  hint: {
    color: '#777',
    fontSize: 12,
  },
  table: {
    gap: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    gap: 8,
  },
  th: {
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    gap: 8,
  },
  td: {
    color: '#333',
  },
  logHeader: {
    flexDirection: 'row',
    gap: 16,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  logRow: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 6,
  },
  logCell: {
    minWidth: 64,
  },
  sliderTrack: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  sliderFill: {
    height: 8,
    backgroundColor: '#4da3ff',
  },
});

function generateWavSine(numSamples: number, sampleRate: number, freq: number, volume: number): string {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);

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

  function writeString(str: string) { for (let i = 0; i < str.length; i++) view.setUint8(offset++, str.charCodeAt(i)); }
  function writeUint32(v: number) { view.setUint32(offset, v, true); offset += 4; }
  function writeUint16(v: number) { view.setUint16(offset, v, true); offset += 2; }

  writeString('RIFF'); writeUint32(riffSize); writeString('WAVE');
  writeString('fmt '); writeUint32(16); writeUint16(1); writeUint16(numChannels);
  writeUint32(sampleRate); writeUint32(byteRate); writeUint16(blockAlign); writeUint16(bitsPerSample);
  writeString('data'); writeUint32(dataSize);

  for (let i = 0; i < samples.length; i++) view.setInt16(offset + i * 2, samples[i], true);

  const bytes = new Uint8Array(buffer);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return typeof btoa !== 'undefined' ? btoa(bin) : Buffer.from(bytes).toString('base64');
}
