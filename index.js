/** @format */

import { AppRegistry } from 'react-native';
import Setup from './src/setup';
import { name as appName } from './app.json';
import TestSwiper from './src/screens/testSwiper';
AppRegistry.registerComponent(appName, () => TestSwiper);
