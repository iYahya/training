import React, { Component } from 'react';
import { Image, View } from 'react-native';
import RouterNavigator from './RouterNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
class App extends Component {

  render() {
    return (
      <NavigationContainer
        ref={navigationRef} >
        <RouterNavigator />
      </NavigationContainer>
    );
  }
}
export default App;
