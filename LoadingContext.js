import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const LoadingContext = ({ loadingText, progress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{loadingText}</Text>
      <ProgressBar progress={progress} style={styles.progressBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 10,
  },
});

export default LoadingContext;