import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper'
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Colors from './../../styles/Colors';

import {API_URL, API_URL_KYU} from "@env"

import {
	SwiperContainer,
	SliderBox,
	SliderImg,
	PaginationBox,
	PaginationText,
	SwiperFullBtn,
	FullImg} from './../../styles/saleStyle/saleSliderImageStyle';


const SalesSliderImage = (props) => {
	
	//const files = props.files;
	//console.log(files);
	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()

	useEffect(()=>{
		const handleEffect = async (props) => {
			//...
		}
		handleEffect()
	},[])
	
	const {width, height} = Dimensions.get('screen');

	const renderPagination = (index, total, context) => {
		return (
			<PaginationBox>
				<PaginationText>
					{ ((index + 1)/total) }
				</PaginationText>
			</PaginationBox>
		)
	}

	const SliderImgs = () =>{
		for(var i=0; i<props.files.length; i++) {
			console.log("imgs==========================1111============================");
			console.log(API_URL_KYU+props.files[i].sf_original_nm);
			return (<SliderBox>
							<SliderImg resizeMode={'cover'} source={{uri:API_URL_KYU+props.files[i].sf_original_nm}} />
			</SliderBox>);
		}
		return<SliderBox></SliderBox>
	}


	return(
		<SwiperContainer>
			<SwiperFullBtn onPress={()=>navigation.navigate('salesImage')}>
				<FullImg source={require('./../../../assets/img/drawable-xhdpi/bt_image_detail.png')} />
			</SwiperFullBtn>

			<Swiper
				renderPagination={renderPagination} 
				loop={true}
			>	

				{
					
				<SliderImgs/>
				/*
					props.files.forEach((el) => {
						
						return (<SliderBox>
							<SliderImg resizeMode={'cover'} source={{uri:API_URL_KYU+el.sf_original_nm}} />
						</SliderBox>);
					})
				*/}
				

			{/*}

			
				<SliderBox>
					<SliderImg resizeMode={'cover'} source={require('./../../../assets/img/sample/sample_room_01.jpg')} />
				</SliderBox>
				<SliderBox>
					<SliderImg resizeMode={'cover'} source={require('./../../../assets/img/sample/sample_room_02.jpg')} />
				</SliderBox>
				<SliderBox>
					<SliderImg resizeMode={'cover'} source={require('./../../../assets/img/sample/sample_room_03.jpg')} />
				</SliderBox>
			
			{*/}
			
			
			</Swiper>
		</SwiperContainer>
	)
}




export default SalesSliderImage;