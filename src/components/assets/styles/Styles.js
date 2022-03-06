import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;
export const colorNumberOne = "#ffffff";
export const colorNumberTwo = "#3c245f";
export const colorNumberThree = "#2d2a2a";
export const colorNumberFour = "#6f6f6f";
export const colorNumberFive = "#e8272d";
export const colorNumberSix = "#6b6b6b";
export const colorNumberSeven = "#e0e0e0";
export const colorNumberEight = "#f2a400";

export const colorNumberNine = '#000000';
export const colorNumberTen = "#100e0e";
export const colorNumberEelven = "#259146";
export const colorNumberTwelve = "#0d204c";
export const colorNumberThirteen = "#d65c20";
export const colorNumberFourteen = "#f2f2f2";
export const colorNumberFifteen = "#928989";
export const colorNumberSixteen = '#afafaf';
export const colorNumberSeventeen = '#55ce5d';
export const colorNumberEighteen = '#f05959';
export const colorNumberNineteen = '#4b504d';
export const colorNumberTwenty = '#e7e7e7';
export const colorNumberTwentyOne = '#a6a6a6';
export const colorNumberTwentyTwo = '#1d1c1c';
export const colorNumberTwentyThree = '#454f63';
export const colorNumberTwentyFour = '#4a4a4a';
export const textColorOne = "#030303";

export const fontNumberOne = "Tajawal-Medium";
export const fontNumberTwo = "Tajawal-Bold";
export const fontNumberThree = "Tajawal-Light";
export const fontNumberFour = "Tajawal-Regular";

