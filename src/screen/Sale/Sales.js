import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Colors from './../../styles/Colors';

import SalesSliderImage from './SaleSliderImage';
import SalesMapContainer from './SaleMap.js';
import { API_URL, API_URL_KYU, ADMIN_URL } from "@env";

import { 
	ScrollContainer,
	ContBorder,
	TextBold22,
	TextLight22,
	TextBold16,
	TextBold14,
	TextLight14,
	TextBold13,
	TextLight13,
	TextBold12,
	TextLight12,
	TextMedium12,
	TextLight11,
	FlexRowBox,
	FlexBetweenBox,
	Container,
	Image28,
	Image24,
	Image40,
	TitleBox,
	Title,
	Image45,
	Image32,
	Image48
 } from './../../styles/CommonStyle';


import { 
	SaleHeader,
	SaleInfoBox01,
	YellowBox,
	SaleInfoBox02,
	InfoBox02,
	PandaTalkWrap,
	PandaBox,
	PandaTextBox,
	Tri,
	ZzimBtn,
	PriceText,
	SizeUnit,
	ImgSizeUnit01,
	ImgSizeUnit02,
	SaleInfoContainer,
	SaleInfoListBox,
	SaleInfoList,
	SaleIcon,
	GreyItemBox,
	GreyListBox,
	GreyItemLable,
	SaleDescription,
	TextDot,
	DescriptionList,
	TitleGreyBox,
	GreyText,
	GreyTextMargin,
	OptionItemBox,
	OptionList,
	YellowLessorInfo,
	LessorTextBox,
	LessorInfoBox,
	OptionListActive
} from './../../styles/saleStyle/saleStyle';

import { 
	MapContBorder,
	MapHeader,
	MapBtnBox,
	MapBtn,
	MapBtnText,
	MapContBox,
	SaleIconN,
} from './../../styles/saleStyle/saleMapStyle';
import { elastic } from 'react-native/Libraries/Animated/src/Easing';



const OptionItem = (props) => (
	<OptionListActive>
			<Text>{props.title?props.title:''}</Text> 
	</OptionListActive>
)

