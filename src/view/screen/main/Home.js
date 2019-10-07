
import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet,TouchableOpacity,Alert } from 'react-native';
import { Card } from 'react-native-elements'
import { randomUsers } from '../etc/Util';
import AppStyle  from '../../../style/AppStyle';

class Home extends React.Component {

    state = {
      data: randomUsers(20),  
    };

    videoDetailMove(){
      this.props.navigation.navigate('VideoDetail')
    }

    render() {
      return (
        <View style={AppStyle.flexCC}>
          <SafeAreaView style={styles.background}>
                <Text style={styles.header}>Netflix weekly top series</Text>
                <FlatList
                    data={this.state.data}
                    horizontal
                    renderItem={({ item }) =>
                    <TouchableOpacity onPress={()=>this.videoDetailMove()}>
                        <Card
                            image = {{uri : item.avatar}}
                            title = {item.name}
                            containerStyle = {{ width:160, height:260}}
                            style = {styles.card}>
                        </Card>
                    </TouchableOpacity>
                    }
                />
          </SafeAreaView>
        </View>
      );
    }
  }
  export default Home;

  const styles = StyleSheet.create({
    header: {
        fontFamily: 'Cochin',
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        padding: 16,
    },
    background : {
        backgroundColor : 'white',
        paddingBottom : 16
    },
    card : {
        marginBottom : 16
    }
})