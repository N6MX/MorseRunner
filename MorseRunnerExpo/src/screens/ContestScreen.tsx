import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import ContestManager from '../services/ContestManager';
import AudioEngine from '../services/AudioEngine';
import SettingsService from '../services/SettingsService';
import ContestSimulator from '../services/ContestSimulator';
import StationList from '../components/StationList';
import AudioControls from '../components/AudioControls';
import { ContestType } from '../data/Contest';
import { StationMessage } from '../data/Station';
import { SimulatedStation, ContestStats } from '../services/ContestSimulator';

const { width, height } = Dimensions.get('window');

const ContestScreen: React.FC = () => {
  const [callSign, setCallSign] = useState('');
  const [rst, setRst] = useState('');
  const [number, setNumber] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState({ points: 0, mults: 0, total: 0 });
  const [selectedContest, setSelectedContest] = useState<ContestType>(ContestType.WPX);
  const [myCall, setMyCall] = useState('VE3NEA');
  const [activity, setActivity] = useState(3);
  const [duration, setDuration] = useState(30);
  const [settings, setSettings] = useState(SettingsService.getSettings());
  const [simulatedStations, setSimulatedStations] = useState<SimulatedStation[]>([]);
  const [contestStats, setContestStats] = useState<ContestStats>({
    qsos: 0,
    points: 0,
    multipliers: 0,
    score: 0,
    rate: 0,
    startTime: 0,
    endTime: 0
  });
  const [showAudioControls, setShowAudioControls] = useState(false);

  useEffect(() => {
    // Load settings on component mount
    const loadSettings = async () => {
      await SettingsService.loadSettings();
      const currentSettings = SettingsService.getSettings();
      setSettings(currentSettings);
      setMyCall(currentSettings.myCall);
      setActivity(currentSettings.activity);
      setDuration(currentSettings.duration);
      setSelectedContest(currentSettings.selectedContest);
    };
    
    loadSettings();

    // Subscribe to settings changes
    const unsubscribeSettings = SettingsService.subscribe((newSettings) => {
      setSettings(newSettings);
    });

    // Subscribe to contest simulator updates
    const unsubscribeSimulator = ContestSimulator.subscribe((stations, stats) => {
      setSimulatedStations(stations);
      setContestStats(stats);
    });

    return () => {
      unsubscribeSettings();
      unsubscribeSimulator();
    };
  }, []);

  useEffect(() => {
    // Initialize contest when settings change
    ContestManager.setContest(selectedContest);
    ContestManager.setMyCall(myCall);
    ContestManager.setActivity(activity);
    ContestManager.setDuration(duration);
  }, [selectedContest, myCall, activity, duration]);

  // Function key handlers
  const handleFunctionKey = async (message: StationMessage) => {
    try {
      const myStation = ContestManager.getMyStation();
      await ContestManager.sendMessage(myStation, message);
      
      // Notify the contest simulator about the user's message
      ContestSimulator.onUserMessage(message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Start/Stop contest
  const toggleContest = async () => {
    if (isRunning) {
      ContestManager.stopContest();
      ContestSimulator.stopContest();
      setIsRunning(false);
    } else {
      ContestManager.startContest();
      await ContestSimulator.startContest(selectedContest, myCall, activity);
      setIsRunning(true);
    }
  };

  // Handle QSO save
  const saveQSO = () => {
    if (!callSign.trim()) {
      Alert.alert('Error', 'Please enter a call sign');
      return;
    }

    // Here you would save the QSO to the log
    console.log('QSO saved:', { callSign, rst, number });
    
    // Clear input fields
    setCallSign('');
    setRst('');
    setNumber('');
  };

  // Handle completing QSO with simulated station
  const handleCompleteQSO = (stationId: string) => {
    ContestSimulator.completeQSO(stationId);
    console.log(`QSO completed with station ${stationId}`);
  };

  // Settings change handlers
  const handleMyCallChange = async (value: string) => {
    setMyCall(value);
    await SettingsService.updateSetting('myCall', value);
  };

  const handleActivityChange = async (value: string) => {
    const numValue = parseInt(value) || 3;
    setActivity(numValue);
    await SettingsService.updateSetting('activity', numValue);
  };

  const handleDurationChange = async (value: string) => {
    const numValue = parseInt(value) || 30;
    setDuration(numValue);
    await SettingsService.updateSetting('duration', numValue);
  };

  const handleContestChange = async (contest: ContestType) => {
    setSelectedContest(contest);
    await SettingsService.updateSetting('selectedContest', contest);
  };

  // Contest selection
  const availableContests = ContestManager.getAvailableContests();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Contest Selection */}
        <View style={styles.contestSelector}>
          <Text style={styles.label}>Contest:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {availableContests.map((contest) => (
              <TouchableOpacity
                key={contest.type}
                style={[
                  styles.contestButton,
                  selectedContest === contest.type && styles.contestButtonSelected
                ]}
                onPress={() => handleContestChange(contest.type)}
              >
                <Text style={[
                  styles.contestButtonText,
                  selectedContest === contest.type && styles.contestButtonTextSelected
                ]}>
                  {contest.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Settings */}
        <View style={styles.settings}>
          <View style={styles.settingRow}>
            <Text style={styles.label}>My Call:</Text>
            <TextInput
              style={styles.input}
              value={myCall}
              onChangeText={handleMyCallChange}
              placeholder="VE3NEA"
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.label}>Activity:</Text>
            <TextInput
              style={styles.input}
              value={activity.toString()}
              onChangeText={handleActivityChange}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.label}>Duration:</Text>
            <TextInput
              style={styles.input}
              value={duration.toString()}
              onChangeText={handleDurationChange}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.sectionLabel}>QSO Entry</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputField}
              placeholder="Call"
              value={callSign}
              onChangeText={setCallSign}
            />
            <TextInput
              style={styles.inputField}
              placeholder="RST"
              value={rst}
              onChangeText={setRst}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Nr."
              value={number}
              onChangeText={setNumber}
            />
          </View>
        </View>

        {/* Function Keys */}
        <View style={styles.functionKeysContainer}>
          <Text style={styles.sectionLabel}>Function Keys</Text>
          <View style={styles.functionKeys}>
            {/* Row 1 */}
            <View style={styles.functionKeyRow}>
              <TouchableOpacity
                style={styles.functionKey}
                onPress={() => handleFunctionKey(StationMessage.CQ)}
              >
                <Text style={styles.functionKeyText}>F1 CQ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.functionKey}
                onPress={() => handleFunctionKey(StationMessage.NR)}
              >
                <Text style={styles.functionKeyText}>F2 {'<#>}'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.functionKey}
                onPress={() => handleFunctionKey(StationMessage.TU)}
              >
                <Text style={styles.functionKeyText}>F3 TU</Text>
              </TouchableOpacity>
            </View>
            
            {/* Row 2 */}
            <View style={styles.functionKeyRow}>
              <TouchableOpacity
                style={styles.functionKey}
                onPress={() => handleFunctionKey(StationMessage.MY_CALL)}
              >
                <Text style={styles.functionKeyText}>F4 {'<my>'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.functionKey}
                onPress={() => handleFunctionKey(StationMessage.HIS_CALL)}
              >
                <Text style={styles.functionKeyText}>F5 {'<his>'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.functionKey}
                onPress={() => handleFunctionKey(StationMessage.B4)}
              >
                <Text style={styles.functionKeyText}>F6 B4</Text>
              </TouchableOpacity>
            </View>
            
            {/* Row 3 */}
            <View style={styles.functionKeyRow}>
              <TouchableOpacity
                style={styles.functionKey}
                onPress={() => handleFunctionKey(StationMessage.QM)}
              >
                <Text style={styles.functionKeyText}>F7 ?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.functionKey}
                onPress={() => handleFunctionKey(StationMessage.NIL)}
              >
                <Text style={styles.functionKeyText}>F8 NIL</Text>
              </TouchableOpacity>
              <View style={styles.functionKeySpacer} />
            </View>
          </View>
        </View>

        {/* Control Buttons */}
        <View style={styles.controlButtons}>
          <TouchableOpacity
            style={[styles.controlButton, isRunning ? styles.stopButton : styles.startButton]}
            onPress={toggleContest}
          >
            <Text style={styles.controlButtonText}>
              {isRunning ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={saveQSO}
          >
            <Text style={styles.controlButtonText}>Save QSO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlButton, styles.audioButton]}
            onPress={() => setShowAudioControls(true)}
          >
            <Text style={styles.controlButtonText}>Audio</Text>
          </TouchableOpacity>
        </View>

        {/* Contest Simulation */}
        <StationList
          stations={simulatedStations}
          stats={contestStats}
          onCompleteQSO={handleCompleteQSO}
        />

        {/* Score Display */}
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Pts: {contestStats.points} | Mult: {contestStats.multipliers} | Score: {contestStats.score}
          </Text>
        </View>
      </ScrollView>

      {/* Audio Controls Modal - Outside ScrollView */}
      <AudioControls
        isVisible={showAudioControls}
        onClose={() => setShowAudioControls(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flex: 1,
  },
  contestSelector: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  contestButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 6,
    minWidth: 80,
    alignItems: 'center',
  },
  contestButtonSelected: {
    backgroundColor: '#2196F3',
  },
  contestButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contestButtonTextSelected: {
    color: 'white',
  },
  settings: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    margin: 5,
    fontSize: 16,
  },
  inputField: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    margin: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  functionKeysContainer: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  functionKeys: {
    // Container for all function key rows
  },
  functionKeyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  functionKey: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  functionKeySpacer: {
    flex: 1,
    marginHorizontal: 4,
  },
  functionKeyText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  controlButtons: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  controlButton: {
    flex: 1,
    padding: 15,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#f44336',
  },
  audioButton: {
    backgroundColor: '#9C27B0',
  },
  controlButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    minHeight: 120,
  },
  logHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  logPlaceholder: {
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
  scoreContainer: {
    backgroundColor: '#333',
    padding: 15,
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  scoreText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContestScreen;
