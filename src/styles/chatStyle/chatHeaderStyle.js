import styled from 'styled-components/native';
import Colors from '../Colors';

export const ChatHeaderContainer = styled.View`
	elevation: 9;
	box-shadow: 3px 3px 3px rgba(0,0,0,0.08);
	z-index: 9;
`

export const ChatSaleTop = styled.View`
	flex-direction: row;
	justify-content: space-between;
	background-color: ${Colors.borderBottomColors};
	height: 78px;
	padding: 4px;
`
export const ChatSaleBtnBox = styled.View`
	flex-direction: column;
`
export const SaleBtn = styled.TouchableOpacity`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 57px;
	height: 35px;
	background-color: ${Colors.whiteColor};
	border: 0.5px solid ${Colors.borderColor};
	border-bottom-width: ${props => props.first ? 0 : 0.5}px;
`
export const BtnText = styled.Text`
	font-size: 9px;
	font-weight: 500;
`

// 메뉴
export const ChatContMenu = styled.View`
	flex-direction: column;
	background-color: ${Colors.whiteColor};
`

export const TitBox = styled.View`
	width: 100%;
	padding-top: 14px;
	padding-left: 20px;
	padding-bottom: 12px;
`
export const TitUnderLine = styled.Text`
	text-decoration: underline;
`
export const ChatMenu = styled.ScrollView`
`
export const OptionListBtn = styled.TouchableOpacity`
	
	justify-content: center;
	align-items: center;
	min-width: 58px;
	padding: 0 15px;
	border: 0.5px solid ${Colors.blackColor};
	height: 34px;
	margin-right: 4px;
	background-color: ${props=> props.Active ? Colors.mainColor : Colors.whiteColor};
	margin-bottom: 4px;
`