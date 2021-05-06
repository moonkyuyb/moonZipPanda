/* COMMON */
import React,  { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

/* UI COMPONENTS */
import { Image24, Image32, TextBold12, FlexRowBtn} from '../styles/CommonStyle';
import { SignInWrapper, SignInInputBox, SignInInputList, SignInInfoBox, SignInInput, SignInBtn, SignInBtnText, SNSSignInBox, SNSSignInInner, SNSSignInBtn, SNSText } from '../styles/signInStyle';
import FlexRowCheckBox from '../components/common/FlexRowCheckBox';

/* UTILS */
import { Controller, useForm } from "react-hook-form";
import _ from "lodash";
import ModalPopup from '../components/common/ModalPopup';

const SignInScreen = ({token, verifiedToken, alertMessage, authSignIn, verifyToken, showAlertMessage}) => {

	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()

	//UI STATES
	const [showIndicator, setShowIndicator] = useState(false)

	//REACT HOOK FORM
	const {control, handleSubmit } = useForm()
	const onValid = async (data) =>  {
		setShowIndicator(true)
		authSignIn(data)
	};
	const onInvalid = err => {
		if(err.username){
			showAlertMessage('아이디를 입력하세요')
		}else if(err.password){
			showAlertMessage('비밀번호를 입력하세요')
		}else if(err.agreePrivacy){
			showAlertMessage('개인정보 보호정책에 동의해주세요')
		}
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
		if(token) verifyToken(token)
	},[token])

	useEffect(()=>{
		if(verifiedToken) {
			setShowIndicator(false)
			navigation.navigate('index')
		}
	},[verifiedToken])

	return(
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.signInContainer}>

			{/* ERROR MESSAGE POPUP */}
			<ModalPopup/>

			{/* SIGNIN FORM */}
			<SignInWrapper>
				<SignInInputBox>
					<Controller control={control} name="auth_provider" rules={{required:true}} defaultValue={'AP_EMAIL'} render={()=>(null)}/>
					<SignInInputList>
						<Image32 source={require('../../assets/img/drawable-xhdpi/icon_login_id.png')} />
						<Controller
							control={control} name="username" rules={{required:true}} defaultValue={''}
							render= {({field})=>(<SignInInput value={field.value} onChangeText={field.onChange} placeholder={'아이디(이메일)입력'}/>)}
						/>
					</SignInInputList>
					<SignInInputList>
						<Image32 source={require('../../assets/img/drawable-xhdpi/icon_login_pass.png')} />
						<Controller
							control={control} name="password" rules={{required:true}} defaultValue={''}
							render= {({field})=>(<SignInInput value={field.value} onChangeText={field.onChange} placeholder={'패스워드 입력'} secureTextEntry={true}/>)}
						/>
					</SignInInputList>
				</SignInInputBox>
				<SignInInfoBox>
					<Controller
						control={control} name="keepSignIn"  defaultValue={false}
						render= {({field})=>(<FlexRowCheckBox value={field.value} onPress={()=>{field.onChange(!field.value)}} title={'로그인 상태 유지'}/>)}
					/>
					<FlexRowBtn onPress={()=>{showAlertMessage('준비중입니다(~05/17)')}}>
						<TextBold12>비밀번호를 잊으셨나요?</TextBold12>
						<Image24 source={require('../../assets/img/drawable-xhdpi/bt_sub_back.png')} />
					</FlexRowBtn>
				</SignInInfoBox>

				{/* SIGNIN BUTTONS (로그인, 회원가입) */}
				<SignInBtn onPress={!showIndicator ? handleSubmit(onValid, onInvalid) : null}>
					{showIndicator ? (<ActivityIndicator size='small' color='#242424'/>):(<SignInBtnText>로그인</SignInBtnText>)}
				</SignInBtn>
				<SignInBtn signUp onPress={() => navigation.navigate('signUp')}>
					<SignInBtnText signUp>회원가입</SignInBtnText>
				</SignInBtn>

				{/* SIGNIN SNS BUTTONS (SNS로그인) */}
				<SNSSignInBox>
					<SNSSignInInner>
						<SNSSignInBtn onPress={()=>{showAlertMessage('준비중입니다(~05/17)')}}>
							<Image24 source={require('../../assets/img/drawable-xhdpi/icon_kakao.png')} />
							<SNSText>카카오 계정으로{"\n"}시작하기</SNSText>
						</SNSSignInBtn>
						<SNSSignInBtn SnsSignInR onPress={()=>{showAlertMessage('준비중입니다(~05/17)')}}>
							<Image24 source={require('../../assets/img/drawable-xhdpi/icon_naver.png')} />
							<SNSText>네이버 계정으로{"\n"}시작하기</SNSText>
						</SNSSignInBtn>
					</SNSSignInInner>
					<SNSSignInInner>
						<SNSSignInBtn onPress={()=>{showAlertMessage('준비중입니다(~05/17)')}}>
							<Image24 source={require('../../assets/img/drawable-xhdpi/icon_google.png')} />
							<SNSText>구글 계정으로{"\n"}시작하기</SNSText>
						</SNSSignInBtn>
						<SNSSignInBtn SnsSignInR onPress={()=>{showAlertMessage('준비중입니다(~05/17)')}}>
							<Image24 source={require('../../assets/img/drawable-xhdpi/icon_apple.png')} />
							<SNSText>애플 계정으로{"\n"}시작하기</SNSText>
						</SNSSignInBtn>
					</SNSSignInInner>
				</SNSSignInBox>
			</SignInWrapper>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	signInContainer: {
		paddingHorizontal: 40,backgroundColor: '#FFF',
		flex:1,justifyContent: 'center',alignItems: 'center',
	}
})

export default SignInScreen