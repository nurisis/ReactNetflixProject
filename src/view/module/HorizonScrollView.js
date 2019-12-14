import React,{Component} from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
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

    videoDetailMove(id){
        this.props.navigation.navigate('VideoDetail', {movie_id:id})
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
                            // image = {{uri : item.thumbNail}}
                            image = {{uri : "https://image.tmdb.org/t/p/w500"+item.poster_path}}
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
        flex : 1
    },
    card : {
        color : 'pink'
    },
    flatlist : {
      flexGrow : 0,
      marginBottom : 20
    },
})