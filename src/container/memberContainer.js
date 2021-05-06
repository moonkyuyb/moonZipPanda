import { connect } from 'react-redux';

import SignUpScreen from "../screen/SignUpScreen";

import { signUpEmail } from "../reducers/memberReducer";
import { showAlertMessage } from "../reducers/modalReducer";

const memberStateToProps = (state) => {
	return{
		name:			state.memberReducer.name,
		username:		state.memberReducer.username,
		regDate:		state.memberReducer.regDate,
		navigateTo:		state.memberReducer.navigateTo,
		alertMessage:	state.modalReducer.alertMessage,
	}
}

const memberDispatchToProps = (dispatch) => {
	return{
		signUpEmail :		(payload) => {dispatch(signUpEmail(payload))},
		showAlertMessage:	(payload) => {dispatch(showAlertMessage(payload))},
	}
}

export const SignUpContainer = connect(memberStateToProps, memberDispatchToProps)(SignUpScreen)
