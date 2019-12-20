import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import Video from 'react-native-video';
import HorizonScrollView from '../../module/HorizonScrollView';
import VideoPlayer from '../../module/VideoPlayer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getNowMoviesAsync()
    this.getPopularMoviesAsync()
    this.getTopRatedMoviesAsync()
    this.getUpcomingMoviesAsync()

    // init state variables
    this.state = {
      // dataA: randomUsers(20),  
      // dataB: randomUsers(20),  
      // dataC: randomUsers(20),  
      // dataD: randomUsers(20),  
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'cover',
      duration: 0.0,
      currentTime: 0.0,
      paused: true,
      pickerValueHolder: '1.0',
      pausedText: 'Play',
      hideControls: false,
    };

    this.video = Video;
  }

  getPopularMoviesAsync() {
    let random = Math.floor(Math.random() * 500) + 1 ;

    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=bc1ebe6e0dd688063e0bbf7d331610dc&language=en-US&page=' + random)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({dataA: responseJson.results})
    })       
  }

  getNowMoviesAsync() {
    let random = Math.floor(Math.random() * 30) + 1 ;

    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=bc1ebe6e0dd688063e0bbf7d331610dc&language=en-US&page=' + random)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({dataB: responseJson.results})
    })       
  }

  getUpcomingMoviesAsync() {
    let random = Math.floor(Math.random() * 500) + 1 ;

    return fetch('https://api.themoviedb.org/3/discover/tv?api_key=bc1ebe6e0dd688063e0bbf7d331610dc&language=en-US&sort_by=popularity.desc&page='+random+'&timezone=America%2FNew_York&include_null_first_air_dates=false')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({dataC: responseJson.results})
    })       
  }

  getTopRatedMoviesAsync() {
let random = Math.floor(Math.random() * 100) + 1 ;

    return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=bc1ebe6e0dd688063e0bbf7d331610dc&language=en-US&page=' + random)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({dataD: responseJson.results})
    })       
  }

  videoDetailMove(movieId){
    this.props.navigation.navigate('VideoDetail',{
      "movieId": movieId
    });
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
        <ScrollView style={styles.background}>
          <SafeAreaView style={styles.background}>
                <Text style={styles.header}>절찬 스트리밍 중</Text>
                <VideoPlayer
                  videoUrl = {"https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4"}
                  videoHeight = {300}/>

                <HorizonScrollView
                  title = {"Netflix 인기 콘텐츠"}
                  data = {this.state.dataA}
                  videoDetailMove={this.videoDetailMove.bind(this)}
                />
                <HorizonScrollView
                  title = {"현재 상영작"}
                  data = {this.state.dataB}
                  videoDetailMove={this.videoDetailMove.bind(this)}
                />
                <HorizonScrollView
                  title = {"인기 Tv 시리즈 "}
                  data = {this.state.dataC}
                  videoDetailMove={this.videoDetailMove.bind(this)}
                />
                <HorizonScrollView
                  title = {"TOP 인기순위"}
                  data = {this.state.dataD}
                  videoDetailMove={this.videoDetailMove.bind(this)}
                />
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
    container: {
      flex: 1,
      justifyContent: 'center'
    }
})