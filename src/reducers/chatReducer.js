/* ENVIRONMENTS */
import { API_URL } from "@env";

/* OTHER REDUCER ACTIONS & COMMON UTILS */
import { fetchWithTimeout } from '../utils/networking/NetworkRequest';
import { SHOW_ALERT_MESSAGE } from "../reducers/modalReducer";
import _ from 'lodash';

// ✔ TYPE & ACTIONS //////////////////////////////////////////////////////////
export const QUE_MESSAGE = "chat/QUE_MESSAGE"
export const RETRY_MESSAGE = "chat/RETRY_MESSAGE"
export const SELECT_MESSAGE_LIST = "chat/SELECT_MESSAGE_LIST"
export const REFRESH_MESSAGE_LIST = "chat/REFRESH_MESSAGE_LIST"
export const REMOVE_MESSAGE_LIST = "chat/REMOVE_MESSAGE_LIST"
export const ALL_CHAT_ACTIONS = [ QUE_MESSAGE, RETRY_MESSAGE, SELECT_MESSAGE_LIST, REFRESH_MESSAGE_LIST, REMOVE_MESSAGE_LIST, SHOW_ALERT_MESSAGE ]

export const queMessage = (payload) => {
	console.log("== ✔ QUE MESSAGE ACTION");
	return(dispatch=>{
		//STATE에 메세지 등록
		dispatch({ type: QUE_MESSAGE, payload: payload})

		fetchQueMessage(payload)
		.then(() =>{ //발송 성공 시
			payload.ct_failed = 0
			payload.ct_successed = 1
			dispatch({ type: REFRESH_MESSAGE_LIST, payload: payload })
		})
		.catch((err) => { //발송 실패 시
			console.log("== ❌ CHAT ACTION ERROR\n" + err);
			payload.ct_failed = 1
			payload.ct_successed = 0
			dispatch({ type: REFRESH_MESSAGE_LIST, payload: payload })
		})
	})
}

export const retryMessage = (payload) => {
	console.log("== ✔ RETRY MESSAGE ACTION");
	return(dispatch=>{
		payload.ct_failed = 0
		payload.ct_successed = 0
		dispatch({ type: REFRESH_MESSAGE_LIST, payload: payload })

		fetchQueMessage(payload)
		.then(() =>{ //발송 성공 시
			console.log('✔SUCCESS');
			const newPayload = Object.assign([],payload)
			newPayload.ct_failed = 0
			newPayload.ct_successed = 1
			dispatch({ type: REMOVE_MESSAGE_LIST, payload: payload })
			dispatch({ type: QUE_MESSAGE, payload: newPayload})
			dispatch({ type: REFRESH_MESSAGE_LIST, payload: null })
		})
		.catch((err) => { //발송 실패 시
			console.log("== ❌ CHAT ACTION ERROR\n" + err);
			payload.ct_failed = 1
			payload.ct_successed = 0
			dispatch({ type: REFRESH_MESSAGE_LIST, payload: payload })
		})
	})
}

export const selectMessageList = (payload) => {
	console.log("== ✔ SELECT MESSAGE LIST ACTION");
	return(dispatch=>{
		fetchSelectMessageList(payload)
		.then((result)=>{
			console.log("✔SUCCESS");
			dispatch({type: SELECT_MESSAGE_LIST,payload: result})
		})
		.catch((err) => { //발송 실패 시
			console.log("== ❌ CHAT ACTION ERROR\n" + err);
		})
	})
}

export const refreshMessageList = (payload) => {
	console.log("== ✔ REFRESH MESSAGE LIST ACTION");
	return(dispatch=>dispatch({
		type: REFRESH_MESSAGE_LIST,
		payload: payload
	}))
}

export const removeMessageList = (payload) => {
	console.log("== ✔ REMOVE MESSAGE LIST ACTION");
	return(dispatch=>dispatch({
		type: REMOVE_MESSAGE_LIST,
		payload: payload
	}))
}

export const showErrPopup = (payload) => {
	payload = payload.toString()
	return(dispatch=>dispatch({
		type:SHOW_ALERT_MESSAGE,
		payload:payload
	}))
}

const fetchQueMessage = (payload) => {
	console.log("✔fetchQueMessage");
	const promisedFetch = new Promise((resolve, reject)=>{
		const body = JSON.stringify({
			d_id: payload.d_id,
			m_id_from: payload.m_id_from,
			m_id_to: payload.m_id_to,
			ct_message: payload.ct_message,
			ct_successed: 0,
			ct_failed: 0,
		})
		fetch(API_URL+'/chat/send/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: body
		})
		.then(response=>{
			response.json().then((result)=>{
				if(response.ok) resolve(result)
				else reject(new Error(result.msg))
			})
		})
	})
	return fetchWithTimeout(promisedFetch, 7000)
}

const fetchSelectMessageList = (payload) => {
	console.log("✔fetchSelectMessageList");
	const promisedFetch = new Promise((resolve, reject)=>{
		const body = JSON.stringify({
			d_id: payload.d_id,
			m_id_from: payload.m_id_from,
			m_id_to: payload.m_id_to,
		})
		fetch(API_URL+'/chat/list/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: body
		})
		.then(response=>{
			response.json().then((result)=>{
				if(response.ok) resolve(result)
				else reject(new Error(result.msg))
			})
		})
	})
	return fetchWithTimeout(promisedFetch, 7000)
}

// ✔ INITIAL STATE ///////////////////////////////////////////////////////////
const initialState = {
	d_id: 1, m_id_from: 1, m_id_to: 2,
	messageList: [],
	errorMessage: '',
}

// ✔ REDUCER /////////////////////////////////////////////////////////////////
const chatReducer = (state=initialState, action)=>{
	var messageList;
	switch(action.type){
		case QUE_MESSAGE:
		console.log("== ✔ QUE MESSAGE REDUCER")
		messageList = Object.assign([],state.messageList)
		messageList.push(action.payload)
		return(Object.assign({},state,{
			messageList: messageList
		}))
		
		case RETRY_MESSAGE:
		console.log("== ✔ RETRY MESSAGE REDUCER")
		return(Object.assign({},state,{
			messageList: messageList
		}))

		case SELECT_MESSAGE_LIST:
		console.log("== ✔ SELECT MESSAGE LIST REDUCER");
		messageList = Object.assign([],action.payload.results)
		return(Object.assign({},state,{
			messageList: messageList
		}))

		case REFRESH_MESSAGE_LIST:
		console.log("== ✔ REFRESH MESSAGE LIST REDUCER");
		messageList = Object.assign([],state.messageList)
		return(Object.assign({},state,{
			messageList: messageList
		}))

		case REMOVE_MESSAGE_LIST:
		console.log("== ✔ REMOVE MESSAGE LIST REDUCER");
		messageList = Object.assign([],state.messageList)
		_.remove(messageList, item=>item==action.payload)
		return(Object.assign({},state,{
			messageList: messageList
		}))

		default: return Object.assign({}, state)
	}
}

export default chatReducer