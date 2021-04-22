import React, { Component, useRef, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

export default function TapGesture() {
  const [likeColour, setLikeColour] = useState('#28b5b5');

  const doubleTapRef = useRef(null);

  const onSingleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('Hey single');
      console.log(likeColour);
    }
  };

  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setLikeColour('red');
    }
  };

  const styles = StyleSheet.create({
    square: {
      width: 150,
      height: 150,
      backgroundColor: likeColour,
      marginTop: 22,
    },
  });

  return (
    <TapGestureHandler
      onHandlerStateChange={onSingleTapEvent}
      waitFor={doubleTapRef}
    >
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={onDoubleTapEvent}
        numberOfTaps={2}
      >
        <View style={styles.square} />
      </TapGestureHandler>
    </TapGestureHandler>
  );
}
