
import React from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements'
import { randomUsers } from '../etc/Util';
import Video from 'react-native-af-video-player'
import AppStyle  from '../../../style/AppStyle';
import HorizonScrollView from '../../module/HorizonScrollView';

class Home extends React.Component {

    state = {
      dataA: randomUsers(20),  
      dataB: randomUsers(20),  
      dataC: randomUsers(20),  
      dataD: randomUsers(20),  
      videoUrl: "http://dkadf2kfhfqn2.cloudfront.net/videos/hykwf678233_2019-10-04_13:29:23.mp4",
    };

    videoDetailMove(){
      this.props.navigation.navigate('VideoDetail')
    }

    onMorePress() {
      Alert.alert(
        'Boom',
        'This is an action call!',
        [{ text: 'Aw yeah!' }]
      )}
      onFullScreen() {
      Alert.alert(
        'Boom',
        'This is an action call!',
        [{ text: 'Aw yeah!' }]
      )}

    render() {
      return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={styles.background}>
          <SafeAreaView style={styles.background}>
            <HorizonScrollView
              title = {"Netflix 인기 콘텐츠"}
              data = {this.state.dataA}
              onPress = {()=>this.videoDetailMove()}
            />
            <HorizonScrollView
              title = {"지금 뜨는 콘텐츠"}
              data = {this.state.dataB}
              onPress = {()=>this.videoDetailMove()}
            />
            <HorizonScrollView
              title = {"SY 님이 시청 중인 콘텐츠"}
              data = {this.state.dataC}
              onPress = {()=>this.videoDetailMove()}
            />
            <HorizonScrollView
              title = {"TV 프로그램/멀티캐스팅"}
              data = {this.state.dataD}
              onPress = {()=>this.videoDetailMove()}
            />
            <Text style={styles.header}>절찬 스트리밍 중</Text>

            <View>
              {/* <Video videoUri={this.state.videoUrl}/> */}
            </View>

          </SafeAreaView>
        
        </ScrollView>
      );
    }
  }
  export default Home;

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
        backgroundColor : '#3C3D3D',
        paddingBottom : 16,
        flex : 1
    },
    card : {
        color : 'black'
    },
    flatlist : {
      flexGrow : 0,
      marginBottom : 20
    },
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
})