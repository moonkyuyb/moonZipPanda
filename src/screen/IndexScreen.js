import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, ImageBackground, TouchableOpacity, Image, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native';

/* COMMON COMPONENTS */
import Colors from '../styles/Colors';
import BoldText from "../components/BoldText";
import SemiBoldText from "../components/SemiBoldText";
import ExtraBoldText from "../components/ExtraBoldText";
import ZipSafeAreaView from '../components/ZipSafeAreaView';


const IndexScreen = ({token, verifiedToken, salesList, getSalesList}) => {

	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()

	const [ZipStepData01, setZipStepData01] = useState([])
	const [ZipStepData02, setZipStepData02] = useState([])
	const [ZipList, setZipList] = useState([])
	const [stepItemBtn01, setStepItemBtn01] = useState(true)
	const [stepItemBtn02, setStepItemBtn02] = useState(false)
	const [ZzimBtn, setZzimBtn] = useState(false)
	const [notice, setNotice] = useState(false)
	//list active
	const [currentId, setCurrentId] = useState(1)

	const MoreViewIcon= () => (<Image style={styles.moreViewIcon} source={require('./../../assets/img/drawable-xhdpi/icon_arrow_b.png')} />)
	const LogoTitle = () => (<Image style={styles.LogoTitle} source={require('./../../assets/img/drawable-xhdpi/bt_logo_home.png')} />)

	useEffect(()=>{
		const handleEffect = async (props) => {
			//navigation
			navigation.setOptions({
				drawerLabel: 'About',
				headerStyle: {
					backgroundColor: Colors.mainColor,	
					shadowColor: 'transparent', elevation:0
				},
				headerTitle: "" ,
				headerLeft: props => <LogoTitle {...props} />,
				headerRight: () => (
					<View style={styles.headerRightBox}>
						<TouchableOpacity style={styles.drawerBtn}>
							<Image style={styles.Icon} source={ notice ? require('./../../assets/img/drawable-xhdpi/bt_bell_on_bg_yellow.png') : require('./../../assets/img/drawable-xhdpi/bt_bell_off.png')}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.drawerBtn} onPress={()=>navigation.openDrawer()}>
							<Image style={styles.Icon} source={require('./../../assets/img/drawable-xhdpi/bt_menu.png')}/>
						</TouchableOpacity>
					</View>
				),
			})
			if(salesList.length == 0) getSalesList()
		}
		handleEffect()
	},[])

	return(
		<ZipSafeAreaView>
			<View style={styles.floatingBtn}>
				<View style={styles.btnBox}>
					<View style={styles.btnCenterBar}></View>
					<TouchableOpacity style={styles.fBtn} onPress={()=>navigation.navigate('register')} >
						<Image source={require('./../../assets/img/drawable-xhdpi/icon_housesell.png')} style={styles.fBtnIcon}/>
						<SemiBoldText style={{fontSize:14}}>집 내놓기</SemiBoldText>
					</TouchableOpacity>
					<TouchableOpacity style={styles.fBtn} onPress={() => navigation.navigate('chatList')}>
						<Image source={require('./../../assets/img/drawable-xhdpi/icon_talk.png')} style={styles.fBtnIcon}/>
						<SemiBoldText style={{fontSize:14}}>직거래톡</SemiBoldText>
					</TouchableOpacity>
				</View>
			</View>
			<Button title="TEST" onPress={()=>{console.log(salesList);}}/>
			<ScrollView style={styles.wrap}>
				<View style={styles.yellowContainer}>
					<View style={styles.mainHeader}>
						<Image source={ require('./../../assets/img/drawable-xhdpi/img_main.png')} style={styles.headerBg} />
						<View style={styles.headerT}>
							<Text style={styles.headerTit}>집판다에는</Text>
							<ExtraBoldText style={styles.BoldText}>수수료가 없다!</ExtraBoldText>
						</View>
						<Text style={styles.subTit}>
							부동산중개수수료 없는 안전한 부동산{"\n"}직거래 서비스를 이용하세요. 
						</Text>
					</View>
				</View>
			</ScrollView>
			<ScrollView style={{flex:1}}>
				<Text>현재 거래 가능한 매물</Text>
				{salesList.map((item)=>(
					<TouchableOpacity style={{height:60, paddingHorizontal:30, paddingVertical:20}}>
						<Text>거래형태: {item.s_price_type}</Text>
						<Text>월세: {item.s_monthly_rent}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</ZipSafeAreaView>
	)
}


const styles = StyleSheet.create({
	//header
	LogoTitle:{
		marginLeft: 20,
		width: 57,
		height: 19,
	},
	headerRightBox:{
		flexDirection: 'row',
		marginRight: 20,
	},
	drawerBtn:{
		marginLeft: 8,
	},
	Icon:{
		width: 24, 
		height: 24,
	},

	//floating button
	floatingBtn:{
		position: 'absolute',
		bottom: 0,
		left: 0,
		zIndex: 9999,
		width: '100%',
		paddingHorizontal: 19,
		paddingBottom: 20,
	},
	btnBox:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: Colors.whiteColor,
		height: 48,
		borderRadius: 12,
		elevation: 15, //android
		shadowColor: "#000",
		shadowOffset: { width: 0,height: 5, },
		shadowOpacity: 0.15,
		shadowRadius: 6
	},
	btnCenterBar:{
		position: 'absolute',
		right: '50%',
		marginLeft: -1,
		width: 2,
		height: 16,
		backgroundColor: '#ebebeb',
	},
	fBtn:{
		width: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	fBtnIcon:{
		width: 24,
		height: 24,
		marginRight: 5,
	},
	//cont
	wrap:{
		flex: 1,
		height: '100%',
	},
	yellowContainer:{
		backgroundColor: Colors.mainColor,
	},
	mainHeader:{
		// paddingTop: 19,
		paddingHorizontal: 19,
		paddingBottom: 45,
	},
	headerBg:{
		position: 'absolute',
		right: 0,
		top: 15,
		width: 122,
		height: 172,
		opacity : Dimensions.get('window').width > 320 ? 1 : 0.3,
	},
	headerT:{
		paddingTop: 16,
		alignItems:'flex-start',
	},
	headerTit:{
		fontSize: 24,
		fontWeight: '200',
		marginBottom: 4,
	},
	BoldText:{
		width: 'auto',
		fontSize: 34,
		backgroundColor: Colors.blackColor,
		color: Colors.mainColor,
		paddingHorizontal: 4,
	},
	subTit:{
		marginTop: 11,
		fontWeight: '200',
	},
	textUnderLine:{
		position: 'absolute',
	},
	stepCont:{
	},
	stepHeader:{
		paddingHorizontal: 19,
		flexDirection: 'row',
		// marginBottom: 18,
	},
	stepHBtn:{
		paddingHorizontal: 14,
		height: 28,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 4,
		borderRadius: 25,
	},
	stepHBtnActive:{
		paddingHorizontal: 14,
		height: 28,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 4,
		borderRadius: 25,
		backgroundColor: Colors.blackColor,
	},
	hBtnTit:{
		fontSize: 12,
		color: Colors.blackColor,
	},
	hBtnTitActive:{
		fontSize: 12,
		color: Colors.mainColor,
	},
	stepItemBox:{
		flexDirection: 'row',

	},
	stepItemList:{
		// width: Dimensions.get('window').width/3.4,
		// minWidth:  Dimensions.get('window').width/3.4,
		minWidth: 130,
		height: 62,
		borderRadius: 12,
		justifyContent: 'center',
		paddingHorizontal: 15,
		marginRight: 8,
		elevation: 4, //android
		shadowColor: "#000",
		shadowOffset: { width: 0,height: 3, },
		shadowOpacity: 0.13,
		shadowRadius: 6,
		marginBottom: 23,
		backgroundColor: Colors.mainColor,
		marginTop: 18,
	},
	stepItemListActive:{
		// width: Dimensions.get('window').width/3.4,
		// maxWidth: 150,
		minWidth: 130,
		height: 62,
		borderRadius: 12,
		justifyContent: 'center',
		paddingHorizontal: 15,
		marginRight: 8,
		elevation: 4, //android
		shadowColor: "#000",
		shadowOffset: { width: 0,height: 3, },
		shadowOpacity: 0.13,
		shadowRadius: 6,
		marginBottom: 23,
		backgroundColor: Colors.mainColor,
		borderWidth: 1,
		marginTop: 18,
	},
	stepNumBox:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 4,
	},
	stepNum:{
		fontSize: 11,
	},
	moreViewIcon:{
		width: 8,
		height: 8,
	},
	stepTit:{
		fontSize: 16,
	},
	// map
	mapContainer:{

	},
	mapBox:{
		height: Dimensions.get('window').width*0.88888888,
		maxHeight: 600,
	},
	mapBtn:{
		position: 'absolute',
		top: 30,
		left: 20,
		height: 34,
		backgroundColor: Colors.blackColor,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 25,
		paddingLeft: 15,
		paddingRight: 11,
	},
	mapBtnTit:{
		color: Colors.mainColor,
		marginRight: 4,
	},
	mapBtnIcon:{
		width: 20,
		height: 20,
	},
	mapBottomBox:{
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: 52,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	mapBottomL:{
		flexDirection: 'row',
	},
	lacationBtn:{
		width: 30,
		height: 30,
		marginRight: 10,
	},
	mapLTit01:{
		fontSize: 11,
		color: Colors.whiteColor,
		fontWeight: '200'
	},
	mapLTit02:{
		fontSize: 16,
		color: Colors.whiteColor,
		marginTop: 3,
	},

	mapBottomR:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mapRIcon:{
		width: 26,
		height: 23,
	},
	mapRTit:{
		fontSize: 28,
		marginLeft: 6,
		color: Colors.mainColor,
	},
	//추천매물
	ZipListHeader:{
		paddingTop: 32,
		paddingBottom: 8,
		paddingHorizontal: 19,
		flexDirection: 'row',
    	justifyContent: 'space-between',
	},
	allViewBtn:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	allViewTit:{
		color: Colors.greyColor,
		fontSize: 10,
		paddingRight: 2,
	},
	allViewIcon:{
		width: 8,
		height: 8,
		marginRight: 8,
	},
	ZipListContainer:{
		marginBottom: 96,
	},
	ZipItemList:{
		elevation: 15, //android
		shadowColor: "#000",
		shadowOffset: { width: 0,height: 5, },
		shadowOpacity: 0.17,
		shadowRadius: 6,
		width: 152,
		padding: 6,
		backgroundColor: Colors.whiteColor,
		borderRadius: 12,
		marginRight: 8,
		marginBottom: 34,
		marginTop: 8,
	},
	ZipImgBox:{
		height: 140,
		borderRadius: 10,
		overflow: 'hidden'
	},
	zzimBtn:{
		position: 'absolute',
		top: 12,
		right: 12,
	},
	zzimIcon:{
		width: 24,
		height: 24,
	},
	ZipImg:{
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	ZipInfoBox:{
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoTit01:{
		fontSize: 10,
		marginBottom: 4,
		fontWeight: '200'
	},
	infoTit02:{
		fontSize: 16,
	},
	//dot
	dotBox:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dot:{
		width: 8,
		height: 8,
		borderRadius: 50,
		backgroundColor: Colors.blackColor,
		marginHorizontal: 4,
	},
	dotActive:{
		width: 12,
		height: 12,
		borderRadius: 50,
		backgroundColor: Colors.mainColor,
		marginHorizontal: 4,
	}

})

export default IndexScreen;