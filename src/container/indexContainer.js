import { connect } from 'react-redux';

import IndexScreen from "../screen/IndexScreen";

import { getSalesList } from "../reducers/indexReducer";
import { authSignIn, verifyToken } from "../reducers/authReducer";
import { showAlertMessage } from "../reducers/modalReducer";

const indexStateToProps = (state) => {
	return{
		salesList: 		state.indexReducer.salesList,
		token: 			state.authReducer.token,
		verifiedToken:	state.authReducer.verifiedToken,
		alertMessage: 	state.modalReducer.alertMessage,
	}
}

const indexDispatchToProps = (dispatch) => {
	return{
		getSalesList: 		(payload) => {dispatch(getSalesList(payload))},
		authSignIn: 		(payload) => {dispatch(authSignIn(payload))},
		verifyToken:		(payload) => {dispatch(verifyToken(payload))},
		showAlertMessage:	(payload) => {dispatch(showAlertMessage(payload))},
	}
}

export const IndexContainer = connect(indexStateToProps, indexDispatchToProps)(IndexScreen)
