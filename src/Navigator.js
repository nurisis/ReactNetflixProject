import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './view/screen/main/Home'
import SearchScreen from './view/screen/main/Search'
import ScheduleScreen from './view/screen/main/Schedule'
import SavedScreen from './view/screen/main/Saved'
import MoreScreen from './view/screen/main/More'
import ProfileAddScreen from './view/screen/etc/ProfileAdd'
import ProfileAdminScreen from './view/screen/etc/ProfileAdmin'

import LoginScreen from './view/screen/etc/Login'
import VideoDetailScreen from './view/screen/etc/VideoDetail'


const MoreStack = createStackNavigator({
    More: { screen: MoreScreen },
  
    VideoDetail : { screen: VideoDetailScreen },

  },{ headerMode: 'none'});
  
const bottomTabNavigator = createBottomTabNavigator(
    {
      Home: HomeScreen,
      Search: SearchScreen,
      Schedule: ScheduleScreen,
      Saved: SavedScreen,
      More: { screen: MoreStack },
   
    },
   
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home`;
          } else if (routeName === 'Search') {
            iconName = `ios-search`;
          } else if (routeName === 'Schedule') {
            iconName = `ios-play-circle`;
          } else if (routeName === 'Saved') {
            iconName = `ios-download`;
          } else if (routeName === 'More') {
            iconName = `ios-options`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      }
  )
  
  
const RootStack =  (authenticated) => createStackNavigator({
    Login: { screen: LoginScreen ,navigationOptions:{
          header:null
     } },
    Bottom: {screen:bottomTabNavigator,navigationOptions:{
          header:null
     } },
    ProfileAdd: { screen: ProfileAddScreen,navigationOptions:{
          header:null
     } },
    ProfileAdmin: { screen: ProfileAdminScreen,
                    navigationOptions:{headerTitle: '프로필 관리', headerStyle: {
                      backgroundColor: 'black'
                    }, headerTintColor: 'white'},
                   
                
                  },
  }, { 
        headerLayoutPreset: 'center',
       initialRouteName:authenticated ? 'Bottom' : 'Login'
  });

  
  export default appContainer = (authenticated) => createAppContainer(
        RootStack(authenticated)
  );
  
  