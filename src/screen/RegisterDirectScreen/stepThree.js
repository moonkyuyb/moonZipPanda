/* COMMON */
import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
import Modal from 'react-native-modal';
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';

/* UI COMPONENTS */
import { StepContBorder, TitleBox, Title, RadioTitleBox, RadioBox,  RadioLable, SubTitle, TextRequiredS, RequiredS, InputBorder, ItemTextR, ItemRowList, FlexRowBox, ViewBorder, DateTextTextL, RadioBoxMarginN} from '../../styles/registerDirectStyle/rigisterCommonStyle';
import { DatePickerIcons, GreyBoxTit, GreyChkBtn, OccupancyDateBox, OccupancyDateSel, OccupancyRadioBox, } from "../../styles/registerDirectStyle/registerDirectStyle";
import ArrowIcon from "../../components/common/ArrowIcon";

/* UTILS */
import { Controller } from "react-hook-form";
import Colors from "../../styles/Colors";
import _ from "lodash";

const StepThreeScreen = (props) => {

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
	const [contractType, setContractType] = useState('')
	const [showDatePicker, setShowDatePicker] = useState(false)
	const [pickedDate, setPickedDate] = useState(new Date())
	const [targetValue, setTargetValue] = useState('contractStart') //contractStart, contractEnd
	const [commonFeeYN, setCommonFeeYN] = useState(false)
	const [indiFeeYN, setIndiFeeYN] = useState(false)
	const [dateInType, setDateInType] = useState(0)

	//USE EFFECT
	useEffect(()=>{
		if(props.commonFeeList.length == 0) props.getCommonFeeList()
		if(props.indiFeeList.length == 0) props.getIndiFeeList()
	},[])

    return (<>
		<Modal isVisible={showDatePicker}>
			<View style={ {backgroundColor:'#ffffff'} }>
				<RNDateTimePicker
					value={pickedDate}
					mode={"date"} is24Hour={true} display="default" testID="dateTimePicker"
					onChange={(event, selectedDate) => { 
						setShowDatePicker(false)
						const resultString = selectedDate.getFullYear().toString()+"-"+(selectedDate.getMonth()+1)+"-"+selectedDate.getDate()
						props.setValue(targetValue, resultString)
					}}
				/>
			</View>
		</Modal>
		<StepContBorder>
			<TitleBox><Title>거래 정보</Title><TextRequired/></TitleBox>
			<Controller
				control={control} name="contractType" rules={{required:true}}
				render={({field})=>(<>
					<SubTitle>계약형태 <Required/></SubTitle>
					<ViewBorder>
						<ArrowIcon/>
						<RNPickerSelect
							value={field.value}
							onValueChange={(value) => { field.onChange(value); setContractType(value) } }
							placeholder={{label: '계약 형태 선택'}}
							useNativeAndroidPickerStyle={false}
							fixAndroidTouchableBug={false}
							style={pickerStyle}
							items={[
								{label:'전세', value:'lease'},
								{label:'월세', value:'monthly'},
								{label:'매매', value:'sales'},
								{label:'단기임대', value:'short'},
							]}
						/>
					</ViewBorder>
				</>)}
			/>
			<SubTitle>가격정보 <Required/></SubTitle>
			<Controller
				control={control} name="depositAmt" rules={{required:true}}
				render={({field})=>(<>
					<ItemRowList>
						<InputBorder placeholder={'보증금 입력'} keyboardType='numeric' value={field.value} onChangeText={field.onChange}/>
						<ItemTextR>만원</ItemTextR> 
			    	</ItemRowList>
				</>)}
			/>
			{(props.getValues('contractType') == 'monthly' || props.getValues('contractType') == 'short') ? ( //월세, 단기임대의 경우
			<Controller
				control={control} name="monthAmt" rules={{required:true, pattern:'[0-9]*'}}
				render={({field})=>(<>
					<ItemRowList>
						<InputBorder placeholder={'월세 입력'} keyboardType='numeric' value={field.value} onChangeText={field.onChange}/>
						<ItemTextR>만원</ItemTextR> 
			    	</ItemRowList>
				</>)}
			/>
			): (null)}
			{(props.getValues('contractType') != 'sales') ? ( //매매가 '아닐' 경우
			<>
				<SubTitle>계약기간 <Required/></SubTitle>
				<Controller
					control={control} name="contractStart" rules={{required:true}}
					render={({field})=>(<ViewBorder>
						<TouchableOpacity style={{backgroundColor:'transparent', width:'100%', height:'100%'} } onPress={ () => {
							setTargetValue('contractStart')
							setShowDatePicker(true)
						}}>
							<DateTextTextL>{field.value}</DateTextTextL>
						</TouchableOpacity>
						<DatePickerIcons source={require('../../../assets/img/drawable-xhdpi/bt_calendar.png')}  />
					</ViewBorder>)}
				/>
				<Controller
					control={control} name="contractEnd" rules={{required:true}}
					render={({field})=>(<ViewBorder>
						<TouchableOpacity style={{backgroundColor:'transparent', width:'100%', height:'100%'} } onPress={ () => {
							setTargetValue('contractEnd')
							setShowDatePicker(true)
						}}>
							<DateTextTextL>{field.value}</DateTextTextL>
						</TouchableOpacity>
						<DatePickerIcons source={require('../../../assets/img/drawable-xhdpi/bt_calendar.png')}  />
					</ViewBorder>)}
				/>
			</>
			):(null)}
			<Controller
				control={control} name="commonFeeYN" defaultValue={false}
				render={({field})=>(
					<RadioTitleBox>
						<SubTitle>공용 관리비 <Required/></SubTitle>
						<FlexRowBox>
							<RadioBox onPress={() => { setCommonFeeYN(true); field.onChange(true) }}>
								{field.value==true?<RadioBtnActive/>:<RadioBtn/>}<RadioLable>{"있음"}</RadioLable>
							</RadioBox>
							<RadioBox onPress={() => { setCommonFeeYN(false); field.onChange(false) }}>
								{field.value==false?<RadioBtnActive/>:<RadioBtn/>}<RadioLable>{"없음"}</RadioLable>
							</RadioBox>
						</FlexRowBox>
					</RadioTitleBox>
				)}
			/>
			<Controller
				control={control} name="commonFeeAmt" rules={{required:commonFeeYN}}
				render={({field})=>(
					<ItemRowList>
						<InputBorder value={field.value} onChangeText={(value)=>field.onChange(value)} placeholder={'관리비 입력'} keyboardType='numeric' editable={commonFeeYN}/>
						<ItemTextR>만원</ItemTextR>
					</ItemRowList>
				)}
			/>
			<Controller
				control={control} name="commonFeeList" rules={{required:commonFeeYN}} defaultValue={[]}
				render={({field})=>(<>
					<SubTitle>공용 관리비 항목 </SubTitle>
					<View style={[styles.optionItem4Box,{marginBottom: 4}]}>
						{
							props.commonFeeList.map((item) => (
								<TouchableOpacity
									key={item.value}
									style={(_.find(field.value,i=>i==item.value)) ? styles.optionList4Active : styles.optionList4}
									onPress={()=>{
										const newValueArr = Object.assign([],field.value)
										if(_.find(newValueArr,i=>i==item.value)){
											_.remove(newValueArr, i=>i==item.value)
										}else{
											newValueArr.push(item.value)
										}
										field.onChange(newValueArr)
									}}>
									<Text style={styles.optionTit}>{item.label}</Text>
								</TouchableOpacity>
							))
						}
					</View>
				</>)}
			/>
			<Controller
				control={control} name="indiFeeYN"
				render={({field})=>(
					<RadioTitleBox>
						<SubTitle>개별 사용료 <Required/></SubTitle>
						<FlexRowBox>
							<RadioBox onPress={() => { setIndiFeeYN(true); field.onChange(true) }}>
								{field.value==true?<RadioBtnActive/>:<RadioBtn/>}<RadioLable>{"있음"}</RadioLable>
							</RadioBox>
							<RadioBox onPress={() => { setIndiFeeYN(false); field.onChange(false) }}>
								{field.value==false?<RadioBtnActive/>:<RadioBtn/>}<RadioLable>{"없음"}</RadioLable>
							</RadioBox>
						</FlexRowBox>
					</RadioTitleBox>
				)}
			/>
			<Controller
				control={control} name="indiFeeList" rules={{required:indiFeeYN}} defaultValue={[]}
				render={({field})=>(<>
					<SubTitle>개별 사용료 항목 <Required/></SubTitle>
					<View style={[styles.optionItem4Box,{marginBottom: 4}]}>
						{
							props.indiFeeList.map((item) => (
								<TouchableOpacity
									key={item.value}
									style={(_.find(field.value,i=>i==item.value)) ? styles.optionList4Active : styles.optionList4}
									onPress={()=>{
										const newValueArr = Object.assign([],field.value)
										if(_.find(newValueArr,i=>i==item.value)){
											_.remove(newValueArr, i=>i==item.value)
										}else{
											newValueArr.push(item.value)
										}
										field.onChange(newValueArr)
									}}>
									<Text style={styles.optionTit}>{item.label}</Text>
								</TouchableOpacity>
							))
						}
					</View>
				</>)}
			/>
			<Controller
				control={control} name="deptAMT" rules={{required:true}}
				render={({field})=>(<>
					<SubTitle>융자 여부 <Required/></SubTitle>
					<ViewBorder>
						<ArrowIcon/>
						<RNPickerSelect
							value={field.value}
							onValueChange={(value) => { field.onChange(value); setContractType(value) } }
							placeholder={{label: '융자 여부 선택'}}
							useNativeAndroidPickerStyle={false}
							fixAndroidTouchableBug={false}
							style={pickerStyle}
							items={[
								{label:'융자금 없음', value:'n'},
								{label:'시세 대비 30% 미만', value:'b'},
								{label:'시세 대비 30% 이상', value:'a'},
							]}
						/>
					</ViewBorder>
				</>)}
			/>
			<SubTitle>입주 가능일 <Required/></SubTitle>
			<OccupancyDateBox>
			<Controller
				control={control} name="dateInType"
				render={({field})=>(<>
					<RadioBoxMarginN onPress={ () => { field.onChange(0); setDateInType(0); props.setValue('dateInDate','') }} >
						{dateInType == 0 ? <RadioBtnActive />:<RadioBtn />}<RadioLable>{"즉시입주"}</RadioLable>
					</RadioBoxMarginN>
				</>)}
			/>
			<Controller
				control={control} name="dateInDate" rules={{required:dateInType==1}}
				render={({field})=>(<>
					<OccupancyRadioBox>
						<RadioBoxMarginN onPress={ () => { props.setValue('dateInType',1); setDateInType(1); }} >
							{dateInType == 1 ? ( <RadioBtnActive/> ) : (<RadioBtn/>)}
						</RadioBoxMarginN>
						<OccupancyDateSel>
							<TouchableOpacity style={ {backgroundColor:'transparent', width:'100%', height:'100%'} }
								onPress={ () => {
									props.setValue('dateInType', 1); setDateInType(1)
									setTargetValue('dateInDate'); setShowDatePicker(true)
								}}>
								<DateTextTextL>{field.value?field.value:'날짜 선택'}</DateTextTextL>
							</TouchableOpacity>
							<DatePickerIcons source={require('../../../assets/img/drawable-xhdpi/bt_calendar.png')}/>
						</OccupancyDateSel>
					</OccupancyRadioBox>
				</>)}
			/>
			</OccupancyDateBox>
			<Controller
				control={control} name="dateInNegoYN" defaultValue={false}
				render={({field})=>(
					<GreyBox2>
						<GreyChkBtn onPress={() => { field.onChange(!field.value) } }>
							{field.value ? <ChkActive/> : <ChkBtn/>}<GreyBoxTit>입주일 협의 가능</GreyBoxTit>
						</GreyChkBtn>
					</GreyBox2>					
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

export const GreyBox2 = styled.View`
	padding: 6px 11px;
	background-color: ${Colors.borderBottomColors};
	flex-direction: row;
	align-items: center;
	margin-bottom: 36px;
	margin-top: 8px;
`; 

const styles = StyleSheet.create({
	optionList4:{
		width: '23%',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: Colors.borderColor,
		height: 34,
		marginRight: 4,
		marginTop:4,
	},
	optionItem4Box:{
		paddingRight: 12,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	optionList4Active:{
		width: '23%',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: Colors.blackColor,
		backgroundColor: Colors.mainColor,
		height: 34,
		marginRight: 4,
		marginTop:4,
	},
	optionTit:{
		fontSize: 12,
		color: Colors.blackColor,
		textAlign: 'center',
	},
})
export default StepThreeScreen
