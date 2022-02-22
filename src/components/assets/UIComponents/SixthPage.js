import React, { Component } from 'react';

import { firstPageStyles } from "../styles/Styles.js";

import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
class SixthPage extends Component {
    render() {
        return (
            <View style={firstPageStyles.sixthPageView}>
                <TouchableOpacity>
                    <View style={firstPageStyles.sixthPageItemView}>
                        <Image source={require('../images/iconTwo.png')} />
                        <Text style={firstPageStyles.sixthPageSeventhText}>الطلبات </Text>
                    </View>
                </TouchableOpacity>

                <View style={firstPageStyles.sixthPagePersonView}>
                    <View style={firstPageStyles.sixthPagePersonContainer}>
                        <Image
                            style={firstPageStyles.sixthPageFirstImage}
                            source={require('../images/personThree.png')}
                        />
                        <View style={firstPageStyles.sixthPageContainerView}>
                            <Text style={firstPageStyles.sixthPageContainerViewFirstText}>محمد سليمان</Text>
                            <Text style={firstPageStyles.sixthPageContainerViewSecondText}>
                                محاسب              </Text>
                        </View>
                    </View>
                    <View style={firstPageStyles.sixthPageArrowView}>

                        <Icon name="arrow-up" color={"white"} size={10} />
                    </View>
                </View>

                <View style={firstPageStyles.sixthPageRequestContainerOne}>
                    <View style={firstPageStyles.sixthPageRequestContainerOneFirstView}>
                        <Text style={firstPageStyles.sixthPageSecondTextInView}>
                            عنوان الطلب
                        </Text>
                        <Text style={firstPageStyles.sixthPageRequestContainerFirstText}>
                            25/2/2020            </Text>
                    </View>

                    <Text style={firstPageStyles.sixthPageRequestContainerSecondText}>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء


                        لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                    </Text>
                </View>



                <View style={firstPageStyles.sixthPageConditionView}>
                    <View style={firstPageStyles.sixthPageAcceptView}>
                        <View >
                            <Image source={require('../images/like.png')} />

                        </View>
                        <View style={firstPageStyles.sixthPageAcceptViewOne}>
                            <Text style={firstPageStyles.sixthPageAcceptTextOne} >قبول</Text>
                        </View>

                    </View>

                    <View style={firstPageStyles.sixthPageRefuseView}>
                        <View >
                            <Image source={require('../images/like.png')} />

                        </View>
                        <View style={firstPageStyles.sixthPageAcceptViewOne}>
                            <Text style={firstPageStyles.sixthPageAcceptTextOne} >رفض</Text>
                        </View>

                    </View>




                </View>





                <View style={firstPageStyles.sixthPagePersonView}>
                    <View style={firstPageStyles.sixthPagePersonContainer}>
                        <Image
                            style={firstPageStyles.sixthPageFirstImage}
                            source={require('../images/personFour.png')}
                        />
                        <View style={firstPageStyles.sixthPageContainerView}>
                            <Text style={firstPageStyles.sixthPageFirstTextInContainerView}> عنوان الطلب</Text>
                            <Text style={firstPageStyles.sixthPageSecondTextInContainerView}>
                                محمد سليمان            </Text>
                        </View>
                    </View>
                    <View style={firstPageStyles.sixthPageArrowViewOne}>

                        <Icon name="arrow-down" color={"white"} size={10} />
                    </View>
                </View>
                <View style={firstPageStyles.sixthPagePersonView}>
                    <View style={firstPageStyles.sixthPagePersonContainer}>
                        <Image
                            style={firstPageStyles.sixthPageFirstImage}
                            source={require('../images/person.jpg')}
                        />
                        <View style={firstPageStyles.sixthPageContainerView}>
                            <Text style={firstPageStyles.sixthPageFirstTextInContainerView}> عنوان الطلب</Text>
                            <Text style={firstPageStyles.sixthPageSecondTextInContainerView}>
                                محمد سليمان            </Text>
                        </View>
                    </View>
                    <View style={firstPageStyles.sixthPageArrowViewOne}>

                        <Icon name="arrow-down" color={"white"} size={10} />
                    </View>
                </View>
                <View style={firstPageStyles.sixthPagePersonView}>
                    <View style={firstPageStyles.sixthPagePersonContainer}>
                        <Image
                            style={firstPageStyles.sixthPageFirstImage}
                            source={require('../images/personFive.png')}
                        />
                        <View style={firstPageStyles.sixthPageContainerView}>
                            <Text style={firstPageStyles.sixthPageFirstTextInContainerView}> عنوان الطلب</Text>
                            <Text style={firstPageStyles.sixthPageSecondTextInContainerView}>
                                محمد سليمان            </Text>
                        </View>
                    </View>
                    <View style={firstPageStyles.sixthPageArrowViewOne}>

                        <Icon name="arrow-down" color={"white"} size={10} />
                    </View>
                </View>


                <View style={firstPageStyles.sixthPageBottomView}>
                    <View style={firstPageStyles.sixthPageInnerBottomView}>
                        <View>
                            <Image source={require('../images/home.png')} />
                            <Text style={firstPageStyles.sixthPageFirstBottomText}>الرئيسية </Text>
                        </View>
                        <View>
                            <Image source={require('../images/order.png')} />
                            <Text style={firstPageStyles.sixthPageSecondBottomText}>الطلبات </Text>
                        </View>
                        <View>
                            <Image source={require('../images/note.png')} />
                            <Text style={firstPageStyles.sixthPageSecondBottomText} >الإشعارات </Text>
                        </View>
                        <View>
                            <Image source={require('../images/settings.png')} />
                            <Text style={firstPageStyles.sixthPageSecondBottomText}>الإعدادات </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default SixthPage;