import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { firstPageStyles } from "../styles/Styles.js";


import Icon from 'react-native-vector-icons/Ionicons';
class SeventhPage extends Component {
  render() {
    return (
      <ScrollView style={firstPageStyles.seventhPageView}>
        <View style={firstPageStyles.seventhPageFirstView}>
          <TouchableOpacity>
            <View style={firstPageStyles.seventhPageItemView}>
              <Icon name="arrow-forward" color={'white'} size={30} />
              <Text style={firstPageStyles.seventhPageSeventhText}>المهام الرئيسية </Text>
            </View>
          </TouchableOpacity>

          <View style={firstPageStyles.seventhPageSecondView}>
            <View style={firstPageStyles.seventhPageInnerFirstView}>
              <Image source={require("../images/bank.png")} />
            </View>
            <View style={firstPageStyles.seventhPageInnerSecondView}>
              <View style={firstPageStyles.seventhPageFirstContainer}>
                <Image source={require("../images/card.png")} />
                <Text style={firstPageStyles.seventhPageFirstTextInContainer}> عنوان المهمة</Text>
              </View>
              <View style={firstPageStyles.seventhPageSecondContainer}>
                <Image source={require("../images/marker.png")} />
                <Text style={firstPageStyles.seventhPageSecondTextInContainer}>Mecca, Al Jumum</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={firstPageStyles.seventhPageSameContainerOne}>
          <View style={firstPageStyles.seventhPageInnerFirstView}>
            <Image source={require("../images/bank.png")} />
          </View>
          <View style={firstPageStyles.seventhPageInnerSecondView}>
            <View style={firstPageStyles.seventhPageFirstContainer}>
              <Image source={require("../images/card.png")} />
              <Text style={firstPageStyles.seventhPageFirstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.seventhPageSecondContainer}>
              <Image source={require("../images/marker.png")} />
              <Text style={firstPageStyles.seventhPageSecondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.seventhPageSameContainerTwo}>
          <View style={firstPageStyles.seventhPageInnerFirstView}>
            <Image source={require("../images/bank.png")} />
          </View>
          <View style={firstPageStyles.seventhPageInnerSecondView}>
            <View style={firstPageStyles.seventhPageFirstContainer}>
              <Image source={require("../images/card.png")} />
              <Text style={firstPageStyles.seventhPageFirstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.seventhPageSecondContainer}>
              <Image source={require("../images/marker.png")} />
              <Text style={firstPageStyles.seventhPageSecondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.seventhPageSameContainerTwo}>
          <View style={firstPageStyles.seventhPageInnerFirstView}>
            <Image source={require("../images/bank.png")} />
          </View>
          <View style={firstPageStyles.seventhPageInnerSecondView}>
            <View style={firstPageStyles.seventhPageFirstContainer}>
              <Image source={require("../images/card.png")} />
              <Text style={firstPageStyles.seventhPageFirstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.seventhPageSecondContainer}>
              <Image source={require("../images/marker.png")} />
              <Text style={firstPageStyles.seventhPageSecondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.seventhPageSameContainerTwo}>
          <View style={firstPageStyles.seventhPageInnerFirstView}>
            <Image source={require("../images/bank.png")} />
          </View>
          <View style={firstPageStyles.seventhPageInnerSecondView}>
            <View style={firstPageStyles.seventhPageFirstContainer}>
              <Image source={require("../images/card.png")} />
              <Text style={firstPageStyles.seventhPageFirstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.seventhPageSecondContainer}>
              <Image source={require("../images/marker.png")} />
              <Text style={firstPageStyles.seventhPageSecondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.seventhPageSameContainerTwo}>
          <View style={firstPageStyles.seventhPageInnerFirstView}>
            <Image source={require("../images/bank.png")} />
          </View>
          <View style={firstPageStyles.seventhPageInnerSecondView}>
            <View style={firstPageStyles.seventhPageFirstContainer}>
              <Image source={require("../images/card.png")} />
              <Text style={firstPageStyles.seventhPageFirstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.seventhPageSecondContainer}>
              <Image source={require("../images/marker.png")} />
              <Text style={firstPageStyles.seventhPageSecondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}
export default SeventhPage;