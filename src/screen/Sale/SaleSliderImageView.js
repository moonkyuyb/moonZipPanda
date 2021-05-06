import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Fragment, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import Gallery from 'react-native-image-gallery';

import {
	PreView,
	PreViewImg
} from './../../styles/saleStyle/saleSliderImageViewStyle';

const SalesSliderImageView = () => {

	//GET ROUTE & NAVIGATION
	const route = useRoute(), navigation = useNavigation()
	const [salesImage, setSalesImage] = useState([])

	useEffect(()=>{
		const handleEffect = async (props) => {
			
			setSalesImage([
				{ id : 1, img: require('./../../../assets//img/sample/sample_room_01.jpg') },
				{ id : 2, img: require('./../../../assets//img/sample/sample_room_02.jpg') },
				{ id : 3, img: require('./../../../assets//img/sample/sample_room_03.jpg') },
				{ id : 4, img: require('./../../../assets//img/sample/sample_room_04.jpg') },
				{ id : 5, img: require('./../../../assets//img/sample/sample_room_05.jpg') },
				{ id : 6, img: require('./../../../assets//img/sample/sample_room_01.jpg') },
			])
		}
		handleEffect()
	},[])
	
	const salesImageItem=({item})=>{
        return(
            <PreViewImg source={item.img}/>
        );
    }
	return(
		<View style={{flex: 1}}>
			<Gallery
				style={{ flex: 1, paddingBottom: 96,}}
				images={[
				{ source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
				{ source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
				{ source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
				{ source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
				]}
			/>
			<PreView>
				<FlatList
					horizontal={true}
					contentContainerStyle={{ padding: 14 }}
					data={salesImage} 
					renderItem ={ salesImageItem } 
					keyExtractor={ item=> item.id }
				/>
			</PreView>
		</View>
	)
}
export default SalesSliderImageView;


