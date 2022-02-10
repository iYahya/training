import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { firstPageStyles } from "../styles/Styles.js";

class ThirdPage extends Component {
    render() {
        return (
            <View style={firstPageStyles.thirdPageView}>
                <TouchableOpacity>
                    <View style={firstPageStyles.thirdPageItemView}>
                        <Image source={require('../images/iconTwo.png')} />
                        <Text style={firstPageStyles.thirdPageSeventhText}>تسجيل دخول</Text>
                    </View>
                </TouchableOpacity>

                <View style={firstPageStyles.thirdPageFirstView}>
                    <View style={firstPageStyles.thirdPageSecondView}>
                        <Text style={firstPageStyles.thirdPageFirstText}>
                            من فضلك أدخل المعلومات التالية
                        </Text>
                        <View >
                            <Text style={firstPageStyles.thirdPageSecondText}>رقم الموظف </Text>
                            <TextInput style={firstPageStyles.thirdPageFirstTextInput} />
                        </View>

                        <Text style={firstPageStyles.thirdPageThirdText}>كلمه المرور </Text>
                        <View >
                            <TouchableOpacity style={firstPageStyles.thirdPageIconDirection}>
                                <Image
                                    style={firstPageStyles.thirdPageIcon}
                                    source={require('../images/eye.png')}
                                />
                            </TouchableOpacity>

                            <TextInput secureTextEntry={true} style={firstPageStyles.thirdPageSecondTextInput} />

                        </View>
                        <View style={firstPageStyles.thirdPageFifthView}>
                            <View style={firstPageStyles.thirdPageSeventhView} >
                                <View style={firstPageStyles.thirdPageSixthView}></View>
                                <Text style={firstPageStyles.thirdPageEighthText}  >تذكرني</Text>

                            </View>
                            <View style={firstPageStyles.thirdPagePasswordView}>
                                <Text style={firstPageStyles.thirdPagePasswordText}> نسيت كلمة المرور؟ </Text>
                            </View>
                        </View>

                    </View>
                    <TouchableOpacity style={firstPageStyles.thirdPageBottom}>
                        <View style={firstPageStyles.thirdPageThirdView}>
                            <Text style={firstPageStyles.thirdPageFifthText}>تسجيل دخول</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default ThirdPage;