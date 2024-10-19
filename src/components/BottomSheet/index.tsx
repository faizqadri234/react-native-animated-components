import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const BottomSheet = () => {
  const {height, width} = useWindowDimensions();
  const translateY = useSharedValue(height);
  const opacity = useSharedValue(0); // For timing animation

  // Animating on mount
  useEffect(() => {
    // Sequentially trigger animations
    translateY.value = withSpring(0, {damping: 10, stiffness: 100});

    // Apply a delay for opacity animation
    opacity.value = withDelay(500, withTiming(1, {duration: 500}));
  }, [translateY, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      opacity: opacity.value,                       
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle, {height, width}]}>
        <View style={{flex: 1}} />
        <View
          style={{
            height: 400,
            backgroundColor: 'green',
          }}></View>
      </Animated.View>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(70, 70, 70, 0.5)',
  },
});
