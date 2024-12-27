import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const statusData = [
  { id: '1', name: 'jawir', time: 'Today, 12:30 PM', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'lelek', time: 'Today, 9:00 AM', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'messi', time: 'Yesterday, 6:45 PM', image:'https://via.placeholder.com/150' },
];

const StatusScreen = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.myStatusContainer}>
      <Avatar.Image size={50} source={{ uri: 'https://via.placeholder.com/150' }} />
      <View style={styles.statusDetails}>
        <Text style={styles.statusName}>My Status</Text>
        <Text style={styles.statusTime}>Tap to add status update</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.divider}>
      <Text style={styles.dividerText}>Recent updates</Text>
    </View>
    <FlatList
      data={statusData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.statusItem}>
          <Avatar.Image size={50} source={{ uri: item.image }} />
          <View style={styles.statusDetails}>
            <Text style={styles.statusName}>{item.name}</Text>
            <Text style={styles.statusTime}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  myStatusContainer: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  statusDetails: { flex: 1, marginLeft: 16 },
  statusName: { fontSize: 16, fontWeight: 'bold' },
  statusTime: { color: 'gray', marginTop: 4 },
  divider: { paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#f8f8f8' },
  dividerText: { fontSize: 14, color: 'gray' },
  statusItem: { flexDirection: 'row', alignItems: 'center', padding: 16 },
});

export default StatusScreen;
