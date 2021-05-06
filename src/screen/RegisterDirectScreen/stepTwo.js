/* COMMON */
import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import RNPickerSelect from "react-native-picker-select";

/* UI COMPONENTS */
import { StepContBorder, TitleBox, Title, RadioTitleBox, RadioBox,  RadioLable, SubTitle, TextRequiredS, RequiredS, ItemList2Box, SelectHalfBox, InputBorder, ItemTextR, Item2RowBoxInput, ItemRowList, ItemText, FlexRowBox, BtnBorder, ViewBorder} from '../../styles/registerDirectStyle/rigisterCommonStyle';
import { AgreedChkBtn, AgreedChkText, GreyBox, GreyBoxTit, GreyChkBtn, InfoNum, InfoNum2, RegisterInfoBox, RegisterInfoText, RegisterInfoText2 } from "../../styles/registerDirectStyle/registerDirectStyle";
import ArrowIcon from "../../components/common/ArrowIcon";

/* UTILS */
import { Controller } from "react-hook-form";

const StepTwoScreen = (props) => {

	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()

	//REACT HOOK FORM
	const control = props.control

    //UI Components
    const TextRequired = () => (<TextRequiredS><Required/> 필수입력</TextRequiredS>)
	const Required = () => (<RequiredS>*</RequiredS>)
	const RadioBtn = () => (<Image style={{width:24, height:24}} source={require('../../../assets/img/drawable-xhdpi/bt_radio_off.png')} />)
	const RadioBtnActive = () => (<Image style={{width:24, height:24}} source={require('../../../assets/img/drawable-xhdpi/bt_radio_on.png')} />)
	const ChkBtn = () => (<Image style={{width:24, height:24}} source={require('../../../assets/img/drawable-xhdpi/bt_combo_off.png')} />)
	const ChkActive = () => (<Image style={{width:24, height:24}} source={require('../../../assets/img/drawable-xhdpi/bt_combo_on.png')} />)

	//UI STATE
	const [bldgTypeName, setBldgTypeName] = useState('')
	const [bldgStyleName, setBldgStyleName] = useState('')

	//USE EFFECT
	useEffect(()=>{
		if(props.addressSi.length == 0) props.getAddressSi()
	},[])

    return (<>
		<StepContBorder>
			<TitleBox><Title>매물 정보</Title><TextRequired /></TitleBox>
			<Controller
				control={control} name="bldgType" rules={{required:true}}
				render={({field})=>(<>
					<RadioTitleBox>
						<SubTitle>건물 유형 <Required/></SubTitle>
							<FlexRowBox>
								<RadioBox onPress={() => { setBldgTypeName("단독주택"); field.onChange("BdType_1") }}>
									{field.value=='BdType_1'?<RadioBtnActive/>:<RadioBtn/>}<RadioLable>{"단독주택"}</RadioLable>
								</RadioBox>
								<RadioBox onPress={() => { setBldgTypeName("공동주택");  field.onChange("BdType_2") }}>
									{field.value=='BdType_2'?<RadioBtnActive/>:<RadioBtn/>}<RadioLable>{"공동주택"}</RadioLable>
								</RadioBox>
							</FlexRowBox>
					</RadioTitleBox>
					<BtnBorder onPress={() => navigation.navigate('buildingType', {onChange:field.onChange, setBldgTypeName:setBldgTypeName, bldgType:field.value}) }>
						<ItemText>{bldgTypeName?bldgTypeName:'건물 유형 선택'}</ItemText><ArrowIcon/>
					</BtnBorder>
				</>)}
			/>
			<Controller
				control={control} name="bldgStyle" rules={{required:true}}
				render={({field})=>(<>
					<SubTitle>건물 형태 <Required/></SubTitle>
					<BtnBorder onPress={() => navigation.navigate('saleType', {onChange:field.onChange, setBldgStyleName:setBldgStyleName, bldgStyle:field.value}) }>
						<ItemText>{bldgStyleName?bldgStyleName:'건물 형태 선택'}</ItemText><ArrowIcon/>
					</BtnBorder>
				</>)}
			/>
			<Controller
				control={control} name="si" rules={{required:true}}
				render={({field})=>(<>
					<SubTitle>소재지 <Required/></SubTitle>
					<ViewBorder>
						<ArrowIcon />
						<RNPickerSelect
							value={field.value}
							onValueChange={(value)=>{
								props.getAddressGu(value)
								props.setValue('gu','')
								props.setValue('dong','')
								field.onChange(value)
							}}
							placeholder={{label: '시/도 선택'}}
							useNativeAndroidPickerStyle={false}
							fixAndroidTouchableBug={false}
							items={props.addressSi}
							style={pickerStyle}
						/>
					</ViewBorder>
				</>)}
			/>
			<ItemList2Box>
				<Controller
					control={control} name="gu" rules={{required:true}}
					render={({field})=>(<>
						<SelectHalfBox>
							<ArrowIcon />
							<RNPickerSelect
								value={field.value}
								onValueChange={(value)=>{
									props.getAddressDong({
										si: props.getValues('si'),
										gu: value
									})
									field.onChange(value)
								}}
								placeholder={{label: '시/군/구 선택'}}
								useNativeAndroidPickerStyle={false}
								fixAndroidTouchableBug={false}
								items={props.addressGu}
								style={pickerStyle}
							/>						
						</SelectHalfBox>
					</>)}
				/>					
				<Controller
					control={control} name="dong" rules={{required:true}}
					render={({field})=>(<>
						<SelectHalfBox>
							<ArrowIcon />
							<RNPickerSelect
								value={field.value}
								onValueChange={(value)=>{field.onChange(value)}}
								placeholder={{label: '읍/면/동 선택'}}
								useNativeAndroidPickerStyle={false}
								fixAndroidTouchableBug={false}
								items={props.addressDong}
								style={pickerStyle}
							/>
						</SelectHalfBox>
					</>)}
				/>
			</ItemList2Box>
			<Controller
				control={control} name="addressName" rules={{required:true}}
				render={({field})=>(<>
					<SubTitle>건물/단지명 <Required/></SubTitle>
					<InputBorder defaultValue={''} onChangeText={(value) => { field.onChange(value) }} placeholder={'예)롯데타워 34층 3409호'} value={field.value} />
				</>)}
			/>
			<Controller
				control={control} name="detailAddrType"
				render={({field})=>(<>
					<RadioTitleBox>
						<SubTitle>상세주소<Required/></SubTitle>
						<FlexRowBox>
							<RadioBox onPress={() => { field.onChange(0) }}>
								{field.value == 0 ? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"일반"}</RadioLable>
							</RadioBox>
							<RadioBox onPress={() => { field.onChange(1) }}>
								{field.value == 1 ? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"산"}</RadioLable>
							</RadioBox>
						</FlexRowBox>					
					</RadioTitleBox>
				</>)}
			/>
			<Controller
				control={control} name="detailAddr1" rules={{required:true}}
				render={({field})=>(
					<ItemRowList>
						<InputBorder value={field.value}  onChangeText={(value) => { field.onChange(value) } }  placeholder={'번지입력'}/>
						<ItemTextR>번지</ItemTextR>
					</ItemRowList>
				)}
			/>
			<ItemList2Box>
				<Controller
					control={control} name="detailAddr2" rules={{required:true}}
					render={({field})=>(<Item2RowBoxInput value={field.value} onChangeText={(value) => {field.onChange(value)}}  placeholder={'동 입력'} />)}
				/>
				<Controller
					control={control} name="detailAddr3" rules={{required:true}}
					render={({field})=>(<Item2RowBoxInput value={field.value} onChangeText={(value) => {field.onChange(value)}}  placeholder={'호 입력'} />)}
				/>
			</ItemList2Box>
			<Controller
				control={control} name="detailAddr4" rules={{required:true}}
				render={({field})=>(<InputBorder placeholder={'기타 상세 주소 (동,호수 입력)'} value={field.value} onChangeText={(value) => {field.onChange(value)}}/>)}
			/>
			<Controller
				control={control} name="tmpAddrYN"
				render={({field})=>(<>
					<RadioTitleBox>
						<SubTitle>가(임시) 주소 </SubTitle>
						<RadioBox onPress={() => {
							if(field.value){ props.setValue('tmpAddr1',0); props.setValue('tmpAddr2',0); props.setValue('tmpAddr3',0); }
							field.onChange(!field.value)
						}}>
							{field.value == 1 ? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"적용"}</RadioLable>
						</RadioBox>
					</RadioTitleBox>
				</>)}
			/>
			<GreyBox>
				<Controller
					control={control} name="tmpAddr1" render = {({field})=>(
					<GreyChkBtn onPress={() => { field.onChange(!field.value); if(!field.value)props.setValue('tmpAddrYN',1) }}>
						{field.value == 1 ? <ChkActive/> : <ChkBtn/>}<GreyBoxTit>미등기</GreyBoxTit>
					</GreyChkBtn>
					)}
				/>
				<Controller
					control={control} name="tmpAddr2" render = {({field})=>(
					<GreyChkBtn onPress={() => { field.onChange(!field.value); if(!field.value)props.setValue('tmpAddrYN',1) }}>
						{field.value == 1 ? <ChkActive/> : <ChkBtn/>}<GreyBoxTit>구분등기 있음</GreyBoxTit>
					</GreyChkBtn>
					)}
				/>
				<Controller
					control={control} name="tmpAddr3" render = {({field})=>(
					<GreyChkBtn onPress={() => { field.onChange(!field.value); if(!field.value)props.setValue('tmpAddrYN',1) }}>
						{field.value == 1 ? <ChkActive/> : <ChkBtn/>}<GreyBoxTit>건축물대장 면적 확인 요청</GreyBoxTit>
					</GreyChkBtn>
					)}
				/>
			</GreyBox>
		</StepContBorder>
		<StepContBorder style={{paddingTop: 24, paddingBottom: 24}}>
			<Title>매물등록 유의사항 확인 및 동의 <Required/></Title>
			<RegisterInfoBox>
				<FlexRowBox>
					<InfoNum>1.</InfoNum>
					<RegisterInfoText>상세주소는 검증과 지도 노출 시 사용되며 일반 사용자에게 노출되지 않습니다.</RegisterInfoText>
				</FlexRowBox>
				<FlexRowBox>
					<InfoNum>2.</InfoNum>
					<RegisterInfoText>상세주소가 정확하지 않은 경우 등기부등본 조회 시 등록이 반려됩니다.</RegisterInfoText>
				</FlexRowBox>
				<FlexRowBox>
					<InfoNum>3.</InfoNum>
					<RegisterInfoText>주소 및 면적 불일치로 검증 요청이 반려될 경우 변경된 정보로 새로운 매물 등록 가능합니다.</RegisterInfoText>
				</FlexRowBox>
				<FlexRowBox>
					<InfoNum>4.</InfoNum>
					<RegisterInfoText>택지 개발 등으로 지번이 부여되지 않거나, 도로명 주소, 블록 주소일 경우 가(임시)주소를 선택해주세요.</RegisterInfoText>
				</FlexRowBox>
				<FlexRowBox>
					<InfoNum>※</InfoNum>
					<RegisterInfoText>동/호 정보는 수정이 불가능합니다. 등기부에 나와있는 동/호수 정보를 정확히 입력해주세요.</RegisterInfoText>
				</FlexRowBox>
				<View>
					<FlexRowBox>
						<InfoNum2>-</InfoNum2>
						<RegisterInfoText2>한 주소지 내에 여러 호수가 등기되어 있는 경우 ‘해당 호수‘까지 입력해주세요.</RegisterInfoText2>
					</FlexRowBox>
					<FlexRowBox>
						<InfoNum2>-</InfoNum2>
						<RegisterInfoText2>등기 상으로 구분등기가 되지 않았으나, 실질적으로 나눠서 사용하고 있는 매물은 ‘일부‘를 상세주소에 추가로 입력해주세요.</RegisterInfoText2>
					</FlexRowBox>
					<FlexRowBox>
						<InfoNum2>-</InfoNum2>
						<RegisterInfoText2>건물은 ‘건물 전체‘, ‘층 전체’, ‘0층 전체’, ‘A동’, ‘가동’ 등으로 구분하여 입력해주세요.</RegisterInfoText2>
					</FlexRowBox>
					<FlexRowBox>
						<InfoNum2>-</InfoNum2>
						<RegisterInfoText2>상세주소 부분에 등기부등본 상의 부동산 소재지번 내용을 입력하시면 빠르고 정확한 매물 등록이 가능합니다.</RegisterInfoText2>
					</FlexRowBox>
				</View>
			</RegisterInfoBox>
			<Controller
				control={control} name="agreementYN" rules={{required:true}}
				render={({field})=>(
					<AgreedChkBtn onPress={() => { field.onChange(!field.value) }}>
						{field.value == 1 ? <ChkActive/> : <ChkBtn/>}<AgreedChkText>위 매물등록 유의사항에 동의합니다.</AgreedChkText>
					</AgreedChkBtn>
				)}
			/>
		</StepContBorder>
	</>)
}

const pickerStyle = {
	placeholderColor: '#000',
	inputIOS: { color: '#000', height: 34, fontSize: 12 },
	inputAndroid: { color: '#000', height: 34, fontSize: 12 },
}

export default StepTwoScreen
