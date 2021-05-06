import React from 'react';
import styled from 'styled-components/native';
import Colors from '../Colors';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');
const MapHeight = (Dimensions.get('window').width * 0.644444);


//MapCont
export const MapContBorder = styled.View`
	

`
export const MapHeader = styled.View`

`
export const MapBtnBox = styled.View`
	flex-direction: row;
	padding: 0 20px;
	border-bottom-width: 1;
	border-bottom-color: ${Colors.boxlineColors};
	justify-content: space-between;


`
export const MapBtn = styled.TouchableOpacity`
	/*  props.tabIndex = 2
		props.activeTab = 0. 1. 2 */
	flex-basis: 33.333%;
	padding-top: 23;
	padding-bottom: 6;
	justify-content: center;
	align-items: center;
	border-bottom-width: ${props => props.tabIndex  == props.activeTab ? 2 : 0};
	border-bottom-color: ${Colors.blackColor};
`
export const MapBtnText = styled.Text`
	font-size: 13;
	font-weight: ${props => props.tabIndex  == props.activeTab ? 600 : 300};

`
export const MapContBox = styled.View`
	padding: 0 20px;
	padding-top: 18;
	padding-bottom: 14;
`
export const Map = styled.View`
	height: ${MapHeight};
	max-height: 500;
	
`
export const MapPickerImg = styled.Image`
	width: 24;
	height: 28;
	
`
export const MapFooter = styled.View`
	flex-direction: row;
	background-color: ${Colors.chatNoticeColors};
	align-items: center;
	padding: 11px 13px;
	padding-right: 30;
	
`
export const MapFooterImg = styled.Image`
	width: 13;
	height: 14;
	margin: 0 7px;
`
export const MapFooterText = styled.Text`
	font-weight: 500;
	font-size: 14;
	color: ${Colors.whiteColor};
`
