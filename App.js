import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ChatListScreen from './Components/Chat';
import StatusScreen from './Components/Status';
import CallsScreen from './Components/Calls';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Chats') iconName = 'chat';
            else if (route.name === 'Status') iconName = 'camera-alt';
            else if (route.name === 'Calls') iconName = 'call';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#25D366',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Chats" component={ChatListScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
