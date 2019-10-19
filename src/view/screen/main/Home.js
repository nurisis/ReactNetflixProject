
import React from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
// import {VideoPlayer} from 'react-native-video-player'
import { randomUsers } from '../etc/Util';
import Video from 'react-native-af-video-player'

const url = 'http://dkadf2kfhfqn2.cloudfront.net/videos/hykwf678233_2019-10-04_13:29:23.mp4'

class Home extends React.Component {

  
    state = {
      dataA: randomUsers(20),  
      dataB: randomUsers(20),  
      dataC: randomUsers(20),  
      dataD: randomUsers(20),  
      // video: { width: 300, height: 200, duration:"200" },
      // thumbnailUrl: "http://dkadf2kfhfqn2.cloudfront.net/images/video_thumbnail/hykwf678233_2019-10-04_13:29:23.jpg",
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
      
      const url = 'http://dkadf2kfhfqn2.cloudfront.net/videos/hykwf678233_2019-10-04_13:29:23.mp4'
      const logo = 'http://dkadf2kfhfqn2.cloudfront.net/images/video_thumbnail/hykwf678233_2019-10-04_13:29:23.jpg'
      const placeholder = 'http://dkadf2kfhfqn2.cloudfront.net/images/video_thumbnail/hykwf678233_2019-10-04_13:29:23.jpg'
      const title = 'My video title'

      return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={styles.background}>
          <SafeAreaView style={styles.background}>
                <Text style={styles.header}>Netflix 인기 콘텐츠</Text>
                <FlatList
                    data={this.state.dataA}
                    horizontal
                    style={styles.flatlist}
                    renderItem={({ item }) =>
                      <TouchableOpacity onPress={()=>this.videoDetailMove()}>
                        <Card
                            image = {{uri : item.avatar}}
                            containerStyle = {{ width:110, flexGrow:0}}
                            style = {styles.card}>
                        </Card>
                      </TouchableOpacity>
                    }
                />
                <Text style={styles.header}>지금 뜨는 콘텐츠</Text>
                <FlatList
                    data={this.state.dataB}
                    horizontal
                    style={styles.flatlist}
                    renderItem={({ item }) =>
                        <Card
                            image = {{uri : item.avatar}}
                            containerStyle = {{ width:110, flexGrow:0}}
                            style = {styles.card}>
                        </Card>
                    }
                />

                <Text style={styles.header}>SY 님이 시청 중인 콘텐츠</Text>
                <FlatList
                    data={this.state.dataC}
                    horizontal
                    style={styles.flatlist}
                    renderItem={({ item }) =>
                        <Card
                            image = {{uri : item.avatar}}
                            containerStyle = {{ width:110, flexGrow:0}}
                            style = {styles.card}>
                        </Card>
                    }
                />

              <Text style={styles.header}>TV 프로그램/멀티캐스팅</Text>
                <FlatList
                    data={this.state.dataD}
                    horizontal
                    style={styles.flatlist}
                    renderItem={({ item }) =>
                        <Card
                            image = {{uri : item.avatar}}
                            containerStyle = {{ width:110, flexGrow:0}}
                            style = {styles.card}>
                        </Card>
                    }
                />

                <Text style={styles.header}>절찬 스트리밍 중</Text>
                {/* <View style={styles.container}>
                  <Video url={url} />
                </View> */}
                {/* <View style={styles.container}>
                <Video
                  autoPlay
                  url={url}
                  title={title}
                  logo={logo}
                  placeholder={placeholder}
                  onMorePress={() => this.onMorePress()}
                  onFullScreen={() => this.onFullScreen()}
                  onFullScreen={status => this.onFullScreen(status)}
                />
                </View> */}
                {/* <VideoPlayer
                    endWithThumbnail
                    thumbnail={{ uri: this.state.thumbnailUrl }}
                    video={{ uri: this.state.videoUrl }}
                    videoWidth={this.state.video.width}
                    videoHeight={this.state.video.height}
                    duration={this.state.video.duration}
                    ref={r => this.player = r}
                /> */}
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
    }
})