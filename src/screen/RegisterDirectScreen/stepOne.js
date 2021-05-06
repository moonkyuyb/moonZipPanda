/* COMMON */
import React, { useState } from "react";
import { View, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";

/* REDUX */
import { useDispatch } from "react-redux";
import { showAlertMessage } from "../../reducers/modalReducer";

/* UI COMPONENTS */
import { StepInfoCont, InfoTitleBox, NoticeItem, NoticeList, ChkImg, NoticeTit, YellowBgText, InfoChkBox, InfoChkText} from '../../styles/registerDirectStyle/registerTopInfoStyle';
import { StepContBorder, TitleBox, Title, SubTitle, TextRequiredS, RequiredS, ItemList2Box, SelectHalfBox, InputBorder, YellowBtn, YellowBtnText, Item2RowBoxInput } from '../../styles/registerDirectStyle/rigisterCommonStyle';
import ArrowIcon from "../../components/common/ArrowIcon";
import SemiBoldText from "../../components/SemiBoldText";

/* UTILS */
import { Controller } from "react-hook-form";

const StepOneScreen = (props) => {

	//REACT HOOK FORM
	const control = props.control
	const getValues = props.getValues
	
	//REDUX
	const dispatch = useDispatch()

	//UI STATE
	const [sellerType, setSellerType] = useState(getValues('sellerType'))

    //UI Components
    const ChkBIcon = () => (<ChkImg source={require('../../../assets/img/drawable-xhdpi/img_regist_bullit_b.png')} />)
    const TextRequired = () => (<TextRequiredS><Required/> 필수입력</TextRequiredS>)
	const Required = () => (<RequiredS>*</RequiredS>)
	const ChkYIcon = () => (<Image style={{width:20, height:20}} source={require('../../../assets/img/drawable-xhdpi/img_regist_bullit_y.png')} />)

    return (
		<>
			<StepInfoCont>
				<InfoTitleBox>
					<Title>등록시 유의사항</Title>
				</InfoTitleBox>
				<NoticeItem>
					<NoticeList>
						<ChkBIcon />
						<NoticeTit>매물 등록 시 <YellowBgText>매물 정보와 계정정보(가입된 ID, 등록자 이름)이 노출됩니다.</YellowBgText></NoticeTit>
					</NoticeList>
					<NoticeList>
						<ChkBIcon />
						<NoticeTit>매도인의 연락처는 <YellowBgText>매수인의 연락처 공개 요청과 매도인의 연락처 공개 승인</YellowBgText>이 된 경우에만 공개됩니다.</NoticeTit>
					</NoticeList>
					<NoticeList>
						<ChkBIcon />
						<NoticeTit>최초 등록 시 <YellowBgText>건물형태, 거래 정보, 주소(동/호 정보포함), 면적 정보, ‘최초등록가’ ±20%를 벗어나는 가격 (월세 제외)은 수정시 승인</YellowBgText>이 필요합니다.</NoticeTit>
					</NoticeList>
					<NoticeList>
						<ChkBIcon />
						<NoticeTit><YellowBgText>허위(계약 완료, 중복 등록, 허위 정보 기재) 등록 및 중개매물, 원룸텔, 쉐어하우스 등록 시 서비스 이용이 제한</YellowBgText>될 수 있습니다.</NoticeTit>
					</NoticeList>
				</NoticeItem>
			</StepInfoCont>
			<StepContBorder>
				<TitleBox>
					<Title>등록자 정보</Title><TextRequired/>
					<Controller control={control} name="approvYN" defaultValue={''} value={''} render={()=>(null)}/>
				</TitleBox>
				<SubTitle>등록자 구분 <Required/></SubTitle>
				<ItemList2Box>
					<SelectHalfBox>
						<ArrowIcon />
						<Controller
							control={control} name="sellerType" rules={{required:true}} defaultValue={''}
							render={({field})=>(
								<RNPickerSelect
									value={field.value}
									onValueChange={(value) => { field.onChange(value); setSellerType(value) } }
									placeholder={{label: '등록자 선택'}}

									useNativeAndroidPickerStyle={false}
									fixAndroidTouchableBug={false}
									items={[ {label:'임대인', value:'lessor'}, {label:'기존세입자', value:'lessee'}, {label:'기타', value:'etc'} ]}
									style={{
										placeholderColor: '#000', 
										inputIOS: { color: '#000', height: 34, fontSize: 12 },
										inputAndroid: { color: '#000', height: 34, fontSize: 12 },
									}}
							   />
							)}
						/>
					</SelectHalfBox>
					{sellerType === 'etc' && (
						<Controller
							control={control} name="sellerEtc" rules={{required:sellerType=='etc'?true:false}} defaultValue={''}
							render={({field})=>( <Item2RowBoxInput value={field.value} onChangeText={field.onChange} placeholder={'기타의 경우 입력'}/> )}
						/>
					)}
				</ItemList2Box>
				<SubTitle>임대인 이름 <Required/></SubTitle>
				<View>
					<Controller
						control={control} name="sellerName" rules={{required:true}} defaultValue={''}
						render={({field})=>( <InputBorder value={field.value} onChangeText={field.onChange} placeholder={'이름 입력'} /> )}
					/>
					<YellowBtn onPress={()=>{dispatch(showAlertMessage('준비 중입니다.'))}}><YellowBtnText>본인인증</YellowBtnText></YellowBtn>
				</View>
				<SubTitle>연락처 <Required/></SubTitle>
				<Controller
					control={control} name="sellerContact" rules={{required:true, minLength:9}} defaultValue={''}
					render={({field})=>( <InputBorder value={field.value} onChangeText={field.onChange} placeholder={'연락처 입력'} keyboardType = 'numeric' /> )}
				/>
				<InfoChkBox>
					<ChkYIcon/>
					<InfoChkText>
						<SemiBoldText>실제임대인(집주인)의 이름과 연락처를 입력해주세요.</SemiBoldText>{"\n"}
						(공동소유일 경우 임대인 중 한 명의 이름만 입력해주세요.)
					</InfoChkText>
				</InfoChkBox>
			</StepContBorder>		
		</>
    )
}

export default StepOneScreen