import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    styles,
    colorNumberOne,
    colorNumberTwo,
    colorNumberTwentyTwo,
    hp,
    wp,
} from '../styles/Styles.js';

class EighthPage extends Component {
    constructor() {
        super();
        this.state = {
            showMap: false,
        };
    }

    render() {
        const { showMap } = this.state;

        return showMap === false ? (
            <View style={styles.eighthPageView}>
                <View style={styles.eighthPageListView}>
                    <View style={styles.eighthPageListViewContainer}>
                        <TouchableOpacity
                            style={{
                                width: '40%',

                                height: '60%',
                                borderWidth: showMap === false ? wp(0.1) : 0,
                                backgroundColor:
                                    showMap === false ? colorNumberTwo : colorNumberOne,
                                borderRadius: showMap === false ? wp(3) : 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({ showMap: false });
                            }}>
                            <Text
                                style={{
                                    color:
                                        showMap === false ? colorNumberOne : colorNumberTwentyTwo,

                                    fontSize: hp(2),
                                    fontFamily: 'Tajawal-Regular',
                                }}>
                                قائمة
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderWidth: showMap ? wp(0.1) : 0,
                                backgroundColor: showMap ? colorNumberTwo : colorNumberOne,
                                borderRadius: showMap ? wp(3) : 0,
                                width: '40%',

                                height: '60%',

                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({ showMap: true });
                            }}>
                            <Text
                                style={{
                                    color:
                                        showMap === false ? colorNumberTwentyTwo : colorNumberOne,

                                    fontSize: hp(2),
                                    fontFamily: 'Tajawal-Regular',
                                }}>
                                الخريطة
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.eighthPageIconViewContainer}>
                    <View style={styles.eighthPageIconViewFirstContainer}>
                        <Image source={require('../images/search.png')} />
                        <Text style={styles.eighthPageIconViewFirstContainerText}>
                            Mecca
                        </Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={styles.seventhPageSameContainerOne}>
                        <View style={styles.seventhPageInnerFirstView}>
                            <Image source={require('../images/bank.png')} />
                        </View>
                        <View style={styles.seventhPageInnerSecondView}>
                            <View style={styles.seventhPageFirstContainer}>
                                <Image source={require('../images/card.png')} />
                                <Text style={styles.seventhPageFirstTextInContainer}>
                                    عنوان المهمة
                                </Text>
                            </View>
                            <View style={styles.seventhPageSecondContainer}>
                                <Image source={require('../images/marker.png')} />
                                <Text style={styles.seventhPageSecondTextInContainer}>
                                    Mecca, Al Jumum
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.seventhPageSameContainerOne}>
                        <View style={styles.seventhPageInnerFirstView}>
                            <Image source={require('../images/bank.png')} />
                        </View>
                        <View style={styles.seventhPageInnerSecondView}>
                            <View style={styles.seventhPageFirstContainer}>
                                <Image source={require('../images/card.png')} />
                                <Text style={styles.seventhPageFirstTextInContainer}>
                                    عنوان المهمة
                                </Text>
                            </View>
                            <View style={styles.seventhPageSecondContainer}>
                                <Image source={require('../images/marker.png')} />
                                <Text style={styles.seventhPageSecondTextInContainer}>
                                    Mecca, Al Jumum
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.seventhPageSameContainerOne}>
                        <View style={styles.seventhPageInnerFirstView}>
                            <Image source={require('../images/bank.png')} />
                        </View>
                        <View style={styles.seventhPageInnerSecondView}>
                            <View style={styles.seventhPageFirstContainer}>
                                <Image source={require('../images/card.png')} />
                                <Text style={styles.seventhPageFirstTextInContainer}>
                                    عنوان المهمة
                                </Text>
                            </View>
                            <View style={styles.seventhPageSecondContainer}>
                                <Image source={require('../images/marker.png')} />
                                <Text style={styles.seventhPageSecondTextInContainer}>
                                    Mecca, Al Jumum
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.seventhPageSameContainerOne}>
                        <View style={styles.seventhPageInnerFirstView}>
                            <Image source={require('../images/bank.png')} />
                        </View>
                        <View style={styles.seventhPageInnerSecondView}>
                            <View style={styles.seventhPageFirstContainer}>
                                <Image source={require('../images/card.png')} />
                                <Text style={styles.seventhPageFirstTextInContainer}>
                                    عنوان المهمة
                                </Text>
                            </View>
                            <View style={styles.seventhPageSecondContainer}>
                                <Image source={require('../images/marker.png')} />
                                <Text style={styles.seventhPageSecondTextInContainer}>
                                    Mecca, Al Jumum
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.seventhPageSameContainerOne}>
                        <View style={styles.seventhPageInnerFirstView}>
                            <Image source={require('../images/bank.png')} />
                        </View>
                        <View style={styles.seventhPageInnerSecondView}>
                            <View style={styles.seventhPageFirstContainer}>
                                <Image source={require('../images/card.png')} />
                                <Text style={styles.seventhPageFirstTextInContainer}>
                                    عنوان المهمة
                                </Text>
                            </View>
                            <View style={styles.seventhPageSecondContainer}>
                                <Image source={require('../images/marker.png')} />
                                <Text style={styles.seventhPageSecondTextInContainer}>
                                    Mecca, Al Jumum
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.seventhPageSameContainerOne}>
                        <View style={styles.seventhPageInnerFirstView}>
                            <Image source={require('../images/bank.png')} />
                        </View>
                        <View style={styles.seventhPageInnerSecondView}>
                            <View style={styles.seventhPageFirstContainer}>
                                <Image source={require('../images/card.png')} />
                                <Text style={styles.seventhPageFirstTextInContainer}>
                                    عنوان المهمة
                                </Text>
                            </View>
                            <View style={styles.seventhPageSecondContainer}>
                                <Image source={require('../images/marker.png')} />
                                <Text style={styles.seventhPageSecondTextInContainer}>
                                    Mecca, Al Jumum
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.seventhPageSameContainerOne}>
                        <View style={styles.seventhPageInnerFirstView}>
                            <Image source={require('../images/bank.png')} />
                        </View>
                        <View style={styles.seventhPageInnerSecondView}>
                            <View style={styles.seventhPageFirstContainer}>
                                <Image source={require('../images/card.png')} />
                                <Text style={styles.seventhPageFirstTextInContainer}>
                                    عنوان المهمة
                                </Text>
                            </View>
                            <View style={styles.seventhPageSecondContainer}>
                                <Image source={require('../images/marker.png')} />
                                <Text style={styles.seventhPageSecondTextInContainer}>
                                    Mecca, Al Jumum
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        ) : (
            <View style={{ height: hp(93), backgroundColor: colorNumberOne }}>
                <View style={{
                    height: hp(8),
                    alignItems: 'center',
                    backgroundColor: colorNumberOne,
                }}>
                    <View style={styles.eighthPageListViewContainer}>
                        <TouchableOpacity
                            style={{
                                width: '40%',

                                height: '60%',
                                borderWidth: showMap === false ? wp(0.1) : 0,
                                backgroundColor:
                                    showMap === false ? colorNumberTwo : colorNumberOne,
                                borderRadius: showMap === false ? wp(3) : 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({ showMap: false });
                            }}>
                            <Text
                                style={{
                                    color:
                                        showMap === false ? colorNumberOne : colorNumberTwentyTwo,

                                    fontSize: hp(2),
                                    fontFamily: 'Tajawal-Regular',
                                }}>
                                قائمة
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderWidth: showMap ? wp(0.1) : 0,
                                backgroundColor: showMap ? colorNumberTwo : colorNumberOne,
                                borderRadius: showMap ? wp(3) : 0,
                                width: '40%',

                                height: '60%',

                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({ showMap: true });
                            }}>
                            <Text
                                style={{
                                    color:
                                        showMap === false ? colorNumberTwentyTwo : colorNumberOne,

                                    fontSize: hp(2),
                                    fontFamily: 'Tajawal-Regular',
                                }}>
                                الخريطة
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: colorNumberOne, height: hp(85), marginTop: hp(1) }}>
                    <Image source={require('../images/map.png')} />

                </View>


            </View>
        );
    }
}

export default EighthPage;
