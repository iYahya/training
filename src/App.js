import React, {Component} from 'react';
import {Image, View} from 'react-native';
import RouterNavigator from './RouterNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {isReadyRef} from './NavigationActions';

class App extends Component {
  render() {
    return (
      <NavigationContainer
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <RouterNavigator />
      </NavigationContainer>
    );
  }
}
export default App;
