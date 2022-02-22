import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

export const firstPageStyles = StyleSheet.create({
  firstPageFirstView: {
    flex: 1,
  },

  firstPageSecondView: {
    backgroundColor: '#ffffff',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstPageFirstText: {
    color: '#1d1d1d',
    fontSize: 30,
    paddingBottom: 15,
    fontFamily: 'Tajawal-Bold',
  },
  firstPageSecondText: {
    paddingTop: 25,
    color: '#030303',
    fontSize: 14,
    paddingBottom: 10,
    fontFamily: 'Tajawal-Bold',
  },
  firstPageView: {
    flexDirection: 'row',
  },
  firstPageThirdText: {
    color: '#030303',
    fontSize: 15,
    fontFamily: 'Tajawal-Bold',
  },
  firstPageFourthText: {
    color: '#cbcbcb',
    fontSize: 15,
    fontFamily: 'Tajawal-Bold',
  },
  primaryButton: {
    backgroundColor: '#3c245f',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    height: hp(9),
    width: wp(90),
    alignSelf: 'center',
  },
  firstPageFifthText: {
    color: '#ffffff',
    fontSize: 15,
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },

  secondPageView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  secondPageItemView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 40,
  },

  secondPageFirstView: {
    flex: 1,
  },
  secondPageSecondView: {
    backgroundColor: '#ffffff',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondPageFirstText: {
    color: '#1d1d1d',
    fontSize: 30,
    paddingBottom: 15,
    fontFamily: 'Tajawal-Bold',
  },
  secondPageSecondText: {
    paddingTop: 25,
    color: '#6f6f6f',
    fontSize: 14,
    paddingBottom: 15,
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: 20,
  },
  secondPageViewOne: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  secondPageRoundedContainerOne: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#D3D3D3',
  },
  secondPageRoundedContainerTwo: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#D3D3D3',
  },
  secondPageRoundedContainerThree: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#3c245f',
  },
  secondPageBottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  secondPageThirdView: {
    backgroundColor: '#3c245f',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderTopRightRadius: 50,
  },
  secondPageFifthText: {
    color: '#ffffff',
    fontSize: 15,

    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  secondPageFourthView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  secondPageSixthText: {
    color: '#2d2a2a',
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  secondPageSeventhText: {
    color: '#e8272d',
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  thirdPageView: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    flex: 1,
  },
  thirdPageSecondView: {
    backgroundColor: '#ffffff',
    flex: 6,
  },
  thirdPageFirstText: {
    paddingTop: 25,
    color: '#030303',
    fontSize: 14,
    paddingBottom: 30,
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: 20,
  },
  thirdPageSecondText: {
    color: '#3c245f',
    fontSize: 13,
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: 20,
  },
  thirdPageFirstTextInput: {
    borderBottomColor: '#3c245f',
    borderBottomWidth: 1.5,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  thirdPageThirdText: {
    color: '#6b6b6b',
    fontSize: 13,
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: 20,
  },
  thirdPageIconDirection: {
    width: '100%',
    alignItems: 'flex-end',
  },
  thirdPageIcon: {
    marginHorizontal: 10,
  },
  thirdPageSecondTextInput: {
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1.5,
    marginHorizontal: 10,
    marginBottom: 25,
  },
  thirdPageFifthView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  thirdPageSeventhView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thirdPageSixthView: {
    borderColor: '#d2d2d2',
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 10,
  },
  thirdPageEighthText: {
    color: '#030303',
    marginLeft: 5,
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  thirdPagePasswordView: {
    justifyContent: 'center',
  },
  thirdPagePasswordText: {
    color: '#3c245f',
    marginLeft: 5,
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  thirdPageBottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  thirdPageThirdView: {
    backgroundColor: '#3c245f',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginHorizontal: 20,
  },
  thirdPageFifthText: {
    color: '#ffffff',
    fontSize: 18,
  },
  fourthPageView: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    flex: 1,
  },
  fourthPageSecondView: {
    backgroundColor: '#ffffff',
    flex: 6,
  },
  fourthPageFirstText: {
    paddingTop: 25,
    color: '#030303',
    fontSize: 14,
    paddingBottom: 30,
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: 20,
  },
  fourthPageImageView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  fourthPageLineView: {
    width: '70%',
    marginBottom: 10,
  },
  fourthPageFirstLine: {
    color: '#e8272d',

    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  fourthPageRowView: {
    marginLeft: 20,
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginBottom: 40,
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
    color: '#3c245f',

    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fourthPageMessageLineView: {
    marginTop: 3,
    height: 3,
    width: 102,
    backgroundColor: '#3c245f',
  },
  fourthPageBottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  fourthPageThirdView: {
    backgroundColor: '#3c245f',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginHorizontal: 20,
  },
  fourthPageFifthText: {
    color: '#ffffff',
    fontSize: 18,

    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  fifthPageItemView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 5,
  },
  fifthPageSeventhText: {
    color: '#e8272d',
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
    marginLeft: 20,
  },

  fifthPagePersonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 8,
  },
  fifthPageFirstImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  fifthPageContainerView: {
    marginLeft: 20,
  },

  fifthPageFirstContainerText: {
    color: '#030303',

    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageSecondContainerText: {
    color: '#030303',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageCircleStyle: {
    position: 'absolute',
    left: -3,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  fifthPageColoredContainer: {
    width: '100%',

    flexDirection: 'row',
    marginBottom: 5,
  },
  fifthPageFirstColoredContainer: {
    backgroundColor: '#e8272d',
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  fifthPageFirstColoredText: {
    color: '#ffffff',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
    marginBottom: 5,
  },
  fifthPageSecondColoredText: {
    color: '#ffffff',

    fontSize: 19,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageSecondColoredContainer: {
    backgroundColor: '#3c245f',
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  fifthPageThirdColoredContainer: {
    backgroundColor: '#f2a400',
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fifthPageThirdColoredText: {
    color: '#000000',

    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageFourthColoredText: {
    color: '#000000',

    fontSize: 19,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageColoredContainerTwo: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fifthPageColoredContainerTwoFirstText: {
    color: '#e8272d',

    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
    marginLeft: 15,
  },
  fifthPageColoredContainerTwoSecondText: {
    color: '#e8272d',

    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
    marginRight: 15,
  },
  fifthPageRequestContainer: {
    height: 200,
    marginHorizontal: 15,
    borderRadius: 30,
    elevation: 20,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  fifthPageRequestContainerOne: {
    marginHorizontal: 5,
  },
  fifthPageRequestContainerFirstText: {
    color: '#030303',

    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageRequestContainerSecondText: {
    color: '#6f6f6f',

    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageInnerRequestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  fifthPageInnerRequestContainerOne: {
    flex: 1,
  },
  fifthPageInnerRequestContainerFirstText: {
    color: '#100e0e',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageInnerRequestContainerSecondText: {
    color: '#259146',

    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageInnerRequestContainerTwo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  fifthPageInnerRequestContainerThirdView: {
    width: '100%',
    alignItems: 'center',
  },
  fifthPageInnerRequestContainerThirdText: {
    color: '#100e0e',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageInnerRequestContainerFourthView: {
    width: '93%',
    alignItems: 'center',
  },
  fifthPageInnerRequestContainerFourthText: {
    color: '#0d204c',

    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageInnerRequestContainerOne: {
    flex: 1,
  },
  fifthPageInnerRequestContainerFithText: {
    color: '#100e0e',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageInnerRequestContainerSixthText: {
    color: '#d65c20',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageRedText: {
    color: '#e8272d',
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  fifthPagePersonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fifthPagePersonFirstText: {
    color: '#030303',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPagePersonSecondText: {
    color: '#030303',

    fontSize: 10,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  fifthPageIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
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
  sixthPageView: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  sixthPagePersonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 8,
    marginBottom: 20,
  },
  sixthPagePersonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sixthPageFirstImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  sixthPageContainerView: {
    marginLeft: 20,
  },
  sixthPageContainerViewFirstText: {
    color: '#030303',

    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  sixthPageContainerViewSecondText: {
    color: '#030303',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  sixthPageArrowView: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: '#3c245f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sixthPageRequestContainerOne: {
    marginHorizontal: 5,
  },
  sixthPageRequestContainerOneFirstView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  sixthPageSecondTextInView: {
    color: '#030303',

    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  sixthPageRequestContainerFirstText: {
    color: '#afafaf',

    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  sixthPageRequestContainerSecondText: {
    color: '#6f6f6f',
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: 15,
    marginBottom: 5,
    lineHeight: 20,
  },
  sixthPageConditionView: {
    flexDirection: 'row',

    justifyContent: 'center',
    marginBottom: 25,
  },
  sixthPageAcceptView: {
    backgroundColor: '#55ce5d',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 90,
    flexDirection: 'row',
    marginRight: 5,
  },
  sixthPageAcceptViewOne: {
    marginLeft: 3,
  },
  sixthPageAcceptTextOne: {
    color: '#ffffff',

    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
  sixthPageRefuseView: {
    backgroundColor: '#f05959',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 90,
    flexDirection: 'row',
    marginLeft: 5,
  },
  sixthPageFirstTextInContainerView: {
    color: '#030303',

    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },

  sixthPageSecondTextInContainerView: {
    color: '#030303',

    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
    paddingRight: 7,
  },
  sixthPageArrowViewOne: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: '#4b504d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sixthPageBottomView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 150,
    width: '100%',
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  sixthPageInnerBottomView: {
    flexDirection: 'row',
    height: '100%',
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  sixthPageFirstBottomText: {
    color: '#3c245f',

    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  sixthPageSecondBottomText: {
    color: '#928989',

    fontSize: 10,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  seventhPageView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  seventhPageFirstView: {
    height: 170,
    backgroundColor: '#3c245f',
    justifyContent: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
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
    height: '60%',
    borderRadius: 20,
    marginHorizontal: 20,
    position: 'relative',
    bottom: -50,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    paddingTop: 10,
    paddingLeft: 10,
  },
  seventhPageInnerFirstView: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
  },
  seventhPageInnerSecondView: {
    height: 70,
    width: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  seventhPageFirstContainer: {
    flexDirection: 'row',
  },
  seventhPageFirstTextInContainer: {
    color: '#3c245f',

    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  seventhPageSecondContainer: {
    flexDirection: 'row',
  },
  seventhPageSecondTextInContainer: {
    color: '#a6a6a6',

    fontSize: 11,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  seventhPageSameContainerOne: {
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
  seventhPageSameContainerTwo: {
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
  eighthPageView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  eighthPageItemView: {
    flexDirection: 'row',

    alignItems: 'center',
    margin: 20,
  },
  eighthPageListView: {
    height: 80,
    alignItems: 'center',
    marginBottom: 25,
  },
  eighthPageListViewContainer: {
    width: '60%',
    borderRadius: 22,
    height: '100%',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    flexDirection: 'row',
  },
  eighthPageListViewFirstContainer: {
    width: 80,

    height: 60,
    borderWidth: 1,
    backgroundColor: '#3c245f',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  eighthPageListViewFirstContainerText: {
    color: 'white',

    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  eighthPageListViewSecondContainer: {
    width: 80,

    height: 60,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  eighthPageListViewSecondContainerText: {
    color: '#1d1c1c',

    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'Tajawal-Bold',
  },
  eighthPageIconViewContainer: {
    height: 60,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 20,

    borderWidth: 1,
    borderColor: '#e7e7e7',
  },
  eighthPageIconViewFirstContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  eighthPageIconViewFirstContainerText: {
    color: '#454f63',

    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Tajawal-Bold',
    marginHorizontal: 20,
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
    flex: 1,
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
    backgroundColor: 'white',
    height: 200,
    borderRadius: 20,
    marginHorizontal: 20,

    borderWidth: 1,
    borderColor: '#e7e7e7',

    marginTop: 5,
    marginBottom: 10,
  },
  ninthPageSameContainerTwoFirstView: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ninthPageSameContainerTwoFirstViewText: {
    color: '#1d1c1c',
    marginLeft: 22,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Tajawal-Bold',
  },
  ninthPageFirstSpacer: {
    width: '100%',
    height: 1,
    backgroundColor: '#e7e7e7',
  },
  ninthPageSameContainerTwoSecondView: {
    flex: 1,
    flexDirection: 'row',

    paddingHorizontal: 20,
  },
  ninthPageEnglishTextViewOne: {
    flex: 1.1,
    alignItems: 'flex-start',
  },
  ninthPageSameContainerTwoSecondViewText: {
    color: '#4a4a4a',

    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Roboto-Bold',
  },
  ninthPageSpacerView: {
    flex: 3,
  },
  ninthPageSameContainerTwoInnerView: {
    height: 30,
    width: 30,
    backgroundColor: '#238b43',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  ninthPageEnglishTextView: {
    flex: 1.3,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  ninthPageSameContainerTwoInnerViewTwo: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e7e7e7',
  },
  ninthPageEnglishThirdTextView: {
    paddingLeft: 23,
    flex: 1.1,
    alignItems: 'flex-start',
  },
  ninthPageSameContainerTwoThirdViewText: {
    color: '#4a4a4a',

    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Roboto-Bold',
  },
  ninthPageEnglishTextViewTwo: {
    flex: 1.3,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  ninthPageSameContainerTwoSecondViewText: {
    color: '#4a4a4a',

    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Roboto-Bold',
  },
  ninthPageThirdView: {
    backgroundColor: '#3c245f',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginHorizontal: 20,
  },
  ninthPageFifthText: {
    color: '#ffffff',
    fontSize: 18,

    fontWeight: 'bold',
    fontFamily: 'Tajawal-Bold',
  },
});
