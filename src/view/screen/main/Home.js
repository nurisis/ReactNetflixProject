
import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
import { randomUsers } from '../etc/Util';

class Home extends React.Component {

    state = {
      data: randomUsers(20),  
    };

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SafeAreaView style={styles.background}>
                <Text style={styles.header}>Netflix weekly top series</Text>
                <FlatList
                    data={this.state.data}
                    horizontal
                    renderItem={({ item }) =>
                        <Card
                            image = {{uri : item.avatar}}
                            title = {item.name}
                            containerStyle = {{ width:160, height:260}}
                            style = {styles.card}>
                        </Card>
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