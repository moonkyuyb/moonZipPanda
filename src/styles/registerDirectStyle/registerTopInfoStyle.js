import styled from 'styled-components/native';
import Colors from '../Colors';

export const StepInfoCont = styled.View`
	background-color: #f7f7f7;
	padding: 0 20px;
`
export const InfoTitleBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-top: 24px;
	padding-bottom: 4px;
	border-bottom-color: ${Colors.blackColor};
  	border-bottom-width: 0.5px;
`
export const StepNum = styled.Text`
	font-size: 11px;
`
export const NoticeItem = styled.View`
	padding-right: 20px;
	padding-bottom: 11px;
	padding-top: 18px;
`
export const NoticeList = styled.View`
	flex-direction: row;
	margin-bottom: 11px;
`
export const NoticeTit = styled.Text`
	margin-left: 3px;
	line-height: 16px;
	font-size: 11px;
`
export const YellowBgText = styled.Text`
	background-color: ${Colors.mainColor};
	font-weight: 500;
`
export const ChkImg = styled.Image`
	width: 20px;
	height: 20px;
	margin-top: -2px;
`
export const Title = styled.Text`
	font-size: 14px;
	font-weight: 700;
`;
export const InfoChkBox = styled.View`
	flex-direction: row;
	margin-bottom: 36px;
	margin-top: 8px;
	padding-right: 20px;
`
export const InfoChkText = styled.Text`
	font-size: 10px;
	font-weight: 200;
	line-height: 16px;
	padding-Left: 2px;
`
