import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PanGesture from './components/PanGesture';

export default function App() {
  return (
    <View style={styles.container}>
      <PanGesture />
      {/* <TapGesture /> */}
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
