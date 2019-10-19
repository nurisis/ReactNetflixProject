import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Component,
    Image,
    TouchableOpacity,
    Share
} from 'react-native';

import StringUtil from '../screen/etc/StringUtil';
import AppStyle from '../../style/AppStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * 휴대폰에 설치된 다른 어플에 컨텐츠 공유하기 버튼
 */
export default class ShareBtn extends React.Component {
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

      render() {
          return (
          <View>
                <TouchableOpacity onPress={() => this.onShare()}>
                <View style={[style.iconBtn, { marginLeft: 20 }]}>
                 <Ionicons name="ios-share" size={50} color={AppStyle.white} />
                  <Text style={style.iconBtnText}>{StringUtil.SHARE}</Text>
        </View>
    </TouchableOpacity>
</View>
)}
}

const style = StyleSheet.create({
    //  좋아요 버튼 영역 
    iconBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        width: 110,
        height: 80,
        backgroundColor: "white"
    },
    iconBtnText: {
        color: "white",
        marginTop: 3
    },
});