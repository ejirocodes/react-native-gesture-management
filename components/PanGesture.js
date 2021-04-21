import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Animated, StyleSheet, Text } from 'react-native';

export default class PanGesture extends Component {
  translateX = new Animated.Value(0);
  translateY = new Animated.Value(0);
  onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: this.translateX,
          translationY: this.translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  render() {
    return (
      <>
        <Text>Pan Gesture Handler</Text>
        <PanGestureHandler onGestureEvent={this.onPanGestureEvent}>
          <Animated.View
            style={[
              styles.square,
              {
                transform: [
                  {
                    translateX: this.translateX,
                  },
                  {
                    translateY: this.translateY,
                  },
                ],
              },
            ]}
          />
        </PanGestureHandler>
        <StatusBar style="auto" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150,
    backgroundColor: '#28b5b5',
    marginTop: 22,
  },
});
