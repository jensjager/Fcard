import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

import Colors from '../styles/Colors';

const FlashCard = ({ word, meaning }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShowAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.flashcard, styles.cardPressed]}
      onPress={toggleShowAnswer}
    >
      <Text style={styles.text}>{showAnswer ? meaning : word}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  flashcard: {
    display: 'flex',
    width: '75%',
    maxWidth: 500,
    height: '30%',
    backgroundColor: Colors.background2,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FlashCard;
