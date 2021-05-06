import styled from 'styled-components/native';
import Colors from './Colors';

//Completedpw style
export const SignUpCContainer = styled.View`
	height: 100%;
	padding-top: 42px;
	padding-left: 20px;
	padding-right: 20px;
`
export const SignUpLogoImage = styled.Image`
	width: 137px;
	height: 60px;
	margin: 0 auto;
`
export const SignUpCText = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 24px;
`
export const SignUpInfoBox = styled.View`
	width: 100%;
	margin-top: 18px;
`
export const SignUpInfoList = styled.View`
	flex-direction: row;
	width: 100%;
	height: 60px;
	padding: 0 18px;
	border-radius: 12px;
	justify-content: flex-start;
	align-items: center;
	background-color: ${Colors.whiteColor};
	box-shadow: 4px 4px 6px rgba(0,0,0,0.15);
	margin-bottom: 4px;
`
export const SignUpInfoTextBox = styled.View`
	margin-left: 14px;

`

export const GohomeWrap = styled.View`
	margin-top: 40%;
`