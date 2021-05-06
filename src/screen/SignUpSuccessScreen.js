/* COMMON */
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

/* UI COMPONENTS */
import { Image32, TextLight11, TextBold18, TextLight18, TextBold15, Container, GoHomeBox, GoHomeText, Image20 } from './../styles/CommonStyle';
import { SignUpCContainer, SignUpLogoImage, SignUpCText, SignUpInfoBox, SignUpInfoList, SignUpInfoTextBox, GohomeWrap, } from '../styles/signUpSuccessStyle';
import PointText from '../components/PointText'

const SignUpSuccessScreen = (props) => {

	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()

	return(
		<Container>
			<SignUpCContainer>
				<SignUpLogoImage source={require('../../assets/img/drawable-xhdpi/img_logo_en_01.png')} />
				<SignUpCText>
					<TextLight18>환영합니다</TextLight18>
					<PointText><TextBold18>{route.params.name}님,</TextBold18><TextLight18>회원가입이 완료되었습니다</TextLight18></PointText>
				</SignUpCText>
				<SignUpInfoBox>
					<SignUpInfoList>
						<Image32 source={require('../../assets/img/drawable-xhdpi/icon_login_id.png')} />
						<SignUpInfoTextBox>
							<TextLight11>아이디(이메일)</TextLight11>
							<TextBold15>{route.params.username}</TextBold15>
						</SignUpInfoTextBox>
					</SignUpInfoList>
					<SignUpInfoList>
						<Image32 source={require('../../assets/img/drawable-xhdpi/icon_login_calendar.png')} />
						<SignUpInfoTextBox>
							<TextLight11>가입일자</TextLight11>
							<TextBold15>{route.params.regDate}</TextBold15>
						</SignUpInfoTextBox>
					</SignUpInfoList>
				</SignUpInfoBox>
				<GohomeWrap>
					<GoHomeBox onPress={() => navigation.navigate('signIn')}>
						<Image20 source={require('../../assets/img/drawable-xhdpi/icon_home.png')}/>
						<GoHomeText>로그인하기</GoHomeText>
					</GoHomeBox>
				</GohomeWrap>
			</SignUpCContainer>
		</Container>
	)
}
export default SignUpSuccessScreen;