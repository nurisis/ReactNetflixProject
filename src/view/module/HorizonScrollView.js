import React,{Component} from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'

export default class HorizonScrollView extends Component {

    static defaultProps = {
        title: 'untitled',
        data : null,
        onPress: () => null,
      }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <SafeAreaView style={styles.background}>
                <Text style={styles.header}>{this.props.title}</Text>
                <FlatList
                    data={this.props.data}
                    horizontal
                    style={styles.flatlist}
                    renderItem={({ item }) =>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Card
                            image = {{uri : item.avatar}}
                            containerStyle = {{ width:110, flexGrow:0}}
                            style = {styles.card}>
                        </Card>
                    </TouchableOpacity>
                    }
                />
            </SafeAreaView> 
        )
      }

}


const styles = StyleSheet.create({
    header: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
        paddingTop: 16,
        paddingLeft: 16
    },
    background : {
        // backgroundColor : '#3C3D3D',
        paddingBottom : 16,
        flex : 1
    },
    card : {
        // color : 'black'
    },
    flatlist : {
      flexGrow : 0,
      marginBottom : 20
    },
})