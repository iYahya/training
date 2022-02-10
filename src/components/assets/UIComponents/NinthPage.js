
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { firstPageStyles } from "../styles/Styles.js";

import Icon from 'react-native-vector-icons/AntDesign';
class NinthPage extends Component {

  render() {
    return (
      <View style={firstPageStyles.ninthPageFirstView}>
        <View style={{ flex: 6 }}>
          <TouchableOpacity>
            <View style={firstPageStyles.ninthPageItemView}>
              <Image source={require('../images/iconTwo.png')} />
              <Text style={firstPageStyles.ninthPageSeventhText}>قائمة المهام</Text>
            </View>
          </TouchableOpacity>
          <View style={firstPageStyles.ninthPageSameContainerTwo}>
            <View style={firstPageStyles.ninthPageSameContainerTwoFirstView}>
              <Text style={firstPageStyles.ninthPageSameContainerTwoFirstViewText}>
                القائمة الأولي
              </Text>
            </View>
            <View style={firstPageStyles.ninthPageFirstSpacer}></View>
            <View style={firstPageStyles.ninthPageSameContainerTwoSecondView}>
              <View style={firstPageStyles.ninthPageEnglishTextViewOne}>
                <Text style={firstPageStyles.ninthPageSameContainerTwoSecondViewText}>
                  Pylon Cover                </Text>
              </View>
              <View style={firstPageStyles.ninthPageSpacerView}></View>
              <View style={firstPageStyles.ninthPageSameContainerTwoInnerView}>
                <Icon name="check" color={"white"} size={20} />
              </View>
            </View>
            <View style={firstPageStyles.ninthPageSameContainerTwoSecondView}>
              <View style={firstPageStyles.ninthPageEnglishTextView}>

                <Text style={firstPageStyles.ninthPageSameContainerTwoSecondViewText}>

                  Side Frame

                </Text>
              </View>
              <View style={firstPageStyles.ninthPageSpacerView}></View>
              <View style={firstPageStyles.ninthPageSameContainerTwoInnerViewTwo}>
              </View>
            </View>
            <View style={firstPageStyles.ninthPageSameContainerTwoSecondView}>
              <View style={firstPageStyles.ninthPageEnglishThirdTextView}>
                <Text style={firstPageStyles.ninthPageSameContainerTwoThirdViewText}>


                  Stickers

                </Text>
              </View>
              <View style={firstPageStyles.ninthPageSpacerView}></View>
              <View style={firstPageStyles.ninthPageSameContainerTwoInnerViewTwo}>
              </View>
            </View>
            <View style={firstPageStyles.ninthPageSameContainerTwoSecondView}>
              <View style={firstPageStyles.ninthPageEnglishTextViewTwo}>
                <Text style={firstPageStyles.ninthPageSameContainerTwoSecondViewText}>


                  ATM  Code
                </Text>
              </View>
              <View style={firstPageStyles.ninthPageSpacerView}></View>
              <View style={firstPageStyles.ninthPageSameContainerTwoInnerViewTwo}>
              </View>
            </View>
          </View>

          <View style={firstPageStyles.ninthPageSameContainerTwo}>
            <View style={firstPageStyles.ninthPageSameContainerTwoFirstView}>
              <Text style={firstPageStyles.ninthPageSameContainerTwoFirstViewText}>
                القائمة الثانية              </Text>
            </View>
            <View style={firstPageStyles.ninthPageFirstSpacer}></View>
            <View style={firstPageStyles.ninthPageSameContainerTwoSecondView}>
              <View style={firstPageStyles.ninthPageEnglishTextViewOne}>
                <Text style={firstPageStyles.ninthPageSameContainerTwoSecondViewText}>
                  Pylon Cover                </Text>
              </View>
              <View style={firstPageStyles.ninthPageSpacerView}></View>
              <View style={firstPageStyles.ninthPageSameContainerTwoInnerView}>
                <Icon name="check" color={"white"} size={20} />
              </View>
            </View>
            <View style={firstPageStyles.ninthPageSameContainerTwoSecondView}>
              <View style={firstPageStyles.ninthPageEnglishTextView}>
                <Text style={firstPageStyles.ninthPageSameContainerTwoSecondViewText}>

                  Side Frame

                </Text>
              </View>
              <View style={firstPageStyles.ninthPageSpacerView}></View>
              <View style={firstPageStyles.ninthPageSameContainerTwoInnerViewTwo}>
              </View>
            </View>
            <View style={firstPageStyles.ninthPageSameContainerTwoSecondView}>
              <View style={firstPageStyles.ninthPageEnglishThirdTextView}>
                <Text style={firstPageStyles.ninthPageSameContainerTwoThirdViewText}>


                  Stickers

                </Text>
              </View>
              <View style={firstPageStyles.ninthPageSpacerView}></View>
              <View style={firstPageStyles.ninthPageSameContainerTwoInnerViewTwo}>
              </View>
            </View>
            <View style={firstPageStyles.ninthPageSameContainerTwoSecondView}>
              <View style={firstPageStyles.ninthPageEnglishTextViewTwo}>
                <Text style={firstPageStyles.ninthPageSameContainerTwoSecondViewText}>


                  ATM  Code
                </Text>
              </View>
              <View style={firstPageStyles.ninthPageSpacerView}></View>
              <View style={firstPageStyles.ninthPageSameContainerTwoInnerViewTwo}>
              </View>
            </View>
          </View>


        </View>
        <TouchableOpacity style={{ flex: 1 }}>
          <View style={firstPageStyles.ninthPageThirdView}>
            <Text style={firstPageStyles.ninthPageFifthText}>تاكيد</Text>
          </View>
        </TouchableOpacity>

      </View>

    );
  }

}
export default NinthPage;