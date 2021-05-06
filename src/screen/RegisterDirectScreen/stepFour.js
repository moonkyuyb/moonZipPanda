/* COMMON */
import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
import Modal from 'react-native-modal';
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from '@react-native-community/datetimepicker';

/* UI COMPONENTS */
import { StepContBorder, TitleBox, Title, RadioBox,  RadioLable, SubTitle, TextRequiredS, RequiredS, InputBorder, ItemTextR, ItemRowList, FlexRowBox, ItemList2Box, Item2RowBox, SelectHalfBox} from '../../styles/registerDirectStyle/rigisterCommonStyle';
import { DatePickerIcons, FloorText, RoomBorderView, RoomItemList2Box, RoomTextArea, RowSubTitle, TextAreaInfo, } from "../../styles/registerDirectStyle/registerDirectStyle";
import ArrowIcon from "../../components/common/ArrowIcon";

/* UTILS */
import { Controller } from "react-hook-form";
import Colors from "../../styles/Colors";
import _ from "lodash";

const StepFourScreen = (props) => {

	//UI STATE
	const [showDatePicker, setShowDatePicker] = useState(false)
	const [pickedDate, setPickedDate] = useState(new Date())
	const [targetValue, setTargetValue] = useState('builtDate') //builtDate

    //UI Components
    const TextRequired = () => (<TextRequiredS><Required/> 필수입력</TextRequiredS>)
	const Required = () => (<RequiredS>*</RequiredS>)
	const RadioBtn = () => (<Image style={{width:24, height:24}} source={require('../../../assets/img/drawable-xhdpi/bt_radio_off.png')} />)
	const RadioBtnActive = () => (<Image style={{width:24, height:24}} source={require('../../../assets/img/drawable-xhdpi/bt_radio_on.png')} />)

	//USE EFFECT
	useEffect(()=>{
		if(props.optHeat.length == 0) props.getOptionHeatList()
		if(props.optLife.length == 0) props.getOptionLifeList()
		if(props.optSecure.length == 0) props.getOptionSecureList()
		if(props.optEtc.length == 0) props.getOptionEtcList()
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
			<TitleBox><Title>매물 정보</Title><TextRequired /></TitleBox>
			<ItemList2Box>
				<Item2RowBox>
        			<SubTitle>방 개수 <Required/></SubTitle>
					<Controller
						control={props.control} name="roomCnt" rules={{required:true}}
						render={({field})=>(
							<InputBorder placeholder={'방 개수 입력'} keyboardType='numeric' value={field.value} onChangeText={field.onChange}/>
						)}
					/>
				</Item2RowBox>
				<Item2RowBox>
					<SubTitle>욕실 개수 <Required/></SubTitle>
					<Controller
						control={props.control} name="bathCnt" rules={{required:true}}
						render={({field})=>(
							<InputBorder placeholder={'욕실 개수 입력'} keyboardType='numeric' value={field.value} onChangeText={field.onChange}/>
						)}
					/>
				</Item2RowBox>
			</ItemList2Box>
			<SubTitle>공급면적 <Required/></SubTitle>
			<ItemList2Box>
				<Item2RowBox>
					<Controller
						control={props.control} name="totalAreaM" rules={{required:true}}
						render={({field})=>(
							<InputBorder placeholder={'면적 입력'} keyboardType = 'numeric' value={field.value} onChangeText={(value)=>{
								props.setValue('totalAreaP', MtoP(value))
								field.onChange(value);
							}}/>
						)}
					/>
					<ItemTextR>m²</ItemTextR>
				</Item2RowBox>
				<Item2RowBox>
					<Controller
						control={props.control} name="totalAreaP" rules={{required:true}}
						render={({field})=>(
							<InputBorder placeholder={'면적 입력'} keyboardType = 'numeric' value={field.value} onChangeText={(value)=>{
								props.setValue('totalAreaM', PtoM(value))
								field.onChange(value);
							}}/>
						)}
					/>
					<ItemTextR>평</ItemTextR>
				</Item2RowBox>
			</ItemList2Box>
			<SubTitle>전용면적 <Required/></SubTitle>
			<ItemList2Box>
				<Item2RowBox>
					<Controller
						control={props.control} name="netAreaM" rules={{required:true}}
						render={({field})=>(
							<InputBorder placeholder={'면적 입력'} keyboardType = 'numeric' value={field.value} onChangeText={(value)=>{
								props.setValue('netAreaP', MtoP(value))
								field.onChange(value);
							}}/>
						)}
					/>
					<ItemTextR>m²</ItemTextR>
				</Item2RowBox>
				<Item2RowBox>
					<Controller
						control={props.control} name="netAreaP" rules={{required:true}}
						render={({field})=>(
							<InputBorder placeholder={'면적 입력'} keyboardType = 'numeric' value={field.value} onChangeText={(value)=>{
								props.setValue('netAreaM', PtoM(value))
								field.onChange(value);
							}}/>
						)}
					/>
					<ItemTextR>평</ItemTextR>
				</Item2RowBox>
			</ItemList2Box>
			
			<SubTitle>해당 층 <Required/></SubTitle>
			<ItemList2Box>
				<Item2RowBox>
					<Controller
						control={props.control} name="floor" rules={{required:true}}
						render={({field})=>(
							<InputBorder placeholder={'층 입력'} keyboardType = 'numeric' value={field.value} onChangeText={field.onChange}/>
						)}
					/>
					<ItemTextR>층</ItemTextR>
				</Item2RowBox>
				<SelectHalfBox>
					<ArrowIcon />
					<Controller
						control={props.control} name="floorType" rules={{required:true}}
						render={({field})=>(
							<RNPickerSelect
								value={field.value}
								useNativeAndroidPickerStyle={false}
								fixAndroidTouchableBug={false}
								onValueChange={(value) => { field.onChange(value) }}
								placeholder={{label: '층 타입'}}
								style={pickerStyle}
								items={[
									{label:'복층', value:'1'},
									{label:'옥탑', value:'2'},
									{label:'반지하', value:'3'},
								]}
							/>
						)}
					/>
				</SelectHalfBox>
			</ItemList2Box>

			<SubTitle>전체 층 <Required/></SubTitle>
			<ItemRowList>
				<Controller
					control={props.control} name="floorTotalCnt"
					render={({field})=>(
						<InputBorder placeholder={'전체 층 입력'} keyboardType = 'numeric' value={field.value} onChangeText={field.onChange}/>
					)}
				/>
				<ItemTextR>층</ItemTextR>
			</ItemRowList>

			<RoomItemList2Box>
				<SubTitle>층 노출</SubTitle>
				<FlexRowBox>
					<Controller
						control={props.control} name="floorExpsYN"
						render={({field})=>(<>
							<RadioBox onPress={()=>{ field.onChange(true) }} >
								{field.value==true? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"예"}</RadioLable>
							</RadioBox>
							<RadioBox onPress={()=>{ field.onChange(false) }} >
								{field.value==false? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"아니오"}</RadioLable>
							</RadioBox>						
						</>)}
					/>
					<FloorText>(고 층/중 층/고 층 노출)</FloorText>
				</FlexRowBox>
			</RoomItemList2Box>
			
			<RoomItemList2Box>
				<SubTitle>방, 거실 형태</SubTitle>
				<FlexRowBox >
					<Controller
						control={props.control} name="roomType"
						render={({field})=>(<>
							<RadioBox onPress={()=>{ field.onChange("1"); }} >
								{field.value=="1"? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"오픈형"}</RadioLable>
							</RadioBox>
							<RadioBox onPress={()=>{ field.onChange("2"); }} >
								{field.value=="2"? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"분리형"}</RadioLable>
							</RadioBox>					
						</>)}
					/>
				</FlexRowBox>
			</RoomItemList2Box>
			
			<RoomItemList2Box>
				<SubTitle>주실 방향 기준</SubTitle>
			    <FlexRowBox >
					<Controller
						control={props.control} name="mainRoomType"
						render={({field})=>(<>
							<RadioBox onPress={()=>{ field.onChange("1"); }} >
								{field.value=="1"? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"안방"}</RadioLable>
							</RadioBox>
							<RadioBox onPress={()=>{ field.onChange("2"); }} >
								{field.value=="2"? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"거실"}</RadioLable>
							</RadioBox>					
						</>)}
					/>
			    </FlexRowBox>
		    </RoomItemList2Box>

			<RoomItemList2Box>
		    	<RowSubTitle>주실 방향</RowSubTitle>
				<SelectHalfBox>
					<ArrowIcon />
					<Controller
						control={props.control} name="mainRoomType"
						render={({field})=>(<>
							<RNPickerSelect
								value={field.value}
								useNativeAndroidPickerStyle={false}
								fixAndroidTouchableBug={false}
								onValueChange={(value) => { field.onChange(value) } }
								placeholder={{label: '방향'}}
								style={pickerStyle}
								items={[
									{label:'동', value:'1'},
									{label:'서', value:'2'},
									{label:'남', value:'3'},
									{label:'북', value:'4'},
									{label:'남동', value:'5'},
									{label:'남서', value:'6'},
									{label:'북서', value:'7'},
									{label:'북동', value:'8'},
								]}
							/>
						</>)}
					/>
				</SelectHalfBox>
		    </RoomItemList2Box>

			<RoomItemList2Box>
		    	<SubTitle>현관 유형</SubTitle>
		    	<FlexRowBox>
					<Controller
						control={props.control} name="aisleType"
						render={({field})=>(<>
							<RadioBox onPress={()=>{ field.onChange("1"); }} >
								{field.value=="1"? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"계단식"}</RadioLable>
							</RadioBox>
							<RadioBox onPress={()=>{ field.onChange("2"); }} >
								{field.value=="2"? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"복도식"}</RadioLable>
							</RadioBox>
							<RadioBox onPress={()=>{ field.onChange("3"); }} >
								{field.value=="3"? <RadioBtnActive/> : <RadioBtn/>}<RadioLable>{"복합식"}</RadioLable>
							</RadioBox>				
						</>)}
					/>
		    	</FlexRowBox>
		    </RoomItemList2Box>
			
		    <RoomItemList2Box>
		    	<RowSubTitle>총 세대수</RowSubTitle>
		    	<RoomBorderView>
					<Controller
						control={props.control} name="totalHouseCnt"
						render={({field})=>(<>
							<InputBorder placeholder={'세대수 입력'} keyboardType='numeric' value={field.value} onChangeText={field.onChange} />
						</>)}
					/>
		    		<ItemTextR>개</ItemTextR>
		    	</RoomBorderView>
		    </RoomItemList2Box>
			
		    <RoomItemList2Box>
		    	<RowSubTitle>총 주차대수 <Required /></RowSubTitle>
		    	<RoomBorderView>
					<Controller
						control={props.control} name="totalParkingCnt" rules={{required:true}}
						render={({field})=>(<>
							<InputBorder placeholder={'주차대수 입력'} keyboardType='numeric' value={field.value} onChangeText={field.onChange} />
						</>)}
					/>
					<ItemTextR>개</ItemTextR>
		    	</RoomBorderView>
		    </RoomItemList2Box>

			<RoomItemList2Box>
		    	<RowSubTitle>준공일 선택 <Required /></RowSubTitle>
				<Controller
					control={props.control} name="builtDate" rules={{required:true}}
					render={({field})=>(<>
						<TouchableOpacity style={ {width:'100%',flexDirection:'row', alignContent:'center', justifyContent:'center'}} onPress={()=>{setShowDatePicker(true)}} >
							<RoomBorderView >
							<InputBorder placeholder={'준공일 선택'} editable={false} value={field.value} onChangeText={field.onChange} /> 
								<DatePickerIcons source={require('../../../assets/img/drawable-xhdpi/bt_calendar.png')}/>
							</RoomBorderView>
						</TouchableOpacity>
					</>)}
				/>
		    </RoomItemList2Box>

		    <TitleBox><Title>시설 및 옵션</Title></TitleBox>
			<SubTitle>난방방식 / 냉방시설</SubTitle>
			<Controller
				control={props.control} name="heatingOpt" defaultValue={[]}
				render={({field})=>(<>
					<View style={[styles.optionItem4Box,{marginBottom: 4}]}>
						{props.optHeat.map((item) => (
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
						))}
					</View>
				</>)}
			/>
			<SubTitle>생활시설</SubTitle>
			<Controller
				control={props.control} name="livingOpt" defaultValue={[]}
				render={({field})=>(<>
					<View style={[styles.optionItem4Box,{marginBottom: 4}]}>
						{props.optLife.map((item) => (
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
						))}
					</View>
				</>)}
			/>
			<SubTitle>보안시설</SubTitle>
			<Controller
				control={props.control} name="securityOpt" defaultValue={[]}
				render={({field})=>(<>
					<View style={[styles.optionItem4Box,{marginBottom: 4}]}>
						{props.optSecure.map((item) => (
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
						))}
					</View>
				</>)}
			/>
			<SubTitle>기타옵션</SubTitle>
			<Controller
				control={props.control} name="etcOpt" defaultValue={[]}
				render={({field})=>(<>
					<View style={[styles.optionItem4Box,{marginBottom: 4}]}>
						{props.optEtc.map((item) => (
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
						))}
					</View>
				</>)}
			/>
			<SubTitle>상세설명 <Required/></SubTitle>
			<Controller
				control={props.control} name="extraDetail" 
				render={({field})=>(<>
					<RoomTextArea
						alue={field.value}
						placeholder={"상세설명 입력"}
						multiline = {true}
						onChangeText={field.onChange}
					/>
				</>)}
			/>
		    <TextAreaInfo>※ 매물에 대한 추가 설명을 자유롭게 작성해주세요.</TextAreaInfo>
		</StepContBorder>
	</>)
}

const pickerStyle = {
	placeholderColor: '#000',
	inputIOS: { color: '#000', height: 34, fontSize: 12 },
	inputAndroid: { color: '#000', height: 34, fontSize: 12 },
}


export const MtoP = (value) => {
    return Math.ceil(value/3.306).toString()
}

export const PtoM = (value) => {
   return Math.ceil(value*3.306).toString()
}

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
export default StepFourScreen
