import { connect } from 'react-redux';

import RegisterDirectScreen from "../screen/RegisterDirectScreen";
import StepOneScreen from "../screen/RegisterDirectScreen/stepOne";
import StepTwoScreen from "../screen/RegisterDirectScreen/stepTwo";
import StepThreeScreen from "../screen/RegisterDirectScreen/stepThree";
import StepFourScreen from "../screen/RegisterDirectScreen/stepFour";
import StepFiveScreen from "../screen/RegisterDirectScreen/stepFive";

import { nextPage,prevPage,
	saveStepOne,saveStepTwo,saveStepThree,saveStepFour,
	getAddressSi,getAddressGu,getAddressDong,
	getCommonFeeList,getIndiFeeList,
	getOptionHeatList, getOptionLifeList, getOptionSecureList, getOptionEtcList,
	setImage, delImage, uploadImages
} from "../reducers/salesReducer";
import { showAlertMessage } from "../reducers/modalReducer";

const salesStateToProps = (state) => {
	return{
		currentPage:	state.salesReducer.currentPage,
		basicInfo:		state.salesReducer.basicInfo,
		propInfo:		state.salesReducer.propInfo,
		dealInfo: 		state.salesReducer.dealInfo,
		detailInfo:		state.salesReducer.detailInfo,
		mediaInfo:		state.salesReducer.mediaInfo,
		
		addressSi: 		state.salesReducer.addressSi,
		addressGu: 		state.salesReducer.addressGu,
		addressDong: 	state.salesReducer.addressDong,

		commonFeeList: 	state.salesReducer.commonFeeList,
		indiFeeList: 	state.salesReducer.indiFeeList,

		optHeat:		state.salesReducer.optHeat,
		optLife:		state.salesReducer.optLife,
		optSecure:		state.salesReducer.optSecure,
		optEtc:			state.salesReducer.optEtc,

		imgs:			state.salesReducer.imgs,

		isComplete:     state.salesReducer.isComplete,

		alertMessage: 	state.modalReducer.alertMessage,
	}
}

const salesDispatchToProps = (dispatch) => {
	return{
		nextPage: 			(payload) => {dispatch(nextPage(payload))},
		prevPage: 			(payload) => {dispatch(prevPage(payload))},
		saveStepOne: 		(payload) => {dispatch(saveStepOne(payload))},
		saveStepTwo: 		(payload) => {dispatch(saveStepTwo(payload))},
		saveStepThree:		(payload) => {dispatch(saveStepThree(payload))},
		saveStepFour:		(payload) => {dispatch(saveStepFour(payload))},
		
		saveStepFive:		(payload) => {dispatch(saveStepFive(payload))},
		
		
		getAddressSi: 		(payload) => {dispatch(getAddressSi(payload))},
		getAddressGu: 		(payload) => {dispatch(getAddressGu(payload))},
		getAddressDong: 	(payload) => {dispatch(getAddressDong(payload))},

		getCommonFeeList: 	(payload) => {dispatch(getCommonFeeList(payload))},
		getIndiFeeList: 	(payload) => {dispatch(getIndiFeeList(payload))},
		
		getOptionHeatList: 	(payload) => {dispatch(getOptionHeatList(payload))},
		getOptionLifeList: 	(payload) => {dispatch(getOptionLifeList(payload))},
		getOptionSecureList:(payload) => {dispatch(getOptionSecureList(payload))},
		getOptionEtcList: 	(payload) => {dispatch(getOptionEtcList(payload))},

		setImage:			(payload) => {dispatch(setImage(payload))},
		delImage:			(payload) => {dispatch(delImage(payload))},

		uploadImage:        (payload, mId)        => { dispatch(uploadImages(payload, mId))},

		showAlertMessage:	(payload) => {dispatch(showAlertMessage(payload))},
	}
}

export const RegisterDirectContainer = connect(salesStateToProps, salesDispatchToProps)(RegisterDirectScreen)
export const StepOneContainer = connect(salesStateToProps, salesDispatchToProps)(StepOneScreen)
export const StepTwoContainer = connect(salesStateToProps, salesDispatchToProps)(StepTwoScreen)
export const StepThreeContainer = connect(salesStateToProps, salesDispatchToProps)(StepThreeScreen)
export const StepFourContainer = connect(salesStateToProps, salesDispatchToProps)(StepFourScreen)
export const StepFiveContainer = connect(salesStateToProps, salesDispatchToProps)(StepFiveScreen)


