import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, FAB } from 'react-native-paper';

const chatData = [
  { id: '1', name: 'Jawir', lastMessage: 'inpo wir', time: '01.:45 AM' },
  { id: '2', name: 'lelek', lastMessage: 'mana lek', time: '11:30 AM' },
  { id: '3', name: 'messi', lastMessage: 'otw mancester biru', time: 'Yesterday' },
];

const ChatListScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={chatData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.chatItem}
          onPress={() => navigation.navigate('ChatDetail', { name: item.name })}
        >
          <Avatar.Text size={50} label={item.name.charAt(0)} />
          <View style={styles.chatDetails}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.chatMessage}>{item.lastMessage}</Text>
          </View>
          <Text style={styles.chatTime}>{item.time}</Text>
        </TouchableOpacity>
      )}
    />
    <FAB style={styles.fab} icon="message-plus" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  chatItem: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  chatDetails: { flex: 1, marginLeft: 16 },
  chatName: { fontSize: 16, fontWeight: 'bold' },
  chatMessage: { color: 'gray', marginTop: 4 },
  chatTime: { color: 'gray' },
  fab: { position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: '#25D366' },
});

export default ChatListScreen;
