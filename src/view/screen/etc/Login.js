import React from 'react';
import { View, Text,Button,AsyncStorage,TextInput } from 'react-native';
import { StackActions, NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.attemptLogin = this.attemptLogin.bind(this)
        this.state = {nickName:''}
      
    }
    attemptLogin(){
        //검증과 서버 요청


        //완료되면 토큰을 얻고 홈으로 이동
        var token = "sometokenregex"
        this.props.authSuccess(token,this.state.nickName);
    }



    render() {
      
      return (
        <View style={{ flex: 1, backgroundColor:'#ffffff',justifyContent: 'center', alignItems: 'center' }}>
          <Text>닉네임을 입력하세요.{'\n'}</Text>
          <TextInput
          style={{height: 40,borderRadius: 8,width:240,
            borderWidth: 1.5,
            borderColor: '#d6d7da'}}
          placeholder="닉네임"
          onChangeText={(nickName) => this.setState({nickName})}
          value={this.state.nickName}
          />
          <Text>{'\n'}{'\n'}</Text>

          <Button color="#901000" title="Login" onPress={this.attemptLogin} />
        
        </View>
      );
    }
  };

  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({ routeName: 'Bottom' })],
  // });



  const mapStateToProps = (state, ownProps) => {
    return {
       
    }
  }

  export const actionCreator = (type, payload = null) => ({type, payload})
  
  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            authSuccess: (token,nickName) => {
              
                AsyncStorage.multiSet([['token',token],['nickName',nickName], ['authenticated','1'] ])
                dispatch(actionCreator('LOGIN_SUCCESS'))
                dispatch(actionCreator('ADD_NICKNAME',nickName))
                

            }
      }
  }
  export const authStateReducer = (state = {app_started:false, authenticated:false},{type,payload})=>{
      switch(type){
          case 'LOGIN_SUCCESS':
              return {...state,authenticated:true}
          case 'LOGOUT':
              return {...state,authenticated:false}
          case 'APP_LOADED':
              return {...state,app_started:true}
          default:
              return state
      }
  }

  export const userStateReducer = (state = {nickName:'',profiles:[]},{type,payload}) => {

        switch(type){
          case 'ADD_NICKNAME':
              return {...state,nickName:payload}
          case 'ADD_PROFILE':
              return {...state,profiles:[...state.profiles,payload]}
          case 'SET_PROFILE':
              return {...state,profiles:payload}
          case 'UPDATE_PROFILE':
              return {...state,profiles:[payload]}
          case 'DELETE_PROFILE':
              return {...state,profiles:[payload]}
          case 'RESET':
              return {nickName:'',profiles:[]}
          default:
              return state
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login;