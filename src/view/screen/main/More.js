import React from 'react';
import {Image, Button,View, Text, AsyncStorage, TouchableOpacity,FlatList,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

const moreScreenMenus = [
    {
      id:'1',
      title:'앱 설정',
    },
    {
      id:'2',
      title:'계정'
    },
    {
      id:'3',
      title:'고객 센터'
    },
    {
      id:'4',
      title:'로그아웃'
    }
];

class More extends React.Component {
    constructor(props) {
        super(props)
        this.attemptLogout = this.attemptLogout.bind(this)
       
        this.state = {  nickName : this.props.userState.nickName,
                        selected: (new Map([ [1,true]])) //iterable object with string:boolean key:value pairs
                
                     }
      
    }

    onPressAction = (key) => {
      this.setState((state) => {
        //프로필 추가이면 
        if(key === 0){
          this.props.navigation.navigate('ProfileAdd');
          return
        }
      
        //create new Map object, maintaining state immutability
        const selected = new Map(state.selected);
                
        //셀렉트 된 키 제외하고 나머지 셀렉트 해제
        selected.clear();
        selected.set(key, true)

        return {selected};
      });
    }
    
    renderRow = (item) => {
      return (
          <RowItem
            style={{height:20}}
            item={item}
            title={item.title}
            source={item.source}
            onPressItem={() => this.onPressAction(item.key)}
            selected={!!this.state.selected.get(item.key)} />
            
      );
    }

    onSelectMenu = (id) => {
      //로그아웃 메뉴 클릭
      if(id== 4){
        this.props.authLogout();
      }
    }

    attemptLogout(){

        this.props.authLogout();
    }
    profileAddMove(){
      this.props.navigation.navigate('ProfileAdd')
    }
  
    render() {

      const profiles = this.props.userState.profiles.length == 5 ? this.props.userState.profiles : [...this.props.userState.profiles,{key:0,title:'프로필 추가'}];

      return (
        <View style={styles.container}>

          <View  style={styles.profiles}>
            <FlatList
                style={{marginBottom:8}}
                data={profiles}
                renderItem={({ item }) => (
               
                  this.renderRow(item)
                    
                )}
                keyExtractor={item => String(item.key)}
                extraData={this.state.selected}
                horizontal={true}
            />
          
              <TouchableOpacity
                color="black"
                backgroundColor='#3fffff'
                style={{marginBottom:23}}
                onPress={ () =>this.props.navigation.navigate('ProfileAdmin')}
              >
                 <Text  style={{color:'white',fontSize:16}}>프로필 관리</Text>
              </TouchableOpacity>
          
          </View>        
          
        

          <View style={styles.background}>
            <Text style={styles.welcome}>{this.state.nickName}님 환영합니다.{'\n'} </Text>
            <SafeAreaView style={styles.menus}>
              
                  <FlatList
                    data={moreScreenMenus}
                    renderItem={({item}) => 
                    
                      <TouchableOpacity style={styles.menuItem}
                        onPress={() => this.onSelectMenu(item.id)}  
                      >
                        <Text style={styles.menutitle}>{item.title}</Text>
                      </TouchableOpacity>
                    }
                  />

            </SafeAreaView>


          </View>       

        
          
         
        </View>
      );
    }
  }


  
  class RowItem extends React.Component {
    render(){
      //render styles and components conditionally using this.props.selected ? _ : _
      
      return (
        <View style={{ alignItems:'center'}}>
          
        <TouchableOpacity onPress={this.props.onPressItem}
         
          style={[
            styles.item,
            this.props.selected ?
            { width: 100, height: 100, marginTop: 18, borderColor:'white', borderWidth:3}
                                :
            { width: 85, height: 85, marginTop: 25    }

         
          ]}
        
        >
        
        
          <Image source={this.props.source} style={styles.uploadAvatar} />

    
      
      
        </TouchableOpacity>

        <Text numberOfLines={1} style={[styles.profileName ,
                        this.props.selected ? {color:'white'} : {color:'gray'}
                     ]}>{this.props.title}</Text>

      
        </View>
      )
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
            authLogout: () => {
                AsyncStorage.multiRemove(['token','nickName','authenticated','profiles']);
                dispatch(actionCreator('LOGOUT'))
                dispatch(actionCreator('RESET'))
          
            }
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(More);


  const styles = StyleSheet.create({
    container: {
    
      flex: 1,
      // justifyContent: 'space-around',
      // alignItems: 'centqer'
    },
    profiles:{
      flex:2.1,
      backgroundColor:'#000000',
      alignItems:'center',
    },
    menus:{
      flex:4,
    },
    background:{
      flex:4,
      backgroundColor:'#2B2D2F',
      
    },
    welcome:{
      flex:1,
      color:'white',
   
    },  
    item: {
    
      backgroundColor: '#f9c136',
     
      width:85,
      height:85,
      marginTop:25,
      marginHorizontal: 3,
    },
    profileName:{
      position: 'absolute',
      bottom:15,
      color:'gray',

      
    },
    menuItem:{
      padding: 10,
      // marginVertical: 8,
      // marginHorizontal: 16,
    },  
    menutitle: {
      fontSize: 21,
      color:'gray'
    },
    uploadAvatar:{
      // marginTop:100,
      //  height:200,
      //  width:200,
      flex:1,
      width:'100%',
      height:'100%',
  
     }
  });
  
