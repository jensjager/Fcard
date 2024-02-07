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
} from 'react-native-reanimated';
import Colors from '../styles/Colors';

const FlashCard = ({ word, meaning, setRotate }) => {
  const rotate = useSharedValue(0);
  const turn = useSharedValue(false);

  useEffect(() => {
    setRotate(() => {
      if (rotate.value === 1) rotate.value = 0;
      turn.value = true;
    });
  }, [rotate, setRotate]);

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
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.frontcard, frontAnimatedStyles()]}>
        <Card rotate={rotate} text={word} />
      </Animated.View>
      <Animated.View style={[styles.backCard, backAnimatedStyles()]}>
        <Card rotate={rotate} text={meaning} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '75%',
    maxWidth: 500,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashcard: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background2,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  frontcard: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  backCard: {
    backfaceVisibility: 'hidden',
  },
  card: {
    backgroundColor: Colors.background2,
    width: 300,
    height: 200,
    borderRadius: 10,
    padding: 20,
  },
  cardText: {
    color: '#1b1b1b',
    fontSize: 24,
  },
});

export default FlashCard;
