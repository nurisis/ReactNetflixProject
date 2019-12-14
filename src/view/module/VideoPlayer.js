import React from 'react';
import { Text, StyleSheet, SafeAreaView,TouchableWithoutFeedback, View, ProgressBarAndroid } from 'react-native';
import Video from 'react-native-video';

export default class VideoPlayer extends React.Component {

    static defaultProps = {
        videoUrl : "https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4",
        videoHeight : 300,
        resizeMode : 'cover'
    }

    constructor(props) {
        super(props);
    
        // init state variables
        this.state = {
          rate: 1,
          volume: 1,
          muted: true,
          resizeMode: this.props.resizeMode,
          duration: 0.0,
          currentTime: 0.0,
          paused: false,
          pickerValueHolder: '1.0',
          pausedText: 'PAUSE',
          hideControls: false
        };
    
        this.video = Video;
    }

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
    this.setState({ paused: true, pausedText: 'PLAY'})
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
            <SafeAreaView>
            <TouchableWithoutFeedback
            style={this.styles.fullScreen}
            onPress = {() => this.setState({paused: !this.state.paused})}
            // onPress={() => this.onPressVideo()}
            >
                <Video
                ref={(ref:Video) => { this.video = ref }}
                /* For ExoPlayer */
                source={{ uri: this.props.videoUrl }} 
                style={this.styles.fullScreen}
                rate={this.state.rate}
                paused={this.state.paused}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}
                onLoad={this.onLoad}
                onProgress={this.onProgress}
                onEnd={this.onEnd}
                onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                onAudioFocusChanged={this.onAudioFocusChanged}
                repeat={true}
                />
            </TouchableWithoutFeedback>

            {
                  !this.state.hideControls ?
                  (
                    <View style={this.styles.controls}>
                      <View style={this.styles.generalControls}>
                        {/* <View style={styles.rateControl}>
                          <Picker
                            style={{width: 110}}
                            selectedValue={this.state.pickerValueHolder}
                            onValueChange={(itemValue, itemIndex) => this.onChangeRate(itemValue, itemIndex)} >
                            <Picker.Item label="x1.5" value="1.5"/>
                            <Picker.Item label="x1.25" value="1.25"/>
                            <Picker.Item label="x1.0" value="1.0"/>
                            <Picker.Item label="x0.75" value="0.75"/>
                            <Picker.Item label="x0.5" value="0.5"/>
                          </Picker>
                        </View> */}
                        <View style={this.styles.playControl}>
                          <Text style={this.styles.playBtnText} onPress={() => this.onPressBtnPlay()}>{this.state.pausedText}</Text>
                        </View>
                        {/* <View style={styles.resizeModeControl}>
                          <Picker
                            style={{width: 150}}
                            selectedValue={this.state.resizeMode}
                            onValueChange={(itemValue, itemIndex) => this.setState({resizeMode: itemValue})} >
                            <Picker.Item label="none" value="none"/>
                            <Picker.Item label="cover" value="cover"/>
                            <Picker.Item label="stretch" value="stretch"/>
                            <Picker.Item label="contain" value="contain"/>
                          </Picker>
                        </View> */}
                      </View>

                      <View style={this.styles.trackingControls}>
                        <ProgressBarAndroid
                          style={this.styles.progress}
                          styleAttr="Horizontal"
                          indeterminate={false}
                          onProgress = {true}
                          progress={this.getCurrentTimePercentage()}
                        />
                        <Text style={this.styles.playerText}>{this.parseSecToTime(parseInt(this.state.currentTime))}/{this.parseSecToTime(parseInt(this.state.duration))}</Text>
                        {/* <Text style={styles.playerText} onPress = {() => this.changeScreenMode()}>Full Screen</Text> */}
                      </View>
                    </View>
                  ) : (null)
                }
            
            </SafeAreaView>

        )
    }

    styles = StyleSheet.create({

        fullScreen: {
            flexGrow : 0,
            backgroundColor: 'black',
            height : this.props.videoHeight,
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

}
