import React from 'react';
import { Button, View, Text,TextInput, StyleSheet  } from 'react-native';
import { withNavigation } from 'react-navigation';
import {AsyncStorage} from 'react-native';
import { connect } from 'react-redux';







class ProfileAdd extends React.Component {


     constructor(props){
        super(props)
        this.attemptSave = this.attemptSave.bind(this)
        this.state = {profile:''}
     
    }


    attemptSave(){
       this.props.profileAdd(this.state.profile);
    }

   

  

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         

            
              <View style={styles.headContainer}>

                
                  <View style={styles.buttonContainer}>
                    <Button title="취소" 
                    onPress={() => {this.props.navigation.goBack(null)}} 
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button title="저장" 
                    onPress={this.attemptSave}
                    />
                  </View>
              </View>

              <View style={styles.bodyContainer}>
                <Text>이름{'\n'}</Text>
                <TextInput
                style={styles.textInput}
              
                onChangeText={(profile) => this.setState({profile})}
                value={this.state.profile}
                />

                <Text>{'\n'}{'\n'}</Text>
              </View>
        </View>

        
      );
    }
  }




const mapStateToProps = (state, ownProps) => {
    return {
       
    }
  }

  export const actionCreator = (type, payload = null) => ({type, payload})
  
  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            profileAdd: (profile) => {

                // AsyncStorage.multiSet([['token',token],['nickName',nickName], ['authenticated','1']])
                this._storeProfile(profile);
                // dispatch(actionCreator('ADD_PROFILE',profile))
                console.log('스토리지 확인할것')

            }
      }
  }



_storeProfile = async (profile) => {
  try {
    // await AsyncStorage.setItem('profiles',JSON.stringify([...AsyncStorage.getItem('TASKS'),profile]));
    await AsyncStorage.setItem('profiles',[profile]);
  } catch (error) {
    // Error saving data
  }
};


export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ProfileAdd));




const styles = StyleSheet.create({
  headContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height:'5%',
    justifyContent: 'center',
    // justifyContent: 'space-around'
  },
  bodyContainer:{
    padding: 10,
    flex: 1,
    alignItems: 'center',
    height:'15%',
    justifyContent: 'flex-start',
  },
  textInput : {
    height: 40,
    borderRadius: 8,
    width:240,
    borderWidth: 1.5,
    borderColor: '#d6d7da'
  },
  buttonContainer : {
    flex: 1
  },
 
});