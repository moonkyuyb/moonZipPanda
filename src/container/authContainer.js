import { connect } from 'react-redux';

import SignInScreen from "../screen/SignInScreen";

import { authSignIn, verifyToken } from "../reducers/authReducer";
import { showAlertMessage } from "../reducers/modalReducer";

const authStateToProps = (state) => {
	return{
		token: 			state.authReducer.token,
		verifiedToken:	state.authReducer.verifiedToken,
		alertMessage: 	state.modalReducer.alertMessage,
	}
}

const authDispatchToProps = (dispatch) => {
	return{
		authSignIn: 		(payload) => {dispatch(authSignIn(payload))},
		verifyToken:		(payload) => {dispatch(verifyToken(payload))},
		showAlertMessage:	(payload) => {dispatch(showAlertMessage(payload))},
	}
}

export const SignInContainer = connect(authStateToProps, authDispatchToProps)(SignInScreen)
