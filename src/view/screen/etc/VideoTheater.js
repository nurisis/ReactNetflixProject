import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Component,
    FlatList,
    Image,
    ImageBackground,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    PixelRatio,
    Button,
    Share,
    Dimensions
} from 'react-native';
// import ShareBtn from '../../module/ShareBtn';
// import DibsBtn from '../../module/DibsBtn';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AppStyle from '../../../style/AppStyle';
// import StringUtil from './StringUtil';
// import dummy from '../../../dummy/dummy';
import VideoPlayer from '../../module/VideoPlayer';
import {  } from "react-native";

class VideoTheater extends React.Component {

    render() {
        const Width = Dimensions.get('window').width
        const Height = Dimensions.get('window').height
        return (
            <View style={ {flex: 1,backgroundColor : "red"}}>
                  <VideoPlayer
                  videoUrl = {"https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4"} videoHeight = {Height}/>
            </View>
        )
    }
}

export default VideoTheater;