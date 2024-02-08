/*
CREDIT TO: https://github.com/Trivedhkumar/react-native-card-flip/tree/main
*/

import React, { useState, useRef, useEffect } from 'react';
import {
  Easing,
  Button,
  View,
  StyleSheet,
  Text,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  runOnJS,
  interpolate,
  useAnimatedStyle,
  withTiming,
  SharedValue,
  Extrapolate,
} from 'react-native-reanimated';
import Colors from '../styles/Colors';

const FlashCard = ({ word, meaning, index, totalLength, activeIndex }) => {
  const rotate = useSharedValue(0);
  const gap = 14;
  const maxVisibleCards = 6;

  // useEffect(() => {
  //   setRotate(() => {
  //     if (rotate.value === 1) rotate.value = 0;
  //     turn.value = true;
  //   });
  // }, [rotate, setRotate]);

  const Card = ({
    rotate,
    text,
  }: {
    rotate: SharedValue<number>;
    text: string;
  }) => {
    return (
      <Pressable
        onPress={() => {
          rotate.value = rotate.value ? 0 : 1;
        }}
        style={styles.card}
      >
        <Text style={styles.cardText}>{text}</Text>
      </Pressable>
    );
  };

  const frontAnimatedStyles = () =>
    useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
      return {
        transform: [
          {
            rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
          },
        ],
      };
    });
  const backAnimatedStyles = () =>
    useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
      return {
        transform: [
          {
            rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
          },
        ],
      };
    });
  const stylez = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      zIndex: activeIndex.value <= index ? totalLength - index : totalLength,
      opacity: Math.max(
        0,
        Math.min(1, maxVisibleCards - Math.abs(activeIndex.value - index))
      ),
      transform: [
        {
          translateY: interpolate(
            activeIndex.value,
            [index - 1, index, index + 1, index + 2],
            [-gap, 0, 350, 350 - gap]
          ),
        },
        {
          scale: interpolate(
            activeIndex.value,
            [index - 1, index, index + 1, index + 2],
            [0.96, 1, 1, 0.96]
          ),
        },
        // {
        //   translateX: interpolate(
        //     activeIndex.value,
        //     [index - 1, index, index + 1],
        //     [0, 0, -300],
        //     { extrapolateRight: Extrapolate.CLAMP }
        //   ),
        // },

        // {
        //   rotateZ: `${interpolate(
        //     activeIndex.value,
        //     [index - 1, index, index + 1],
        //     [0, 0, 0],
        //     { extrapolateRight: Extrapolate.CLAMP }
        //   )}deg`,
        // },
      ],
    };
  });
  return (
    <Animated.View style={[styles.container, stylez]}>
      <Animated.View style={[styles.frontcard, frontAnimatedStyles()]}>
        <Card rotate={rotate} text={word} />
      </Animated.View>
      <Animated.View style={[styles.backCard, backAnimatedStyles()]}>
        <Card rotate={rotate} text={meaning} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontcard: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
  },
  backCard: {
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: Colors.background2,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.text,
    borderWidth: 1,
  },
  cardText: {
    color: '#1b1b1b',
    fontSize: 24,
  },
});

export default FlashCard;
