import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const callData = [
  { id: '1', name: 'jawir', status: 'Outgoing', time: '12:30 PM', callType: 'video' },
  { id: '2', name: 'lelek', status: 'Missed', time: '11:15 AM', callType: 'voice' },
  { id: '3', name: 'messi', status: 'Incoming', time: 'Yesterday, 9:45 PM', callType: 'voice' },
];

const CallsScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={callData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.callItem}>
          <Avatar.Text size={50} label={item.name.charAt(0)} />
          <View style={styles.callDetails}>
            <Text style={styles.callName}>{item.name}</Text>
            <Text style={[styles.callStatus, item.status === 'Missed' && { color: 'red' }]}>
              {item.status} • {item.time}
            </Text>
          </View>
          <Icon.Button
            name={item.callType === 'video' ? 'video-call' : 'phone'}
            backgroundColor="transparent"
            color="#25D366"
            onPress={() => alert(`Calling ${item.name} via ${item.callType} call`)}
          />
        </TouchableOpacity>
      )}
    />
    <FAB style={styles.fab} icon="phone-plus" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  callItem: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  callDetails: { flex: 1, marginLeft: 16 },
  callName: { fontSize: 16, fontWeight: 'bold' },
  callStatus: { color: 'gray' },
  fab: { position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: '#25D366' },
});

export default CallsScreen;
