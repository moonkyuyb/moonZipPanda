/* COMMON */
import React from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";

/* UI COMPONENTS */
import { Step, StepContainer, StepHeader,StepIcon, StepText, StepFooter, FooterButtonDivW, FooterButtonDivY, FooterButtonDivB} from "../../styles/registerDirectStyle/registerDirectStyle";
import { StepOneContainer, StepTwoContainer, StepThreeContainer, StepFourContainer, StepFiveContainer } from "../../container/salesContainer";
import ModalPopup from "../../components/common/ModalPopup";
import SemiBoldText from "../../components/SemiBoldText";
import ZipText from "../../components/ZipText";
import Colors from "../../styles/Colors";

/* UTILS */
import { Controller, useForm } from "react-hook-form";
import _ from 'lodash';

const RegisterDirectScreen = ({
	props, currentPage, basicInfo, propInfo,
	addressSi, addressGu, addressDong,
	nextPage, prevPage,
	commonFeeList, indiFeeList,
	optHeat, optLife, optSecure, optEtc,
	imgs,
	getAddressSi, getAddressGu, getAddressDong,
	getCommonFeeList, getIndiFeeList,
	getOptionHeatList, getOptionLifeList, getOptionSecureList, getOptionEtcList,
	saveStepOne, saveStepTwo, saveStepThree, saveStepFour, saveStepFive,
	openGallery, setImage, delImage,
	showAlertMessage, isComplete, uploadImage
}) => {
	
	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()
	
	//UI STATES

	//REACT HOOK FORM
	const {control, handleSubmit, getValues, setValue} = useForm()
	const onValid = async (data) => {
		console.log("A");
		switch (currentPage) {
			case 1:
				saveStepOne(data)
				break;
			case 2:
				saveStepTwo(data)
				break;
			case 3:
				if(getValues('contractType') != 'sales'){
					const start = new Date(getValues('contractStart'))
					const end = new Date(getValues('contractEnd'))
					if(start>end){
						showAlertMessage('계약 종료일자가 시작일자보다 빠릅니다.')
						return false;
					}
				}
				saveStepThree(data)
				break;
			case 4:
				saveStepFour(data)
				break;
			case 5:
				saveStepFive(data)
				break;
			default:
				break;
		}
		console.log(data);
		nextPage()
	}
	const onInvalid = err => {
		if(err.sellerType) { showAlertMessage('등록자 구분을 선택하세요.')}
		else if(err.sellerEtc) { showAlertMessage('등록자 구분을 입력하세요.')}
		else if(err.sellerName) { showAlertMessage('임대인 이름을 입력하세요')}
		else if(err.sellerContact) { 
			if(err.sellerContact.type == 'required') {showAlertMessage('연락처를 입력하세요')}
			else if(err.sellerContact.type == 'minLength') {showAlertMessage('정확한 연락처를 입력하세요')}
		}
		else if(err.bldgType) { showAlertMessage('건물유형을 선택하세요')}
		else if(err.bldgStyle) { showAlertMessage('건물형태를 선택하세요')}
		else if(err.addressSi) { showAlertMessage('소재지를 선택하세요')}
		else if(err.addressGu) { showAlertMessage('소재지를 선택하세요')}
		else if(err.addressDong) { showAlertMessage('소재지를 선택하세요')}
		else if(err.addressName) { showAlertMessage('건물/단지명을 선택하세요')}
		else if(err.detailAddr1) { showAlertMessage('상세주소를 입력하세요')}
		else if(err.detailAddr2) { showAlertMessage('상세주소를 입력하세요')}
		else if(err.detailAddr3) { showAlertMessage('상세주소를 입력하세요')}
		else if(err.detailAddr4) { showAlertMessage('상세주소를 입력하세요')}
		else if(err.agreementYN) { showAlertMessage('유의사항에 동의해주세요')}

		else if(err.contractType) { showAlertMessage('계약형태를 선택하세요')}
		else if(err.depositAmt) { showAlertMessage('보증금을 입력하세요')}
		else if(err.monthAmt) { showAlertMessage('월세를 입력하세요')}
		else if(err.contractStart) { showAlertMessage('계약 시작일')}
		else if(err.contractEnd) { showAlertMessage('계약 종료일')}
		else if(err.deptAMT) { showAlertMessage('융자금 여부를 선택하세요')}
		else if(err.dateInType) { showAlertMessage('입주가능일을 선택하세요')}
		else if(err.dateInDate) { showAlertMessage('입주가능일을 선택하세요')}
		
		else if(err.roomCnt) { showAlertMessage('방 개수를 입력하세요')}
		else if(err.bathCnt) { showAlertMessage('화장실 개수를 입력하세요')}
		else if(err.totalAreaM) { showAlertMessage('공급면적을 입력하세요')}
		else if(err.totalAreaP) { showAlertMessage('공급면적을 입력하세요')}
		else if(err.netAreaM) { showAlertMessage('전용 면적을 입력하세요')}
		else if(err.netAreaP) { showAlertMessage('전용 면적을 입력하세요')}
		else if(err.floor) { showAlertMessage('층을 입력하세요')}
		else if(err.floorType) { showAlertMessage('층 형식을 선택하세요')}
		else if(err.totalParkingCnt) { showAlertMessage('주차가능 대수를 입력하세요')}
		else if(err.builtDate) { showAlertMessage('준공일을 선택하세요')}

		else if(err){
			showAlertMessage(err.toString());
		}
	}

	//UI Components
	const CurrentView = (props) => {
		switch (currentPage) {
			case 1: return(<StepOneContainer {...props}/>)
			case 2: return(<StepTwoContainer {...props} addressSi addressGu addressDong getAddressSi getAddressGu getAddressDong/>)
			case 3: return(<StepThreeContainer {...props} commonFeeList indiFeeList getCommonFeeList getIndiFeeList/>)
			case 4: return(<StepFourContainer {...props} optHeat optLife optSecure optEtc getOptionHeatList getOptionLifeList getOptionSecureList getOptionEtcList/>)
			case 5: return(<StepFiveContainer {...props} imgs setImage delImage/>)
			default:return(<StepOneContainer {...props}/>)
		}
	}

	//UI Functions
	function handlePrevPage() {
		prevPage()
	}
	function handleNextPage() {
		if(currentPage == 5){
			showAlertMessage('등록을 진행합니다')
			return false;
		}
		nextPage()
	}

	if (isComplete) {
		console.log("is complete: "+isComplete);
	
		uploadImage(imgs,2);
	}

	return(
		<StepContainer>

			<ModalPopup/>

			<StepHeader>
				<ScrollView horizontal={true}>
					<Step active={currentPage==1?true:false}>
						<StepText>01{"\n"}<SemiBoldText>등록자 정보</SemiBoldText></StepText>
						{currentPage == 1 && (<StepIcon source={require('../../../assets/img/drawable-xhdpi/icon_arrow_b.png')}/>)}
					</Step>
					<Step active={currentPage==2?true:false}>
						<StepText>02{"\n"}<SemiBoldText>매물 정보</SemiBoldText></StepText>
						{currentPage ==2 && (<StepIcon source={require('../../../assets/img/drawable-xhdpi/icon_arrow_b.png')}/>)}
					</Step>
					<Step active={currentPage==3?true:false}>
						<StepText>03{"\n"}<SemiBoldText>거래 정보</SemiBoldText></StepText>
						{currentPage == 3 && (<StepIcon source={require('../../../assets/img/drawable-xhdpi/icon_arrow_b.png')}/>)}
					</Step>
					<Step active={currentPage==4?true:false}>
						<StepText>04{"\n"}<SemiBoldText>상세 정보</SemiBoldText></StepText>
						{currentPage == 4 && (<StepIcon source={require('../../../assets/img/drawable-xhdpi/icon_arrow_b.png')}/>)}
					</Step>
					<Step active={currentPage==5?true:false}>
						<StepText>05{"\n"}<SemiBoldText>사진,동영상</SemiBoldText></StepText>
						{currentPage == 5 && (<StepIcon source={require('../../../assets/img/drawable-xhdpi/icon_arrow_b.png')}/>)}
					</Step>
				</ScrollView>
			</StepHeader>
			<ScrollView>
				<CurrentView control={control} getValues={getValues} setValue={setValue}/>
			</ScrollView>
			<StepFooter>
				<FooterButtonDivW buttonColor="" onPress={()=>{ showAlertMessage('준비중입니다.') }} ><ZipText>임시 저장</ZipText></FooterButtonDivW>
				{currentPage != 1 && <FooterButtonDivY  onPress={()=>{ showAlertMessage('이전단계 이동 시 다음 단계로 이동할 수 없습니다.(수정 예정)'); prevPage() } } ><ZipText>이전 단계</ZipText></FooterButtonDivY>}
				<FooterButtonDivB onPress={handleSubmit(onValid,onInvalid)} >
					<ZipText style={{color:Colors.whiteColor}}>{currentPage==5?'등록 완료':'다음 단계'}</ZipText>
				</FooterButtonDivB>
			</StepFooter>
			{/* <Button title="CHECK" onPress={()=>{console.log(getValues('agreementYN'));}}/>
			<Button title="CHECK2" onPress={()=>{console.log(getValues('agreementYN'));}}/> */}
		</StepContainer>
	)
}


































const styles = StyleSheet.create({

	

	//cont	
	optionItemBox:{
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	optionList:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 58,
		paddingHorizontal: 15,
		borderWidth: 0.5,
		borderColor: Colors.borderColor,
		height: 34,
		marginRight: 4,
		marginBottom: 4,
	},
	optionListActive:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 58,
		paddingHorizontal: 15,
		borderWidth: 0.5,
		borderColor: Colors.blackColor,
		height: 34,
		marginRight: 4,
		backgroundColor: Colors.mainColor,
		marginBottom: 4,
	},
	optionItem4Box:{
		paddingRight: 12,
		flexDirection: 'row',
	},
	optionList4:{
		width: '25%',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: Colors.borderColor,
		height: 34,
		marginRight: 4,
	},
	optionList4Active:{
		width: '25%',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: Colors.blackColor,
		backgroundColor: Colors.mainColor,
		height: 34,
		marginRight: 4,
	},
	optionTit:{
		fontSize: 12,
		color: Colors.blackColor,
		textAlign: 'center',
	},
});

export default RegisterDirectScreen;