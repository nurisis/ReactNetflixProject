/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';
import {authStateReducer} from './src/view/screen/etc/Login'

const reducuers = combineReducers({
    authState:authStateReducer
});

const store = createStore(reducuers);


appRootComponent = () =>(<Provider store={store} ><App/></Provider>)

AppRegistry.registerComponent(appName, () => appRootComponent);
