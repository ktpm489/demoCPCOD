import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ActivityIndicator, Dimensions, Button, TouchableOpacity, Image, CameraRoll, Share, Alert, PermissionsAndroid } from 'react-native'
import WebView from 'react-native-android-fullscreen-webview-video'
import DeviceInfo from 'react-native-device-info'
import { width, height } from 'react-native-dimension'
import { calculateRating }  from './globalFunctions'
import ViewShot from 'react-native-view-shot'
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


    setRefs = (ref) => { this.viewShot = ref }

    saveDetails = () => {
       // alert('Save Details');
        Alert.alert('Hello alert')
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


    pressSaveImg = async () => {
        this.closeModal()
        this.viewShot && this.viewShot.capture().then(async (uri) => {
            const captureUrl = 'file://' + uri

            if (ISIOS) {
                this.saveDataToPhotoGallery(captureUrl)
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                        {
                            'title': 'Permisson denied',
                            'message': '"HB Wallet" Would like to write data to phone'
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        this.saveDataToPhotoGallery(captureUrl)
                        console.log('You can write data')
                    } else {
                        console.log('Write Data permission denied')
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        })
    }

    saveDataToPhotoGallery = (url) => {
        const self = this
        var promise = CameraRoll.saveToCameraRoll(url)
        promise.then(function (result) {
            self.showAlert('Save profile image success', false)
        }).catch((error) => {
            console.log('save failed ' + error)
            self.showAlert('Save profile image failed', true)
        })
    }
    


    render() {
        const { link } = this.state
        const { setRefs } = this
        return (
            <View style={styles.container}>
                <ViewShot ref={setRefs} options={{ format: 'jpg', quality: 1 }} style={styles.viewShot} collapsable={false}>
                <StatusBar hidden={true} />
                <WebView
                  onLoad= {() => this.hideSpinner()}
                    userAgent={DeviceInfo.getUserAgent() + " - Coupons 24h Trending - android "}  
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
                </ViewShot>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewShot: {
        backgroundColor: 'transparent',
        width: width(100),
        paddingVertical: height(2),
        alignItems: 'center',
        justifyContent: 'center'
        // flex: 1
        // height: height(92)
    },
})

export default ReactWebView
