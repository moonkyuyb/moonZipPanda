import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

/* COMMON COMPONENTS */
import Colors from '../styles/Colors';

export class ZipSafeAreaView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View {...this.props} style={[styles.ZipSafeAreaView, this.props.style]}>
					{this.props.children}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		alignItems: 'center',
		flex: 1,
	},
	ZipSafeAreaView:{
		width: '100%',
		maxWidth: 800,
		backgroundColor: Colors.whiteColor,
		flex: 1,
	}
})

export default ZipSafeAreaView;