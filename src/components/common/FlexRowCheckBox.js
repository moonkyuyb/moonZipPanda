import React from 'react';
import { FlexRowBtn, Image24, TextLight12 } from '../../styles/CommonStyle';

const FlexRowCheckBox = (props) => {
	const ChkBtn 		= () => ( <Image24 source={require('../../../assets/img/drawable-xhdpi/bt_combo_off.png')}/> )
	const ChkBtnActive	= () => ( <Image24 source={require('../../../assets/img/drawable-xhdpi/bt_combo_on.png')}/> )

	return(
		<FlexRowBtn {...props}>
			{props.value ? <ChkBtnActive/> : <ChkBtn/>}<TextLight12>{props.title?props.title:''}</TextLight12>
		</FlexRowBtn>
	)
}

export default FlexRowCheckBox;