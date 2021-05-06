import React from 'react';
import { TouchableOpacity } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import { Image24, TextBold13, TextBold14 } from '../../styles/CommonStyle';
import ModalStyle, { ModalTextCont, ModalContainer, ModalBtnBox, ModalBtn, ModalHeader } from '../../styles/modalStyle';
import { showAlertMessage } from '../../reducers/modalReducer';

const ModalPopup = (props) => {

	const alertMessage = useSelector((state)=>state.modalReducer.alertMessage)
	const dispatch = useDispatch()

	return(
		<Modal isVisible={alertMessage?true:false} style={ModalStyle.Modal}>
			<ModalContainer>
				<ModalHeader>
					<TextBold13>{''}</TextBold13>
					<TouchableOpacity onPress={()=>{dispatch(showAlertMessage(''))}}><Image24 source={require('../../../assets/img/drawable-xhdpi/bt_menu_close.png')}/></TouchableOpacity>
				</ModalHeader>
				<ModalTextCont>
					<TextBold14>{alertMessage}</TextBold14>
				</ModalTextCont>
				<ModalBtnBox>
					<ModalBtn onPress={()=>{dispatch(showAlertMessage(''))}}><TextBold13 whiteTit>확인</TextBold13></ModalBtn>
				</ModalBtnBox>
			</ModalContainer>
		</Modal>
	)
}

export default ModalPopup