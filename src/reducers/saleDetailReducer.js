import { fetchWithTimeout } from '../utils/networking/NetworkRequest';

import { API_URL, API_URL_KYU } from "@env";

export const GET_SALE_DETAIL    = "GET_SALE_DETAIL";
export const GET_SALE_IMAGES    = "GET_SALE_IMAGES";

export const GET_SALE_OPTS      = "GET_SALE_OPTS";
export const GET_SALE_TAGS      = "GET_SALE_TAGS";
export const GET_SALE_AVLTIME  = "GET_SALES_AVLTIME";
export const GET_SALE_CONVI    = "GET_SALES_CONVI";
export const GET_SALE_SECURE    = "GET_SALES_SECURE";
export const GET_SALE_SCHOOL   = "GET_SALES_SCHOOL";

export const ALL_SALE_DETAIL_ACTIONS = [GET_SALE_DETAIL, GET_SALE_IMAGES, GET_SALE_OPTS, GET_SALE_TAGS, GET_SALE_AVLTIME, GET_SALE_CONVI, GET_SALE_SECURE, GET_SALE_SCHOOL];



const fetchSaleDetail = async (sID) =>{

    const promisedFetch = new Promise((resolve, reject)=>{
		fetch(API_URL_KYU+'/sales/'+sID, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
		})
		.then(response=>{
			response.json().then((result)=>{
	            console.log("saleData================================================================");
                console.log(result);
				if(response.ok) resolve(result)
				else reject(new Error(result.msg))
			})
		})
	})
	return await fetchWithTimeout(promisedFetch, 5000)

}

const fetchData = async (div,sID) =>{

    const promisedFetch = new Promise((resolve, reject)=>{
		fetch(API_URL_KYU+div+sID, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
		})
		.then(response=>{
			response.json().then((result)=>{
	            if(response.ok) resolve(result)
				else reject(new Error(result.msg))
			})
		})
	})
	return await fetchWithTimeout(promisedFetch, 5000)

}

// actions
// ㅁㅐ물 상세
export const getSaleDetail = (sID) => {
    //console.log("getSaleDetail"+sID+"=-=======-=======-=======-=======-=======-=======-=======-=======-======");
    return (dispatch=>{
        fetchData("/sales/",sID)
        .then(result=>{
            dispatch({
                type:GET_SALE_DETAIL,
                payload:result.data
            })      
        })
        .catch(err=>{
            dispatch({
                type:SHOW_ALERT_MESSAGE,
                payload:err.message.toString()
            })
        })
    })
}
// 매물 이미지 받기
export const getImages = (sID) =>{
    return (dispatch=>{
        fetchData("/sales/imgs/",sID)
        .then(result=>{
            console.log("img result!============================================");
            console.log(result.data)
            dispatch({
                type:GET_SALE_IMAGES,
                payload:result.data
            })      
        })
        .catch(err=>{
            dispatch({
                type:SHOW_ALERT_MESSAGE,
                payload:err.message.toString()
            })
        })
    })
}
// 매물 시설정보 받기
export const getOptions = (sID) => {
    return (dispatch=>{
        fetchData("/sales/opt/",sID)
        .then(result=>{
            dispatch({
                type:GET_SALE_OPTS,
                payload:result.data
            })      
        })
        .catch(err=>{
            dispatch({
                type:SHOW_ALERT_MESSAGE,
                payload:err.message.toString()
            })
        })
    })
}
// 매물 태그
export const getTags = (sID) =>{
    return (dispatch=>{
        fetchData("/sales/tags/",sID)
        .then(result=>{
            dispatch({
                type:GET_SALE_TAGS,
                payload:result.data
            })      
        })
        .catch(err=>{
            dispatch({
                type:SHOW_ALERT_MESSAGE,
                payload:err.message.toString()
            })
        })
    })
}
// 연락 가능시간
export const getAvailableTime = (sID) =>{
    return (dispatch=>{
        fetchData("/sales/avl_time/",sID)
        .then(result=>{
            dispatch({
                type:GET_SALE_AVLTIME,
                payload:result.data
            })      
        })
        .catch(err=>{
            dispatch({
                type:SHOW_ALERT_MESSAGE,
                payload:err.message.toString()
            })
        })
    })
}
// 편의 시설
export const getConvinience  = (sID) =>{
    return (dispatch=>{
        fetchData("/sales/convi/",sID)
        .then(result=>{
            dispatch({
                type:GET_SALE_AVLTIME,
                payload:result.data
            })      
        })
        .catch(err=>{
            dispatch({
                type:SHOW_ALERT_MESSAGE,
                payload:err.message.toString()
            })
        })
    })
}
// 안전시설
export const getSecurity  = (sID) =>{
    return (dispatch=>{
        fetchData("/sales/security/",sID)
        .then(result=>{
            dispatch({
                type:GET_SALE_AVLTIME,
                payload:result.data
            })      
        })
        .catch(err=>{
            dispatch({
                type:SHOW_ALERT_MESSAGE,
                payload:err.message.toString()
            })
        })
    })
}
// 학군정보
export const getSchools  = (sID) =>{
    return (dispatch=>{
        fetchData("/sales/school/",sID)
        .then(result=>{
            dispatch({
                type:GET_SALE_AVLTIME,
                payload:result.data[0]
            })      
        })
        .catch(err=>{
            dispatch({
                type:SHOW_ALERT_MESSAGE,
                payload:err.message.toString()
            })
        })
    })
}




// reducer
const initialState  = {
    saleData    :{},
    imgData     :[],
    optData     :[],
    tagData     :[],
    avlTimeData :[],
    conviData   :[],
    secureData  :[],
    schoolData  :[]
}

const saleDetailReducer = (state=initialState, action) =>{
    //console.log("reducer========================================================================");
    //console.log(action.payload);
    switch(action.type) {
        case GET_SALE_DETAIL:
            console.log("sale detail==============================");
            return Object.assign({}, state, {
                    saleData: action.payload[0]
                });
        break;
        case GET_SALE_IMAGES:
            console.log("sale files==============================");
            return Object.assign({}, state, {
                    imgData: action.payload
                });
        break;
        case GET_SALE_OPTS:
            console.log("sale opt==============================");
            return Object.assign({}, state, {
                    optData: action.payload
                });
        break;

        case GET_SALE_TAGS:
            console.log("sale tag==============================");
            return Object.assign({}, state, {
                    tagData: action.payload
                });
        break;

        case GET_SALE_AVLTIME:
            console.log("sale time==============================");
            return Object.assign({}, state, {
                avlTimeData: action.payload
                });
        break;

        case GET_SALE_CONVI:
            console.log("sale convi==============================");
            return Object.assign({}, state, {
                conviData: action.payload
                });
        break;

        case GET_SALE_SECURE:
            console.log("sale secure==============================");
            return Object.assign({}, state, {
                secureData: action.payload
                });
        break;

        case GET_SALE_SCHOOL:
            console.log("sale schoole==============================");
            return Object.assign({}, state, {
                schoolData: action.payload
                });
        break;

		default: return Object.assign({}, state)

    }
}


export default saleDetailReducer;


