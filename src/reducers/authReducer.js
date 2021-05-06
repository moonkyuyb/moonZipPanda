/* ENVIRONMENTS */
import { API_URL } from "@env";

/* OTHER REDUCER ACTIONS & COMMON UTILS */
import { encryptWithSHA256 } from '../utils/common';
import { fetchWithTimeout } from '../utils/networking/NetworkRequest';
import { SHOW_ALERT_MESSAGE } from "../reducers/modalReducer";

// ✔ TYPE & ACTIONS //////////////////////////////////////////////////////////
export const AUTH_SIGN_IN = 'auth/AUTH_SIGN_IN'
export const VERIFY_TOKEN = 'auth/VERIFY_TOKEN'
export const ALL_AUTH_ACTIONS = [ AUTH_SIGN_IN, VERIFY_TOKEN ]

export const authSignIn = (payload) => {
	console.log(API_URL);
	return(dispatch=>{
		fetchMember(payload)
		.then(result=>dispatch({
			type:AUTH_SIGN_IN,
			payload:result
		}))
		.catch(err=>{
			console.log("== ❌ AUTH ACTION ERROR: " + err);
			dispatch({
				type:SHOW_ALERT_MESSAGE,
				payload:err.message.toString()
			})
		})
	})
}

export const verifyToken = (payload) => {
	return(dispatch=>{
		fetchToken(payload)
		.then(result=>dispatch({
			type:VERIFY_TOKEN,
			payload:result
		}))
		.catch(err=>{
			console.log("== ❌ AUTH ACTION ERROR: " + err);
			dispatch({
				type:SHOW_ALERT_MESSAGE,
				payload:err.message.toString()
			})
		})
	})
}

const fetchMember = (payload) => {
	const promisedFetch = new Promise((resolve, reject)=>{
		fetch(API_URL+'/auth/signin', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				m_username: payload.username,
				m_password: encryptWithSHA256(payload.password),
				m_auth_provider: payload.auth_provider
			})
		})
		.then(responce=>{
			responce.json().then((result)=>{
				if(responce.ok) resolve(result)
				else reject(new Error(result.msg))
			})
		})
	})
	return fetchWithTimeout(promisedFetch, 5000)
}

const fetchToken = (payload) => {
	const promisedFetch = new Promise((resolve, reject)=>{
		fetch(API_URL+'/auth/token', {
			method: 'POST',
			headers: new Headers ({
				'Authorization': 'Bearer '+payload,
			}),
		})
		.then(responce=>{
			responce.json().then((result)=>{
				if(responce.ok) resolve(result)
				else reject(new Error(result.msg))
			})
		})
	})
	return fetchWithTimeout(promisedFetch, 5000)
}

// ✔ INITIAL STATE ///////////////////////////////////////////////////////////
const initialState = {
	token: '',
	verifiedToken: '',
}

// ✔ REDUCER /////////////////////////////////////////////////////////////////
const authReducer = (state=initialState, action)=>{
    switch(action.type){
		case AUTH_SIGN_IN:
		return Object.assign({},state,{
			token: action.payload.token,
		})

		case VERIFY_TOKEN:
		return Object.assign({},state,{
			verifiedToken: action.payload
		})

        default:
        return Object.assign({}, state)
    }
}

export default authReducer