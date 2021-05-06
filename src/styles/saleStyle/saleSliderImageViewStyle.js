import React from 'react';
import styled from 'styled-components/native';
import Colors from '../Colors';

export const PreView = styled.View`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 96;
	width: 100%;
	background-color: ${Colors.whiteColor};
	/* padding: 0 14px; */
	z-index: 999;
`

export const PreViewImg = styled.Image`
	width: 68;
	height: 68;
	border-radius: 10;
	margin-right: 8;

`
