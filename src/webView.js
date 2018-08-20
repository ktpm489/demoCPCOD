import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ActivityIndicator, Dimensions, Button, TouchableOpacity, Image, CameraRoll, Share, Alert, PermissionsAndroid, Platform
    , Modal, TouchableHighlight, TouchableWithoutFeedback
} from 'react-native'
import WebView from 'react-native-android-fullscreen-webview-video'
import DeviceInfo from 'react-native-device-info'
import { width, height } from 'react-native-dimension'
import { calculateRating } from './globalFunctions'
import ViewShot from 'react-native-view-shot'
import PopupDialog from 'react-native-popup-dialog';
// https://m.youtube.com/
const USER_AGENT = "Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19";
const ISIOS = Platform.OS === 'ios'
class ReactWebView extends Component {
    static navigationOptions = ({ navigation }) => ({
        // headerRight :( <Button title={"Share"} onPress={navigation.state.params.handleSave} />
        // )
        headerRight:
            (
                <TouchableOpacity style={{ width: width(10), height: width(10), alignItems: 'center', justifyContent: 'center' }} onPress={navigation.state.params.handleSave} >
                    <Image source={require('../images/others/threeDot.png')} resizeMode='cover' style={{ tintColor: '#00008D' }} />
                </TouchableOpacity>
            )

    })



    constructor(props) {
        super(props)
        this.state = {
            webViewState: '',
            link: this.props.navigation.state.params.link || 'https://www.frugaa.com',
            visible: true,
            modalVisible : false
        }
    }




    setRefs = (ref) => { this.viewShot = ref }

    saveDetails =  async () => {
        this.popupDialog.show(() => {
            console.log('callback - will be called immediately')
        });
       // this.setModalVisible(!this.state.modalVisible);

        // alert('Save Details');
       // Alert.alert('Hello alert')
      // await this.pressSaveImg()
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible})
    }

    hideSpinner() {
        this.setState({ visible: false })
    }
    componentDidMount = async () => {

        const { link } = this.props.navigation.state.params
        this.props.navigation.setParams({ handleSave: this.saveDetails });
        this.setState({ link: link })
         console.log('Device Info', DeviceInfo.getUserAgent(), 'linkWebView', link)
        await calculateRating()

    }

    setWebViewUrlChanged = (webViewState) => {
        console.log('webviewState', webViewState.url)
    }


    pressSaveImg = async () => {
       // this.closeModal()
        this.viewShot && this.viewShot.capture().then(async (uri) => {
            const captureUrl = 'file://' + uri
            console.log('captureUrl', captureUrl)
            if (ISIOS) {
                try{
                  await  this.saveDataToPhotoGallery(captureUrl)
                  console.log('OK ko')
                } catch (err){
                    console.log('error', err)
                }
               
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
                     await   this.saveDataToPhotoGallery(captureUrl)
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

    saveDataToPhotoGallery = async (url) => {
        //const self = this
        try {
            // debugger
            var promise = CameraRoll.saveToCameraRoll(url)
            await promise.then(function (result) {
                 Alert.alert(' Save profile image successfully ')
               // console.log('Save profile image success')
            }).catch((error) => {
              //  console.log('save failed ' + error)
                 Alert.alert(' Save profile image failed ')
                //  self.showAlert('Save profile image failed', true)
            })

        } catch (err){
            console.log('error', err)
        }
     
    }
    closePopup = () => {
        this.popupDialog.dismiss(() => {
            console.log('callback - will be called immediately')
        });
    }


    render() {
        const { link } = this.state
        const { setRefs } = this
        return (
            <TouchableWithoutFeedback onPress={this.closePopup}>
            <View style={styles.container}>
               
                {/* <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style = {styles.modal} opacity={1}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent', padding: 3 }}>

                            <Text style={[styles.text, styles.headingText]} onPress={this.handleEmail}>
                                Send Feedback
                             </Text>
                        </TouchableOpacity>
                  
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                        </TouchableOpacity>
               </View>
                </Modal> */}
                <PopupDialog
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }} overlayOpacity={0.5}
                        dialogStyle={{ marginHorizontal : width(10) }}
                        >
                        <View style={styles.dialogContentView}>
                            <TouchableOpacity style={styles.btnDialog}>
                            <Text style={[styles.text, styles.headingText]} onPress={this.handleEmail}>
                                Save ScreenShoot
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnDialog}>
                                <Text style={[styles.text, styles.headingText]} onPress={this.handleEmail}>
                                Send link to social network
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnDialog}>
                                <Text style={[styles.text, styles.headingText]} onPress={this.handleEmail}>
                                    Close Dialog
                             </Text>
                            </TouchableOpacity>
                        </View>
                </PopupDialog>
                <ViewShot ref={setRefs} options={{ format: 'jpg', quality: 1 }} style={styles.viewShot} collapsable={false}>
                    <StatusBar hidden={true} />
                    <WebView
                        onLoad={() => this.hideSpinner()}
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
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems :'center',
        justifyContent :'center'
    },
    viewShot: {
        backgroundColor: 'transparent',
        width: width(100),
       // paddingVertical: height(2),
       // alignItems: 'center',
       // justifyContent: 'center',
        //flex: 1
         height: height(100)
    }, 
    modal: {
        width: width(100),
        height: height(20),
        marginTop : height(10),
        alignItems: 'center',
        justifyContent :'center',
        backgroundColor: 'gray',
        alignSelf: 'center',
       // padding: 100
    },
    text: {
        color: '#3f2949',
        //marginTop: 10
    },
    headingText: {
        fontSize: width(5),
        fontWeight: 'bold',
        
    },
    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnDialog : {
        backgroundColor: 'transparent', borderStyle: 'dotted',
        marginVertical: height(2),
        width: width(80),
        height: height(6),
        paddingHorizontal: width(4), paddingVertical: height(0.3), borderColor: 'red', borderWidth: width(0.3), alignItems: 'center', justifyContent: 'center', borderRadius: width(1)
    }
})

export default ReactWebView

