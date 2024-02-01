import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../styles/Colors';

const FlashCard = () => {
  return (
    <View style={styles.flashcard}>
      <Text style={styles.text}>FlashCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flashcard: {
    display: 'flex',
    width: '75%',
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
