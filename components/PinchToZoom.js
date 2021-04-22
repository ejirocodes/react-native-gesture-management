import React, { Component } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

export default class PinchToZoom extends Component {
  baseScale = new Animated.Value(1);
  pinchScale = new Animated.Value(1);

  scale = Animated.multiply(this.baseScale, this.pinchScale);
  lastScale = 1;

  onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: this.pinchScale } }],
    { useNativeDriver: true }
  );

  onPinchHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastScale *= event.nativeEvent.scale;
      this.baseScale.setValue(this.lastScale);
      this.pinchScale.setValue(1);
    }
  };

  render() {
    return (
      <PinchGestureHandler
        onGestureEvent={this.onPinchGestureEvent}
        onHandlerStateChange={this.onPinchHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.pinchableImage,
            {
              transform: [{ perspective: 1 }, { scale: this.scale }],
            },
          ]}
        ></Animated.View>
      </PinchGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  pinchableImage: {
    width: 250,
    height: 250,
    backgroundColor: '#28b5b5',
    marginTop: 22,
    marginBottom: 22,
  },
});
