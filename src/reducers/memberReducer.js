/* ENVIRONMENTS */
import { API_URL } from "@env";

/* OTHER REDUCER ACTIONS & COMMON UTILS */
import { encryptWithSHA256 } from '../utils/common';
import { fetchWithTimeout } from '../utils/networking/NetworkRequest';
import { SHOW_ALERT_MESSAGE } from "../reducers/modalReducer";

// ✔ TYPE & ACTIONS //////////////////////////////////////////////////////////
export const SIGN_UP_EMAIL = 'member/SIGN_UP_EMAIL'
export const ALL_MEMBER_ACTIONS = [ SIGN_UP_EMAIL ]

export const signUpEmail = (payload) => {
	return(dispatch=>{
		fetchSignUpEmail(payload)
		.then(result=>{
			dispatch({
				type:SIGN_UP_EMAIL,
				payload:payload
			})
		})
		.catch(err=>{
			console.log("== ❌ MEMBER ACTION ERROR: " + err);
			dispatch({
				type:SHOW_ALERT_MESSAGE,
				payload:err.message.toString()
			})
		})
	})
}

const fetchSignUpEmail = (payload) => {
	console.log("✔ API_URL");
	console.log(API_URL);
	const promisedFetch = new Promise((resolve, reject)=>{
		fetch(API_URL+'/member/signUp/email', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				m_name: payload.m_name,
				m_username: payload.m_username,
				m_password: encryptWithSHA256(payload.m_password),
				m_auth_provider: payload.m_auth_provider,
				m_term_service: payload.m_term_service,
				m_term_privacy: payload.m_term_privacy,
				m_term_commercial: payload.m_term_commercial,
			})
		})
		.then(responce=>{
			console.log(`IS OK? : ${responce.ok}`);
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
	name:'',
	username:'',
	regDate:'',
	navigateTo:'',
}

// ✔ REDUCER /////////////////////////////////////////////////////////////////
const memberReducer = (state=initialState, action)=>{
	switch(action.type){
		case SIGN_UP_EMAIL:
		const now = new Date()
		const regDate = `${now.getFullYear()}. ${now.getMonth()+1}. ${now.getDate()}`
		return Object.assign({},state,{
			name:action.payload.m_name,
			username:action.payload.m_username,
			regDate: regDate,
			navigateTo:'signUpSuccess'
		})

		default:
		return Object.assign({}, state)
	}
}

export default memberReducer