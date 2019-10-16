import React, { Component } from 'react';
import { View } from 'react-native';
import Todos from './containers/Todos';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Todos/>
      </View>
    );
  }
}