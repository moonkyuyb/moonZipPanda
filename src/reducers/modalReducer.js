// ✔ TYPE & ACTIONS //////////////////////////////////////////////////////////
export const SHOW_ALERT_MESSAGE = 'modal/SHOW_ALERT_MESSAGE'
export const ALL_MODAL_ACTIONS = [ SHOW_ALERT_MESSAGE ]

export const showAlertMessage = (payload) => {
	return( dispatch => {
		dispatch({
			type: SHOW_ALERT_MESSAGE,
			payload: payload
		})
	})
}

// ✔ INITIAL STATE ///////////////////////////////////////////////////////////
const initialState = {
	alertMessage:''
}

// ✔ REDUCER /////////////////////////////////////////////////////////////////
const modalReducer = (state=initialState, action)=>{
	switch(action.type){
		case SHOW_ALERT_MESSAGE:
		return Object.assign({}, state, {
			alertMessage: action.payload
		})

		default: return Object.assign({}, state)
	}
}

export default modalReducer