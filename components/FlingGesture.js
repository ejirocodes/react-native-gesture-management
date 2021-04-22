import React from 'react';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

export default function FlingGesture() {
  const onFlingGesture = (event) => {
    console.log('fling');
    console.log({ event });
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('I was flinged');
    }
  };
  return (
    <FlingGestureHandler
      direction={Directions.DOWN | Directions.UP}
      onHandlerStateChange={onFlingGesture}
    >
      <View style={styles.box} />
    </FlingGestureHandler>
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
