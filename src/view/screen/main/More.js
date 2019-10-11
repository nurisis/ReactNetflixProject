import React from 'react';
import { Button,View, Text,AsyncStorage } from 'react-native';
import { connect } from 'react-redux';


class More extends React.Component {
    constructor(props) {
        super(props)
        this.attemptLogout = this.attemptLogout.bind(this)
    }
    attemptLogout(){

        this.props.authLogout();
    }


    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>More!</Text>
          <Text children="Welcome user" />
          <Button color="#901000" title="logout" onPress={this.attemptLogout} />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
       
    }
  }
  const actionReducer = (action,payload) => ({action,payload})

  export const actionCreator = (type, payload = null) => ({type, payload})


  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            authLogout: () => {
                AsyncStorage.multiRemove(['token','authenticated']);
                dispatch(actionCreator('LOGOUT'))
            }
      }
  }



  export default connect(mapStateToProps, mapDispatchToProps)(More);