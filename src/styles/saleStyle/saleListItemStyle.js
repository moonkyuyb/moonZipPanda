import React from 'react';
import styled from 'styled-components/native';
import Colors from '../Colors';

export const ZipItemBox = styled.View`
	padding: 0 20px;
	flex-direction: column;
`
export const ZipItemList = styled.View`
	flex-direction: ${props => props.flexcolumn ? 'column' : 'row' };
	justify-content: space-between;
	align-items: ${props => props.topAlign ? 'flex-start' : 'center'};
	text-align: center;
	padding: 20px 0;
	border-bottom-width: 0.5;
	border-bottom-color: ${Colors.borderBottomColors};
`
export const ZipInfoWrap = styled.View`
	flex-direction: row;
	flex: auto;
`
export const ZipInfoBox = styled.View`
	flex: auto;
	padding-right: 10;
`
export const ZipName = styled.Text`
	font-size: 10;
	font-weight: ${Platform.OS === 'android' ? 'bold' : 500 };
`
export const ZipPriceBox = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 2px;	
	margin-bottom: 6;
`
export const ZipTagBox = styled.View`
	flex-direction: row;
	margin-top: 6;
`
export const ZipTag = styled.View`
	font-size: 10;
	font-weight: 300;
	padding: 3px 10px;
	background-color: ${ props => props.yellow ? Colors.mainColor: Colors.borderLightColors};
	margin-right: 2;
	border-radius: 5;
	overflow: hidden;
`
export const ZipImgBox = styled.View`
	width: ${props => props.small ? 69 : 94};
	height: ${props => props.small ? 69 : 94};
	overflow: hidden;
	border-radius: 12;
`
export const ZzimBtnBox = styled.TouchableOpacity`
	position: absolute;
	top: 6;
	right: 6;
	width: 24;
	height: 24;
	z-index: 99;
	border-radius: 50;
	overflow: hidden;
`
export const ZipImg = styled.Image`
	width: 100%;
	height: 100%;
	border-radius: 12;
`
export const DealingBgBox = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 12;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,0.4);
`

