import React, { Component } from 'react';
import { Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { colorNumberOne, colorNumberTwo, hp, styles, wp } from '../styles/Styles.js';
import Swiper from 'react-native-swiper';
import { navigate } from '../../../RootNavigation.js';
class SecondPage extends Component {
  render() {
    return (
      <View style={styles.secondPageFirstView}>
        <Swiper activeDotColor={colorNumberTwo}
          dotStyle={{ width: hp(3), height: hp(3), borderRadius: hp(1.5) }}
          activeDotStyle={{ width: hp(3), height: hp(3), borderRadius: hp(1.5) }}

        >
          <View style={styles.secondPageSecondView}>
            <Image source={require('../images/second.png')} />
            <Text style={styles.secondPageFirstText}> إرفع طلبك </Text>
            <Text style={styles.secondPageSecondText}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص
            </Text>
          </View>
          <View style={styles.secondPageSecondView}>
            <Image source={require('../images/second.png')} />
            <Text style={styles.secondPageFirstText}> إرفع طلبك </Text>
            <Text style={styles.secondPageSecondText}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص
            </Text>
          </View>
          <View style={styles.secondPageSecondView}>
            <Image source={require('../images/second.png')} />
            <Text style={styles.secondPageFirstText}> إرفع طلبك </Text>
            <Text style={styles.secondPageSecondText}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص
            </Text>
          </View>
        </Swiper>

        <View style={styles.secondPageBottom}>
          <TouchableOpacity style={styles.secondPageThirdView} onPress={function () {
            navigate("ThirdPage");
          }}
          >
            <Text style={styles.secondPageFifthText}>التالي</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondPageFourthView}
            onPress={function () {
              navigate("FirstPage");
            }}
          >
            <Image source={require('../images/icon.png')} />
            <Text style={styles.secondPageSixthText}>السابق</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SecondPage;
