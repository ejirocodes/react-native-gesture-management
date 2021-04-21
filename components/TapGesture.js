import React, { Component, createRef } from 'react';
import { onHandlerStateChange } from 'react-native-gesture-handler';

export default class TapGesture extends Component {
  doubleTapRef = createRef();

  render() {
    return (
      <TapGestureHandler
        onHandlerStateChange={this._onSingleTap}
        waitFor={this.doubleTapRef}
      >
        <TapGestureHandler ref={this.doubleTapRef} numberOfTaps={2}>
          <View style={styles.box} />
        </TapGestureHandler>
      </TapGestureHandler>
    );
  }
}
