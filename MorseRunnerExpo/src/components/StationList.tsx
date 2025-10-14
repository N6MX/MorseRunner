import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SimulatedStation, ContestStats } from '../services/ContestSimulator';

interface StationListProps {
  stations: SimulatedStation[];
  stats: ContestStats;
  onCompleteQSO: (stationId: string) => void;
}

const StationList: React.FC<StationListProps> = ({ stations, stats, onCompleteQSO }) => {
  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  const getStationStatusColor = (station: SimulatedStation): string => {
    switch (station.state) {
      case 'listening':
        return '#4CAF50';
      case 'sending':
        return '#FF9800';
      case 'copying':
        return '#2196F3';
      default:
        return '#9E9E9E';
    }
  };

  const getStationStatusText = (station: SimulatedStation): string => {
    switch (station.state) {
      case 'listening':
        return 'Listening';
      case 'sending':
        return 'Sending';
      case 'copying':
        return 'Copying';
      default:
        return 'Unknown';
    }
  };

  return (
    <View style={styles.container}>
      {/* Contest Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>QSOs</Text>
          <Text style={styles.statValue}>{stats.qsos}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Points</Text>
          <Text style={styles.statValue}>{stats.points}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Mult</Text>
          <Text style={styles.statValue}>{stats.multipliers}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Score</Text>
          <Text style={styles.statValue}>{stats.score}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Rate</Text>
          <Text style={styles.statValue}>{stats.rate.toFixed(1)}</Text>
        </View>
      </View>

      {/* Active Stations */}
      <View style={styles.stationsContainer}>
        <Text style={styles.sectionTitle}>Active Stations ({stations.length})</Text>
        <ScrollView style={styles.stationsList} showsVerticalScrollIndicator={false}>
          {stations.length === 0 ? (
            <Text style={styles.noStationsText}>No active stations</Text>
          ) : (
            stations.map((station) => (
              <TouchableOpacity
                key={station.id}
                style={styles.stationItem}
                onPress={() => onCompleteQSO(station.id)}
              >
                <View style={styles.stationHeader}>
                  <Text style={styles.stationCall}>{station.call}</Text>
                  <View style={styles.stationBadges}>
                    {station.isMultiplier && (
                      <View style={styles.multiplierBadge}>
                        <Text style={styles.multiplierText}>M</Text>
                      </View>
                    )}
                    <View style={[styles.statusBadge, { backgroundColor: getStationStatusColor(station) }]}>
                      <Text style={styles.statusText}>{getStationStatusText(station)}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.stationDetails}>
                  <Text style={styles.stationExchange}>
                    {station.exchange1} {station.exchange2}
                  </Text>
                  <Text style={styles.stationStrength}>
                    S{station.strength}
                  </Text>
                </View>
                
                <View style={styles.stationFooter}>
                  <Text style={styles.stationTime}>
                    Last: {formatTime(station.lastAction)}
                  </Text>
                  <Text style={styles.completeButton}>Tap to Complete QSO</Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  statsContainer: {
    flexDirection: 'row',
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
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  stationsContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  stationsList: {
    flex: 1,
  },
  noStationsText: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    padding: 20,
  },
  stationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  stationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stationCall: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  stationBadges: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  multiplierBadge: {
    backgroundColor: '#FF5722',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  multiplierText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  stationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stationExchange: {
    fontSize: 16,
    color: '#666',
  },
  stationStrength: {
    fontSize: 14,
    color: '#666',
  },
  stationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stationTime: {
    fontSize: 12,
    color: '#999',
  },
  completeButton: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: 'bold',
  },
});

export default StationList;
