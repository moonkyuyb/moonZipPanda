import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView , Button} from 'react-native';

import { 
	CenterWrap, 
	Container, 
	GoHomeBox, 
	GoHomeText, 
	Image20, 
	TextLight16,
 } from '../../styles/CommonStyle';

import { 
	SplashLogo,
	SplashTextBox,
	SplashText,
	SplashFooter,
	SplashFooterLogo
 } from '../../styles/splashStyle/splashStyle';

const HomeIcon = () => (<Image20 source={require('../../../assets/img/drawable-xhdpi/img_intro_logo.png')} />)
const Construction = props => {
	return (
		<Container yellow>
			<CenterWrap>
				<SplashLogo source={require('../../../assets/img/drawable-xhdpi/img_intro_logo.png')} />
				<SplashTextBox>
					<SplashText source={require('../../../assets/img/drawable-xhdpi/text_intro.png')} />
				</SplashTextBox>
			</CenterWrap>
			<SplashFooter>
				<TextLight16>온라인 부동산 직거래 플랫폼</TextLight16>
				<SplashFooterLogo source={require('../../../assets/img/drawable-xhdpi/img_logo_ybn.png')} />

			</SplashFooter>
		</Container>

	);
};
export default Construction;

