import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

export default function TapGesture() {
  const [likeColour, setLikeColour] = useState('#28b5b5');

  const doubleTapRef = useRef(null);

  const onSingleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('Hey single');
      console.log(likeColour);
      console.log('single tap', doubleTapRef);
    }
  };

  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      likeColour === '#28b5b5'
        ? setLikeColour('red')
        : setLikeColour('#28b5b5');
      console.log('double tap', doubleTapRef);
    }
  };

  const styles = StyleSheet.create({
    square: {
      width: 150,
      height: 150,
      backgroundColor: likeColour,
      marginTop: 22,
      marginBottom: 22,
    },
  });

  return (
    <>
      <Text>Double and Single Tap Gesture Handler</Text>

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
    </>
  );
}
