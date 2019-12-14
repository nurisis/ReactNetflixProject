
import React from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet, ScrollView, TouchableOpacity,TouchableWithoutFeedback, View, Picker,
ProgressBarAndroid } from 'react-native';
import { Card } from 'react-native-elements'
import { randomUsers } from '../etc/Util';
import Video from 'react-native-video';
import HorizonScrollView from '../../module/HorizonScrollView';
import VideoPlayer from '../../module/VideoPlayer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // init state variables
    this.state = {
      dataA: randomUsers(20),  
      dataB: randomUsers(20),  
      dataC: randomUsers(20),  
      dataD: randomUsers(20),  
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

  // load video event
  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

    // video is playing
  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  // video ends
  onEnd = () => {
    this.setState({ paused: true, pausedText: 'Play'})
    this.video.seek(0);
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };
  
  onChangeRate(itemValue, itemIndex) {
    var rate = parseFloat(itemValue);
    this.setState({pickerValueHolder: itemValue, rate: rate});
  }

  // pressing on 'play' button
  onPressBtnPlay() {
    var pausedText = '';
    if(!this.state.paused){
      pausedText = 'PLAY';

      // always show controls
      if(this.timeoutHandle)
        clearTimeout(this.timeoutHandle);
    }
    else {
      pausedText = 'PAUSE';

      // hide controls after 5s
      this.timeoutHandle = setTimeout(()=>{
        this.setState({hideControls: false});
      }, 5000);
    }
    this.setState({ paused: !this.state.paused, pausedText: pausedText });
  }

  // on press video event
  onPressVideo() {
    // showing controls if they don't show
    if(this.state.hideControls){
      this.setState({hideControls: false});
      this.timeoutHandle = setTimeout(()=>{
        this.setState({hideControls: true});
      }, 8000);
    }
  }

  // parse seconds to time (hour:minute:second)
  parseSecToTime(sec) {
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}

    return hours + ':' + minutes + ':' + seconds;
  }

  changeScreenMode() {
    if(this.state.resizeMode == 'contain') 
      this.setState({resizeMode : 'cover'})
    else 
      this.setState({resizeMode : 'contain'})
  }

    render() {
      return (
        <ScrollView style={styles.background}>
          <SafeAreaView style={styles.background}>

                <Text style={styles.header}>절찬 스트리밍 중</Text>
                <VideoPlayer
                  videoUrl = {"https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4"}
                  videoHeight = {250}/>

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
    fullScreen: {
      flexGrow : 0,
      backgroundColor: 'black',
      height : 250,
      marginTop : 8
    },
    controls: {
      flexGrow : 0,
      backgroundColor: 'black',
      opacity: 0.5,
      // borderRadius: 5,
      marginBottom : 16,
      padding: 16
    },
    playerText : {
      color: 'white',
      fontSize: 12,
    },
    playBtnText : {
      color: 'white',
      fontSize: 16,
      fontWeight : '900',
      marginBottom : 8
    }
})