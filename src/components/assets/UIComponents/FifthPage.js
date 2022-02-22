import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput} from 'react-native';

import {firstPageStyles} from '../styles/Styles.js';
class FifthPage extends Component {
  render() {
    return (
      <View style={firstPageStyles.fifthPageView}>
        <View style={firstPageStyles.fifthPageItemView}>
          <Image source={require('../images/line.png')} />
          <Text style={firstPageStyles.fifthPageSeventhText}>الرئيسية </Text>
        </View>

        <View style={firstPageStyles.fifthPagePersonView}>
          <View style={firstPageStyles.fifthPagePersonContainer}>
            <Image
              style={firstPageStyles.fifthPageFirstImage}
              source={require('../images/person.jpg')}
            />
            <View style={firstPageStyles.fifthPageContainerView}>
              <Text style={firstPageStyles.fifthPageFirstContainerText}>
                مرحبا بك
              </Text>
              <Text style={firstPageStyles.fifthPageSecondContainerText}>
                محمد العلي
              </Text>
            </View>
          </View>
          <View>
            <View style={firstPageStyles.fifthPageCircleStyle}></View>
            <Image source={require('../images/circle.png')} />
          </View>
        </View>

        <View style={firstPageStyles.fifthPageColoredContainer}>
          <View style={firstPageStyles.fifthPageFirstColoredContainer}>
            <Text style={firstPageStyles.fifthPageFirstColoredText}>
              إجمالي المهمات
            </Text>
            <Text style={firstPageStyles.fifthPageSecondColoredText}> 21</Text>
          </View>
          <View style={firstPageStyles.fifthPageSecondColoredContainer}>
            <Text style={firstPageStyles.fifthPageFirstColoredText}>
              مهمات منتهية{' '}
            </Text>
            <Text style={firstPageStyles.fifthPageSecondColoredText}> 4</Text>
          </View>
          <View style={firstPageStyles.fifthPageThirdColoredContainer}>
            <Text style={firstPageStyles.fifthPageThirdColoredText}>
              {' '}
              مهمات جديدة{' '}
            </Text>
            <Text style={firstPageStyles.fifthPageFourthColoredText}> 11</Text>
          </View>
        </View>

        <View style={firstPageStyles.fifthPageColoredContainerTwo}>
          <Text style={firstPageStyles.fifthPageColoredContainerTwoFirstText}>
            أحدث الطلبات
          </Text>
          <Text style={firstPageStyles.fifthPageColoredContainerTwoSecondText}>
            ___02
          </Text>
        </View>
        <View style={firstPageStyles.fifthPageRequestContainer}>
          <View></View>
          <View style={firstPageStyles.fifthPageRequestContainerOne}>
            <Text style={firstPageStyles.fifthPageRequestContainerFirstText}>
              عنوان الطلب
            </Text>
            <Text style={firstPageStyles.fifthPageRequestContainerSecondText}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص
            </Text>
          </View>

          <View style={firstPageStyles.fifthPageInnerRequestContainer}>
            <View style={firstPageStyles.fifthPageInnerRequestContainerOne}>
              <Text
                style={firstPageStyles.fifthPageInnerRequestContainerFirstText}>
                مسئول الطلب
              </Text>
              <Text
                style={
                  firstPageStyles.fifthPageInnerRequestContainerSecondText
                }>
                عادل سعيد
              </Text>
            </View>
            <View style={firstPageStyles.fifthPageInnerRequestContainerTwo}>
              <View
                style={firstPageStyles.fifthPageInnerRequestContainerThirdView}>
                <Text
                  style={
                    firstPageStyles.fifthPageInnerRequestContainerThirdText
                  }>
                  تاريخ الرد
                </Text>
              </View>

              <View
                style={
                  firstPageStyles.fifthPageInnerRequestContainerFourthView
                }>
                <Text
                  style={
                    firstPageStyles.fifthPageInnerRequestContainerFourthText
                  }>
                  Dec 18, 2019
                </Text>
              </View>
            </View>
            <View style={firstPageStyles.fifthPageInnerRequestContainerOne}>
              <Text
                style={firstPageStyles.fifthPageInnerRequestContainerFithText}>
                حالة الطلب
              </Text>
              <Text
                style={firstPageStyles.fifthPageInnerRequestContainerSixthText}>
                مرفوض
              </Text>
            </View>
          </View>
        </View>
        <Text style={firstPageStyles.fifthPageRedText}>المسئول المباشر </Text>

        <View style={firstPageStyles.fifthPagePersonView}>
          <View style={firstPageStyles.fifthPagePersonContainer}>
            <Image
              style={firstPageStyles.fifthPageFirstImage}
              source={require('../images/personTwo.png')}
            />
            <View style={firstPageStyles.fifthPageContainerView}>
              <Text style={firstPageStyles.fifthPagePersonFirstText}>
                رضا المرزوقي
              </Text>
              <Text style={firstPageStyles.fifthPagePersonSecondText}>
                مدير الجهة الإعلامية
              </Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.fifthPagePersonView}>
          <View style={firstPageStyles.fifthPageIconContainer}>
            <Image source={require('../images/phoneTwo.png')} />
          </View>
          <View style={firstPageStyles.fifthPageIconContainer}>
            <Image source={require('../images/window.png')} />
          </View>
          <View style={firstPageStyles.fifthPageIconTwoContainer}></View>
        </View>

        <View style={firstPageStyles.fifthPageBottomView}>
          <View style={firstPageStyles.fifthPageInnerBottomView}>
            <View>
              <Image source={require('../images/home.png')} />
              <Text style={firstPageStyles.fifthPageFirstBottomText}>
                الرئيسية{' '}
              </Text>
            </View>
            <View>
              <Image source={require('../images/order.png')} />
              <Text style={firstPageStyles.fifthPageSecondBottomText}>
                الطلبات{' '}
              </Text>
            </View>
            <View>
              <Image source={require('../images/note.png')} />
              <Text style={firstPageStyles.fifthPageSecondBottomText}>
                الإشعارات{' '}
              </Text>
            </View>
            <View>
              <Image source={require('../images/settings.png')} />
              <Text style={firstPageStyles.fifthPageSecondBottomText}>
                الإعدادات{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default FifthPage;
