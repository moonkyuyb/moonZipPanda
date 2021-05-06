import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const SwiperContainer = styled.View`
	height: ${windowWidth};
`
export const SliderBox = styled.View`
	height: 100%;
	max-height: 500;
`

export const SliderImg = styled.Image`
	width: 100%;
	height: 100%;
	max-height: 500;
`
export const PaginationBox = styled.View`
	position: absolute;
	bottom: 13;
	right: 29;
`
export const PaginationText = styled.Text`
	color: ${Colors.whiteColor};
	font-weight: 600;
	font-size: 13;
`
export const SwiperFullBtn = styled.TouchableOpacity`
	position: absolute;
	bottom: 36;
	right: 20;
	z-index: 9;
`
export const FullImg = styled.Image`
	width: 40;
	height: 40;

`