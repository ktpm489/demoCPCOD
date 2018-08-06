import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native'
import WebView from 'react-native-android-fullscreen-webview-video'
import DeviceInfo from 'react-native-device-info'
// https://m.youtube.com/

class ReactWebView extends Component {

    constructor(props){
        super(props)
        this.state = {
            webViewState : ''
        }
    }

    componentDidMount() {
        const { link } = this.props
        console.log('Device Info', DeviceInfo.getUserAgent())

    }

    setWebViewUrlChanged = (webViewState) => {
        console.log('webviewState', webViewState.url)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <WebView
                     userAgent={DeviceInfo.getUserAgent() + " - MYAPPNAME - android "}  
                    javaScriptEnabled={true}
                    javaScriptEnabledAndroid={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                   // nativeConfig={true}
                    allowUniversalAccessFromFileURLs={true}
                    mixedContentMode={'compatibility'}
                    startInLoadingState={true}
                    onNavigationStateChange={this.setWebViewUrlChanged}
                    source={{ uri: 'https://www.frugaa.com/promo/clothing/' }} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ReactWebView

