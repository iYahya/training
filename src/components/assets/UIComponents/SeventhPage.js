import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Animated,
} from 'react-native';
import { colorNumberOne, colorNumberTwo, hp, styles } from '../styles/Styles.js';

import Icon from 'react-native-vector-icons/Ionicons';
/*let AnimatedHeaderValue = new Animated.Value(0);
const maxHeaderHeight = hp(20);
const minHeaderHeight = hp(10);
const headerBackGroundColor = AnimatedHeaderValue.interpolate({
  outputRange: ['blue', 'red'],
  inputRange: [0, maxHeaderHeight - minHeaderHeight],
  extrapolate: 'clamp',
});
const headerHeight = AnimatedHeaderValue.interpolate({
  outRange: [maxHeaderHeight, minHeaderHeight],
  inputRange: [0, maxHeaderHeight - minHeaderHeight],
  extrapolate: 'clamp',
});*/
/*
  options={{
          headerShown: true,
          headerTitle: 'المهام الرئيسية',
          headerTintColor: colorNumberOne,
          headerLeftContainerStyle: {
            paddingStart: wp(5),
          },

          headerStyle: {
            height: hp(20),
            backgroundColor: colorNumberTwo,
            borderBottomRightRadius: wp(5),
            borderBottomLeftRadius: wp(5),


          },
          headerLeft: function () {
            return (
              <TouchableOpacity
                onPress={function () {
                  navigate('FifthPage');
                }}>
                <Image
                  style={{ tintColor: colorNumberOne }}
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
 */
