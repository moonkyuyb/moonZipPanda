import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Colors from './Colors';

export const ScrollViewWrap = styled.ScrollView`
	padding: 0 20px;
`
export const PwInfoText = styled.Text`
	font-size: 11px;
	color: #2ea7df;
  	font-weight: 500;
`
export const TermsListBox = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 6px 0;
`
export const TermsViewBtn = styled.TouchableOpacity`
	border: 0.5px solid ${Colors.blackColor};
	padding: 6px 10px;
  	border-radius: 3px;
`
export const TermsViewText = styled.Text`
	font-size: 11px;
  	font-weight: 600;
`
