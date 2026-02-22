import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { initializeGateway, sendMessageToGateway } from './gateway';
import Avatar from './Avatar';
import LoadingContext from './LoadingContext';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loadingText, setLoadingText] = useState('Fetching data...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    initializeGateway();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    setLoadingText('Loading new messages...');
    setProgress(0.5); // Midway progress
    const newMessages = await getMessagesFromGateway();
    setMessages(prevMessages => [...prevMessages, ...newMessages]);
    setLoadingText('Messages loaded successfully!');
    setProgress(1); // Complete progress
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      const message = { id: messages.length, text: inputValue };
      setMessages(prevMessages => [...prevMessages, message]);
      sendMessageToGateway(inputValue);
      setInputValue('');
    }
  };

  return (
    <View style={styles.container}>
      <Avatar />
      <LoadingContext loadingText={loadingText} progress={progress} />
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>}
        keyExtractor={item => item.id.toString()}
        style={styles.chatList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Type a message"
          style={styles.input}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  chatList: {
    marginBottom: 10,
  },
  message: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default ChatScreen;