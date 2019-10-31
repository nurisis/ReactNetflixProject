import React from 'react';
import { FlatList, View, Text, StyleSheet ,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {AsyncStorage} from 'react-native';
import { connect } from 'react-redux';


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
    
    render() {
        return (
        <View style={styles.MainContainer}>
            <FlatList
            data={[...this.props.userState.profiles,{key:0,title:'프로필 추가 +'}]}
            renderItem={({ item }) => (

                <TouchableOpacity 
                    style={{
                        flex: 1, flexDirection: 'column', margin: 1 
                    }}
                      onPress={() => this.onPressAction(item)}
                    >
                    <Text style={styles.item}>{item.title}</Text>
                </TouchableOpacity>
                
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            
          
            
            />
        </View>
        );
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
      userState:state.userState
    }
  }


export default withNavigation(connect(mapStateToProps, null)(ProfileAdmin));


const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#f9c2ff',
    },
});