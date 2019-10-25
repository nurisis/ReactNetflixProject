import React from 'react';
import { Button,View, Text, AsyncStorage, TouchableOpacity,FlatList,StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// const DATA = [
//   {
//     key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     key: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];





class More extends React.Component {
    constructor(props) {
        super(props)
        this.attemptLogout = this.attemptLogout.bind(this)
       
        this.state = {  nickName : this.props.userState.nickName,
                        selected: (new Map()) //iterable object with string:boolean key:value pairs
        
        
                     }
      
    }

    onPressAction = (key) => {
      this.setState((state) => {
        //프로필 추가이면
        if(key === '1'){
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
            onPressItem={() => this.onPressAction(item.key)}
            selected={!!this.state.selected.get(item.key)} />
      );
    }


    attemptLogout(){

        this.props.authLogout();
    }
    profileAddMove(){
      this.props.navigation.navigate('ProfileAdd')
    }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>

          <View  style={{height:100}}>
            <FlatList
               
                data={this.props.userState.profiles}
                renderItem={({ item }) => (
                  
                  this.renderRow(item)
                    
                )}
                keyExtractor={item => item.key}
                extraData={this.state.selected}
                horizontal={true}
            />
         
          </View>        
          
          <Button
            color="#808080"
            title="프로필 관리"
            // onPress={ () =>this.props.navigation.navigate('ProfileAdd')}
          />


          <Text>{this.state.nickName}님 환영합니다.{'\n'} </Text>
          <Button color="#901000" title="로그아웃" onPress={this.attemptLogout} />
          
         
        </View>
      );
    }
  }

  class RowItem extends React.Component {
    render(){
      //render styles and components conditionally using this.props.selected ? _ : _
      
      return (
        <TouchableOpacity onPress={this.props.onPressItem}
          style={[
            styles.item,
            { backgroundColor: this.props.selected ? '#6e3b6e' : '#f9c2ff' },
          ]}
        
        >
         <Text>{this.props.title}</Text>
        </TouchableOpacity>
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
                AsyncStorage.multiRemove(['token','nickName','authenticated']);
                dispatch(actionCreator('LOGOUT'))
            }
      }
  }



  export default connect(mapStateToProps, mapDispatchToProps)(More);





  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  