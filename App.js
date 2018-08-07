import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeView from './src/coupons'
import CounponsDetail from './src/couponsDetail'
import WebView from './src/webView'
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
        fontSize: width(4.5),
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