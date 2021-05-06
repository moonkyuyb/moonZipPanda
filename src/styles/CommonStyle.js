import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Colors from './Colors';

//container
export const Container = styled.View`
	background-color: ${props => props.yellow ? Colors.mainColor : Colors.whiteColor};
	height: 100%;
`
export const ScrollContainer = styled.ScrollView`
	background-color: ${Colors.whiteColor};
	flex: auto;
`
export const ScrollContainer20 = styled.ScrollView`
	background-color: ${Colors.whiteColor};
	padding-left: 20;
	padding-right: 20;
	flex: auto;
`
export const ScrollContainerB = styled.ScrollView`
	background-color: ${Colors.whiteColor};
	flex: auto;
    border-bottom-width: 5px;
    border-bottom-color: ${Colors.borderBottomColors};
	padding-bottom: 5;
`
export const ScrollContainer20B = styled.ScrollView`
	background-color: ${Colors.whiteColor};
	padding-left: 20;
	padding-right: 20;
	flex: auto;
    border-bottom-width: 5px;
    border-bottom-color: ${Colors.borderBottomColors};
`
export const CenterWrap = styled.SafeAreaView`
	flex: auto;
	justify-content: center;
	align-items: center;
`
//borderBottom 5
export const ContBorder = styled.View`
	padding-left: 20;
	padding-right: 20;
  	border-bottom-width: 5;
	border-bottom-color: ${Colors.borderBottomColors};
`;

//yellow Box
export const YellowBox24 = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${Colors.mainColor};
	padding: 8px 20px 6px 20px;
`;
export const YellowBox20 = styled.View`
	background-color: ${Colors.mainColor};
	padding: 13px 20px 10px 20px;
`;

//cont
export const PaddingH20 = styled.View`
	padding-left: 20;
	padding-right: 20;
	background-color: ${Colors.whiteColor};
	height: 100%;
`

//flex
export const FlexRowBox = styled.View`
	flex-direction: row;
	align-items: center;
`
export const FlexRowBtn = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`
export const FlexBetweenBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`


//Text Box
export const TextBoxR = styled.Text`
	margin-right: 5;
`
export const TextBoxL = styled.Text`
	margin-left: 5;
`


//Text
//22
export const TextBold22 = styled.Text`
	font-size: 22;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
`

//18
export const TextBold18 = styled.Text`
	font-size: 18;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
`

//16
export const TextBold16 = styled.Text`
	font-size: 16;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
	color : ${props => props.whiteTit ? Colors.whiteColor : Colors.blackColor };
`

//15
export const TextBold15 = styled.Text`
	font-size: 15;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
`
//14
export const TextBold14 = styled.Text`
	font-size: 14;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
	color : ${props => props.whiteTit ? Colors.whiteColor : Colors.blackColor };
`

//13
export const TextBold13 = styled.Text`
	font-size: 13;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
	color : ${props => props.whiteTit ? Colors.whiteColor : Colors.blackColor };
`

export const TextLight14 = styled.Text`
	font-size: 14;
	font-weight: 300;
`
//12
export const TextBold12 = styled.Text`
	font-size: 12;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
	line-height: 16;
	color : ${props => props.whiteTit ? Colors.whiteColor : Colors.blackColor };
`
//Text

export const TextMedium12 = styled.Text`
	font-size: 12;
	line-height: 16;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 500 };
`
export const TextLight12 = styled.Text`
	font-size: 12;
	font-weight: 300;
`;

export const TextLight22 = styled.Text`
	font-size: 22;
	font-weight: 300;
`;
//11
export const TextLight11 = styled.Text`
	font-size: 11;
	font-weight: 300;
	line-height: 15;
	color : ${props => props.whiteTit ? Colors.whiteColor : Colors.blackColor };
`
 //10
export const TextLight10 = styled.Text`
	font-size: 10;
	line-height: 15;
	font-weight: 300;
	color : ${props => props.whiteTit ? Colors.whiteColor : Colors.blackColor };
`

//datepicker , selectPicker Icon
export const InputIconS = styled.Image`
	position: absolute;
	width: 24;
	height: 24;
	top: 6;
	right: 8;
	z-index: 99;
`

//YellowBtn
export const YellowBtn = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	border: 0.5px solid ${Colors.blackColor};
	background-color: ${Colors.mainColor};
	border-radius: 3;
	height: 26;
	padding: 0 10px;
`
//WhiteBtn
export const WhiteBtn = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	border: 0.5px solid ${Colors.blackColor};
	background-color: ${Colors.whiteColor};
	border-radius: 3;
	height: 26;
	padding: 0 10px;
`


export const BoldText16 = styled.Text`
	font-size: 16;
	font-weight: 600;
`


export const TextLight13 = styled.Text`
	font-size: 13;
	font-weight: 300;
