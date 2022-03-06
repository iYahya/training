import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { styles } from '../styles/Styles.js';

class FirstPage extends Component {

  state = {
    lang: 'ar',
  };



  render() {
    const { lang } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.firstPageFirstView}>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <View style={styles.firstPageSecondView}>
          <Text style={styles.firstPageFirstText}> مرحبا بك </Text>
          <Image source={require('../images/second.png')} />
          <Text style={styles.firstPageSecondText}>
            اللغة المفضلة لك فى الاستخدام
          </Text>
          <View style={styles.firstPageView}>
            <TouchableOpacity onPress={() => this.setState({ lang: 'ar' })}>
              <Text
                style={[
                  lang == 'ar'
                    ? styles.firstPageThirdText
                    : styles.firstPageFourthText,
                ]}>
                عربى
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ lang: 'en' })}>
              <Text
                style={[
                  lang == 'en'
                    ? styles.firstPageThirdText
                    : styles.firstPageFourthText,
                ]}>
                English
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={function () {
          navigation.navigate("SecondPage");

        }}>
          <View>
            <Text style={styles.firstPageFifthText}>التالي
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default FirstPage;
