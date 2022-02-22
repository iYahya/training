import React, {Component} from 'react';
import {Image, Text, View, Button, TouchableOpacity} from 'react-native';
import {firstPageStyles} from '../styles/Styles.js';
class SecondPage extends Component {
  render() {
    return (
      <View style={firstPageStyles.secondPageView}>
        <TouchableOpacity>
          <View style={firstPageStyles.secondPageItemView}>
            <Image source={require('../images/iconTwo.png')} />
            <Text style={firstPageStyles.secondPageSeventhText}>تخطي </Text>
          </View>
        </TouchableOpacity>

        <View style={firstPageStyles.secondPageFirstView}>
          <View style={firstPageStyles.secondPageSecondView}>
            <Image source={require('../images/second.png')} />
            <Text style={firstPageStyles.secondPageFirstText}> أرفع طلبك </Text>
            <Text style={firstPageStyles.secondPageSecondText}>
              {`هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص`}
            </Text>
            <View style={firstPageStyles.secondPageViewOne}>
              <View
                style={firstPageStyles.secondPageRoundedContainerOne}></View>
              <View
                style={firstPageStyles.secondPageRoundedContainerTwo}></View>
              <View
                style={firstPageStyles.secondPageRoundedContainerThree}></View>
            </View>
          </View>
          <TouchableOpacity style={firstPageStyles.secondPageBottom}>
            <View style={firstPageStyles.secondPageThirdView}>
              <Text style={firstPageStyles.secondPageFifthText}>التالى</Text>
            </View>
            <View style={firstPageStyles.secondPageFourthView}>
              <Image source={require('../images/icon.png')} />
              <Text style={firstPageStyles.secondPageSixthText}>السابق</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SecondPage;
