import styled from 'styled-components/native';
import Colors from './Colors';
import { Dimensions } from 'react-native';

const SNSSignInWidth = (Dimensions.get('window').width / 2) - 42;

export const SignInWrapper = styled.SafeAreaView`
	width: 100%;
`
//SignIn input Box
export const SignInInputBox = styled.View`
	width: 100%;
`
export const SignInInputList = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 46px;
	margin-bottom: 17px;
	border-bottom-color: ${Colors.blackColor};
  	border-bottom-width: 0.5px;
	flex: auto;
`
export const SignInInput = styled.TextInput`
	flex: auto;
	text-align: right;
`
//SignIn 로그인상태유지 / 비밀번호 잊으셨나요
export const SignInInfoBox = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 9px;
	margin-bottom: 35px;
`

//SignIn btn

export const SignInBtn = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	background-color: ${props => props.signUp ? Colors.blackColor : Colors.mainColor };
	margin-top: ${props => props.signUp ? 8 : 0 }px;
	border-radius: 12px;
  	box-shadow: 2px 2px 4px rgba(192, 192, 192, 0.5);
`
export const SignInBtnText = styled.Text`
	font-size: 13px;
 	font-weight: bold;
	color: ${props => props.signUp ? Colors.mainColor : Colors.blackColor };
`

// SNS
export const SNSSignInBox = styled.View`
	margin-top: 52px;
`
export const SNSSignInInner = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 4px;
`
export const SNSSignInBtn = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	width: ${SNSSignInWidth}px;
	height: 64px;
    border-radius: 8px;
	border: 0.5px solid ${Colors.borderColor};
	margin-right: ${props => props.SNSSignInR ? 0 : 4}px;
	padding-left: 12px;
`
export const SNSText = styled.Text`
	font-size: 11px;
	font-weight: 500;
	padding-left: 8px;
`