`


//bottom Btn 
//export const YelloBottomBtn = styled.TouchableOpacity`

export const BottomBtnYello = styled.TouchableOpacity`

	bottom: 0;
	height: 48;
	width: 100%;
	background-color: ${Colors.mainColor};
	justify-content: center;
	align-items: center;
  	box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
	elevation: 10;
`
export const BottomBtnWhite = styled(BottomBtnYello)`
	background-color: ${Colors.whiteColor};
`

//image size
export const Image48 = styled.Image`
	width: 48;
	height: 48;
`
export const Image45 = styled.Image`
	width: 45;
	height: 45;
`
export const Image40 = styled.Image`
	width: 40;
	height: 40;
`
export const Image34 = styled.Image`
	width: 34;
	height: 34;
`
export const Image32 = styled.Image`
	width: 32;
	height: 32;
`
export const Image30 = styled.Image`
	width: 30;
	height: 30;
`
export const Image28 = styled.Image`
	width: 28;
	height: 28;
`
export const Image26 = styled.Image`
	width: 26;
	height: 26;
`


//image size
export const Image24 = styled.Image`
	width: 24;
	height: 24;
`
export const Image20 = styled.Image`
	width: 20;
	height: 20;
`
export const Image18 = styled.Image`
	width: 18;
	height: 18 ;
`
export const Image16 = styled.Image`
	width: 16;
	height: 16;
`
export const Image15 = styled.Image`
	width: 15;
	height: 15;
`
export const Image14 = styled.Image`
	width: 14;
	height: 14;
`
export const Image12 = styled.Image`
	width: 12;
	height: 12;
`

//title
export const TitleBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-top: 24;
	padding-bottom: 4;
	border-bottom-color: ${Colors.blackColor};
  	border-bottom-width: 0.5;
	margin-bottom: 10;
`

export const Title = styled.Text`
	font-size: 14;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
`;
export const SubTitle = styled.Text`
	font-size: 12;
	font-weight: 600;
	margin-bottom: 10;
	margin-top: 14;
`;

//radio
export const RadioTitleBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10;
	margin-top: 4;
`;
export const RadioBox = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin-left: -4;
`;

export const RadioLable = styled.Text`
	font-size: 12;
`;

//border Box
export const InputBorder = styled.TextInput`
	font-size: 12;
	width: 100%;
	height: 34; 
	padding-top: 0;
	padding-bottom: 0;
	border: 0.5px solid ${Colors.borderLightColors};
	padding: 0 9px;
	margin-bottom: 4;
`
export const ViewBorder = styled.View`
	font-size: 12;
	width: 100%;
	height: 34; 
	padding-top: 0;
	align-items: flex-start;
	justify-content: center;
	padding-bottom: 0;
	border: 0.5px solid ${Colors.borderLightColors};
	padding: 0 9px;
	margin-bottom: 4;
`
export const ViewBorderBtn = styled.TouchableOpacity`
	font-size: 12;
	width: 100%;
	height: 34; 
	padding-top: 0;
	align-items: flex-start;
	justify-content: center;
	padding-bottom: 0;
	border: 0.5px solid ${Colors.borderLightColors};
	padding: 0 9px;
	margin-bottom: 4;
`
//Go home
export const GoHomeBox = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	height: 38;
	padding-left: 18;
	padding-right: 20;
	border-radius: 50;
	border-width: 0.5;
	border-color: ${Colors.blackColor};
	background-color: ${Colors.whiteColor};
`
export const GoHomeText = styled.Text`
	font-size: 11;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 600 };
	margin-left: 9;
`

//bottom Btn Box2
export const BottomBtn2Box = styled.View`
	height: 48;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
  	box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
	elevation: 10;
`
export const BottomBtn2 = styled.TouchableOpacity`
	width: 50%;
	height: 48;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.balck ? Colors.blackColor : Colors.mainColor};
`
export const BtnWhiteText = styled.Text`
	font-size: 16;
	font-weight: 600;
	color:  ${Colors.whiteColor};
`
//bottom Btn Box3
export const BottomBtn3Box = styled.View`
	height: 48;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
  	box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
	elevation: 10;
`
export const BottomBtn3 = styled.TouchableOpacity`
	width: 33.333%;
	height: 48;
	justify-content: center;
	align-items: center;
`
export const BottomBtn3W = styled(BottomBtn3)`
	background-color: ${Colors.whiteColor};
`
export const BottomBtn3Y = styled(BottomBtn3)`
	background-color: ${Colors.mainColor};
`
export const BottomBtn3B = styled(BottomBtn3)`
	background-color: ${Colors.blackColor};
	border: 1px solid ${Colors.borderLightColors};
	padding: 0 9px;
	margin-bottom: 4;
`
