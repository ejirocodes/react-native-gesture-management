import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PanGestureHandler from './components/PanGesture';
import TapGesture from './components/TapGesture';

export default function App() {
  return (
    <View style={styles.container}>
      <PanGestureHandler />
      <TapGesture />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
