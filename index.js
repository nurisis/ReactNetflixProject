if(__DEV__) {
    import ('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';
import {authStateReducer,userStateReducer} from './src/view/screen/etc/Login'
import Reactotron from './ReactotronConfig'

const reducuers = combineReducers({
    authState:authStateReducer,
    userState:userStateReducer
});

const store = createStore(reducuers,Reactotron.createEnhancer());


appRootComponent = () =>(<Provider store={store} ><App/></Provider>)

AppRegistry.registerComponent(appName, () => appRootComponent);
