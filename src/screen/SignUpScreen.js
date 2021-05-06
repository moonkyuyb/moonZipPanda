/* COMMON */
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

/* UI COMPONENTS */
import {ActivityIndicator, View } from 'react-native';
import {ScrollContainer20, Container, TitleBox, Title, SubTitle, InputBorder, FlexRowBox, TextBold16, BottomBtnYello} from '../styles/CommonStyle';
import {PwInfoText, TermsListBox, TermsViewBtn, TermsViewText } from '../styles/signUpStyle';
import FlexRowCheckBox from '../components/common/FlexRowCheckBox';
import ModalPopup from '../components/common/ModalPopup';

/* UTILS */
import { Controller, useForm } from "react-hook-form";
import _ from 'lodash';

const SignUpScreen = ({signUpEmail, name, username, regDate, navigateTo, alertMessage, showAlertMessage}) => {

	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()

	//UI STATES
	const minLength = 8
	const [showIndicator, setShowIndicator] = useState(false)
	const [agreeEveryTerms, setAgreeEveryTerms] = useState(false)

	//REACT HOOK FORM
	const {control, handleSubmit ,getValues, setValue} = useForm()
	const onValid = async (data) => {
		if(data.m_password != data.m_password_re) {
			showAlertMessage('입력하신 비밀번호가 서로 다릅니다')
			return false
		}
		setShowIndicator(true)
		signUpEmail(data) //회원등록 진행
	}
	const onInvalid = err => {
		setShowIndicator(false)
			 if(err.m_name)			{ showAlertMessage('이름을 입력하세요') }
		else if(err.m_username)		{ showAlertMessage('아이디를 입력하세요')}
		else if(err.m_password)		{
				 if(err.m_password.type == 'required' )	{ showAlertMessage('비밀번호를 입력하세요') }
			else if(err.m_password.type == 'minLength')	{ showAlertMessage(`비밀번호를 ${minLength}자 이상 입력하세요`) }
		}
		else if(err.m_term_service)	{ showAlertMessage('서비스 이용약관에 동의해주세요') }
		else if(err.m_term_privacy)	{ showAlertMessage('개인정보 취급방침에 동의해주세요') }
	}

	//CHECK EFFECTS
	useEffect(()=>{
		navigation.addListener('blur',()=>{
			setShowIndicator(false)
			showAlertMessage('')
		})
	},[navigation]) //화면 이동 시 팝업 제거	

	useEffect(()=>{
		setShowIndicator(false)
	},[alertMessage])

	useEffect(()=>{
		if(navigateTo){
			navigation.navigate(navigateTo, {name:name, username:username, regDate: regDate})
		}
	},[navigateTo])

	//UI Functions
	function handleEveryTerms() {
		const val = !agreeEveryTerms
		setAgreeEveryTerms(val)
		setValue('m_term_service',val)
		setValue('m_term_privacy',val)
		setValue('m_term_commercial',val)
	}

	function handleOnChange(onChange,val){
		onChange(val)
		const values = getValues(['m_term_service','m_term_privacy','m_term_commercial'])
		setAgreeEveryTerms(_.every(values)) //모든 항목 동의 시 전체동의 체크
	}

	return(
		<Container>
			<ModalPopup/>
			<ScrollContainer20>
				<Controller control={control} name="m_auth_provider" rules={{required:true}} defaultValue={'AP_EMAIL'} render={()=>(null)}/>
				<TitleBox>
					<Title>기본정보</Title>
				</TitleBox>
				<View>
					<SubTitle>이름</SubTitle>
					<Controller
						control={control} name="m_name" rules={{required:true}} defaultValue={''}
						render={({field})=>(<InputBorder value={field.value} onChangeText={field.onChange} placeholder={'이름 입력'}/>)}
					/>
					<SubTitle>아이디(이메일)</SubTitle>
					<Controller
						control={control} name="m_username" rules={{required:true}} defaultValue={'@.com'}
						render={({field})=>(<InputBorder value={field.value} onChangeText={field.onChange} placeholder={'아이디(이메일) 입력'}/>)}
					/>
					<SubTitle>비밀번호</SubTitle>
					<Controller /* XXX: 추후 비밀번호 조건 추가(영문,숫자 등) */
						control={control} name="m_password" rules={{required:true, minLength:minLength}} defaultValue={''}
						render={({field})=>(<InputBorder value={field.value} onChangeText={field.onChange} placeholder={'비밀번호 입력'} secureTextEntry={true}/>)}
					/>
					<PwInfoText>✱ 비밀번호는 영문, 숫자 각 2회 이상 사용, {minLength}자 이상 입력</PwInfoText>
					<SubTitle>비밀번호 확인</SubTitle>
					<Controller
						control={control} name="m_password_re" rules={{required:true}} defaultValue={''}
						render={({field})=>(<InputBorder value={field.value} onChangeText={field.onChange} placeholder={'비밀번호 입력'} secureTextEntry={true}/>)}
					/>
				</View>
				<TitleBox>
					<Title>기본정보</Title>
					<FlexRowBox>
						<FlexRowCheckBox title={"전체동의"} value={agreeEveryTerms} onPress={handleEveryTerms}/>
					</FlexRowBox>
				</TitleBox>
				<TermsListBox>
					<Controller
						control={control} name="m_term_service"  defaultValue={true} rules={{required:true}}
						render= {({field})=>(<FlexRowCheckBox value={field.value} onPress={()=>{handleOnChange(field.onChange,!field.value)}} title={'서비스 이용약관동의(필수)'}/>)}
					/>
					<TermsViewBtn onPress={() => navigation.navigate('terms')}><TermsViewText>내용보기</TermsViewText></TermsViewBtn>
				</TermsListBox>
				<TermsListBox>
					<Controller
						control={control} name="m_term_privacy"  defaultValue={true} rules={{required:true}}
						render= {({field})=>(<FlexRowCheckBox value={field.value} onPress={()=>{handleOnChange(field.onChange,!field.value)}} title={'개인정보 취급방침(필수)'}/>)}
					/>
					<TermsViewBtn onPress={() => navigation.navigate('terms')}><TermsViewText>내용보기</TermsViewText></TermsViewBtn>
				</TermsListBox>
				<TermsListBox>
					<Controller
						control={control} name="m_term_commercial"  defaultValue={false}
						render= {({field})=>(<FlexRowCheckBox value={field.value} onPress={()=>{handleOnChange(field.onChange,!field.value)}} title={'이벤트 및 프로모션 안내 메일, SMS수신(선택)'}/>)}
					/>
					<TermsViewBtn onPress={() => navigation.navigate('terms')}><TermsViewText>내용보기</TermsViewText></TermsViewBtn>
				</TermsListBox>
			</ScrollContainer20>
			<BottomBtnYello onPress={!showIndicator ? handleSubmit(onValid, onInvalid) : null}>
				{showIndicator ? (<ActivityIndicator size='small' color='#242424'/>):(<TextBold16>완료</TextBold16>)}
			</BottomBtnYello>
		</Container>
	)
}
export default SignUpScreen