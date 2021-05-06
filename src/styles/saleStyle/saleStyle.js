import React from 'react';
import styled from 'styled-components/native';
import Colors from '../Colors';

//PandaTalk
export const PandaTalkWrap = styled.TouchableOpacity`
	bottom: 0;
	width: 100%;
	background-color: ${Colors.whiteColor};
	height: 48;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	box-shadow : 3px 3px 7px rgba(0,0,0,0.4);
	elevation: 10;
	z-index: 999;
`
export const PandaBox = styled.View`
	padding: 0 14px;
`
export const PandaTextBox = styled.View`
	flex: auto;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	background-color: ${Colors.mainColor};
	padding-left: 16;
	padding-right: 12;
`
export const Tri = styled.View`
	position: absolute;
	top: 50%;
	left: -6; 
	margin-top: -4;
	width: 0;
	height: 0px;
	border-top-width: 6;
	border-top-color: rgba(0,0,0,0);
	border-right-width: 6;
	border-right-color: ${Colors.mainColor};
	border-bottom-width: 6;
	border-bottom-color: rgba(0,0,0,0);
`
//top
export const SaleHeader = styled.View`
	border-bottom-width: 5;
	border-bottom-color: ${Colors.borderBottomColors};
	
`
export const SaleInfoBox01 = styled.View`
	padding-left: 20;
	padding-right: 20;
	padding-top: 20;
	padding-bottom: 24;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
export const SaleInfoBox02 = styled.View`
	flex-direction: row;
	border-top-width: 0.5;
	border-top-color: ${Colors.borderColor};
	border-bottom-width: 0.5;
	border-bottom-color: ${Colors.borderColor};
`
export const InfoBox02 = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	width: 50%;
	height: 77;
	border-right-width: ${props => props.first ? 0.5 : 0};
	border-right-color: ${Colors.borderColor};
`

export const YellowBox = styled.View`
	width: 52;
	height: 52;
	background-color: ${Colors.mainColor};
	justify-content: center;
	align-items: center;
	border-radius: 11;
	margin-right: 12;
`
export const ZzimBtn = styled.TouchableOpacity`

`
export const PriceText = styled.Text`
	font-size: 28;
	font-weight: 600;
	margin-top: 3;
`
export const SizeUnit = styled.TouchableOpacity`
	
`
export const ImgSizeUnit01 = styled.Image`
	width: 26;
	height: 28;
`
export const ImgSizeUnit02 = styled.Image`
	width: 26;
	height: 28;
`



//시설정보
export const SaleInfoContainer = styled.View`
	padding-top: 8;
	padding-bottom: 14;
`
export const SaleInfoListBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	display: ${props => props.tabIndex == props.activeTab ? 'flex' : 'none'  };
`
export const SaleInfoList = styled.View`
	min-width: 55;
	align-items: center;
	margin-bottom: 10;
	opacity: ${props => props.Inactive ? 0.5 : 1};
`
export const SaleIcon = styled.View`
	justify-content: center;
	align-items: center;
	width: 48;
	height: 48;
	border-radius: 50;
	border-width: 0.5;
	border-color: ${Colors.boxlineColors};
	margin-bottom: 8;
`
export const SaleIconN = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 48;
	height: 48;
	border-radius: 50;
	border-color: ${Colors.blackColor};
	margin-bottom: 8;
`


//grey box
export const GreyItemBox = styled.View`
	flex-wrap: wrap;
  	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 34;
	margin-top: 8;
`
export const GreyListBox = styled.View`
	flex-basis: ${props => props.BlockBox ? '100%' : '49.5%' };
	height: 48;
	justify-content: center;
  	border-radius: 3;
	margin-bottom: 4;
	padding: 0 12px;
	background-color: ${Colors.borderBottomColors};
	/* flex-direction: column; */
`
export const GreyItemLable = styled.Text`
	font-size: 12;
	font-weight: 300;
	margin-bottom: 6;

`

//SaleDescription
export const TitleGreyBox = styled.View`
	border: 1px solid red;
	color: ${Colors.textNonColors};
	font-size: 11;
	font-weight: 300;
`
export const GreyTextMargin = styled.View`
	margin-left: 8 ;
`
export const GreyText = styled.Text`
	color: ${Colors.textNonColors};
	font-size: 11;
	font-weight: 300;
`
export const SaleDescription = styled.View`
	flex-direction: column;
	padding: 8px 20px 34px 20px;
`
export const DescriptionList = styled.View`
	margin-bottom: 4;
`
export const TextDot = styled.View`
	position: absolute;
	top: 6;
	left: -10;
	border-radius: 50;
	background-color: ${Colors.blackColor};
	width: 3;
	height: 3;
`
export const OptionItemBox = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	padding-bottom: 30;
	padding-top: 8;
`
export const OptionListActive = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-width: 58;
	padding: 0 15px;
	border: 0.5px solid ${Colors.blackColor};
	height: 34;
	margin-right: 4;
	background-color: ${Colors.mainColor};
	margin-bottom: 4;
`
//Lessor
export const YellowLessorInfo = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${Colors.mainColor};
	padding: 11px 35px;
	border-bottom-width: 5;
	border-bottom-color: ${Colors.borderBottomColors};
`
export const LessorInfoBox = styled.View`
	border-bottom-width: ${props => props.first ? 0.5 : 0 };
	border-bottom-color: ${Colors.blackColor};
	width: 100%;
	flex-direction: row;
	padding: 15px 1px;
	align-items: center;
`
export const LessorTextBox = styled.View`
	margin-left: 14;

`
