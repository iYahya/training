import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {firstPageStyles} from '../styles/Styles.js';

class FourthPage extends Component {
  render() {
    return (
      <View style={firstPageStyles.fourthPageView}>
   

        <View style={firstPageStyles.fourthPageFirstView}>
          <View style={firstPageStyles.fourthPageSecondView}>
            <Text style={firstPageStyles.fourthPageFirstText}>
              من فضلك أدخل الكود المرسل إليك
            </Text>
            <View style={firstPageStyles.fourthPageImageView}>
              <Image source={require('../images/phone.png')} />
            </View>

            <View style={firstPageStyles.fourthPageLineView}>
              <View>
                <Text style={firstPageStyles.fourthPageFirstLine}>4</Text>
              </View>
            </View>
            <View style={firstPageStyles.fourthPageRowView}>
              <View style={firstPageStyles.fourthPageSecondLineView}></View>
              <View style={firstPageStyles.fourthPageSecondLineView}></View>
              <View style={firstPageStyles.fourthPageSecondLineView}></View>
              <View style={firstPageStyles.fourthPageFirstLineView}></View>
            </View>

            <View style={firstPageStyles.fourthPageMessageView}>
              <TouchableOpacity>
                <Text style={firstPageStyles.fourthPageMessageText}>
                  إعادة إرسال
                </Text>
                <View style={firstPageStyles.fourthPageMessageLineView}></View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={firstPageStyles.fourthPageBottom}>
            <View style={firstPageStyles.fourthPageThirdView}>
              <Text style={firstPageStyles.fourthPageFifthText}>
                إدخال الكود
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default FourthPage;
