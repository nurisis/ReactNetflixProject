import React from 'react';
import Navigator from './src/Navigator';
import {View,Text,StyleSheet, ActivityIndicator,AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import { actionCreator } from './src/view/screen/etc/Login';




class App extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.checkLogin();
  }

  render() {

    const {app_started, authenticated } = this.props.authState;
    return app_started ? this._renderAppRoot(authenticated) : this._renderSplash(app_started);
   
  }

  _renderAppRoot(authenticated){
    const CreateRoot = Navigator(authenticated);

    return <CreateRoot/>
  }
  

  _renderSplash(app_started){
      return (
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size='large' animating={!app_started} />
              <Text children='Loading...' />
         </View>
      )

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async checkLogin(){
      const isLoggin = await AsyncStorage.getItem('authenticated').catch(e=>console.log(e))
   
      const nickName = await AsyncStorage.getItem('nickName').catch(e=>console.log(e))

      const profiles = await AsyncStorage.getItem('profiles').catch(e=>console.log(e))

        if(isLoggin){
          dispatch(actionCreator('LOGIN_SUCCESS'))
          
          dispatch(actionCreator('ADD_NICKNAME',nickName))
          
          if(profiles && profiles.length){
              dispatch(actionCreator('SET_PROFILE',JSON.parse(profiles)))
          }

        }
        dispatch(actionCreator('APP_LOADED'))

    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authState:state.authState
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)















