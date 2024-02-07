import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native';
import FlashCard from '../components/FlashCard';
import Colors from '../styles/Colors';

const wordsData = [
  { word: '도시', meaning: 'city' },
  { word: '이름', meaning: 'name' },
  { word: '저', meaning: 'I, me (formal)' },
  { word: '나', meaning: 'I, me (informal)' },
  { word: '남자', meaning: 'man' },
  { word: '여자', meaning: 'woman' },
  { word: '이', meaning: 'this' },
  { word: '그', meaning: 'that' },
  { word: '저', meaning: 'that (when something is far away)' },
  { word: '것', meaning: 'thing' },
  { word: '이것', meaning: 'this (thing)' },
  { word: '그것', meaning: 'that (thing)' },
  { word: '저것', meaning: 'that (thing)' },
  { word: '의자', meaning: 'chair' },
  { word: '탁자', meaning: 'table' },
  { word: '선생님', meaning: 'teacher' },
  { word: '침대', meaning: 'bed' },
  { word: '집', meaning: 'house' },
  { word: '차', meaning: 'car' },
  { word: '사람', meaning: 'person' },
  { word: '책', meaning: 'book' },
  { word: '컴퓨터', meaning: 'computer' },
  { word: '나무', meaning: 'tree/wood' },
  { word: '소파', meaning: 'sofa' },
  { word: '중국', meaning: 'China' },
  { word: '일본', meaning: 'Japan' },
  { word: '문', meaning: 'door' },
  { word: '의사', meaning: 'doctor' },
  { word: '학생', meaning: 'student' },
  { word: '이다', meaning: 'to be' },
  { word: '네', meaning: 'yes' },
  { word: '아니', meaning: 'no' },
];

const Practice = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const rotateRef = useRef(null);

  const handleCorrectAnswer = () => {
    if (rotateRef.current) {
      rotateRef.current();
    }
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % wordsData.length);
  };

  // Function to handle user response (incorrect answer)
  const handleIncorrectAnswer = () => {
    // You can add logic for handling incorrect answers if needed
  };

  return (
    <View style={styles.container}>
      <FlashCard
        word={wordsData[currentCardIndex].word}
        meaning={wordsData[currentCardIndex].meaning}
        setRotate={(rotateFunction) => (rotateRef.current = rotateFunction)}
      />

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={handleCorrectAnswer}>
          <Text style={styles.buttonText}>Correct</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleIncorrectAnswer}>
          <Text style={styles.buttonText}>Incorrect</Text>
        </Pressable>
      </View>

      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
});

export default Practice;
