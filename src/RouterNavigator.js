import React from 'react';
import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './components/assets/UIComponents/FirstPage';
import SecondPage from './components/assets/UIComponents/SecondPage';
import ThirdPage from './components/assets/UIComponents/ThirdPage';
import FourthPage from './components/assets/UIComponents/FourthPage';
import FifthPage from './components/assets/UIComponents/FifthPage';
import SixthPage from './components/assets/UIComponents/SixthPage';
import SeventhPage from './components/assets/UIComponents/SeventhPage';
import EighthPage from './components/assets/UIComponents/EighthPage';
import NinthPage from './components/assets/UIComponents/NinthPage';

const Stack = createStackNavigator();

export default function RouterNavigator(props) {
  const lang = props.lang;
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerShown: true,
        // headerStatusBarHeight: wp(8),

      }}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FourthPage"
        component={FourthPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FifthPage"
        component={FifthPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SixthPage"
        component={SixthPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SeventhPage"
        component={SeventhPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EighthPage"
        component={EighthPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NinthPage"
        component={NinthPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
