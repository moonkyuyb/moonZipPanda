/* ENVIRONMENTS */
import { API_URL } from "@env";

/* OTHER REDUCER ACTIONS & COMMON UTILS */
import { SHOW_ALERT_MESSAGE } from "../reducers/modalReducer";
import { fetchWithTimeout } from "../utils/networking/NetworkRequest";
import { launchImageLibrary } from 'react-native-image-picker';

// ✔ TYPE & ACTIONS //////////////////////////////////////////////////////////
export const NEXT_PAGE = 'sales/NEXT_PAGE'
export const PREV_PAGE = 'sales/PREV_PAGE'

export const SAVE_STEP_ONE = 'sales/SAVE_STEP_ONE'
export const SAVE_STEP_TWO = 'sales/SAVE_STEP_TWO'
export const SAVE_STEP_THREE = 'sales/SAVE_STEP_THREE'
export const SAVE_STEP_FOUR = 'sales/SAVE_STEP_FOUR'
export const SAVE_STEP_FIVE = 'sales/SAVE_STEP_FIVE'

export const GET_ADDRESS_SI = 'sales/GET_ADDRESS_SI'
export const GET_ADDRESS_GU = 'sales/GET_ADDRESS_GU'
export const GET_ADDRESS_DONG = 'sales/GET_ADDRESS_DONG'
export const GET_COMMON_FEE_LIST = 'sales/GET_COMMON_FEE_LIST'
export const GET_INDI_FEE_LIST = 'sales/GET_INDI_FEE_LIST'

export const GET_OPTION_HEAT = 'sales/GET_OPTION_HEAT'
export const GET_OPTION_LIFE = 'sales/GET_OPTION_LIFE'
export const GET_OPTION_SECURE = 'sales/GET_OPTION_SECURE'
export const GET_OPTION_ETC = 'sales/GET_OPTION_ETC'

export const SET_IMAGE = 'sales/SET_IMAGE'
export const DEL_IMAGE = 'sales/DEL_IMAGE'

export const ALL_SALES_ACTIONS = [
	NEXT_PAGE, PREV_PAGE,
	SAVE_STEP_ONE, SAVE_STEP_TWO, SAVE_STEP_THREE, SAVE_STEP_FOUR, SAVE_STEP_FIVE,
	GET_ADDRESS_SI, GET_ADDRESS_GU, GET_ADDRESS_DONG,
	GET_COMMON_FEE_LIST, GET_INDI_FEE_LIST,
	GET_OPTION_HEAT, GET_OPTION_LIFE, GET_OPTION_SECURE, GET_OPTION_ETC,
	SET_IMAGE, DEL_IMAGE
]

export const nextPage = (payload) => {
	return(dispatch=>{ dispatch({ type:NEXT_PAGE, payload:payload }) })
}

export const prevPage = (payload) => {
	return(dispatch=>{ dispatch({ type:PREV_PAGE, payload:payload }) })
}

export const saveStepOne = (payload) => {
	return(dispatch=>{ dispatch({ type:SAVE_STEP_ONE, payload:payload }) })
}

export const saveStepTwo = (payload) => {
	return(dispatch=>{ dispatch({ type:SAVE_STEP_TWO, payload:payload }) })
}

export const saveStepThree = (payload) => {
	return(dispatch=>{ dispatch({ type:SAVE_STEP_THREE, payload:payload }) })
}

export const saveStepFour = (payload) => {
	return(dispatch=>{ dispatch({ type:SAVE_STEP_FOUR, payload:payload }) })
}

export const saveStepFive = (payload) => {
	return(dispatch=>{ dispatch({ type:SAVE_STEP_FIVE, payload:payload }) })
}

