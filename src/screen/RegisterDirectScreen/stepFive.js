/* COMMON */
import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
import Modal from 'react-native-modal';
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';

/* UI COMPONENTS */
import {StepInfoCont, InfoTitleBox, NoticeItem, NoticeList, ChkImg, NoticeTit, YellowBgText, InfoChkBox, InfoChkText} from '../../styles/registerDirectStyle/registerTopInfoStyle';
import {StepCont,StepContBorder, TitleBox, Title, RadioTitleBox, RadioBox, RadioBoxMarginN, RadioLable, SubTitle, TextRequiredS, RequiredS, ItemList2Box, SelectHalfBox, InputBorder, YellowBtn, YellowBtnText, ItemTextR, Item2RowBox, Item2RowBoxInput, ItemRowList, ItemText, FlexRowBox, BtnBorder, ViewBorder} from '../../styles/registerDirectStyle/rigisterCommonStyle';

/* UTILS */
import { Controller } from "react-hook-form";
import Colors from "../../styles/Colors";
import _ from "lodash";
import styled from "styled-components";

const StepFiveScreen = (props) => {

	//UI STATE
	const [imageList, setImageList] = useState(props.imgs)

    //UI Components
	const ChkYIcon = () => (<Image style={{width:20, height:20}} source={require('../../../assets/img/drawable-xhdpi/img_regist_bullit_y.png')} />)
	const ChkBIcon = () => (<ChkImg source={require('../../../assets/img/drawable-xhdpi/img_regist_bullit_b.png')} />)
	const TextRequired = () => (<TextRequiredS><Required/> 필수입력</TextRequiredS>)
	const Required = () => (<RequiredS>*</RequiredS>)

	//USE EFFECT
	useEffect(()=>{
	},[])

    return (<>
		<StepInfoCont>
			<InfoTitleBox>
				<Title>등록시 유의사항</Title>
			</InfoTitleBox>
			<NoticeItem>
				<NoticeList>
					<ChkBIcon />
					<NoticeTit>최소 3장 이상의 사진<YellowBgText>을 등록해주세요.</YellowBgText></NoticeTit>
				</NoticeList>
				<NoticeList>
					<ChkBIcon />
					<NoticeTit><YellowBgText>최대 20장까지 등록 가능하며, 한 장당 10MB </YellowBgText>를 초과할 수 없습니다.</NoticeTit>
				</NoticeList>
				<NoticeList>
					<ChkBIcon />
					<NoticeTit><YellowBgText>첫번째 사진이 대표 이미지</YellowBgText>로 보여지며, 순서를 변경할 수 있습니다.</NoticeTit>
				</NoticeList>
				<NoticeList>
					<ChkBIcon />
					<NoticeTit><YellowBgText>매물과 관련 없는 이미지, 홍보성 이미지, 워터마크 이미지</YellowBgText>는 등록하실 수 없습니다.</NoticeTit>
				</NoticeList>
				<NoticeList>
					<ChkBIcon />
					<NoticeTit><YellowBgText>YouTube 링크를 통해 동영상</YellowBgText>을 등록 할 수 있습니다.</NoticeTit>
				</NoticeList>
			</NoticeItem>
		</StepInfoCont>
		<StepCont>
			<TitleBox>
				<Title>사진,동영상 등록</Title>
			</TitleBox>
			<ImageUploadCont>
				<ImageUploadBtn onPress={()=>{ 
					    let options = {
							mediaType:'photo',
							includeBase64:true    
						};
						launchImageLibrary(options, (response) => {
							if (response.didCancel) {
							} else if (response.error) {
							} else if (response.customButton) {
							} else {
								props.setImage(response)
							}
						})
				 }} > 
				<ImageUploadImg source={require('../../../assets/img/drawable-xhdpi/icon-regist-image.png')} />
					<ImageUploadText>이미지 등록</ImageUploadText>
				</ImageUploadBtn>
				{props.imgs.map((el, index) =>(
					<ImageUploadBox>
						<UploadImg resizemode={'cover'} source={ {uri:el.uri} } />
						<UploadImgX>
						<TouchableOpacity onPress={()=>{ props.delImage(index) }}>
							<UploadImgXImg source={require('../../../assets/img/drawable-xhdpi/bt-search-cencel-w.png')}  />
						</TouchableOpacity>
						</UploadImgX>
					</ImageUploadBox>
				))}
			</ImageUploadCont>
			<SubTitle>YouTube URL</SubTitle>
			<InputBorder placeholder={'URL 입력'}/>
			<InfoChkBox>
				<ChkYIcon />
				<InfoChkText>
					YouTube 동영상 링크가 아니거나 매물과 관련 없는 동영상일 경우 영상이 제외되고 매물이 등록됩니다.
				</InfoChkText>
			</InfoChkBox>
			<Button title="CHECK" onPress={()=>{console.log(props.imgs);}}/>
		</StepCont>
	</>)
}

const pickerStyle = {
	placeholderColor: '#000', inputIOS: { color: '#000', height: 34, fontSize: 12 }, inputAndroid: { color: '#000', height: 34, fontSize: 12 },
}

export const ImageUploadCont = styled.View`
	flex:1;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: flex-start;
`
export const ImageUploadBtn = styled.TouchableOpacity`
	flex: 0 0 23.5%;
	border: 1px dashed #000;
	border-radius: 6;
	height: 77;
	overflow: hidden;
	margin-bottom: 4;
	margin-right: 4;
	justify-content: center;
	align-items: center;
`
export const ImageUploadBox = styled.View`
	width: 23.5%;
	overflow: hidden;
	border-radius: 6;
	height: 77;
	margin-right: 4;
`
export const ImageUploadImg = styled.Image`
	width: 24px;
	height: 21px;
`
export const ImageUploadText = styled.Text`
	
`
export const UploadImg = styled.Image`
	width: 100%;
	height: 100%;
`
export const UploadImgXImg = styled.Image`
	width: 24;
	height: 24;
`
export const UploadImgX = styled.TouchableOpacity`
	position: absolute;
	top: 0;
	right: 0;
`

export default StepFiveScreen
