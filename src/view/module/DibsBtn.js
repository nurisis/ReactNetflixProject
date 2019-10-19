import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Component,
    Image,
    TouchableOpacity,
} from 'react-native';

import StringUtil from '../screen/etc/StringUtil';
import AppStyle from '../../style/AppStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 *   찜하기 버튼
 */
export default class DibsBtn extends React.Component {
  

    //  찜하기 이벤트 서버로 전송하기
    onDibs = async () => {

    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.videoLike()}>
                        <View style={[style.iconBtn, AppStyle.flexColumn, AppStyle.flexCC]}>
                                        {
                                            this.props.isDibs ?
                                                (
                                                    <Ionicons name="ios-add" size={50} color={AppStyle.white} ></Ionicons>
                                                ) : <Ionicons name="ios-checkmark" size={50} color={AppStyle.white} ></Ionicons>
                                        }
                        <Text style={style.iconBtnText}>
                                {StringUtil.DIBS_CONTENT}
                        </Text>
                        </View>
                </TouchableOpacity>
            </View>
    )}
}