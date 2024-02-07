import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import FlashCard from '../components/FlashCard';
import Colors from '../styles/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
});

export default HomeScreen;
