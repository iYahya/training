import React, { Component } from 'react';

import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { colorNumberOne, hp, wp } from '../styles/Styles';

class SettingsPage extends Component {
    render() {
        return (
            <View
                style={{
                    height: hp(100),
                    width: wp(100),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colorNumberOne,
                }}>
                <Text style={{ fontSize: hp(5), fontWeight: "bold", color: "black", }}>
                    SettingsPage
                </Text>
            </View>
        );
    }
}
export default SettingsPage;