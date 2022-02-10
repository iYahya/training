import React, { Component } from 'react';
import { Image, View } from 'react-native';
class App extends Component {
  render() {
    return (
      <View>
        <Image source={require('./components/assets/images/first.png')} />
      </View>
    );
  }
}
export default App;