const maxHeaderHeight = hp(20);
const minHeaderHeight = hp(10);
class SeventhPage extends Component {
  constructor() {
    super();
    this.animatedHeaderValue = new Animated.Value(0);
  }
  render() {
    const { navigation } = this.props;
    const headerHeight = this.animatedHeaderValue.interpolate({
      inputRange: [0, maxHeaderHeight - minHeaderHeight],
      outputRange: [maxHeaderHeight, minHeaderHeight],

      extrapolate: 'clamp',
    });

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colorNumberOne }}>
        <Animated.View
          style={{
            ...styles.seventhPageHeader,
            height: headerHeight,
          }}>
          <StatusBar
            backgroundColor={colorNumberTwo}
            barStyle="light-content"
          />
          <View style={styles.animatedView}>
            <TouchableOpacity
              onPress={function () {
                navigation.navigate('FifthPage');
              }}>
              <Image
                style={{ tintColor: colorNumberOne }}
                source={require('../images/iconTwo.png')}

              />
            </TouchableOpacity>
            <Text style={styles.animatedViewText}>المهام الرئيسية</Text>

          </View>
        </Animated.View>
        <Animated.ScrollView
          style={{ backgroundColor: colorNumberOne }}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={5}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.animatedHeaderValue } } }],
            { useNativeDriver: false },
          )}>
          <View style={styles.seventhPageSameContainerOne}>
            <View style={styles.seventhPageInnerFirstView}>
              <Image source={require('../images/bank.png')} />
            </View>
            <View style={styles.seventhPageInnerSecondView}>
              <View style={styles.seventhPageFirstContainer}>
                <Image source={require('../images/card.png')} />
                <Text style={styles.seventhPageFirstTextInContainer}>
                  عنوان المهمة
                </Text>
              </View>
              <View style={styles.seventhPageSecondContainer}>
                <Image source={require('../images/marker.png')} />
                <Text style={styles.seventhPageSecondTextInContainer}>
                  Mecca, Al Jumum
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.seventhPageSameContainerOne}>
            <View style={styles.seventhPageInnerFirstView}>
              <Image source={require('../images/bank.png')} />
            </View>
            <View style={styles.seventhPageInnerSecondView}>
              <View style={styles.seventhPageFirstContainer}>
                <Image source={require('../images/card.png')} />
                <Text style={styles.seventhPageFirstTextInContainer}>
                  عنوان المهمة
                </Text>
              </View>
              <View style={styles.seventhPageSecondContainer}>
                <Image source={require('../images/marker.png')} />
                <Text style={styles.seventhPageSecondTextInContainer}>
                  Mecca, Al Jumum
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.seventhPageSameContainerOne}>
            <View style={styles.seventhPageInnerFirstView}>
              <Image source={require('../images/bank.png')} />
            </View>
            <View style={styles.seventhPageInnerSecondView}>
              <View style={styles.seventhPageFirstContainer}>
                <Image source={require('../images/card.png')} />
                <Text style={styles.seventhPageFirstTextInContainer}>
                  عنوان المهمة
                </Text>
              </View>
              <View style={styles.seventhPageSecondContainer}>
                <Image source={require('../images/marker.png')} />
                <Text style={styles.seventhPageSecondTextInContainer}>
                  Mecca, Al Jumum
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.seventhPageSameContainerOne}>
            <View style={styles.seventhPageInnerFirstView}>
              <Image source={require('../images/bank.png')} />
            </View>
            <View style={styles.seventhPageInnerSecondView}>
              <View style={styles.seventhPageFirstContainer}>
                <Image source={require('../images/card.png')} />
                <Text style={styles.seventhPageFirstTextInContainer}>
                  عنوان المهمة
                </Text>
              </View>
              <View style={styles.seventhPageSecondContainer}>
                <Image source={require('../images/marker.png')} />
                <Text style={styles.seventhPageSecondTextInContainer}>
                  Mecca, Al Jumum
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.seventhPageSameContainerOne}>
            <View style={styles.seventhPageInnerFirstView}>
              <Image source={require('../images/bank.png')} />
            </View>
            <View style={styles.seventhPageInnerSecondView}>
              <View style={styles.seventhPageFirstContainer}>
                <Image source={require('../images/card.png')} />
                <Text style={styles.seventhPageFirstTextInContainer}>
                  عنوان المهمة
                </Text>
              </View>
              <View style={styles.seventhPageSecondContainer}>
                <Image source={require('../images/marker.png')} />
                <Text style={styles.seventhPageSecondTextInContainer}>
                  Mecca, Al Jumum
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.seventhPageSameContainerOne}>
            <View style={styles.seventhPageInnerFirstView}>
              <Image source={require('../images/bank.png')} />
            </View>
            <View style={styles.seventhPageInnerSecondView}>
              <View style={styles.seventhPageFirstContainer}>
                <Image source={require('../images/card.png')} />
                <Text style={styles.seventhPageFirstTextInContainer}>
                  عنوان المهمة
                </Text>
              </View>
              <View style={styles.seventhPageSecondContainer}>
                <Image source={require('../images/marker.png')} />
                <Text style={styles.seventhPageSecondTextInContainer}>
                  Mecca, Al Jumum
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.seventhPageSameContainerOne}>
            <View style={styles.seventhPageInnerFirstView}>
              <Image source={require('../images/bank.png')} />
            </View>
            <View style={styles.seventhPageInnerSecondView}>
              <View style={styles.seventhPageFirstContainer}>
                <Image source={require('../images/card.png')} />
                <Text style={styles.seventhPageFirstTextInContainer}>
                  عنوان المهمة
                </Text>
              </View>
              <View style={styles.seventhPageSecondContainer}>
                <Image source={require('../images/marker.png')} />
                <Text style={styles.seventhPageSecondTextInContainer}>
                  Mecca, Al Jumum
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.seventhPageSameContainerOne}>
            <View style={styles.seventhPageInnerFirstView}>
              <Image source={require('../images/bank.png')} />
            </View>
            <View style={styles.seventhPageInnerSecondView}>
              <View style={styles.seventhPageFirstContainer}>
                <Image source={require('../images/card.png')} />
                <Text style={styles.seventhPageFirstTextInContainer}>
                  عنوان المهمة
                </Text>
              </View>
              <View style={styles.seventhPageSecondContainer}>
                <Image source={require('../images/marker.png')} />
                <Text style={styles.seventhPageSecondTextInContainer}>
                  Mecca, Al Jumum
                </Text>
              </View>
            </View>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}
export default SeventhPage;
