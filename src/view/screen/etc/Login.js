import React from 'react';
import { View, Text,Button,AsyncStorage } from 'react-native';
import { StackActions, NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.attemptLogin = this.attemptLogin.bind(this)
      
    }
    attemptLogin(){
        //검증과 서버 요청


        //완료되면 토큰을 얻고 홈으로 이동
        var token = "sometokenregex"
        this.props.authSuccess(token);
    }



    render() {
      return (
        <View style={{ flex: 1, backgroundColor:'#ffffff',justifyContent: 'center', alignItems: 'center' }}>
          <Text children="Redux Login Example"/>
          <Text children="Click on login to continue "/>
          <Button color="#901000" title="Login" onPress={this.attemptLogin} />
        
        </View>
      );
    }
  };

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Bottom' })],
  });



  const mapStateToProps = (state, ownProps) => {
    return {
       
    }
  }
  const actionReducer = (action,payload) => ({action,payload})

  export const actionCreator = (type, payload = null) => ({type, payload})
  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            authSuccess: (token) => {
                AsyncStorage.multiSet([['token',token], ['authenticated','1']])
                dispatch(actionCreator('LOGIN_SUCCESS'))
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

  export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login;