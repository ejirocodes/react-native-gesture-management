import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';

export default function LongPressGesture() {
  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I've been pressed for 800 milliseconds");
    }
  };
  return (
    <LongPressGestureHandler
      onHandlerStateChange={onLongPress}
      minDurationMs={800}
    >
      <View style={styles.box} />
    </LongPressGestureHandler>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#28b5b5',
    marginTop: 22,
    marginBottom: 22,
  },
});