export const getAddressSi = () => {
	const fetchGetAddressSi = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(API_URL+'/sigungu/si/', { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetAddressSi()
		.then(result=>{dispatch({ type:GET_ADDRESS_SI, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const getAddressGu = (payload) => {
	const fetchGetAddressGu = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(API_URL+'/sigungu/gu/'+payload, { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetAddressGu()
		.then(result=>{dispatch({ type:GET_ADDRESS_GU, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const getAddressDong = (payload) => {
	const fetchGetAddressDong = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(`${API_URL}/sigungu/dong/${payload.si}/${payload.gu}`, { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetAddressDong()
		.then(result=>{dispatch({ type:GET_ADDRESS_DONG, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const getCommonFeeList = () => {
	const fetchGetCommonFeeList = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(API_URL+'/code/commonFee/', { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetCommonFeeList()
		.then(result=>{dispatch({ type:GET_COMMON_FEE_LIST, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const getIndiFeeList = () => {
	const fetchGetIndiFeeList = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(API_URL+'/code/individual/', { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetIndiFeeList()
		.then(result=>{dispatch({ type:GET_INDI_FEE_LIST, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const getOptionHeatList = () => {
	const fetchGetOptionHeatList = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(API_URL+'/code/heating/', { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetOptionHeatList()
		.then(result=>{dispatch({ type:GET_OPTION_HEAT, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const getOptionLifeList = () => {
	const fetchGetOptionLifeList = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(API_URL+'/code/living/', { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetOptionLifeList()
		.then(result=>{dispatch({ type:GET_OPTION_LIFE, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const getOptionSecureList = () => {
	const fetchGetOptionSecureList = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(API_URL+'/code/security/', { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetOptionSecureList()
		.then(result=>{dispatch({ type:GET_OPTION_SECURE, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const getOptionEtcList = () => {
	const fetchGetOptionEtcList = () => {
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch(API_URL+'/code/etc/', { method: 'GET' })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetOptionEtcList()
		.then(result=>{dispatch({ type:GET_OPTION_ETC, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})
}

export const setImage = (payload) => {
	return({
		type: SET_IMAGE,
		payload: payload
	})
}

export const delImage = (payload) => {
	return({
		type: DEL_IMAGE,
		payload: payload
	})
}

export const uploadImages = (fileData, mId) => {
	
	const formData = new FormData();

    fileData.map((el)=>{

        if (el != null) {
            formData.append({
                name: el.fileName,
                type: el.type,
                mId: mId,
                base64: el.base64
            })
        }

    })


	const fetchGetOptionEtcList = () => {
		console.log(formData)
		const promisedFetch = new Promise((resolve, reject)=>{
			fetch("http://192.168.0.55:8000"+'/fileUpload/', { method: 'POST', body: formData })
			.then(response=>{
				response.json().then((result)=>{
					if(response.ok) resolve(result)
					else reject(new Error(result.msg))
				})
			})
		})
		return fetchWithTimeout(promisedFetch, 7000)		
	}
	return(dispatch=>{
		fetchGetOptionEtcList()
		.then(result=>{dispatch({ type:GET_OPTION_ETC, payload:result })})
		.catch((err) => {console.log("== ❌ SALES ACTION ERROR\n" + err)})
	})

	/*
	const formData = new FormData();

    fileData.map((el)=>{

        if (el != null) {
            formData.append({
                name: el.fileName,
                type: el.type,
                mId: mId,
                base64: el.base64
            })
        }

    })

 	axios.headers = {
        "content-type": "multipart/form-data"
    };

    try{
        return await axios.post(
            "http://192.168.0.55:8000/fileUpload/",
            {
                formData
            }
        )
        .catch((err) => {
            ShowToast("네트워크 오류");
        
        })
    }catch(e) {

    }
	*/
}

// ✔ INITIAL STATE ///////////////////////////////////////////////////////////
const initialState = {
	currentPage: 5,
	basicInfo:{
		sellerType:"",
		sellerEtc:"",
		sellerName:"",
		approvYN:"",
		sellerContact:"",
	},
	
    propInfo:{
        bldgType:"", // 건물 유형 기타 id
        bldgTypeName:"", // 건물 유형 기타 name
        bldgStyle:"", // 건물형태
        bldgStyleName:"", // 건물형태 이름
        addressSi:"", // 소재지 시/도 선택
        addressGu:"", // 군/구
        addressDong:"", // 읍/면/동
        addressName:"", // 건물/단지명
        detailAddrType:"", //상세주소 일반||산
        detailAddr1:"", // 번지 입력
        detailAddr2:"", // 동 입력
        detailAddr3:"", // 호 입력
        detailAddr4:"", // 기타 상세주소
        tmpAddrYN:"", // 가(임시) 주소 적용 YN
        tmpAddr1:"",// 미등기/구분등기 있음/건축물대장 면적 확인 요청
        tmpAddr2:"",// 미등기/구분등기 있음/건축물대장 면적 확인 요청
        tmpAddr3:"",// 미등기/구분등기 있음/건축물대장 면적 확인 요청
        agreementYN:"", // 유의사항 동의 여부
    },

    dealInfo:{
        contractType:"", // 계약형태
        depositAmt:"", // 보증금 || 월세
        monthAmt:"",
        contractStart:"", // 계약 시작일
        contractEnd:"", // 계약 종료일
        commonFeeYN:false, // 공용관리비 있음||없음
        commonFeeAmt:"", // 관리비 
        commonFeeList:[], // 공용 관리비 항목
        indiFeeYN:false, // 개별 사용료 있음||없음
        indiFeeList:[], // 개별 관리비 항목
        deptAMT:"", // 융자금 여부
        dateInType: "", // 입주 가능일 즉시입주||날짜 입력
        dateInDate: "", // 날짜입력 일
        dateInNegoYN:false // 입주일 협의 가능 여부
    },

    detailInfo:{
        roomCnt:"", // 방개수
        bathCnt:"", // 욕실 개수
        totalAreaM:"", // 공급 면적 미터
        totalAreaP:"", // 공급 면적 평
        netAreaM:"", // 전용면적 미터
        netAreaP:"", // 전용면적 평
        floor:"", // 층
        floorType:"", // 층 타입
        floorTotalCnt:"", // wjscp 층수
        floorExpsYN:false, // 층 노출 여부
        roomType: "", // 방, 거실형태 오픈형||분리형
        mainRoomType: "", // 주실 방향기준 안방||거실
        mainRoomDir:"", // 주실 방향
        aisleType:"", //현관 유형
        totalHouseCnt:"", // 총 세대수
        totalParkingCnt:"", // 총 주차 대수
        builtDate: "", // 준공일
        heatingOpt:[], //옵션
        livingOpt:[], // 생활 시설
        securityOpt:[], // 보안시설
        etcOpt:[], // 기타 옵션
        tags:[], // 테그
        extraDetail:"" // 상세설명
    },
	
    mediaInfo:{
        imgList:[], // 이미지
        ytURL:"" // 유튜브 url
    },

	addressSi: [],
	addressGu: [],
	addressDong: [],
	commonFeeList: [],
	indiFeeList:[],

	//step 4 옵션
	optHeat:[],
	optLife:[],
	optSecure:[],
	optEtc:[],

	imgs:[],

	//완료
	isComplete:false
}

// ✔ REDUCER /////////////////////////////////////////////////////////////////
const salesReducer = (state=initialState, action)=>{
	switch(action.type){
		case NEXT_PAGE:
		return Object.assign({}, state, { currentPage: state.currentPage + 1 })

		case PREV_PAGE:
		return Object.assign({}, state, { currentPage: state.currentPage - 1 })

		case SAVE_STEP_ONE:
		return Object.assign({}, state, {
			basicInfo:{
				sellerType:		action.payload.sellerType,
				sellerEtc:		action.payload.sellerEtc,
				sellerName:		action.payload.sellerName,
				approvYN:		action.payload.approvYN,
				sellerContact:	action.payload.sellerContact,
			}
		})

		case SAVE_STEP_TWO:
		return Object.assign({}, state, {
			propInfo:{
				bldgTypeName:	action.payload.bldgTypeName,
				bldgStyle:	action.payload.bldgStyle,
				bldgStyleName:	action.payload.bldgStyleName,
				addressSi:	action.payload.addressSi,
				addressGu:	action.payload.addressGu,
				addressDong:	action.payload.addressDong,
				addressName:	action.payload.addressName,
				detailAddrType:	action.payload.detailAddrType,
				detailAddr1:	action.payload.detailAddr1,
				detailAddr2:	action.payload.detailAddr2,
				detailAddr3:	action.payload.detailAddr3,
				detailAddr4:	action.payload.detailAddr4,
				tmpAddrYN:	action.payload.tmpAddrYN,
				tmpAddr1:	action.payload.tmpAddr1,
				tmpAddr2:	action.payload.tmpAddr2,
				tmpAddr3:	action.payload.tmpAddr3,
				agreementYN:	action.payload.agreementYN,
			}
		})
		
		case SAVE_STEP_THREE:
		return Object.assign({}, state, {
			dealInfo:{
				contractType : action.payload.contractType,
				depositAmt : action.payload.depositAmt,
				monthAmt : action.payload.monthAmt,
				contractStart : action.payload.contractStart,
				contractEnd : action.payload.contractEnd,
				commonFeeYN : action.payload.commonFeeYN,
				commonFeeAmt : action.payload.commonFeeAmt,
				commonFeeList : action.payload.commonFeeList,
				indiFeeYN : action.payload.indiFeeYN,
				indiFeeList : action.payload.indiFeeList,
				deptAMT : action.payload.deptAMT,
				dateInType : action.payload.dateInType,
				dateInDate : action.payload.dateInDate,
				dateInNegoYN : action.payload.dateInNegoYN,
			}
		})

		case SAVE_STEP_FOUR:
		return Object.assign({}, state, {
			detailInfo:{
				roomCnt: action.payload.roomCnt,
				bathCnt: action.payload.bathCnt,
				totalAreaM: action.payload.totalAreaM,
				totalAreaP: action.payload.totalAreaP,
				netAreaM: action.payload.netAreaM,
				netAreaP: action.payload.netAreaP,
				floor: action.payload.floor,
				floorType: action.payload.floorType,
				floorTotalCnt: action.payload.floorTotalCnt,
				floorExpsYN: action.payload.floorExpsYN,
				roomType: action.payload.roomType,
				mainRoomType: action.payload.mainRoomType,
				mainRoomDir: action.payload.mainRoomDir,
				aisleType: action.payload.aisleType,
				totalHouseCnt: action.payload.totalHouseCnt,
				totalParkingCnt: action.payload.totalParkingCnt,
				builtDate: action.payload.builtDate,
				heatingOpt: action.payload.heatingOpt,
				livingOpt: action.payload.livingOpt,
				securityOpt: action.payload.securityOpt,
				etcOpt: action.payload.etcOpt,
				tags: action.payload.tags,
				extraDetail: action.payload.extraDetail,
			},
		})

		case SAVE_STEP_FIVE:
		return Object.assign({}, state, {
			mediaInfo:{
				imgList: action.payload.imgList,
				ytURL: action.payload.ytURL,
			},
			isComplete: true
		})
		
		case GET_ADDRESS_SI:
		return Object.assign({}, state, {addressSi: action.payload.results})
		case GET_ADDRESS_GU:
		console.log(action.payload);
		return Object.assign({}, state, {addressGu: action.payload.results})
		case GET_ADDRESS_DONG:
		return Object.assign({}, state, {addressDong: action.payload.results})

		case GET_COMMON_FEE_LIST:
		return Object.assign({}, state, {commonFeeList: action.payload.results})

		case GET_INDI_FEE_LIST:
		return Object.assign({}, state, {indiFeeList: action.payload.results})
		
		case GET_OPTION_HEAT:
		return Object.assign({}, state, {optHeat: action.payload.results})
		case GET_OPTION_LIFE:
		return Object.assign({}, state, {optLife: action.payload.results})
		case GET_OPTION_SECURE:
		return Object.assign({}, state, {optSecure: action.payload.results})
		case GET_OPTION_ETC:
		return Object.assign({}, state, {optEtc: action.payload.results})

		case SET_IMAGE:
		return Object.assign({}, state, {
			imgs:[...state.imgs, action.payload],
			mediaInfo:{
                ...state.mediaInfo,
                imgList:[...state.mediaInfo.imgList, action.payload]
            }
		})
		
		case DEL_IMAGE:
		const newState = Object.assign({}, state)
		newState.imgs.splice(action.payload,1);
		newState.mediaInfo.imgList.splice(action.payload,1);
		return Object.assign({},newState);

		default: return Object.assign({}, state)
	}
}
export default salesReducer;