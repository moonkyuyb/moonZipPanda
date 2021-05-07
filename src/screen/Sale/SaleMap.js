import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';


import { 
	TextLight12,
	TextBold14,
	Image48,
	Image28
 } from './../../styles/CommonStyle';

import { 
	SaleInfoListBox,
	SaleInfoList,
	SaleIconN,
} from './../../styles/saleStyle/saleStyle';

import { 
	MapContBorder,
	MapHeader,
	MapBtnBox,
	MapBtn,
	MapBtnText,
	MapContBox,
	Map,
	MapFooter,
	MapPickerImg,
	MapFooterImg,
	MapFooterText
} from './../../styles/saleStyle/saleMapStyle';

const SalesMapContainer = (props) => {

	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()

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

	const [active, setActive] = useState(false)
	const [activeTab, setActiveTab] = useState(0)
	
	useEffect(()=>{
		const handleEffect = async (props) => {
			//...

		}
		handleEffect()
	},[])

	//map header icons
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

	// map

	const MapPicker = () => (<MapPickerImg source={require('./../../../assets/img/drawable-xhdpi/icon_map_point.png')} />);
	const MapIcon01_02Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_convenience_w.png')} />);
	const MapIcon01_01Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_subway_w.png')} />);
	const MapIcon01_03Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_coffee_w.png')} />);
	const MapIcon01_04Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_bank_w.png')} />);
	const MapIcon01_05Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_offices_w.png')}/>);

	const MapIcon02_01Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_safety_w.png')} />);
	const MapIcon02_02Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_cctv_w.png')} />);

	const MapIcon03_01Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_day_care_center_w.png')} />);
	const MapIcon03_02Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_kindergarden_w.png')} />);
	const MapIcon03_03Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_elementary_school_w.png')} />);
	const MapIcon03_04Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_middle_school_w.png')} />);
	const MapIcon03_05Active28 = () => (<Image28 source={require('./../../../assets/img/drawable-xhdpi/SaleDetails/icon_map_high_school_w.png')}/>);
	
	const INITIAL_REGION = {
		latitude: 37.78825,
  		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 8.5
	  };

	return(
		<MapContBorder>
			
			<MapHeader>
				
				<MapBtnBox>
					
					<MapBtn tabIndex={0} activeTab={activeTab} onPress={ ()=>{ setActiveTab(0)}}>
						<MapBtnText tabIndex={0} activeTab={activeTab}>편의시설</MapBtnText>
					</MapBtn>
					<MapBtn tabIndex={1} activeTab={activeTab} onPress={ ()=>{ setActiveTab(1)}}>
						<MapBtnText tabIndex={1} activeTab={activeTab}>안전시설</MapBtnText>
					</MapBtn>
					<MapBtn tabIndex={2} activeTab={activeTab} onPress={ ()=>{ setActiveTab(2)}}>
						<MapBtnText tabIndex={2} activeTab={activeTab}>학군정보</MapBtnText>
					</MapBtn>

				</MapBtnBox>
				
				<MapContBox>
					{// 편의시설 
					}
					
					<SaleInfoListBox tabIndex={0} activeTab={activeTab}>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon01_01 (!mapIcon01_01)}}>{mapIcon01_01 ? <MapIcon01_01Active/> : <MapIcon01_01/>}</SaleIconN>
							<TextLight12>지하철</TextLight12>
						</SaleInfoList>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon01_02 (!mapIcon01_02)}}>{mapIcon01_02 ? <MapIcon01_02Active/> : <MapIcon01_02/>}</SaleIconN>
							<TextLight12>편의점</TextLight12>
						</SaleInfoList>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon01_03 (!mapIcon01_03)}}>{mapIcon01_03 ? <MapIcon01_03Active/> : <MapIcon01_03/>}</SaleIconN>
							<TextLight12>카페</TextLight12>
						</SaleInfoList>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon01_04 (!mapIcon01_04)}}>{mapIcon01_04 ? <MapIcon01_04Active/> : <MapIcon01_04/>}</SaleIconN>
							<TextLight12>은행</TextLight12>
						</SaleInfoList>
						<SaleInfoList Inactive>
							<SaleIconN onPress={() => { setMapIcon01_05 (!mapIcon01_05)}}>{mapIcon01_05 ? <MapIcon01_05Active/> : <MapIcon01_05/>}</SaleIconN>
							<TextLight12>관공서</TextLight12>
						</SaleInfoList>
					</SaleInfoListBox>
					{// 안전시설 
					}
					<SaleInfoListBox tabIndex={1} activeTab={activeTab}>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon02_01 (!mapIcon02_01)}}>{mapIcon02_01 ? <MapIcon02_01Active/> : <MapIcon02_01/>}</SaleIconN>
							<TextLight12>치안</TextLight12>
						</SaleInfoList>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon02_02 (!mapIcon02_02)}}>{mapIcon02_02 ? <MapIcon02_02Active/> : <MapIcon02_02/>}</SaleIconN>
							<TextLight12>CCTV</TextLight12>
						</SaleInfoList>
						<SaleInfoList></SaleInfoList>
						<SaleInfoList></SaleInfoList>
						<SaleInfoList></SaleInfoList>
					</SaleInfoListBox>
					{// 학군정보 
					}
					<SaleInfoListBox tabIndex={2} activeTab={activeTab}>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon03_01 (!mapIcon03_01)}}>{mapIcon03_01 ? <MapIcon03_01Active/> : <MapIcon03_01/>}</SaleIconN>
							<TextLight12>어린이집</TextLight12>
						</SaleInfoList>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon02_02 (!mapIcon02_02)}}>{mapIcon02_02 ? <MapIcon02_02Active/> : <MapIcon02_02/>}</SaleIconN>
							<TextLight12>유치원</TextLight12>
						</SaleInfoList>
						<SaleInfoList Inactive>
							<SaleIconN onPress={() => { setMapIcon03_03 (!mapIcon03_03)}}>{mapIcon03_03 ? <MapIcon03_03Active/> : <MapIcon03_03/>}</SaleIconN>
							<TextLight12>초등학교</TextLight12>
						</SaleInfoList>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon03_04 (!mapIcon03_04)}}>{mapIcon03_04 ? <MapIcon03_04Active/> : <MapIcon03_04/>}</SaleIconN>
							<TextLight12>중학교</TextLight12>
						</SaleInfoList>
						<SaleInfoList>
							<SaleIconN onPress={() => { setMapIcon03_05 (!mapIcon03_05)}}>{mapIcon03_05 ? <MapIcon03_05Active/> : <MapIcon03_05/>}</SaleIconN>
							<TextLight12>고등학교</TextLight12>
						</SaleInfoList>
					</SaleInfoListBox>
				</MapContBox> 
				
			</MapHeader>
			 <Map style={{borderWidth:1}}>
			
				<MapView
					mapType={"standard"}
			    	provider={PROVIDER_GOOGLE}
					region={INITIAL_REGION}
					minZoomLevel={10}
					style={{flex:1, width:'100%', height:'100%' }}
    			>
				
					<Marker coordinate={{latitude:37.56437606841911,longitude:126.98122110332228}} />
				
				</MapView>
					{/*
				<MapPicker/>
				<MapIcon01_01Active28/>
				<MapIcon01_04Active28/>
				<MapIcon01_05Active28/>
					*/}
			</Map>
			<MapFooter>
				<MapFooterImg source={require('./../../../assets/img/drawable-xhdpi/icon_map_navi.png')} />
				<MapFooterText>{props.address1}</MapFooterText>
			</MapFooter>
	

		</MapContBorder>
			
	)
}



export default SalesMapContainer;
