import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { hp, styles, wp } from '../styles/Styles.js';

class FourthPage extends Component {
  render() {
    return (
      <View style={styles.fourthPageFirstView}>
        <View style={styles.fourthPageSecondView}>
          <Text style={styles.fourthPageFirstText}>
            من فضلك أدخل الكود المرسل إليك
          </Text>
          <View style={styles.fourthPageImageView}>
            <Image source={require('../images/phone.png')} />
          </View>
          <View style={styles.textInputView}>

            <TextInput style={styles.secondTextInputView} />
            <TextInput style={styles.secondTextInputView} />
            <TextInput style={styles.secondTextInputView} />
            <TextInput style={styles.firstTextInputView} />
          </View>

          <TouchableOpacity style={styles.fourthPageMessageView} >
            <Text style={styles.fourthPageMessageText}>إعادة إرسال</Text>
            <View style={styles.fourthPageMessageLineView}></View>
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.fourthPageBottom}>
          <View style={styles.fourthPageThirdView}>
            <Text style={styles.fourthPageFifthText}>إدخال الكود</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default FourthPage;

