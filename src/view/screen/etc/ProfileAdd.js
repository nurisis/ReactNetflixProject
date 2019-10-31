import React from 'react';
import { Alert,Button, View, Text,TextInput, StyleSheet  } from 'react-native';
import { withNavigation } from 'react-navigation';
import {AsyncStorage} from 'react-native';
import { connect } from 'react-redux';







class ProfileAdd extends React.Component {


     constructor(props){
        super(props)
        this.attemptSave = this.attemptSave.bind(this)
        this.attemptDel = this.attemptDel.bind(this)
        // this.profileDel = this.profileDel.bind(this)

        
        const editProfile = this.props.navigation.getParam('editProfile',null);
        this.state = {title: editProfile ? editProfile.title : '', editProfile:editProfile  }
     
    }


    attemptSave(){


         const profiles = this.props.userState.profiles;
        

         if(this.state.editProfile){
            this.props.profileEdit(this.state.title,this.state.editProfile.key)

         }else {


            let newProfile;

            if(profiles && profiles.length){
                  newProfile = {key: profiles[profiles.length-1].key + 1 , title:this.state.title};

            }else{
                  newProfile = {key: 1 , title:this.state.title};
            }
            

            this.props.profileAdd(newProfile);
         }
        

         this.props.navigation.goBack(null);
    }

    attemptDel(){
      
      Alert.alert(
        '',
        '이 프로필을 삭제하시겠어요? 프로필 기록이 영구 삭제되며 다시 복구하실 수 없습니다.',
        [
         
          {
            text: '취소',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: '프로필 삭제', onPress: () => 
        
          
            this.props.profileDel(this.state.editProfile.key)

        },
        ],
        {cancelable: false},
    );
        this.props.navigation.goBack(null);
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
              
                onChangeText={(title) => this.setState({title})}
                value={this.state.title}
                />

                <Text>{'\n'}{'\n'}</Text>

                {this.state.editProfile ?  <Button title="프로필 삭제" 
                  onPress={this.attemptDel} ></Button> : null }
               
              </View>
        </View>

        
      );
    }
  }




const mapStateToProps = (state, ownProps) => {
    return {
       userState:state.userState
    }
  }

  export const actionCreator = (type, payload = null) => ({type, payload})
  
  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            profileAdd: (newProfile) => {
                
                this._storeProfile(newProfile);
                dispatch(actionCreator('ADD_PROFILE',newProfile))
            
            },
            profileDel: (key) => {

              this._deleteProfile(key).then(deletedProfiles => {
                  dispatch(actionCreator('SET_PROFILE',deletedProfiles))
              });
            },
            profileEdit: (title,key) => {


                this._editProfile(title,key).then(editedProfiles => {
                  dispatch(actionCreator('SET_PROFILE',editedProfiles))
              });
            }

      }
  }



_storeProfile = async (newProfile) => {
  try {
   

    const existProfiles = await AsyncStorage.getItem('profiles');
    let newProfiles = JSON.parse(existProfiles);
    if( !newProfiles ){
       newProfiles = []
    }
    newProfiles.push(newProfile);

    AsyncStorage.setItem('profiles',JSON.stringify(newProfiles));

    
    
  } catch (error) {
    // Error saving data
  }
};

_deleteProfile = async (key) => {
  try {
   

    const existProfiles = await AsyncStorage.getItem('profiles');

    let profiles = JSON.parse(existProfiles);
    if( !profiles ){
      return;
    }
    
  
    profiles = profiles.filter( profile => profile.key !== key );
  

    AsyncStorage.setItem('profiles',JSON.stringify(profiles));

    return profiles;
    
  } catch (error) {
    // Error saving data
  }
};

_editProfile = async (title,key) => {
  try {
   

    const existProfiles = await AsyncStorage.getItem('profiles');

    let profiles = JSON.parse(existProfiles);
    if( !profiles ){
      return;
    }
    
   
    profiles = profiles.filter( profile => {
        if(profile.key === key) {
            profile.title = title
        }
        return profile
            
    });
    

    AsyncStorage.setItem('profiles',JSON.stringify(profiles));

    return profiles;
    
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