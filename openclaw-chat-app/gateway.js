import { connect } from 'react-native-gateway-client';

const gatewayURL = 'http://your-gateway-url'; // Replace with your actual gateway URL

export const initializeGateway = () => {
  connect(gatewayURL)
    .then(() => console.log('Connected to gateway.'))
    .catch(error => console.error('Gateway connection error:', error));
};