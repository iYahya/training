import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    Button,
    TouchableOpacity,
} from 'react-native';
import { firstPageStyles } from "../styles/Styles.js";
class FirstPage extends Component {

    render() {
        return (
            <View style={firstPageStyles.firstPageFirstView}>
                <View style={firstPageStyles.firstPageSecondView}>
                    <Text style={firstPageStyles.firstPageFirstText}> مرحبا بك  </Text>
                    <Image source={require("../images/second.png")} />
                    <Text style={firstPageStyles.firstPageSecondText}> اللغة المفضلة لك فى الاستخدام  </Text>
                    <View style={firstPageStyles.firstPageView}>
                        <Text style={firstPageStyles.firstPageThirdText}>  عربى  </Text>
                        <Text style={firstPageStyles.firstPageFourthText}> English  </Text>

                    </View>
                </View>
                <TouchableOpacity style={{ flex: 1 }}>
                    <View style={firstPageStyles.firstPageThirdView}>
                        <Text style={firstPageStyles.firstPageFifthText}>التالى</Text>
                    </View>
                </TouchableOpacity>

            </View>

        );
    }

}
export default FirstPage;
