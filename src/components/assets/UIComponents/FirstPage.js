import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {firstPageStyles} from '../styles/Styles.js';

class FirstPage extends Component {
  state = {
    lang: 'ar',
  };
  render() {
    const {lang} = this.state;
    return (
      <View style={firstPageStyles.firstPageFirstView}>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <View style={firstPageStyles.firstPageSecondView}>
          <Text style={firstPageStyles.firstPageFirstText}> مرحبا بك </Text>
          <Image source={require('../images/second.png')} />
          <Text style={firstPageStyles.firstPageSecondText}>
            اللغة المفضلة لك فى الاستخدام
          </Text>
          <View style={firstPageStyles.firstPageView}>
            <TouchableOpacity onPress={() => this.setState({lang: 'ar'})}>
              <Text
                style={[
                  lang == 'ar'
                    ? firstPageStyles.firstPageThirdText
                    : firstPageStyles.firstPageFourthText,
                ]}>
                عربى
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({lang: 'en'})}>
              <Text
                style={[
                  lang == 'en'
                    ? firstPageStyles.firstPageThirdText
                    : firstPageStyles.firstPageFourthText,
                ]}>
                English
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={firstPageStyles.primaryButton}>
          <View>
            <Text style={firstPageStyles.firstPageFifthText}>التالى</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default FirstPage;
