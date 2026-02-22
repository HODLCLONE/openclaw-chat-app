import { connect } from 'react-native-gateway-client';

const gatewayURL = 'http://your-gateway-url'; // Replace with your actual gateway URL
let socket;

export const initializeGateway = () => {
  socket = connect(gatewayURL);
  socket.on('message', (message) => {
    // Handle incoming messages
    console.log('New message:', message);
  });
};

export const sendMessageToGateway = (msg) => {
  if (socket) {
    socket.emit('message', msg);
  }
};

export const getMessagesFromGateway = async () => {
  // Example fetching logic; it should match your gateway API
  return new Promise((resolve) => {
    // Simulate API call
    const mockMessages = [{ id: 1, text: 'Hello from OpenClaw!' }];
    resolve(mockMessages);
  });
};