import React from 'react';
import { View, Text, TouchableOpacity, Image, Settings } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './components/assets/UIComponents/FirstPage';
import SecondPage from './components/assets/UIComponents/SecondPage';
import ThirdPage from './components/assets/UIComponents/ThirdPage';
import FourthPage from './components/assets/UIComponents/FourthPage';
import FifthPage from './components/assets/UIComponents/FifthPage';
import SixthPage from './components/assets/UIComponents/SixthPage';
import SeventhPage from './components/assets/UIComponents/SeventhPage';
import EighthPage from './components/assets/UIComponents/EighthPage';
import NinthPage from './components/assets/UIComponents/NinthPage';
import NotificationPage from './components/assets/UIComponents/NotificationPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  colorNumberFifteen,
  colorNumberFive,
  colorNumberOne,
  colorNumberTwo,
  fontNumberTwo,
  hp,
  wp,
} from './components/assets/styles/Styles';
import { navigate } from './RootNavigation';
import Icon from 'react-native-vector-icons/Feather';
import SettingsPage from './components/assets/UIComponents/SettingsPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: colorNumberOne }}>
      <Tab.Navigator
        screenOptions={function ({ route }) {
          return {
            tabBarStyle: {
              borderTopLeftRadius: wp(8),
              borderTopRightRadius: wp(8),
              borderTopColor: colorNumberOne,
              paddingTop: hp(2),
            },
            tabBarIcon: function ({ focused, color, size }) {
              let imagePath;
              if (route.name === 'الرئيسية') {
                imagePath = require('./components/assets/images/home.png');
                return (
                  <Image
                    tintColor={color}
                    source={imagePath}
                    style={{ height: size, width: size }}
                  />
                );
              } else if (route.name === 'الطلبات') {
                imagePath = require('./components/assets/images/order.png');
                return (
                  <Image
                    tintColor={color}
                    source={imagePath}
                    style={{ height: size, width: size }}
                  />
                );
              } else if (route.name === 'الإشعارات') {
                imagePath = require('./components/assets/images/note.png');

                return (
                  <Image
                    tintColor={color}
                    source={imagePath}
                    style={{ height: size, width: size }}
                  />
                );
              } else if (route.name === 'الإعدادات') {
                imagePath = require('./components/assets/images/settings.png');

                return (
                  <Image
                    tintColor={color}
                    source={imagePath}
                    style={{ height: size, width: size }}
                  />
                );
              }
            },
            tabBarActiveTintColor: colorNumberTwo,
            tabBarInactiveTintColor: colorNumberFifteen,
          };
        }}>
        <Tab.Screen
          name="main"
          component={FifthPage}
          options={({ navigation }) => ({
            headerShown: false,

            tabBarButton: function (props) {
              return (
                <TouchableOpacity
                  {...props}
                  onPress={function () {
                    navigation.navigate('SeventhPage');
                  }}
                  style={{
                    backgroundColor: '#e8272d',
                    height: hp(5),
                    width: wp(10),
                    position: 'absolute',
                    left: wp(2),
                    top: hp(-5.7),
                    borderRadius: wp(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('./components/assets/images/plus.png')}
                  />
                </TouchableOpacity>
              );
            },
          })}
        />

        <Tab.Screen
          name="الرئيسية"
          component={FifthPage}
          options={{
            tabBarLabelStyle: {
              fontSize: hp(1.5),
              fontFamily: 'Tajawal-Medium',
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="الطلبات"
          component={SixthPage}
          options={{
            tabBarLabelStyle: {
              fontSize: hp(1.5),
              fontFamily: 'Tajawal-Regular',
            },

            headerShown: true,
            headerTitle: 'الطلبات ',
            headerTintColor: colorNumberFive,
            headerLeftContainerStyle: {
              paddingStart: wp(5),
            },

            headerStyle: {
              height: hp(7),
            },
            headerLeft: function () {
              return (
                <TouchableOpacity
                  onPress={function () {
                    navigate('ThirdPage');
                  }}>
                  <Image
                    source={require('./components/assets/images/iconTwo.png')}
                  />
                </TouchableOpacity>
              );
            },
            headerTitleStyle: {
              fontFamily: fontNumberTwo,
              fontSize: hp(3),
            },
          }}
        />
        <Tab.Screen
          name="الإشعارات"
          component={EighthPage}
          options={{
            tabBarLabelStyle: {
              fontSize: hp(1.5),
              fontFamily: 'Tajawal-Regular',
            },
            headerShown: true,
            headerTitle: "",
            headerLeftContainerStyle: {
              paddingStart: wp(5),
            },

            headerStyle: {
              height: hp(7),
            },
            headerLeft: function () {
              return (
                <TouchableOpacity
                  onPress={function () {
                    navigate('ThirdPage');
                  }}>
                  <Image
                    source={require('./components/assets/images/iconTwo.png')}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Tab.Screen
          name="الإعدادات"
          component={NinthPage}
          options={{
            tabBarLabelStyle: {
              fontSize: hp(1.5),
              fontFamily: 'Tajawal-Regular',
            },
            headerShown: true,
            headerTitle: "قائمة المهام",
            headerLeftContainerStyle: {
              paddingStart: wp(5),
            },
            headerTitleStyle: {
              fontFamily: fontNumberTwo,
              fontSize: hp(2.5),

            },
            headerTintColor: colorNumberFive,
            headerStyle: {
              height: hp(7),
            },
            headerLeft: function () {
              return (
                <TouchableOpacity
                  onPress={function () {
                    navigate('ThirdPage');
                  }}>
                  <Image
                    source={require('./components/assets/images/iconTwo.png')}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          headerShown: true,
          headerTitle: 'تخطي',
          headerTintColor: '#e8272d',
          headerLeftContainerStyle: {
            paddingStart: wp(5),
          },

          headerStyle: {
            height: hp(7),
          },
          headerLeft: function () {
            return (
              <TouchableOpacity
                onPress={function () {
                  navigate('ThirdPage');
                }}>
                <Image
                  source={require('./components/assets/images/iconTwo.png')}
                />
              </TouchableOpacity>
            );
          },
          headerTitleStyle: {
            fontFamily: fontNumberTwo,
            fontSize: hp(3),
          },
        }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          headerShown: true,
          headerTitle: 'تسجيل دخول',
          headerTintColor: colorNumberFive,
          headerLeftContainerStyle: {
            paddingStart: wp(5),
          },

          headerStyle: {
            height: hp(7),
          },
          headerLeft: function () {
            return (
              <TouchableOpacity
                onPress={function () {
                  navigate('SecondPage');
                }}>
                <Image
                  source={require('./components/assets/images/iconTwo.png')}
                />
              </TouchableOpacity>
            );
          },
          headerTitleStyle: {
            fontFamily: fontNumberTwo,
            fontSize: hp(3),
          },
        }}
      />
      <Stack.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          headerShown: true,

          headerTitle: ' نسيت كلمة المرور ',
          headerTitleStyle: {
            fontFamily: 'Tajawal-Bold',
          },
          headerTintColor: colorNumberFive,

          headerLeftContainerStyle: {
            paddingStart: wp(5),
          },

          headerStyle: {
            height: hp(7),
          },
          headerLeft: function () {
            return (
              <TouchableOpacity
                onPress={function () {
                  navigate('ThirdPage');
                }}>
                <Image
                  source={require('./components/assets/images/iconTwo.png')}
                />
              </TouchableOpacity>
            );
          },
          headerTitleStyle: {
            fontFamily: fontNumberTwo,
            fontSize: hp(2.7),
          },
        }}
      />
      <Stack.Screen
        name="FifthPage"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SeventhPage"
        component={SeventhPage}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="EighthPage"
        component={EighthPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NinthPage"
        component={NinthPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

