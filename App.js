import React from 'react'
import { StyleSheet, WebView, Platform, ActivityIndicator, View, Text, Image } from 'react-native'

export default class App extends React.Component {
	ActivityIndicatorLoadingView() {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 100,
					padding: 20,
					flex: 1,
					backgroundColor: '#1976d2',
				}}
			>
				<View style={styles.ActivityIndicatorStyle}>
					<Image source={require('./src/logo.png')} style={{ width: 320, height: 70 }} />
					<ActivityIndicator color="#fff" size="large" style={{ marginTop: 20 }} />
				</View>
			</View>
		)
	}

	render() {
		return (
			<WebView
				style={styles.WebViewStyle}
				source={{ uri: 'https://www.bukaorder.co.id/product' }}
				javaScriptEnabled={true}
				domStorageEnabled={true}
				renderLoading={this.ActivityIndicatorLoadingView}
				startInLoadingState={true}
			/>
		)
	}
}

const styles = StyleSheet.create({
	WebViewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : 20,
	},

	ActivityIndicatorStyle: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
