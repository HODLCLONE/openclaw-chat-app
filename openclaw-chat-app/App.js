import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { initializeGateway } from './gateway';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  initializeGateway();  // Initialize gateway connection
  return (
    <View>
      <Text>Welcome to OpenClaw Chat App!</Text>
      <Button title="Go to Chat List" onPress={() => navigation.navigate('ChatList')} />
    </View>
  );
}

function ChatListScreen() {
  return (
    <View>
      <Text>Your Chat List</Text>
      {/* Future chat items will be added here */}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChatList" component={ChatListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}