const Sales = ({
	saleData, 
	imgData,
	optData,
	tagData,    
	avlTimeData, 
	isLike,
	handleGetSaleDetail, 
	handleGetSaleImages, 
	handleGetOptions, 
	handleGetTags, 
	handleGetAvlTime,
	handleSetLike,
	handleGetLike,
	handleDelLike,
	}) => {
		
		console.log("isLike================================================================");
		console.log(isLike)
		
		//console.log("saleData================================================================");
		//console.log(saleData);
		/*
		console.log("imgData================================================================");
		console.log(imgData);
		
		console.log("optData================================================================");
		console.log(optData);
		
		console.log("tagData================================================================");
		console.log(tagData);
		
		console.log("avlTimeData================================================================");
		console.log(avlTimeData);
		
		console.log("conviData================================================================");
		console.log(conviData);
		
		console.log("secureData================================================================");
		console.log(secureData);
		
		console.log("schoolData================================================================");
		console.log(schoolData);
		
		// member contact
		console.log("membe contact ==============================================");
		console.log(saleData.m_name);
		console.log(saleData.status);
		console.log(saleData.reg_date);
		console.log(saleData.mod_date);
		console.log(saleData.mc_weekday_to_minute);
		console.log(saleData.mc_weekday_to_hour);
		console.log(saleData.mc_weekday_to_ampm);
		console.log(saleData.mc_weekday_from_minute);
		console.log(saleData.mc_weekday_from_hour);
		console.log(saleData.mc_weekday_from_ampm);
		console.log(saleData.mc_pattern_wed);
		console.log(saleData.mc_pattern_tue);
		console.log(saleData.mc_pattern_thu);
		console.log(saleData.mc_pattern_sun);
		console.log(saleData.mc_pattern_sat);
		console.log(saleData.mc_pattern_mon);
		console.log(saleData.mc_pattern_holiday);
		console.log(saleData.mc_pattern_fri);

		console.log(saleData.mc_id);
		
		console.log(saleData.mc_holiday_to_minute);
		console.log(saleData.mc_holiday_to_hour);
		console.log(saleData.mc_holiday_to_ampm);
		console.log(saleData.mc_holiday_from_minute);
		console.log(saleData.mc_holiday_from_hour);
		console.log(saleData.mc_holiday_from_ampm);
		console.log(saleData.m_id);

		// sale appointement 
		console.log("appointement ==============================================");
		console.log(saleData.sa_id);
		console.log(saleData.s_id);
		console.log(saleData.sa_pattern_sun);
		console.log(saleData.sa_pattern_mon);
		console.log(saleData.sa_pattern_tue);
		console.log(saleData.sa_pattern_wed);
		console.log(saleData.sa_pattern_thu);
		console.log(saleData.sa_pattern_fri);
		console.log(saleData.sa_pattern_sat);
		console.log(saleData.sa_from_ampm);
		console.log(saleData.sa_from_hour);
		console.log(saleData.sa_from_minute);
		console.log(saleData.sa_to_ampm);
		console.log(saleData.sa_to_hour);
		console.log(saleData.sa_to_minute);
		console.log(saleData.reg_date);
		console.log(saleData.mod_date);
		console.log(saleData.status);

		console.log("appointement detail ==============================================");
		console.log(saleData.sa_id);
		console.log(saleData.s_id);
		console.log(saleData.sa_pattern_sun);
		console.log(saleData.sa_pattern_mon);
		console.log(saleData.sa_pattern_tue);
		console.log(saleData.sa_pattern_wed);
		console.log(saleData.sa_pattern_thu);
		console.log(saleData.sa_pattern_fri);
		console.log(saleData.sa_pattern_sat);
		console.log(saleData.sa_from_ampm);
		console.log(saleData.sa_from_hour);
		console.log(saleData.sa_from_minute);
		console.log(saleData.sa_to_ampm);
		console.log(saleData.sa_to_hour);
		console.log(saleData.sa_to_minute);
		console.log(saleData.reg_date);
		console.log(saleData.mod_date);
		console.log(saleData.status);
		*/
	
	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()
	const [zzimBtn, setZzimBtn] = useState(false)
	const [sizeUnit, setSizeUnit] = useState(false)







	// const [mapHeader01, setMapHeader01] = useState(false)
	// const [mapHeader02, setMapHeader02] = useState(false)
	// const [mapHeader03, setMapHeader03] = useState(false)
	// const [mapCont01, setmapCont01] = useState(false)
	// const [mapCont02, setmapCont02] = useState(false)
	// const [mapCont03, setmapCont03] = useState(false)

	const [mapIcon01_01, setMapIcon01_01] = useState(false)
	const [mapIcon01_02, setMapIcon01_02] = useState(false)
	const [mapIcon01_03, setMapIcon01_03] = useState(false)
	const [mapIcon01_04, setMapIcon01_04] = useState(false)
	const [mapIcon01_05, setMapIcon01_05] = useState(false)

	const [mapIcon02_01, setMapIcon02_01] = useState(false)
	const [mapIcon02_02, setMapIcon02_02] = useState(false)

	const [mapIcon03_01, setMapIcon03_01] = useState(false)
	const [mapIcon03_02, setMapIcon03_02] = useState(false)
	const [mapIcon03_03, setMapIcon03_03] = useState(false)
	const [mapIcon03_04, setMapIcon03_04] = useState(false)
	const [mapIcon03_05, setMapIcon03_05] = useState(false)

	
	
	useEffect(()=>{
		const handleEffect = async (props) => {
			//...
			/*
			handleGetSaleDetail(256);
			handleGetSaleImages(256);
			handleGetOptions(256);
			handleGetTags(256);
			handleGetAvlTime(256);
			handleGetLike(256,2)
			handleGetConvinience(256);
			handleGetSecurity(256);
			handleGetSchools(256);
			*/
		}
		handleEffect()
	},[])

	const ZzimImg = () => (<Image40 source={require('./../../../assets/img/drawable-xhdpi/bt_like_l_0_ff.png')} />);
	const ZzimImgActive = () => (<Image40 source={require('./../../../assets/img/drawable-xhdpi/bt_like_l_0_n.png')} />);
	const SizeUnit01 = () => (<ImgSizeUnit01 source={require('./../../../assets/img/drawable-xhdpi/bt_area_p.png')} />);
	const SizeUnit02 = () => (<ImgSizeUnit02 source={require('./../../../assets/img/drawable-xhdpi/bt_area_a.png')} />);

	//map icons
	const MapIcon01_01 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_subway_b.png')} />);
	const MapIcon01_02 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_convenience_b.png')} />);
	const MapIcon01_03 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_coffee_b.png')} />);
	const MapIcon01_04 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_bank_b.png')} />);
	const MapIcon01_05 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_offices_b.png')}/>);
	const MapIcon01_01Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_subway_w.png')} />);
	const MapIcon01_02Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_convenience_w.png')} />);
	const MapIcon01_03Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_coffee_w.png')} />);
	const MapIcon01_04Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_bank_w.png')} />);
	const MapIcon01_05Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_offices_w.png')}/>);

	const MapIcon02_01 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_safety_b.png')} />);
	const MapIcon02_02 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_cctv_b.png')} />);
	const MapIcon02_01Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_safety_w.png')} />);
	const MapIcon02_02Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_cctv_w.png')} />);


	const MapIcon03_01 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_day_care_center_b.png')} />);
	const MapIcon03_02 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_kindergarden_b.png')} />);
	const MapIcon03_03 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_elementary_school_b.png')} />);
	const MapIcon03_04 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_middle_school_b.png')} />);
	const MapIcon03_05 = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_high_school_b.png')}/>);
	const MapIcon03_01Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_day_care_center_w.png')} />);
	const MapIcon03_02Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_kindergarden_w.png')} />);
	const MapIcon03_03Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_elementary_school_w.png')} />);
	const MapIcon03_04Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_middle_school_w.png')} />);
	const MapIcon03_05Active = () => (<Image48 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_high_school_w.png')}/>);




	return(
		<Container>
			<ScrollView>
				{ //slider
				
				imgData && 
				<SalesSliderImage files={imgData} />
				
				}
				
				<SaleHeader>
					<SaleInfoBox01>
						<FlexRowBox>
							<YellowBox><TextBold16>{saleData.price_type_str}</TextBold16></YellowBox>
							<View>
								<TextBold14>{saleData.building_name}</TextBold14>
								<PriceText>{saleData.s_deposit == 0  || saleData.s_deposit == null ? "": saleData.deposit}{saleData.s_trading_price == 0 || saleData.s_trading_price == null ? "":saleData.trading_price}??????{ (saleData.s_monthly_rent==0 || saleData.s_monthly_rent==null  ? "":"/"+saleData.monthly_rent+"??????")}</PriceText>
							</View>
						</FlexRowBox>
						<ZzimBtn onPress={() => { isLike ? handleDelLike(256,2):handleSetLike(256,2) }}>
							{isLike ? <ZzimImgActive /> : <ZzimImg />} 
						</ZzimBtn>
					</SaleInfoBox01>
					<SaleInfoBox02>
						<InfoBox02 first>
							<View>
								<TextMedium12>????????????</TextMedium12>
								<TextBold22>{saleData.s_use_area_m}<TextLight22>???</TextLight22></TextBold22>
							</View>
							<SizeUnit onPress={() => { setSizeUnit (!sizeUnit)}}>
								{sizeUnit ? <SizeUnit02 /> : <SizeUnit01 />} 
							</SizeUnit>
						</InfoBox02>
						<InfoBox02>
							<View>
								<TextMedium12>?????? ?????? ?????????</TextMedium12>
								{// ??????, ?????? == ?????? + ?????????
								 // ??????. ?????? == ?????????
								}
								<TextBold22>{saleData.monthly_cost}??? <TextLight22>?????+ </TextLight22>??</TextBold22>
							</View>
						</InfoBox02>
					</SaleInfoBox02>
				</SaleHeader>
			

				<ContBorder>
					<TitleBox>
						<Title>????????????</Title>
					</TitleBox>
					<SaleInfoContainer>
						<SaleInfoListBox>

							{
								optData.length > 0 &&
								
								optData.map((el) => {
									return (<SaleInfoList>
										<SaleIcon><Image45 source={{uri:ADMIN_URL+el.icon_url}} /></SaleIcon>
										<TextLight12>{el.string}</TextLight12>
									</SaleInfoList>)
								})
							}
							
						{/*}

							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_cctv.png')} /></SaleIcon>
								<TextLight12>CCTV</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_delivery.png')} /></SaleIcon>
								<TextLight12>???????????????</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_door.png')} /></SaleIcon>
								<TextLight12>????????????</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_elevator.png')} /></SaleIcon>
								<TextLight12>???????????????</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_fire_alarm.png')} /></SaleIcon>
								<TextLight12>???????????????</TextLight12>
							</SaleInfoList>

						</SaleInfoListBox>

						<SaleInfoListBox>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_videophone.png')} /></SaleIcon>
								<TextLight12>????????????</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_security.png')} /></SaleIcon>
								<TextLight12>?????????</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_window.png')} /></SaleIcon>
								<TextLight12>?????????</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_window.png')} /></SaleIcon>
								<TextLight12>?????????</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_window.png')} /></SaleIcon>
								<TextLight12>?????????</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_window.png')} /></SaleIcon>
								<TextLight12>?????????</TextLight12>
							</SaleInfoList>
							
							{*/}	

						</SaleInfoListBox>
					</SaleInfoContainer>
				</ContBorder>
				<ContBorder>
					<TitleBox>
						<Title>????????????</Title>
					</TitleBox>
					<GreyItemBox>
						<GreyListBox>
							<GreyItemLable>????????????</GreyItemLable>
							<TextBold13>{saleData.price_type_str}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>{saleData.price_tbl_str} </GreyItemLable>
							
							<TextBold13>{ (saleData.deposit>0 ? saleData.deposit+"??????":"") }{ (saleData.trading_price>0 ? saleData.trading_price+"??????":"") }{ (saleData.s_monthly_rent>0 ? "/"+saleData.s_monthly_rent+"??????":"") }</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>???????????????</GreyItemLable>
							<TextBold13>{saleData.m_cost}??????</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>?????? ????????? ??????</GreyItemLable>
							<TextBold13>{saleData.admin_cost}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>??????????????? ??????</GreyItemLable>
							<TextBold13>{saleData.indi_cost_yn}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>????????????</GreyItemLable>
							<TextBold13>{saleData.loan_amt}</TextBold13>
						</GreyListBox>
					</GreyItemBox>
				</ContBorder>
				<ContBorder>
					<TitleBox>
						<Title>?????????</Title>
					</TitleBox>
					<GreyItemBox>
						<GreyListBox>
							<GreyItemLable>????????????</GreyItemLable>
							<TextBold13>{saleData.building_type}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>????????????</GreyItemLable>
							<TextBold13>{saleData.sale_type}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>?????????</GreyItemLable>
							<TextBold13>{saleData.building_name}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>???/?????? ??????</GreyItemLable>
							<TextBold13>{saleData.s_rooms_cnt}???/{saleData.s_bathrooms_cnt}???</TextBold13>
						</GreyListBox>
						<GreyListBox BlockBox>
							<GreyItemLable>??????/????????????</GreyItemLable>
							<TextBold13>{saleData.s_supply_area_m}m??/{saleData.s_use_area_m}m?? ({saleData.s_supply_area_p}P/{saleData.s_use_area_p}P)</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>?????????/?????????</GreyItemLable>
							<TextBold13>{saleData.s_floor}???/{saleData.s_total_floor}???</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>??? ?????? ??????</GreyItemLable>
							<TextBold13>{saleData.room_type}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>?????? ??????</GreyItemLable>
							<TextBold13>{saleData.room_direction_from}/{saleData.room_direction}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>?????? ??????</GreyItemLable>
							<TextBold13>{saleData.door_type}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>????????????</GreyItemLable>
							<TextBold13>{saleData.s_total_house_cnt} ??????</TextBold13>
						</GreyListBox>
						{/*
						<GreyListBox>
							<GreyItemLable>????????????</GreyItemLable>
							<TextBold13>????????????</TextBold13>
						</GreyListBox>
						*/}
						<GreyListBox>
							<GreyItemLable>?????? ??? ?????? ??????</GreyItemLable>
							<TextBold13>{saleData.s_total_parking_cnt}??? ??????</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>?????? ?????? ??????</GreyItemLable>
							<TextBold13>{saleData.s_parking}???</TextBold13>
						</GreyListBox>
					</GreyItemBox>
				</ContBorder>
				<ContBorder>
					<TitleBox>
						<Title>????????????<GreyText><GreyTextMargin/>?????????????????? ????????? ???????????????.</GreyText></Title>
					</TitleBox>
					<SaleDescription>
						<TextLight13>
							{saleData.s_content}
						</TextLight13>
						{/*<DescriptionList>
							<TextDot/><TextLight13>??????????????????</TextLight13>
						</DescriptionList>
						<DescriptionList>
							<TextDot/><TextLight13>1?????? 40~50% (??????,??????,??????.?????? ???)</TextLight13>
						</DescriptionList>
						<DescriptionList>
							<TextDot/><TextLight13>2?????? 50~70% (??????,??????,???????????????)</TextLight13>
						</DescriptionList>
						<DescriptionList>
							<TextDot/><TextLight13>????????? ?????? 70% (????????????, ??????????????????)</TextLight13>
						</DescriptionList>
						<DescriptionList>
							<TextDot/><TextLight13>???????????? ????????? : 3.5% ~ 4% ?????? / ????????? / ????????? / ?????? ???(????????? ???????????? ?????? ????????? ?????? ??? ????????????)</TextLight13>
						</DescriptionList>*/}

					</SaleDescription>
				</ContBorder>


				<ContBorder>
					<TitleBox>
						<Title>????????????</Title>
					</TitleBox>
					<OptionItemBox>

						{
							tagData.length > 0 &&
							tagData.map((el)=>{
								return <OptionItem key={el.st_id} title={"#"+el.string} />
							})
						}
						{/*
						<OptionItem title="#????????????" />
						<OptionItem title="#?????????" />
						<OptionItem title="#?????????"/>
						<OptionItem title="#????????????"/>
						<OptionItem title="#??????"/>
						<OptionItem title="#?????????" />
						<OptionItem title="#?????????" />
						*/}
					</OptionItemBox>	
				</ContBorder>


				<YellowLessorInfo>
					<LessorInfoBox first>
						<Image32 source={require('./../../../assets/img/drawable-xhdpi/icon_mobile_call.png')}/>
						<LessorTextBox>
							<TextBold14>?????????({saleData.m_name}) ???????????? ??????</TextBold14>
							<TextLight14>??????, ????????? {saleData.mc_holiday_from_hour}:{saleData.mc_holiday_from_minute}~{saleData.mc_holiday_to_hour}:{saleData.mc_holiday_to_minute}</TextLight14>
							<TextLight14>???~??? {saleData.mc_weekday_from_hour}:{saleData.mc_weekday_from_minute}~{saleData.mc_weekday_to_hour}:{saleData.mc_weekday_to_minute}</TextLight14>
						</LessorTextBox>
					</LessorInfoBox>
					<LessorInfoBox>
						<Image32 source={require('./../../../assets/img/drawable-xhdpi/icon_mobile_visit.png')}/>
						<LessorTextBox>
							<TextBold14>?????????({saleData.m_name}) ???????????? ??????</TextBold14>
							<TextLight14>??????, ????????? {saleData.sa_from_hour}:{saleData.sa_from_minute}~{saleData.sa_to_hour}:{saleData.sa_to_minute}</TextLight14>
							<TextLight14>???~??? {saleData.sad_from_hour}:{saleData.sad_from_minute}~{saleData.sad_to_hour}:{saleData.sad_to_minute}</TextLight14>
						</LessorTextBox>
					</LessorInfoBox>
				</YellowLessorInfo>
				
				<SalesMapContainer address1={saleData.address1} address2={saleData.address2} />
					
			</ScrollView>
		
			<PandaTalkWrap onPress={() => navigation.navigate('chat')}>
				<PandaBox>
					<Image28 source={require('./../../../assets/img/drawable-xhdpi/image_panda_thumbnail.png')} />
				</PandaBox>
				<PandaTextBox>
					<Tri />
					<TextLight12>
						<TextBold12>????????? ???</TextBold12>?????? ??????????????? ?????? ?????? ?????????{"\n"} ?????? ????????? ??? ??? ?????????.
					</TextLight12>
					<Image24 source={require('./../../../assets/img/drawable-xhdpi/bt_menu_arrow_01.png')} />
				</PandaTextBox>
			</PandaTalkWrap>
		


		</Container>
	)
	
}



export default Sales;
