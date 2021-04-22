import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PanGestureHandler from './components/PanGesture';
import TapGesture from './components/TapGesture';
import SwipeGesture from './components/SwipeGesture';
import LongPressGesture from './components/LongPressGesture';
import PinchToZoom from './components/PinchToZoom';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PanGestureHandler />
      <TapGesture /> */}
      {/* <SwipeGesture /> */}
      {/* <LongPressGesture /> */}
      <PinchToZoom />
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
