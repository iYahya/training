import React, { Component } from 'react';
import { Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { hp, styles } from '../styles/Styles.js';
import CheckBox from '@react-native-community/checkbox';

import Icon from 'react-native-vector-icons/AntDesign';
class NinthPage extends Component {
  constructor() {
    super();
    this.state = {
      toggleCheckBox: false,
      toggleCheckBoxOne: false,
      toggleCheckBoxTwo: false,
      toggleCheckBoxThree: false,
      toggleCheckBoxFour: false,
      toggleCheckBoxFive: false,
      toggleCheckBoxSix: false,
      toggleCheckBoxSeven: false,
    };
  }
  render() {
    const { toggleCheckBox } = this.state;
    const { toggleCheckBoxOne } = this.state;
    const { toggleCheckBoxTwo } = this.state;
    const { toggleCheckBoxThree } = this.state;
    const { toggleCheckBoxFour } = this.state;
    const { toggleCheckBoxFive } = this.state;
    const { toggleCheckBoxSix } = this.state;
    const { toggleCheckBoxSeven } = this.state;
    return (
      <View style={styles.ninthPageFirstView}>
        <View style={styles.ninthPageSameContainerTwo}>
          <View style={styles.ninthPageSameContainerTwoFirstView}>
            <Text style={styles.ninthPageSameContainerTwoFirstViewText}>
              القائمة الأولي
            </Text>
          </View>
          <View style={styles.ninthPageFirstSpacer}></View>
          <View style={styles.ninthPageSameContainerTwoSecondView}>
            <View style={styles.ninthPageEnglishTextViewOne}>
              <Text style={styles.ninthPageSameContainerTwoSecondViewText}>
                Pylon Cover
              </Text>
            </View>
            <View style={styles.ninthPageSpacerView}></View>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue =>
                this.setState({ toggleCheckBox: newValue })
              }
            />
          </View>
          <View style={styles.ninthPageSameContainerTwoSecondView}>
            <View style={styles.ninthPageEnglishTextView}>
              <Text style={styles.ninthPageSameContainerTwoSecondViewText}>
                Side Frame
              </Text>
            </View>
            <View style={styles.ninthPageSpacerView}></View>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxOne}
              onValueChange={newValue =>
                this.setState({ toggleCheckBoxOne: newValue })
              }
            />
          </View>
          <View style={styles.ninthPageSameContainerTwoSecondView}>
            <View style={styles.ninthPageEnglishThirdTextView}>
              <Text style={styles.ninthPageSameContainerTwoThirdViewText}>
                Stickers
              </Text>
            </View>
            <View style={styles.ninthPageSpacerView}></View>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxTwo}
              onValueChange={newValue =>
                this.setState({ toggleCheckBoxTwo: newValue })
              }
            />
          </View>
          <View style={styles.ninthPageSameContainerTwoSecondView}>
            <View style={styles.ninthPageEnglishTextViewTwo}>
              <Text style={styles.ninthPageSameContainerTwoSecondViewText}>
                ATM Code
              </Text>
            </View>
            <View style={styles.ninthPageSpacerView}></View>

            <CheckBox
              disabled={false}
              value={toggleCheckBoxThree}
              onValueChange={newValue =>
                this.setState({ toggleCheckBoxThree: newValue })
              }
            />
          </View>
        </View>

        <View style={styles.ninthPageSameContainerTwo}>
          <View style={styles.ninthPageSameContainerTwoFirstView}>
            <Text style={styles.ninthPageSameContainerTwoFirstViewText}>
              القائمة الثانية
            </Text>
          </View>
          <View style={styles.ninthPageFirstSpacer}></View>
          <View style={styles.ninthPageSameContainerTwoSecondView}>
            <View style={styles.ninthPageEnglishTextViewOne}>
              <Text style={styles.ninthPageSameContainerTwoSecondViewText}>
                Pylon Cover
              </Text>
            </View>
            <View style={styles.ninthPageSpacerView}></View>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxFour}
              onValueChange={newValue =>
                this.setState({ toggleCheckBoxFour: newValue })
              }
            />
          </View>
          <View style={styles.ninthPageSameContainerTwoSecondView}>
            <View style={styles.ninthPageEnglishTextView}>
              <Text style={styles.ninthPageSameContainerTwoSecondViewText}>
                Side Frame
              </Text>
            </View>
            <View style={styles.ninthPageSpacerView}></View>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxFive}
              onValueChange={newValue =>
                this.setState({ toggleCheckBoxFive: newValue })
              }
            />
          </View>
          <View style={styles.ninthPageSameContainerTwoSecondView}>
            <View style={styles.ninthPageEnglishThirdTextView}>
              <Text style={styles.ninthPageSameContainerTwoThirdViewText}>
                Stickers
              </Text>
            </View>
            <View style={styles.ninthPageSpacerView}></View>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxSix}
              onValueChange={newValue =>
                this.setState({ toggleCheckBoxSix: newValue })
              }
            />
          </View>
          <View style={styles.ninthPageSameContainerTwoSecondView}>
            <View style={styles.ninthPageEnglishTextViewTwo}>
              <Text style={styles.ninthPageSameContainerTwoSecondViewText}>
                ATM Code
              </Text>
            </View>
            <View style={styles.ninthPageSpacerView}></View>

            <CheckBox
              disabled={false}
              value={toggleCheckBoxSeven}
              onValueChange={newValue =>
                this.setState({ toggleCheckBoxSeven: newValue })
              }
            />
          </View>
        </View>
        <View style={{ height: hp(8) }}></View>

        <TouchableOpacity style={styles.bottomButton}>
          <View>
            <Text style={styles.buttonBottomText}>تاكيد</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default NinthPage;
