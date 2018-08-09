import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ActivityIndicator, Dimensions, Button , TouchableOpacity, Image } from 'react-native'
import WebView from 'react-native-android-fullscreen-webview-video'
import DeviceInfo from 'react-native-device-info'
import { width, height } from 'react-native-dimension'
import { calculateRating }  from './globalFunctions'
// https://m.youtube.com/
const USER_AGENT = "Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19";
class ReactWebView extends Component {
    static navigationOptions = ({ navigation }) => ({
        // headerRight :( <Button title={"Share"} onPress={navigation.state.params.handleSave} />
        // )
        headerRight :
        ( 
                <TouchableOpacity style={{ width: width(10), height: width(10), alignItems: 'center', justifyContent: 'center' }} onPress={navigation.state.params.handleSave} >
                    <Image source={require('../images/others/threeDot.png')} resizeMode='cover' style={{ tintColor:'#4195f4'}}/>
            </TouchableOpacity>
        )

    })



    constructor(props){
        super(props)
        this.state = {
            webViewState : '',
            link: this.props.navigation.state.params.link || 'https://www.frugaa.com',
            visible: true
        }
    }

    saveDetails = () => {
        alert('Save Details');
    }


    hideSpinner (){
        this.setState({ visible : false })
    }
    componentDidMount= async () => {
       
        const { link } = this.props.navigation.state.params 
        this.props.navigation.setParams({ handleSave: this.saveDetails });
        this.setState({ link : link })
       // console.log('Device Info', DeviceInfo.getUserAgent(), 'link', link)
        await calculateRating()

    }

    setWebViewUrlChanged = (webViewState) => {
        console.log('webviewState', webViewState.url)
    }

    render() {
        const { link } = this.state
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <WebView
                  onLoad= {() => this.hideSpinner()}
                    userAgent={USER_AGENT}  
                    javaScriptEnabled={true}
                    javaScriptEnabledAndroid={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                   // nativeConfig={true}
                    allowUniversalAccessFromFileURLs={true}
                    mixedContentMode={'compatibility'}
                    startInLoadingState={true}
                    onNavigationStateChange={this.setWebViewUrlChanged}
                    source={{ uri: link }} />
                {/* {this.state.visible && (
                    <ActivityIndicator
                        style={{ position: "absolute", top: height / 2, left: width/2 }}
                        size="large"
                    />
                )} */}
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

