import React, { useState } from 'react';
import { View, Image, StyleSheet, PanResponder, Animated } from 'react-native';

const Avatar = () => {
  const [position] = useState(new Animated.ValueXY({ x: 100, y: 100 }));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      Animated.event([
        null,
        { dx: position.x, dy: position.y },
      ], { useNativeDriver: false })(e, gestureState);
    },
    onPanResponderRelease: () => {
      // Handle release movement if needed
    },
  });

  return (
    <Animated.View {...panResponder.panHandlers} style={[position.getLayout(), styles.avatarContainer]}>
      <Image 
        source={{ uri: 'https://pbs.twimg.com/profile_images/2018352137814556672/PvqIdicy.jpg' }}
        style={styles.avatarImage} 
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'absolute',
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default Avatar;