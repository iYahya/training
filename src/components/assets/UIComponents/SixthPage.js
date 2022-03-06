import React, { Component } from 'react';

import { hp, styles } from "../styles/Styles.js";

import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
class SixthPage extends Component {
    render() {
        return (
            <View style={styles.sixthPageView}>

                <View style={styles.sixthPagePersonView}>
                    <View style={styles.sixthPagePersonContainer}>
                        <Image
                            style={styles.sixthPageFirstImage}
                            source={require('../images/personThree.png')}
                        />
                        <View style={styles.sixthPageContainerView}>
                            <Text style={styles.sixthPageContainerViewFirstText}>محمد سليمان</Text>
                            <Text style={styles.sixthPageContainerViewSecondText}>
                                محاسب              </Text>
                        </View>
                    </View>
                    <View style={styles.sixthPageArrowView}>

                        <Icon name="arrow-up" color={"white"} size={hp(1.1)} />
                    </View>
                </View>

                <View style={styles.sixthPageRequestContainerOne}>
                    <View style={styles.sixthPageRequestContainerOneFirstView}>
                        <Text style={styles.sixthPageSecondTextInView}>
                            عنوان الطلب
                        </Text>
                        <Text style={styles.sixthPageRequestContainerFirstText}>
                            25/2/2020            </Text>
                    </View>

                    <Text style={styles.sixthPageRequestContainerSecondText}>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                    </Text>
                </View>



                <View style={styles.sixthPageConditionView}>
                    <View style={styles.sixthPageAcceptView}>
                        <View >
                            <Image source={require('../images/like.png')} />

                        </View>
                        <View style={styles.sixthPageAcceptViewOne}>
                            <Text style={styles.sixthPageAcceptTextOne} >قبول</Text>
                        </View>

                    </View>

                    <View style={styles.sixthPageRefuseView}>
                        <View >
                            <Image source={require('../images/like.png')} />

                        </View>
                        <View style={styles.sixthPageAcceptViewOne}>
                            <Text style={styles.sixthPageAcceptTextOne} >رفض</Text>
                        </View>

                    </View>




                </View>





                <View style={styles.sixthPagePersonView}>
                    <View style={styles.sixthPagePersonContainer}>
                        <Image
                            style={styles.sixthPageFirstImage}
                            source={require('../images/personFour.png')}
                        />
                        <View style={styles.sixthPageContainerView}>
                            <Text style={styles.sixthPageFirstTextInContainerView}> عنوان الطلب</Text>
                            <Text style={styles.sixthPageSecondTextInContainerView}>
                                محمد سليمان            </Text>
                        </View>
                    </View>
                    <View style={styles.sixthPageArrowViewOne}>

                        <Icon name="arrow-down" color={"white"} size={hp(1.1)} />
                    </View>
                </View>
                <View style={styles.sixthPagePersonView}>
                    <View style={styles.sixthPagePersonContainer}>
                        <Image
                            style={styles.sixthPageFirstImage}
                            source={require('../images/person.jpg')}
                        />
                        <View style={styles.sixthPageContainerView}>
                            <Text style={styles.sixthPageFirstTextInContainerView}> عنوان الطلب</Text>
                            <Text style={styles.sixthPageSecondTextInContainerView}>
                                محمد سليمان            </Text>
                        </View>
                    </View>
                    <View style={styles.sixthPageArrowViewOne}>

                        <Icon name="arrow-down" color={"white"} size={hp(1.1)} />
                    </View>
                </View>
                <View style={styles.sixthPagePersonView}>
                    <View style={styles.sixthPagePersonContainer}>
                        <Image
                            style={styles.sixthPageFirstImage}
                            source={require('../images/personFive.png')}
                        />
                        <View style={styles.sixthPageContainerView}>
                            <Text style={styles.sixthPageFirstTextInContainerView}> عنوان الطلب</Text>
                            <Text style={styles.sixthPageSecondTextInContainerView}>
                                محمد سليمان            </Text>
                        </View>
                    </View>
                    <View style={styles.sixthPageArrowViewOne}>

                        <Icon name="arrow-down" color={"white"} size={hp(1.1)} />
                    </View>
                </View>


            </View>

        );
    }
}
export default SixthPage;
