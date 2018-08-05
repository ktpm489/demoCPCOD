/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import couponsDetail from './src/couponsDetail'
import webView from './src/webView'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => webView);
