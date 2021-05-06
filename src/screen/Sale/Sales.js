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
	conviData,   
	secureData,  
	schoolData, 
	handleGetSaleDetail, 
	handleGetSaleImages, 
	handleGetOptions, 
	handleGetTags, 
	handleGetAvlTime, 
	handleGetConvinience,
	handleGetSecurity,
	handleGetSchools}) => {
		
		/*
		console.log("saleData================================================================");
		console.log(saleData);
		
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
			handleGetSaleDetail(256);
			handleGetSaleImages(256);
			handleGetOptions(256);
			handleGetTags(256);
			handleGetAvlTime(256);
			handleGetConvinience(256);
			handleGetSecurity(256);
			handleGetSchools(256);
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
								<PriceText>{saleData.s_deposit == 0  || saleData.s_deposit == null ? "": saleData.deposit}{saleData.s_trading_price == 0 || saleData.s_trading_price == null ? "":saleData.trading_price}만원{ (saleData.s_monthly_rent==0 || saleData.s_monthly_rent==null  ? "":"/"+saleData.monthly_rent+"만원")}</PriceText>
							</View>
						</FlexRowBox>
						<ZzimBtn onPress={() => { setZzimBtn (!zzimBtn)}}>
							{zzimBtn ? <ZzimImgActive /> : <ZzimImg />} 
						</ZzimBtn>
					</SaleInfoBox01>
					<SaleInfoBox02>
						<InfoBox02 first>
							<View>
								<TextMedium12>전용면적</TextMedium12>
								<TextBold22>{saleData.s_use_area_m}<TextLight22>㎡</TextLight22></TextBold22>
							</View>
							<SizeUnit onPress={() => { setSizeUnit (!sizeUnit)}}>
								{sizeUnit ? <SizeUnit02 /> : <SizeUnit01 />} 
							</SizeUnit>
						</InfoBox02>
						<InfoBox02>
							<View>
								<TextMedium12>한달 예상 주거비</TextMedium12>
								{// 월세, 단기 == 월세 + 관리비
								 // 전세. 매매 == 관리비
								}
								<TextBold22>{saleData.monthly_cost}만 <TextLight22>원 + </TextLight22>α</TextBold22>
							</View>
						</InfoBox02>
					</SaleInfoBox02>
				</SaleHeader>
			

				<ContBorder>
					<TitleBox>
						<Title>시설정보</Title>
					</TitleBox>
					<SaleInfoContainer>
						<SaleInfoListBox>

							{
								optData.length > 0 &&
								
								optData.map((el) => {
									console.log("opt section-=-=-==--=-=-==--=-=-==--=-=-==--=-=-==--=-=-==-");
									console.log(el.string+","+el.icon_url);
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
								<TextLight12>무인택배함</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_door.png')} /></SaleIcon>
								<TextLight12>현관보안</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_elevator.png')} /></SaleIcon>
								<TextLight12>앨리베이터</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_fire_alarm.png')} /></SaleIcon>
								<TextLight12>화재경보기</TextLight12>
							</SaleInfoList>

						</SaleInfoListBox>

						<SaleInfoListBox>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_videophone.png')} /></SaleIcon>
								<TextLight12>비디오폰</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_security.png')} /></SaleIcon>
								<TextLight12>경비원</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_window.png')} /></SaleIcon>
								<TextLight12>방범창</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_window.png')} /></SaleIcon>
								<TextLight12>방범창</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_window.png')} /></SaleIcon>
								<TextLight12>방범창</TextLight12>
							</SaleInfoList>
							<SaleInfoList>
								<SaleIcon><Image45 source={require('./../../../assets/img/drawable-xhdpi/icon_window.png')} /></SaleIcon>
								<TextLight12>방범창</TextLight12>
							</SaleInfoList>
							
							{*/}	

						</SaleInfoListBox>
					</SaleInfoContainer>
				</ContBorder>
				<ContBorder>
					<TitleBox>
						<Title>거래정보</Title>
					</TitleBox>
					<GreyItemBox>
						<GreyListBox>
							<GreyItemLable>계약형태</GreyItemLable>
							<TextBold13>{saleData.price_type_str}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>{saleData.price_tbl_str} </GreyItemLable>
							
							<TextBold13>{ (saleData.deposit>0 ? saleData.deposit+"만원":"") }{ (saleData.trading_price>0 ? saleData.trading_price+"만원":"") }{ (saleData.s_monthly_rent>0 ? "/"+saleData.s_monthly_rent+"만원":"") }</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>공용관리비</GreyItemLable>
							<TextBold13>{saleData.m_cost}만원</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>공용 관리비 항목</GreyItemLable>
							<TextBold13>{saleData.admin_cost}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>개별사용료 항목</GreyItemLable>
							<TextBold13>{saleData.indi_cost_yn}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>융자형태</GreyItemLable>
							<TextBold13>{saleData.loan_amt}</TextBold13>
						</GreyListBox>
					</GreyItemBox>
				</ContBorder>
				<ContBorder>
					<TitleBox>
						<Title>방정보</Title>
					</TitleBox>
					<GreyItemBox>
						<GreyListBox>
							<GreyItemLable>건물유형</GreyItemLable>
							<TextBold13>{saleData.building_type}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>건물형태</GreyItemLable>
							<TextBold13>{saleData.sale_type}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>단지명</GreyItemLable>
							<TextBold13>{saleData.building_name}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>방/욕실 개수</GreyItemLable>
							<TextBold13>{saleData.s_rooms_cnt}개/{saleData.s_bathrooms_cnt}개</TextBold13>
						</GreyListBox>
						<GreyListBox BlockBox>
							<GreyItemLable>공급/전용면적</GreyItemLable>
							<TextBold13>{saleData.s_supply_area_m}m²/{saleData.s_use_area_m}m² ({saleData.s_supply_area_p}P/{saleData.s_use_area_p}P)</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>해당층/전체층</GreyItemLable>
							<TextBold13>{saleData.s_floor}층/{saleData.s_total_floor}층</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>방 거실 형태</GreyItemLable>
							<TextBold13>{saleData.room_type}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>주실 방향</GreyItemLable>
							<TextBold13>{saleData.room_direction_from}/{saleData.room_direction}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>현관 유형</GreyItemLable>
							<TextBold13>{saleData.door_type}</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>총세대수</GreyItemLable>
							<TextBold13>{saleData.s_total_house_cnt} 세대</TextBold13>
						</GreyListBox>
						{/*
						<GreyListBox>
							<GreyItemLable>추가옵션</GreyItemLable>
							<TextBold13>전자계약</TextBold13>
						</GreyListBox>
						*/}
						<GreyListBox>
							<GreyItemLable>건물 총 주차 대수</GreyItemLable>
							<TextBold13>{saleData.s_total_parking_cnt}대 가능</TextBold13>
						</GreyListBox>
						<GreyListBox>
							<GreyItemLable>가능 주차 대수</GreyItemLable>
							<TextBold13>{saleData.s_parking}대</TextBold13>
						</GreyListBox>
					</GreyItemBox>
				</ContBorder>
				<ContBorder>
					<TitleBox>
						<Title>상세설명<GreyText><GreyTextMargin/>실제임대인이 작성한 성명입니다.</GreyText></Title>
					</TitleBox>
					<SaleDescription>
						<TextLight13>
							{saleData.s_content}
						</TextLight13>
						{/*<DescriptionList>
							<TextDot/><TextLight13>주택담보대출</TextLight13>
						</DescriptionList>
						<DescriptionList>
							<TextDot/><TextLight13>1금융 40~50% (국민,신한,우리.하나 등)</TextLight13>
						</DescriptionList>
						<DescriptionList>
							<TextDot/><TextLight13>2금융 50~70% (농협,수협,새마을금고)</TextLight13>
						</DescriptionList>
						<DescriptionList>
							<TextDot/><TextLight13>디딤돌 대출 70% (생애최초, 무주택세대주)</TextLight13>
						</DescriptionList>
						<DescriptionList>
							<TextDot/><TextLight13>실입주금 부족시 : 3.5% ~ 4% 신용 / 후순위 / 회사채 / 신탁 등(개인의 신용도에 따라 차이가 있을 수 있습니다)</TextLight13>
						</DescriptionList>*/}

					</SaleDescription>
				</ContBorder>


				<ContBorder>
					<TitleBox>
						<Title>기타태그</Title>
					</TitleBox>
					<OptionItemBox>

						{
							tagData.length > 0 &&
							tagData.map((el)=>{
								return <OptionItem key={el.st_id} title={"#"+el.string} />
							})
						}
						{/*
						<OptionItem title="#애완동물" />
						<OptionItem title="#올수리" />
						<OptionItem title="#테라스"/>
						<OptionItem title="#매물사진"/>
						<OptionItem title="#마당"/>
						<OptionItem title="#무보증" />
						<OptionItem title="#확장형" />
						*/}
					</OptionItemBox>	
				</ContBorder>


				<YellowLessorInfo>
					<LessorInfoBox first>
						<Image32 source={require('./../../../assets/img/drawable-xhdpi/icon_mobile_call.png')}/>
						<LessorTextBox>
							<TextBold14>임대인(김*다) 연락가능 시간</TextBold14>
							<TextLight14>주말, 공휴일 09:00~20:00</TextLight14>
							<TextLight14>월~금 18:00~20:00</TextLight14>
						</LessorTextBox>
					</LessorInfoBox>
					<LessorInfoBox>
						<Image32 source={require('./../../../assets/img/drawable-xhdpi/icon_mobile_visit.png')}/>
						<LessorTextBox>
							<TextBold14>임대인(김*다) 방문가능 시간</TextBold14>
							<TextLight14>주말, 공휴일 09:00~20:00</TextLight14>
							<TextLight14>월~금 18:00~20:00</TextLight14>
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
						<TextBold12>직거래 톡</TextBold12>으로 매도인에게 집에 대한 문의나{"\n"} 방문 예약을 할 수 있어요.
					</TextLight12>
					<Image24 source={require('./../../../assets/img/drawable-xhdpi/bt_menu_arrow_01.png')} />
				</PandaTextBox>
			</PandaTalkWrap>
		


		</Container>
	)
	
}



export default Sales;
