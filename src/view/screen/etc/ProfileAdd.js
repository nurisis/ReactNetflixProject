import React from 'react';
import {Image, Alert,Button, View, Text,TextInput, StyleSheet,CheckBox,TouchableOpacity  } from 'react-native';
import { withNavigation } from 'react-navigation';
import {AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';


// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


class ProfileAdd extends React.Component {


     constructor(props){
        super(props)
        this.attemptSave = this.attemptSave.bind(this)
        this.attemptDel = this.attemptDel.bind(this)
        this.callGallery = this.callGallery.bind(this)
        // this.profileDel = this.profileDel.bind(this)

        
        const editProfile = this.props.navigation.getParam('editProfile',null);
        this.state = {title: editProfile ? editProfile.title : '',
                      editProfile:editProfile ,
                      checked:false,
                      avatarSource: editProfile ? editProfile.source : null,
                    }
     
    }


    attemptSave(){


         const profiles = this.props.userState.profiles;
        

         if(this.state.editProfile){
            this.props.profileEdit({title:this.state.title, key:this.state.editProfile.key,source:this.state.avatarSource})

         }else {


            let newProfile;

            if(profiles && profiles.length){
                  newProfile = {key: profiles[profiles.length-1].key + 1 , title:this.state.title,
                                      source:this.state.avatarSource
                               };

            }else{
                  newProfile = {key: 1 , title:this.state.title,source:null};
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
          {text: '프로필 삭제', onPress: () => {

            this.props.profileDel(this.state.editProfile.key)
            this.props.navigation.goBack(null)
          }

          },
        ],
        {cancelable: false},
    );
      
    }
  
    callGallery(){
      
          // Open Image Library:
        ImagePicker.launchImageLibrary(options, (response) => {
          // Same code as in above section!
          // const source = { uri: response.uri };
          const source = { uri : 'data:image/jpeg;base64,'+response.data };
          this.setState({
            avatarSource: source,
          });
        
         
        });


    }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         

            
              <View style={styles.headContainer}>

                
                  <View style={styles.buttonContainer}>
                    <Button title="취소"
                    color="black" 
                    onPress={() => {this.props.navigation.goBack(null)}} 
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button title="저장" 
                    color="gray" 
                    onPress={this.attemptSave}
                    />
                  </View>
              </View>

              <View style={styles.bodyContainer}>
                <Text style={styles.colorWhite}>이름</Text>
                <TextInput
                style={styles.textInput}
              
                onChangeText={(title) => this.setState({title})}
                value={this.state.title}
                />

               
                <TouchableOpacity style={styles.horizonView}
                onPress={() => this.setState({ checked: !this.state.checked })}
                >
                  <Text style={[styles.colorWhite,{marginTop:5,fontSize:16}]}>어린이용</Text>

                  <CheckBox
                  style={{paddingRight:45,alignItems:'center'}}
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                </TouchableOpacity>

                <View
                    style={styles.divider}
                  />

                  <TouchableOpacity style={styles.horizonView}
                    onPress={this.callGallery}
                    >
                      <Text style={[styles.colorWhite,{marginTop:5,fontSize:16}]}>이미지</Text>

                      <View style={{width: 61, height: 61, backgroundColor:'red',marginTop:-15,marginBottom:-15}}>
                            <Image source={this.state.avatarSource} style={styles.uploadAvatar} />

                      </View>
                </TouchableOpacity>

                <View
                    style={styles.divider}
                  />
           
                {this.state.editProfile ?
                
                  <View>
                  
                  <View
                    style={styles.divider}
                  />

                  <View style={styles.horizonView}
                   
                    >
                      <Text style={[styles.colorWhite,{marginTop:5,fontSize:16}]}></Text>

                     
                </View>


                  <View
                    style={styles.divider}
                  />


               
                  
                  <TouchableOpacity style={styles.horizonView}
                    onPress={this.attemptDel}
                    >
                      <Text style={[styles.colorWhite,{marginTop:5,fontSize:16}]}>프로필 삭제</Text>


                </TouchableOpacity>
                <View
                    style={styles.divider}
                />
                  
                  
                </View>
                  
                  
                  : null }
                  
                  
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
            profileEdit: (editProfile) => {


                this._editProfile(editProfile).then(editedProfiles => {
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

_editProfile = async (editProfile) => {
  try {
   

    const existProfiles = await AsyncStorage.getItem('profiles');

    let profiles = JSON.parse(existProfiles);
    if( !profiles ){
      return;
    }
    
   
    profiles = profiles.filter( profile => {
        if(profile.key === editProfile.key) {
            profile.title = editProfile.title
            profile.source = editProfile.source
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
    
    flexDirection: 'row',
    alignItems: 'center',
    // height:'8%',
    justifyContent: 'center',
    // justifyContent: 'space-around'
    backgroundColor:'#2B2D2F'  
  },
  bodyContainer:{
    padding: 18,
    width:'100%',
    flex: 1,
    // alignItems: 'center',
    // height:'15%',
    
    // justifyContent: 'flex-start',
    backgroundColor:'#2B2D2F'
    
  },
  textInput : {
    paddingBottom:0,
    color:'white',
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor:'white'
    
  },
  buttonContainer : {
    
    height:'100%',
    flex: 1,
    
  },
  colorWhite :{
    color:'white',
   
  },
  horizonView:{
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    

  },
  divider:{
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  uploadAvatar:{
   
    flex:1,
    width:'100%',
    height:'100%',

   }

 
});