import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { firstPageStyles } from "../styles/Styles.js";

class EighthPage extends Component {
    render() {
        return (
            <ScrollView style={firstPageStyles.eighthPageView}>
                <TouchableOpacity>
                    <View style={firstPageStyles.eighthPageItemView}>
                        <Icon name="arrow-forward" color={'red'} size={25} />

                    </View>
                </TouchableOpacity>
                <View style={firstPageStyles.eighthPageListView}>
                    <View style={firstPageStyles.eighthPageListViewContainer}>
                        <View style={firstPageStyles.eighthPageListViewFirstContainer}>
                            <Text style={firstPageStyles.eighthPageListViewFirstContainerText}>قائمة</Text>
                        </View>
                        <View style={firstPageStyles.eighthPageListViewSecondContainer}>
                            <Text style={firstPageStyles.eighthPageListViewSecondContainerText}>الخريطة</Text>

                        </View>

                    </View>
                </View>

                <View style={firstPageStyles.eighthPageIconViewContainer}>
                    <View style={firstPageStyles.eighthPageIconViewFirstContainer}>
                        <Image source={require("../images/search.png")} />
                        <Text style={firstPageStyles.eighthPageIconViewFirstContainerText}>Mecca</Text>

                    </View>
                </View>


                <View style={firstPageStyles.eighthPageSameContainerOne}>
                    <View style={firstPageStyles.eighthPageInnerFirstView}>
                        <Image source={require("../images/bank.png")} />
                    </View>
                    <View style={firstPageStyles.eighthPageInnerSecondView}>
                        <View style={firstPageStyles.eighthPageFirstContainer}>
                            <Image source={require("../images/card.png")} />
                            <Text style={firstPageStyles.eighthPageFirstTextInContainer}> عنوان المهمة</Text>
                        </View>
                        <View style={firstPageStyles.eighthPageSecondContainer}>
                            <Image source={require("../images/marker.png")} />
                            <Text style={firstPageStyles.eighthPageSecondTextInContainer}>Mecca, Al Jumum</Text>
                        </View>
                    </View>
                </View>
                <View style={firstPageStyles.eighthPageSameContainerTwo}>
                    <View style={firstPageStyles.eighthPageInnerFirstView}>
                        <Image source={require("../images/bank.png")} />
                    </View>
                    <View style={firstPageStyles.eighthPageInnerSecondView}>
                        <View style={firstPageStyles.eighthPageFirstContainer}>
                            <Image source={require("../images/card.png")} />
                            <Text style={firstPageStyles.eighthPageFirstTextInContainer}> عنوان المهمة</Text>
                        </View>
                        <View style={firstPageStyles.eighthPageSecondContainer}>
                            <Image source={require("../images/marker.png")} />
                            <Text style={firstPageStyles.eighthPageSecondTextInContainer}>Mecca, Al Jumum</Text>
                        </View>
                    </View>
                </View>
                <View style={firstPageStyles.eighthPageSameContainerTwo}>
                    <View style={firstPageStyles.eighthPageInnerFirstView}>
                        <Image source={require("../images/bank.png")} />
                    </View>
                    <View style={firstPageStyles.eighthPageInnerSecondView}>
                        <View style={firstPageStyles.eighthPageFirstContainer}>
                            <Image source={require("../images/card.png")} />
                            <Text style={firstPageStyles.eighthPageFirstTextInContainer}> عنوان المهمة</Text>
                        </View>
                        <View style={firstPageStyles.eighthPageSecondContainer}>
                            <Image source={require("../images/marker.png")} />
                            <Text style={firstPageStyles.eighthPageSecondTextInContainer}>Mecca, Al Jumum</Text>
                        </View>
                    </View>
                </View>
                <View style={firstPageStyles.eighthPageSameContainerTwo}>
                    <View style={firstPageStyles.eighthPageInnerFirstView}>
                        <Image source={require("../images/bank.png")} />
                    </View>
                    <View style={firstPageStyles.eighthPageInnerSecondView}>
                        <View style={firstPageStyles.eighthPageFirstContainer}>
                            <Image source={require("../images/card.png")} />
                            <Text style={firstPageStyles.eighthPageFirstTextInContainer}> عنوان المهمة</Text>
                        </View>
                        <View style={firstPageStyles.eighthPageSecondContainer}>
                            <Image source={require("../images/marker.png")} />
                            <Text style={firstPageStyles.eighthPageSecondTextInContainer}>Mecca, Al Jumum</Text>
                        </View>
                    </View>
                </View>
                <View style={firstPageStyles.eighthPageSameContainerTwo}>
                    <View style={firstPageStyles.eighthPageInnerFirstView}>
                        <Image source={require("../images/bank.png")} />
                    </View>
                    <View style={firstPageStyles.eighthPageInnerSecondView}>
                        <View style={firstPageStyles.eighthPageFirstContainer}>
                            <Image source={require("../images/card.png")} />
                            <Text style={firstPageStyles.eighthPageFirstTextInContainer}> عنوان المهمة</Text>
                        </View>
                        <View style={firstPageStyles.eighthPageSecondContainer}>
                            <Image source={require("../images/marker.png")} />
                            <Text style={firstPageStyles.eighthPageSecondTextInContainer}>Mecca, Al Jumum</Text>
                        </View>
                    </View>
                </View>
                <View style={firstPageStyles.eighthPageSameContainerTwo}>
                    <View style={firstPageStyles.eighthPageInnerFirstView}>
                        <Image source={require("../images/bank.png")} />
                    </View>
                    <View style={firstPageStyles.eighthPageInnerSecondView}>
                        <View style={firstPageStyles.eighthPageFirstContainer}>
                            <Image source={require("../images/card.png")} />
                            <Text style={firstPageStyles.eighthPageFirstTextInContainer}> عنوان المهمة</Text>
                        </View>
                        <View style={firstPageStyles.eighthPageSecondContainer}>
                            <Image source={require("../images/marker.png")} />
                            <Text style={firstPageStyles.eighthPageSecondTextInContainer}>Mecca, Al Jumum</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default EighthPage;