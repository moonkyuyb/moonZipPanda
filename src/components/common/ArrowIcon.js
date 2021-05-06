import React from 'react';
import { Platform, Image }  from 'react-native';

const ArrowIcon = () =>  {
    if (Platform.OS == 'ios') {
        return (<Image style={pickerStyle.icon} source={require('../../../assets/img/drawable-xhdpi/bt_arrow_select_b.png')} />)
    }else {
        return (<></>);
    }
}

const pickerStyle = {
	icon: {
		position: 'absolute',
		width: 24,
		height: 24,
		top: 6,
		right: 8,
	},
};


export default ArrowIcon