export const styles = StyleSheet.create({
  firstPageFirstView: {
    backgroundColor: colorNumberOne,

    height: hp(100),
  },

  firstPageSecondView: {
    backgroundColor: colorNumberOne,


    height: hp(90),
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstPageFirstText: {
    color: '#1d1d1d',
    fontSize: hp(5),
    paddingBottom: hp(3),
    fontFamily: fontNumberOne,
  },
  firstPageSecondText: {
    paddingTop: hp(8),
    color: textColorOne,
    fontSize: hp(2.5),
    paddingBottom: hp(3),
    fontFamily: fontNumberTwo,
  },
  firstPageView: {
    flexDirection: 'row',
    width: wp(35),
    justifyContent: "space-between",
  },
  firstPageThirdText: {
    color: textColorOne,
    fontSize: hp(2.5),
    fontFamily: fontNumberOne,
  },
  firstPageFourthText: {
    color: '#cbcbcb',
    fontSize: hp(2.5),
    fontFamily: fontNumberThree,
  },
  primaryButton: {
    backgroundColor: colorNumberTwo,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    height: hp(10),
    width: wp(90),
    alignSelf: 'center',
  },
  firstPageFifthText: {
    color: colorNumberOne,
    fontSize: hp(2.8),

    fontFamily: fontNumberTwo,
  },

  buttonBottomText: {
    color: colorNumberOne,
    fontSize: hp(2.8),

    fontFamily: fontNumberTwo,
  },
  secondPageItemView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 40,
  },

  secondPageFirstView: {
    // flex: 1,
    height: hp(93),
    backgroundColor: colorNumberOne,


  },
  secondPageSecondView: {
    backgroundColor: '#ffffff',
    // flex: 6,
    height: "90%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondPageFirstText: {
    color: colorNumberThree,
    fontSize: hp(3.5),

    fontFamily: 'Tajawal-Bold',
    paddingTop: hp(2),
    paddingBottom: hp(2),
  },
  secondPageSecondText: {

    color: colorNumberFour,
    fontSize: hp(2.5),
    lineHeight: hp(3.5),

    fontFamily: 'Tajawal-Regular',
    paddingHorizontal: wp(6),
  },



  secondPageBottom: {

    height: "10%",
    flexDirection: 'row',
    backgroundColor: colorNumberOne,


  },
  secondPageThirdView: {
    backgroundColor: '#3c245f',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(50),
    borderTopRightRadius: wp(9),
  },
  secondPageFifthText: {
    color: colorNumberOne,
    fontSize: hp(2.5),

    fontFamily: 'Tajawal-Bold',
  },
  secondPageFourthView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colorNumberOne,
    width: wp(50),

  },
  secondPageSixthText: {
    color: colorNumberThree,
    marginLeft: wp(1.5),
    fontSize: hp(2.5),
    fontFamily: 'Tajawal-Bold',
  },
  secondPageSeventhText: {
    color: '#e8272d',
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },

  thirdPageItemView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 40,
  },
  thirdPageSeventhText: {
    color: '#e8272d',
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  thirdPageFirstView: {
    height: hp(93),
    backgroundColor: colorNumberOne,
  },
  thirdPageSecondView: {
    backgroundColor: colorNumberOne,
    height: "90%",
    paddingTop: hp(8),
  },
  thirdPageFirstText: {
    color: textColorOne,
    fontSize: hp(2),
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: wp(5),
    marginBottom: hp(3),
  },

  thirdPageFirstTextInput: {
    borderBottomColor: colorNumberTwo,

    marginHorizontal: wp(5),
    marginBottom: hp(2),
    backgroundColor: colorNumberOne,
  },

  thirdPageIconDirection: {
    width: '100%',
    alignItems: 'flex-end',
  },
  thirdPageIcon: {
    marginHorizontal: 10,
  },
  thirdPageSecondTextInput: {
    marginHorizontal: wp(5),


    marginBottom: 25,
    backgroundColor: colorNumberOne,

  },
  thirdPageFifthView: {
    flexDirection: 'row',
    marginHorizontal: wp(5),
    justifyContent: 'space-between',
  },
  thirdPageSeventhView: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  thirdPageEighthText: {
    color: textColorOne,
    marginLeft: wp(1),
    fontSize: hp(1.6),
    fontFamily: " Tajawal-Medium",
  },
  thirdPagePasswordView: {
    justifyContent: 'center',
  },
  thirdPagePasswordText: {
    color: colorNumberTwo,
    fontSize: hp(1.6),
    fontFamily: 'Tajawal-Medium',
  },

  thirdPageThirdView: {
    height: "10%",

    backgroundColor: colorNumberTwo,
    justifyContent: 'center',
    alignItems: 'center',

    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    marginHorizontal: wp(5),
  },
  thirdPageFifthText: {
    color: colorNumberOne,
    fontSize: hp(2.5),
    fontFamily: "Tajawal-Bold",
  },

  fourthPageItemView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 40,
  },
  fourthPageSeventhText: {
    color: '#e8272d',
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  fourthPageFirstView: {
    height: hp(93),
    paddingTop: hp(9),
    backgroundColor: colorNumberOne,
  },
  fourthPageSecondView: {
    backgroundColor: colorNumberOne,
    height: "90%",
  },
  fourthPageFirstText: {
    color: textColorOne,
    fontSize: hp(1.9),
    marginBottom: hp(2),
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: wp(5),
  },
  fourthPageImageView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: hp(6),
  },
  fourthPageLineView: {
    width: '70%',
    marginBottom: hp(1),
    backgroundColor: "yellow",
  },
  fourthPageFirstLine: {
    color: colorNumberFive,

    fontSize: hp(2.8),
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },

  textInputView: {
    marginHorizontal: wp(12),
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginBottom: hp(7),
  },
  firstTextInputView: {
    borderBottomColor: colorNumberFive,
    borderBottomWidth: hp(.6),
  },
  secondTextInputView: {
    borderBottomColor: colorNumberSeven,
    borderBottomWidth: hp(.6),
  },
  fourthPageSecondLineView: {
    backgroundColor: '#e0e0e0',
    height: 5,
    width: 50,
  },
  fourthPageFirstLineView: {
    height: 5,
    width: 50,
    backgroundColor: '#e8272d',
  },
  fourthPageMessageView: {
    width: '100%',
    alignItems: 'center',
  },
  fourthPageMessageText: {
    color: colorNumberTwo,

    fontSize: hp(2.3),

    fontFamily: 'Tajawal-Medium',
  },
  fourthPageMessageLineView: {
    marginTop: hp(.7),
    height: hp(.3),
    width: wp(19),
    backgroundColor: colorNumberTwo,
  },
  fourthPageBottom: {
    height: "10%",
    flexDirection: 'row',
    backgroundColor: colorNumberOne,
    marginHorizontal: wp(3),
  },
  fourthPageThirdView: {
    backgroundColor: colorNumberTwo,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),

  },
  fourthPageFifthText: {
    color: colorNumberOne,
    fontSize: hp(2.9),

    fontFamily: 'Tajawal-Bold',
  },
  fifthPageView: {
    height: hp(100),
    backgroundColor: colorNumberOne,

  },
  fifthPageItemView: {
    flexDirection: 'row',
    backgroundColor: colorNumberOne,
    alignItems: 'center',
    marginHorizontal: wp(4),
  },
  fifthPageSeventhText: {
    color: colorNumberFive,
    fontSize: hp(3.2),
    fontFamily: 'Tajawal-Bold',
    marginLeft: wp(4),
  },

  fifthPagePersonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(4),
    marginBottom: hp(3),
    marginTop: hp(2.2),
  },
  fifthPageFirstImage: {
    height: hp(8),
    width: hp(8),
    borderRadius: hp(4),

  },
  fifthPageIconContainer: {
    height: hp(6),
    width: hp(6),
    borderRadius: hp(3),
    marginHorizontal: wp(4),
    borderColor: colorNumberFourteen,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: hp(.1),
  },
  fifthPageIconContainerView: {
    flexDirection: "row",
  },
  fifthPageContainerView: {
    marginLeft: wp(3),
  },

  fifthPageFirstContainerText: {
    color: textColorOne,

    fontSize: hp(2),

    fontFamily: 'Tajawal-Bold',
  },
  fifthPageSecondContainerText: {
    color: textColorOne,

    fontSize: hp(1.9),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPageCircleViewStyle: {
    marginRight: wp(6),
  },
  fifthPageCircleStyle: {
    position: 'absolute',
    left: hp(-.4),
    height: hp(1.8),
    width: hp(1.8),
    borderRadius: hp(.9),
    backgroundColor: 'black',
  },
  fifthPageColoredContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: hp(3),

  },
  fifthPageFirstColoredContainer: {
    backgroundColor: colorNumberFive,
    height: hp(12),
    width: wp(26),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(7),
    marginRight: wp(3),
  },
  fifthPageFirstColoredText: {
    color: colorNumberOne,

    fontSize: hp(1.6),

    fontFamily: 'Tajawal-Medium',
    marginBottom: hp(.5),
  },
  fifthPageSecondColoredText: {
    color: colorNumberOne,

    fontSize: hp(2.5),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPageSecondColoredContainer: {
    backgroundColor: colorNumberTwo,
    height: hp(12),
    width: wp(26),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(3),
  },
  fifthPageThirdColoredContainer: {
    backgroundColor: '#f2a400',
    height: hp(12),
    width: wp(26),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  fifthPageThirdColoredText: {
    color: colorNumberNine,

    fontSize: hp(1.6),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPageFourthColoredText: {
    color: colorNumberNine,

    fontSize: hp(2.5),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPageColoredContainerTwo: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1.5),
  },
  fifthPageColoredContainerTwoFirstText: {
    color: colorNumberFive,

    fontSize: hp(1.9),

    fontFamily: 'Tajawal-Bold',
    marginLeft: wp(7),
  },
  fifthPageColoredContainerTwoSecondText: {
    color: colorNumberFive,

    fontSize: hp(1.9),

    fontFamily: 'Tajawal-Bold',
    marginRight: wp(9),
  },
  fifthPageRequestContainer: {
    height: hp(25),
    marginHorizontal: wp(7),
    borderRadius: wp(7),
    elevation: hp(3),
    justifyContent: 'space-around',
    backgroundColor: colorNumberOne,
  },
  fifthPageRequestContainerOne: {
    marginHorizontal: wp(4),
  },
  fifthPageRequestContainerFirstText: {
    color: textColorOne,

    fontSize: hp(2.2),

    fontFamily: 'Tajawal-Bold',
  },
  fifthPageRequestContainerSecondText: {
    color: colorNumberFour,

    fontSize: hp(1.9),
    lineHeight: hp(2.9),
    fontFamily: 'Tajawal-Regular',
  },
  fifthPageInnerRequestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(4),


  },
  fifthPageInnerRequestContainerOne: {
    flex: 1,

  },
  fifthPageInnerRequestContainerFirstText: {
    color: colorNumberTen,

    fontSize: hp(1.8),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPageInnerRequestContainerSecondText: {
    color: colorNumberEelven,

    fontSize: hp(1.8),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPageInnerRequestContainerTwo: {
    flex: 1,


  },
  fifthPageInnerRequestContainerThirdView: {
    width: '100%',
    alignItems: 'center',
  },
  fifthPageInnerRequestContainerAlignView: {
    width: "100%",
    alignItems: "flex-start",
  },
  fifthPageInnerRequestContainerThirdText: {
    color: colorNumberTen,

    fontSize: hp(1.8),

    fontFamily: 'Tajawal-Medium',

  },
  fifthPageInnerRequestContainerFourthView: {
    width: '93%',
    alignItems: 'center',
  },
  fifthPageInnerRequestContainerFourthText: {
    color: colorNumberTwelve,

    fontSize: hp(1.8),

    fontFamily: 'Tajawal-Regular',

  },

  fifthPageInnerRequestContainerFithText: {
    color: colorNumberTen,

    fontSize: hp(1.8),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPageInnerRequestContainerSixthText: {

    color: colorNumberThirteen,

    fontSize: hp(1.8),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPageRedText: {
    color: colorNumberFive,
    marginTop: hp(2),
    fontSize: hp(1.9),

    fontFamily: 'Tajawal-Bold',
    marginLeft: wp(7),
    marginTop: hp(2),
  },
  fifthPagePersonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fifthPagePersonFirstText: {
    color: textColorOne,

    fontSize: hp(1.85),

    fontFamily: 'Tajawal-Medium',
  },
  fifthPagePersonSecondText: {
    color: textColorOne,

    fontSize: hp(1.79),

    fontFamily: 'Tajawal-Regular',
  },

  fifthPageIconTwoContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: 'white',
  },
  fifthPageBottomView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 150,
    width: '100%',
    borderColor: '#928989',
    borderWidth: 1,
  },
  fifthPageInnerBottomView: {
    flexDirection: 'row',
    height: '100%',
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },

  fifthPageFirstBottomText: {
    color: '#3c245f',

    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageSecondBottomText: {
    color: '#928989',

    fontSize: 10,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },

  sixthPageItemView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 30,
  },
  sixthPageSeventhText: {
    color: '#e8272d',
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
    marginLeft: 20,
  },
  sixthPageView: {
    height: hp(93),
    backgroundColor: colorNumberOne,
  },
  sixthPagePersonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(3),
    marginTop: wp(3),
    marginBottom: wp(7),
  },
  sixthPagePersonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sixthPageFirstImage: {
    height: hp(8),
    width: hp(8),
    borderRadius: hp(4),
  },
  sixthPageContainerView: {
    marginLeft: wp(3),
  },
  sixthPageContainerViewFirstText: {
    color: textColorOne,

    fontSize: hp(2),

    fontFamily: 'Tajawal-Bold',
  },
  sixthPageContainerViewSecondText: {
    color: textColorOne,

    fontSize: hp(1.9),

    fontFamily: 'Tajawal-Medium',
  },
  sixthPageArrowView: {
    height: hp(3),
    width: hp(3),
    borderRadius: hp(1.5),
    backgroundColor: colorNumberTwo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sixthPageRequestContainerOne: {
    marginHorizontal: wp(3),
    marginBottom: hp(3.5),
  },
  sixthPageRequestContainerOneFirstView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: hp(1.5),
  },
  sixthPageSecondTextInView: {
    color: textColorOne,

    fontSize: hp(2),
    fontFamily: 'Tajawal-Bold',
  },
  sixthPageRequestContainerFirstText: {
    color: colorNumberSixteen,

    fontSize: hp(1.7),

    fontFamily: 'Tajawal-Regular',
  },
  sixthPageRequestContainerSecondText: {
    color: colorNumberFour,
    fontSize: hp(1.9),

    fontFamily: 'Tajawal-Regular',


    lineHeight: hp(2.7),
  },
  sixthPageConditionView: {
    flexDirection: 'row',

    justifyContent: 'center',
    marginBottom: hp(4),
  },
  sixthPageAcceptView: {
    backgroundColor: colorNumberSeventeen,
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    width: hp(15),
    flexDirection: 'row',
    marginRight: wp(3),
  },
  sixthPageAcceptViewOne: {
    marginLeft: wp(2),
  },
  sixthPageAcceptTextOne: {
    color: colorNumberOne,

    fontSize: hp(2),

    fontFamily: 'Tajawal-Bold',




  },
  sixthPageRefuseView: {
    backgroundColor: colorNumberEighteen,

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',


    borderRadius: wp(3),
    height: hp(5),
    width: hp(15),

  },
  sixthPageFirstTextInContainerView: {
    color: textColorOne,

    fontSize: hp(2),

    fontFamily: 'Tajawal-Bold',
  },

  sixthPageSecondTextInContainerView: {
    color: textColorOne,

    fontSize: hp(1.9),

    fontFamily: 'Tajawal-Medium',
    paddingRight: wp(1),
  },
  sixthPageArrowViewOne: {

    backgroundColor: colorNumberNineteen,
    justifyContent: 'center',
    alignItems: 'center',


    height: hp(3),
    width: hp(3),
    borderRadius: hp(1.5),


  },


  seventhPageHeader: {
    backgroundColor: colorNumberTwo,
    borderBottomLeftRadius: wp(10),
    borderBottomRightRadius: wp(10),
    justifyContent: "center",
    alignItems: "flex-start",

  },
  animatedView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(2),
  },
  animatedViewText: {
    color: colorNumberOne,
    fontSize: hp(2.5),
    fontFamily: "Tajawal-Bold",
    marginLeft: wp(3),

  },

  seventhPageItemView: {
    flexDirection: 'row',
  },
  seventhPageSeventhText: {
    color: '#ffffff',
    marginLeft: 2,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
    marginLeft: 20,
  },
  seventhPageSecondView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 119,
    borderRadius: 20,
    marginHorizontal: 20,
    position: 'absolute',
    zIndex: 10,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    paddingTop: 10,
    marginHorizontal: 20,

    width: "100%",
    top: -70,

  },
  seventhPageInnerFirstView: {
    height: hp(10),
    width: hp(10),
    borderRadius: hp(5),
    borderWidth: hp(.15),
    borderColor: colorNumberTwenty,
    justifyContent: 'center',

  },
  seventhPageInnerSecondView: {
    height: hp(10),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: wp(3),
  },
  seventhPageFirstContainer: {
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  seventhPageFirstTextInContainer: {
    color: colorNumberTwo,

    fontSize: hp(1.9),
    fontFamily: 'Tajawal-Regular',
    marginLeft: wp(1),
  },
  seventhPageSecondContainer: {
    flexDirection: 'row',
  },
  seventhPageSecondTextInContainer: {
    color: colorNumberTwentyOne,

    fontSize: hp(1.7),
    marginHorizontal: wp(2),

    fontFamily: 'Tajawal-Regular',
  },
  seventhPageSameContainerOne: {
    flexDirection: 'row',
    backgroundColor: colorNumberOne,
    height: hp(15),
    borderRadius: wp(4),
    marginHorizontal: wp(4),

    borderWidth: hp(.15),
    borderColor: colorNumberTwenty,
    alignItems: "center",
    paddingHorizontal: wp(4),
    marginVertical: hp(2),
  },

  eighthPageView: {
    height: hp(93),
    backgroundColor: colorNumberOne,
  },
  eighthPageItemView: {
    flexDirection: 'row',

    alignItems: 'center',
    margin: 20,
  },
  eighthPageListView: {
    height: hp(8),
    alignItems: 'center',
    marginBottom: hp(5),
    backgroundColor: colorNumberOne,
  },
  eighthPageListViewContainer: {
    width: '50%',
    borderRadius: wp(3),
    height: '100%',
    borderWidth: wp(.1),
    borderColor: colorNumberTwenty,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  eighthPageListViewFirstContainer: {
    width: "40%",

    height: "60%",
    borderWidth: wp(.1),
    backgroundColor: colorNumberTwo,
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',

    // marginHorizontal: wp(1.5),
  },
  eighthPageListViewFirstContainerText: {
    color: colorNumberOne,

    fontSize: hp(2),
    fontFamily: 'Tajawal-Regular',
  },
  eighthPageListViewSecondContainer: {
    width: "40%",

    height: "60%",

    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    // marginHorizontal: 10,
  },
  eighthPageListViewSecondContainerText: {
    color: colorNumberTwentyTwo,

    fontSize: hp(2),
    fontFamily: 'Tajawal-Regular',
  },
  eighthPageIconViewContainer: {
    height: hp(8),
    // alignItems: 'center',
    borderRadius: wp(4),
    marginHorizontal: wp(4),

    borderWidth: wp(.1),
    borderColor: colorNumberTwenty,
  },
  eighthPageIconViewFirstContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  eighthPageIconViewFirstContainerText: {
    color: colorNumberTwentyThree,

    fontSize: hp(2.7),
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: wp(3),
  },
  eighthPageSameContainerOne: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 119,
    borderRadius: 20,
    marginHorizontal: 20,

    borderWidth: 1,
    borderColor: '#e7e7e7',
    paddingTop: 10,
    paddingLeft: 10,
    marginTop: 50,
  },
  eighthPageInnerFirstView: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
  },
  eighthPageInnerSecondView: {
    height: 70,
    width: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  eighthPageFirstContainer: {
    flexDirection: 'row',
  },
  eighthPageFirstTextInContainer: {
    color: '#3c245f',

    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  eighthPageSecondContainer: {
    flexDirection: 'row',
  },
  eighthPageSecondTextInContainer: {
    color: '#a6a6a6',

    fontSize: 11,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  eighthPageSameContainerTwo: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 119,
    borderRadius: 20,
    marginHorizontal: 20,

    borderWidth: 1,
    borderColor: '#e7e7e7',
    paddingTop: 10,
    paddingLeft: 10,
    marginTop: 5,
  },
  ninthPageFirstView: {
    height: hp(93),
    backgroundColor: colorNumberOne,
  },
  ninthPageItemView: {
    flexDirection: 'row',

    alignItems: 'center',
    margin: 30,
  },
  ninthPageSeventhText: {
    color: '#e8272d',
    marginLeft: 2,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
    marginLeft: 20,
  },
  ninthPageSameContainerTwo: {
    backgroundColor: colorNumberOne,
    height: hp(30),
    borderRadius: wp(4),
    marginHorizontal: wp(4),

    borderWidth: wp(.1),
    borderColor: colorNumberTwenty,

    marginVertical: hp(2),
  },
  ninthPageSameContainerTwoFirstView: {
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  ninthPageSameContainerTwoFirstViewText: {
    color: colorNumberTwentyTwo,
    marginLeft: wp(4),
    fontSize: hp(2.5),
    fontFamily: 'Tajawal-Medium',
  },
  ninthPageFirstSpacer: {
    width: '100%',
    height: hp(.1),
    backgroundColor: colorNumberTwenty,

  },
  ninthPageSameContainerTwoSecondView: {
    height: hp(5),
    flexDirection: 'row',

    marginHorizontal: wp(4),
  },
  ninthPageEnglishTextViewOne: {
    alignItems: 'flex-start',
  },
  ninthPageSameContainerTwoSecondViewText: {
    color: colorNumberTwentyFour,

    fontSize: hp(2),
    fontFamily: 'Roboto-Light',
  },
  ninthPageSpacerView: {
    flex: 1,
  },

  ninthPageEnglishTextView: {
    alignItems: 'flex-start',
    marginHorizontal: wp(2.1),

  },

  ninthPageEnglishThirdTextView: {
    marginLeft: wp(9),

    alignItems: 'flex-start',
  },
  ninthPageSameContainerTwoThirdViewText: {
    color: colorNumberTwentyFour,

    fontSize: hp(1.8),

    fontFamily: 'Roboto-Light',

  },
  ninthPageEnglishTextViewTwo: {
    marginLeft: hp(2),
    alignItems: 'flex-start',

  },

  bottomButton: {
    backgroundColor: colorNumberTwo,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    height: hp(10),
    width: wp(90),
    alignSelf: 'center',
  },
  ninthPageFifthText: {
    color: colorNumberOne,
    fontSize: hp(2),


    fontFamily: 'Tajawal-Bold',
  },
});
