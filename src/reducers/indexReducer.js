/* ENVIRONMENTS */
import { API_URL } from "@env";

/* OTHER REDUCER ACTIONS & COMMON UTILS */
import { encryptWithSHA256 } from '../utils/common';
import { fetchWithTimeout } from '../utils/networking/NetworkRequest';
import { SHOW_ALERT_MESSAGE } from "../reducers/modalReducer";

// ✔ TYPE & ACTIONS //////////////////////////////////////////////////////////
export const GET_SALES_LIST = 'auth/GET_SALES_LIST'
export const ALL_INDEX_ACTIONS = [ GET_SALES_LIST ]

export const getSalesList = (payload) => {
	return(dispatch=>{
		const fetchSalesList = (payload) => {
			const promisedFetch = new Promise((resolve, reject)=>{
				fetch(API_URL+'/sales', {
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
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

		fetchSalesList(payload)
		.then(result=>dispatch({
			type: GET_SALES_LIST,
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


// ✔ INITIAL STATE ///////////////////////////////////////////////////////////
const initialState = {
	salesList: [],
}

// ✔ REDUCER /////////////////////////////////////////////////////////////////
const indexReducer = (state=initialState, action)=>{
    switch(action.type){
		case GET_SALES_LIST:
		return Object.assign({},state,{
			salesList: action.payload.sales,
		})

        default:
        return Object.assign({}, state)
    }
}

export default indexReducer