import React from 'react';
import { Image,FlatList, View, Text, StyleSheet ,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

const numColumns = 2;
class ProfileAdmin extends React.Component {


    constructor(props){
        super(props)
        this.onPressAction = this.onPressAction.bind(this);
    }

    onPressAction = (item) => {
            
            //프로필 추가이면
            if(item.key === 0){
                this.props.navigation.navigate('ProfileAdd');
                return
            }

            this.props.navigation.navigate('ProfileAdd',{editProfile: item});

    }
    
    renderItem = ({item}) => {
        
        if(item.key < 0){
            
            return <View style={[styles.itemInvisible,styles.itemContainer]}/>;
        }

        return (
            <View  style={styles.itemContainer}>
            <TouchableOpacity 
            style={styles.item}
                onPress={() => this.onPressAction(item)}
            >
                
                   


                <Text style={[styles.profileName]}>{item.title}</Text>

                <Image source={item.source} style={styles.uploadAvatar} />
            </TouchableOpacity>

            
            </View>
        );
    };




    render() {

        const profiles = this.props.userState.profiles.length > 4 ? this.props.userState.profiles : [...this.props.userState.profiles,{key:0,title:'프로필 추가'}];
        
        return (
        <View style={styles.MainContainer}>

        
                <FlatList
                style={styles.profiles}
                data={formatData(profiles,numColumns)}
                renderItem={this.renderItem}
                //Setting the number of column
                numColumns={numColumns}
                keyExtractor={(item, index) => index.toString()}
                
            
                
                />
           
        </View>
        );
  }
}

const formatData = (data , numColumns) => {
    //최대 다섯개 까지만 생성 허용

    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0){
        data.push({key: -numberOfElementsLastRow});
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }

    return data;
};

const mapStateToProps = (state, ownProps) => {
    return {
      userState:state.userState
    }
  }


export default withNavigation(connect(mapStateToProps, null)(ProfileAdmin));










const styles = StyleSheet.create({
    MainContainer: {
        // justifyContent: 'center',
        backgroundColor:'#2B2D2F',
        flex: 1,
     
        
        // padding: 30,
    },
    profiles:{
        flex:1,
        padding:40,
      

    },
    profileName:{
        top:'102%',
        color:'white',
        position:'absolute'
      
    },
    itemContainer:{
        flex: 1, flexDirection: 'column', margin: 1, 
      
    },
    item: {
        flex:1,
        alignItems:'center',
        margin:20,
        alignContent:'center',
       
        height: 125,
        width:125,
        backgroundColor: '#f9c136',
    },
    itemInvisible:{
        flex:1,
        backgroundColor:'transparent',
    },
    uploadAvatar:{
        
        flex:1,
        width:'100%',
        height:'100%',
    
       }
});