import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ContestScreen from './screens/ContestScreen';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <View style={styles.header}>
        <Text style={styles.title}>Morse Runner</Text>
        <Text style={styles.subtitle}>Community Edition</Text>
      </View>
      <ContestScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
  },
});

export default App;
