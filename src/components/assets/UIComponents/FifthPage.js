import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';

import { styles } from '../styles/Styles.js';
class FifthPage extends Component {
  render() {
    return (
      <View style={styles.fifthPageView}>
        <View style={styles.fifthPageItemView}>
          <Image source={require('../images/line.png')} />
          <Text style={styles.fifthPageSeventhText}>الرئيسية </Text>
        </View>

        <View style={styles.fifthPagePersonView}>
          <View style={styles.fifthPagePersonContainer}>
            <Image
              style={styles.fifthPageFirstImage}
              source={require('../images/person.jpg')}
            />
            <View style={styles.fifthPageContainerView}>
              <Text style={styles.fifthPageFirstContainerText}>مرحبا بك</Text>
              <Text style={styles.fifthPageSecondContainerText}>
                محمد العلي
              </Text>
            </View>
          </View>
          <View style={styles.fifthPageCircleViewStyle}>
            <View style={styles.fifthPageCircleStyle}></View>
            <Image source={require('../images/circle.png')} />
          </View>
        </View>

        <View style={styles.fifthPageColoredContainer}>
          <View style={styles.fifthPageFirstColoredContainer}>
            <Text style={styles.fifthPageFirstColoredText}>إجمالي المهمات</Text>
            <Text style={styles.fifthPageSecondColoredText}> 21</Text>
          </View>
          <View style={styles.fifthPageSecondColoredContainer}>
            <Text style={styles.fifthPageFirstColoredText}>مهمات منتهية</Text>
            <Text style={styles.fifthPageSecondColoredText}> 4</Text>
          </View>
          <View style={styles.fifthPageThirdColoredContainer}>
            <Text style={styles.fifthPageThirdColoredText}>مهمات جديدة</Text>
            <Text style={styles.fifthPageFourthColoredText}> 11</Text>
          </View>
        </View>

        <View style={styles.fifthPageColoredContainerTwo}>
          <Text style={styles.fifthPageColoredContainerTwoFirstText}>
            أحدث الطلبات
          </Text>
          <Text style={styles.fifthPageColoredContainerTwoSecondText}>
            ___02
          </Text>
        </View>
        <View style={styles.fifthPageRequestContainer}>
          <View></View>
          <View style={styles.fifthPageRequestContainerOne}>
            <Text style={styles.fifthPageRequestContainerFirstText}>
              عنوان الطلب
            </Text>
            <Text style={styles.fifthPageRequestContainerSecondText}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص
            </Text>
          </View>

          <View style={styles.fifthPageInnerRequestContainer}>
            <View style={styles.fifthPageInnerRequestContainerOne}>
              <Text style={styles.fifthPageInnerRequestContainerFirstText}>
                مسئول الطلب
              </Text>
              <Text style={styles.fifthPageInnerRequestContainerSecondText}>
                عادل سعيد
              </Text>
            </View>
            <View style={styles.fifthPageInnerRequestContainerTwo}>
              <View style={styles.fifthPageInnerRequestContainerThirdView}>
                <View style={styles.fifthPageInnerRequestContainerAlignView}>
                  <Text style={styles.fifthPageInnerRequestContainerThirdText}>
                    تاريخ الرد
                  </Text>
                </View>
              </View>

              <View style={styles.fifthPageInnerRequestContainerAlignView}>
                <Text style={styles.fifthPageInnerRequestContainerFourthText}>
                  Dec 18, 2019
                </Text>
              </View>
            </View>
            <View style={styles.fifthPageInnerRequestContainerOne}>
              <Text style={styles.fifthPageInnerRequestContainerFithText}>
                حالة الطلب
              </Text>
              <Text style={styles.fifthPageInnerRequestContainerSixthText}>
                مرفوض
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.fifthPageRedText}>المسئول المباشر </Text>

        <View style={styles.fifthPagePersonView}>
          <View style={styles.fifthPagePersonContainer}>
            <Image
              style={styles.fifthPageFirstImage}
              source={require('../images/personTwo.png')}
            />
            <View style={styles.fifthPageContainerView}>
              <Text style={styles.fifthPagePersonFirstText}>رضا المرزوقي</Text>
              <Text style={styles.fifthPagePersonSecondText}>
                مدير الجهة الإعلامية
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.fifthPageIconContainerView}>
          <View style={styles.fifthPageIconContainer}>
            <Image source={require('../images/phoneTwo.png')} />
          </View>
          <View style={styles.fifthPageIconContainer}>
            <Image source={require('../images/window.png')} />
          </View>
        </View>
      </View>
    );
  }
}
export default FifthPage;
/* 


        <View style={styles.fifthPageBottomView}>
          <View style={styles.fifthPageInnerBottomView}>
            <View>
              <Image source={require('../images/home.png')} />
              <Text style={styles.fifthPageFirstBottomText}>
                الرئيسية
              </Text>
            </View>
            <View>
              <Image source={require('../images/order.png')} />
              <Text style={styles.fifthPageSecondBottomText}>
                الطلبات
              </Text>
            </View>
            <View>
              <Image source={require('../images/note.png')} />
              <Text style={styles.fifthPageSecondBottomText}>
                الإشعارات
              </Text>
            </View>
            <View>
              <Image source={require('../images/settings.png')} />
              <Text style={styles.fifthPageSecondBottomText}>
                الإعدادات
              </Text>
            </View>
          </View>
        </View>


*/
