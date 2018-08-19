import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeView from './src/coupons'
import CounponsDetail from './src/couponsDetail'
import WebView from './src/webView'
// import WebView from './src/webViewBK'
import { width} from 'react-native-dimension'
import { StackNavHeaderStyles } from './styles/styles'
const Stack = StackNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      title: 'COUPONS 24H TRENDING',
      headerStyle: {
        backgroundColor: '#BDD9F2',
      },
      headerTintColor: '#000087',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: width(4.5),
        width: '100%',
        textAlign: 'center', alignSelf: 'center', justifyContent: "center"
      },
    }
  },
  Detail: {
    screen: CounponsDetail,
    navigationOptions: {
      title: 'COUPONS 24H TRENDING',
      headerStyle: {
        backgroundColor: '#BDD9F2',
      },
      headerTintColor: '#000087',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: width(4.5),
        width: '100%',
        textAlign: 'center', alignSelf: 'center', justifyContent: "center",
      },
    }
    
  },
  WebView : {
    screen : WebView,
    navigationOptions: {
      title: 'COUPONS 24H TRENDING',
      headerStyle: {
        backgroundColor: '#BDD9F2',
      },
      headerTintColor: '#000087',
      headerTitleStyle: {
        fontWeight: 'bold',
        width: '100%',
        fontSize: width(4.5),
        textAlign: 'center', alignSelf: 'center', justifyContent: "center"
      },
    }
  }
});

export default class App extends Component {
  render() {
    return (
          <Stack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   height: '100%',
    backgroundColor: '#fff'
  }
});