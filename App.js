import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

/* NAVIGATION */
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

/* UI COMPONENTS */
import Colors from './src/styles/Colors';
import { Image24 } from "./src/styles/CommonStyle";
import { HedaerRightBox, HedaerLeftBox } from "./src/styles/layoutStyle";

/* REDUX STORE */
import { Provider } from 'react-redux';
import Store from './src/reducers/ReducerStore';

/* SCREEN COMPONENTS */
import SplashScreen from 'react-native-splash-screen';
import {IndexContainer} from './src/container/indexContainer';
import { SignInContainer } from "./src/container/authContainer";
import { SignUpContainer } from "./src/container/memberContainer";
import SignUpSuccessScreen from "./src/screen/SignUpSuccessScreen";
import { ChatListContainer, ChatContainer } from "./src/container/chatContainer";
import { RegisterDirectContainer } from "./src/container/salesContainer";
import BuildingTypeScreen from "./src/screen/BuildingTypeScreen";
import SaleTypeScreen from "./src/screen/SaleTypeScreen";

import Sales from "./src/screen/Sale/Sales";
import salesContainer from "./src/container/saleDetailContainer"

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

/* MAKE HEADER OPTIONS: 공통 */
const commonOptions = {
	headerBackTitleVisible: false,
	headerTintColor: Colors.blackColor,
	headerStyle: {shadowColor: '#eaeaea', elevation: 1, },
	headerTitleStyle: { marginTop:-1, fontWeight:'bold', fontSize:19 },
}

/* MAKE HEADER OPTIONS: 뒤로가기, 왼쪽 타이틀, 서랍메뉴버튼 */
const makeOptions = (props, title) => ({
	...commonOptions,
	title:title, headerTitleAlign:'left',
	headerTitleStyle: {...commonOptions.headerTitleStyle, marginLeft: -20},
	headerLeft: () => (
		<HedaerLeftBox>
			<TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
				<Image24 source={require('./assets/img/drawable-xhdpi/bt_header_back.png')}/>
			</TouchableOpacity>
		</HedaerLeftBox>
	),
	headerRight: () => (
		<HedaerRightBox>
			<TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
				<Image24 source={require('./assets/img/drawable-xhdpi/bt_menu.png')}/>
			</TouchableOpacity>
		</HedaerRightBox>
	)
})

/* MAKE HEADER OPTIONS: 뒤로가기, 왼쪽 타이틀 */
const makeOptions02 = (props, title) => ({
	...commonOptions,
	title:title, headerTitleAlign:'left',
	headerTitleStyle: {...commonOptions.headerTitleStyle, marginLeft: -20},
	headerLeft: () => (
		<HedaerLeftBox>
			<TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
				<Image24 source={require('./assets/img/drawable-xhdpi/bt_header_back.png')}/>
			</TouchableOpacity>
		</HedaerLeftBox>
	),
})

/* MAKE HEADER OPTIONS: 뒤로가기, 중앙 타이틀 */
const makeOptions03 = (props, title) => ({
	...commonOptions,
	title:title, headerTitleAlign:'center',
	headerTitleStyle: {...commonOptions.headerTitleStyle},
	headerLeft: () => (
		<HedaerLeftBox>
			<TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
				<Image24 source={require('./assets/img/drawable-xhdpi/bt_header_back.png')}/>
			</TouchableOpacity>
		</HedaerLeftBox>
	),
})

/* MAKE HEADER OPTIONS: 닫기(X)버튼, 중앙 타이틀 */
const makeOptions04 = (props, title) => ({
	...commonOptions,
	title:title, headerTitleAlign:'center',
	headerTitleStyle: {...commonOptions.headerTitleStyle},
	headerLeft: () => (
		<HedaerLeftBox>
			<TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
				<Image24 source={require('./assets/img/drawable-xhdpi/bt_header_close.png')}/>
			</TouchableOpacity>
		</HedaerLeftBox>
	),
})

/* MAKE HEADER OPTIONS: 채팅목록 헤더 */
const makeOptions05 = (props, title) => ({
	...commonOptions,
	title:title, headerTitleAlign:'center',
	headerLeft: () => (
		<HedaerLeftBox>
			<TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
				<Image24 source={require('./assets/img/drawable-xhdpi/bt_header_close.png')}/>
			</TouchableOpacity>
		</HedaerLeftBox>
	),
	headerRight: () => (
		<HedaerRightBox>
			<TouchableOpacity onPress={() => props.navigation.navigate('chatList')}>
				<Image24 source={require('./assets/img/drawable-xhdpi/bt_chat_list.png')}/>
			</TouchableOpacity>
		</HedaerRightBox>
	),
})

const App = () => {
	console.disableYellowBox = true;

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return(
		<Provider store={Store}>
		<NavigationContainer>
			<Drawer.Navigator
				drawerPosition='right' //햄버거 메뉴 방향(right || left)
				drawerStyle={{width:'100%'}} //사용자 지정 햄버거 메뉴 Style 지정
			>
				<Drawer.Screen name='AppStack' component={AppStack}/>
			</Drawer.Navigator>
		</NavigationContainer>
		</Provider>
	)
}

/** APP내 모든 SCREEN COMPONENTS 처리 */
const AppStack = (props) => {
	return(
		<Stack.Navigator initialRouteName='sales'>
			<Stack.Screen name='index' component={IndexContainer} />
			<Stack.Screen name='signIn' component={SignInContainer} options={()=>makeOptions03(props,'로그인')}/>
			<Stack.Screen name='signUp' component={SignUpContainer} options={()=>makeOptions03(props,'회원가입')}/>
			<Stack.Screen name='signUpSuccess' component={SignUpSuccessScreen} options={()=>makeOptions03(props,'회원가입완료')}/>
			<Stack.Screen name='chatList' component={ChatListContainer} options={()=>makeOptions05(props,'채팅목록')}/>
			<Stack.Screen name='chat' component={ChatContainer} options={()=>makeOptions05(props,'직거래톡')}/>
			<Stack.Screen name='registerDirect' component={RegisterDirectContainer} options={()=>makeOptions(props,'직접 등록')}/>
			<Stack.Screen name='buildingType' component={BuildingTypeScreen} options={()=>makeOptions(props,'건물 유형 선택')}/>
			<Stack.Screen name='saleType' component={SaleTypeScreen} options={()=>makeOptions(props,'건물 형태 선택')}/>
			<Stack.Screen name='sales' component={salesContainer} options={()=>makeOptions(props,'매물상세')}/>
		</Stack.Navigator>
	)
}

export default App;
