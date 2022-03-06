import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles, colorNumberTwo, colorNumberSix } from '../styles/Styles.js';
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
class ThirdPage extends Component {
    constructor() {
        super();
        this.state = {
            secureText: true,
            toggleCheckBox: false,
        };
    }
    render() {
        const { secureText } = this.state;
        const { toggleCheckBox } = this.state;
        const { navigation } = this.props;

        return (
            <View style={styles.thirdPageFirstView}>
                <View style={styles.thirdPageSecondView}>
                    <Text style={styles.thirdPageFirstText}>
                        من فضلك أدخل المعلومات التالية
                    </Text>
                    <View>
                        <TextInput

                            placeholder="رقم الموظف"
                            placeholderTextColor={colorNumberTwo}
                            style={styles.thirdPageFirstTextInput}

                        />
                    </View>

                    <View>
                        <TextInput
                            right={
                                <TextInput.Icon
                                    name={secureText ? 'eye-off' : 'eye'}
                                    color={colorNumberSix}
                                    onPress={() =>
                                        this.setState({ secureText: !this.state.secureText })
                                    }
                                />
                            }
                            placeholder="كلمة المرور"
                            placeholderTextColor={colorNumberSix}
                            secureTextEntry={secureText}
                            style={styles.thirdPageSecondTextInput}
                        />
                    </View>
                    <View style={styles.thirdPageFifthView}>
                        <View style={styles.thirdPageSeventhView}>
                            <CheckBox


                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={newValue =>
                                    this.setState({ toggleCheckBox: newValue })
                                }
                            />

                            <Text style={styles.thirdPageEighthText}>تذكرني</Text>
                        </View>
                        <TouchableOpacity style={styles.thirdPagePasswordView}
                            onPress={function () {
                                navigation.navigate("FourthPage");
                            }}
                        >
                            <Text style={styles.thirdPagePasswordText}>
                                نسيت كلمة المرور؟
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <TouchableOpacity style={styles.thirdPageThirdView}
                    onPress={function () {
                        navigation.navigate("FifthPage");
                    }}
                >
                    <Text style={styles.thirdPageFifthText}>تسجيل دخول</Text>
                </TouchableOpacity>



            </View>
        );
    }
}
export default ThirdPage;

