import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const StepCont = styled.View`
	padding-left: 20px;
	padding-right: 20px;
`
export const StepContBorder = styled(StepCont)`
  	border-bottom-width: 5px;
	border-bottom-color: ${Colors.borderBottomColors};
`

export const TitleBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-top: 24px;
	padding-bottom: 4px;
	border-bottom-color: ${Colors.blackColor};
  	border-bottom-width: 0.5px;
	margin-bottom: 10px;
`
export const Title = styled.Text`
	font-size: 14px;
	font-weight: 600;
`
export const RadioTitleBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	margin-top: 4px;
`

export const RadioBox = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin-left: 4px;
`
export const RadioBoxMarginN = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin-left: -4px;
`
export const RadioLable = styled.Text`
	font-size: 12px;
`

export const SubTitle = styled.Text`
	font-size: 12px;
	font-weight: ${Platform.OS == 'android' ? 'bold' : 600};
	margin-bottom: 10px;
	margin-top: 14px;
`

// required
export const TextRequiredS = styled.Text`
	font-size: 10px;
	font-weight: 300;
`
export const RequiredS = styled.Text`
	color: ${Colors.redColors};
	font-size: 11px;
	font-weight: 300;
`


//list
export const FlexRowBox = styled.View`
	flex-direction: row;
	align-items: center;
`
export const ItemList2Box = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-right: 4px;
`

export const Item2RowBox = styled.View`
	width: 50%;
	margin-right: 4px;
`
export const Item2RowBoxInput = styled.TextInput`
	border: 1px solid ${Colors.borderLightColors};
	width: 50%;
	margin-right: 4px;
	height: 34px;
	margin-bottom: 4px;
	font-size: 12px;
	padding: 0 11px;

`

export const SelectHalfBox = styled.View`
	width: 50%;
	margin-right: 4px;
	height: 34px;
	padding: 0 9px;
	border: 1px solid ${Colors.borderLightColors};
	margin-bottom: 4px;
	overflow: hidden;
`

export const ViewBorder = styled.View`
	font-size: 12px;
	width: 100%;
	height: 34px;
	border: 0.5px solid ${Colors.borderLightColors};
	padding: 0 9px;
	margin-bottom: 4px;
	overflow: hidden;
`
export const InputBorder = styled.TextInput`
	font-size: 12px;
	width: 100%;
	height: 34px;
	padding-top: 0;
	padding-bottom: 0;
	border: 0.5px solid ${Colors.borderLightColors};
	padding: 0 9px;
	margin-bottom: 4px;
`
export const BtnBorder = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	font-size: 12px;
	width: 100%;
	height: 34px;
	padding-top: 0;
	padding-bottom: 0;
	border: 0.5px solid ${Colors.borderLightColors};
	padding: 0 9px;
	margin-bottom: 4px;
	color: red;
`


export const YellowBtn = styled.TouchableOpacity`
	position: absolute;
	right: 4px;
	top: 4px;
	line-height: 40px;
	font-size: 12px;
	height: 26px;
	width: 60px;
	background-color: ${Colors.mainColor};
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	border-width: 0.5px;
	border-color: ${Colors.blackColor};
`
export const YellowBtnText = styled.Text`
	font-size: 11px;
	font-weight: 300;
`
export const ItemTextR = styled.Text`
	position: absolute;
	right: 9px;
	top: 0;
	line-height: 34px;
	font-size: 12px;
	font-weight: 300;
`
export const ItemText = styled.Text`
	font-size: 12px;
	width: 100%;
`

export const ItemRowList = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
export const DateTextTextL = styled.Text`
	position: absolute;
	left: 9px;
	top: 0;
	line-height: 34px;
	font-size: 12px;
    font-weight: 300;
`


