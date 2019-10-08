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
    PixelRatio
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyle from '../../../style/AppStyle';
import StringUtil from './StringUtil';


import { Provider } from 'react-redux'
import initStore from '../../../view/screen/etc/test/store';


class VideoDetail extends React.Component {

    state = {
        backgroundImg: require("../../../dummy/img/share.png"),
        title: "아는형님2",
        year: 2019,
        seasonCount: 4,
        allowAge: "15+",
        resolution: "HD",
        sameRate: 98,
        subTitle: "매주 일요일 새로운 에피소드 공개",
        subTitle2: "\"워너원 편\"",
        summary: "교실에 훈훈한 지수가 치솟는다. 순회공연을 마치고 완전체로 돌아온다 워너원. 열한 명의 전학생들이 예능 종합선물세트를 선보인다. 현님들과의 현란한 댄스 대결은 덤!",

        isLike: false,
        isEsteem: 1,
        esteem: 1,
        downloadVisible: false,


        list: {
            type: "series",
            seasonList: [
                {
                    season: 2,
                    viodeos: [
                        {
                            id: 1,
                            order: 1,
                            uploadDate: "20190806",
                            playTime: 88,
                            title: "게르마늄 팔찌를 찬 여자1",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        },
                        {
                            id: 3,
                            order: 3,
                            uploadDate: "20190811",
                            playTime: 11,
                            title: "게르마늄 팔찌를 찬 여자3",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        },
                        {
                            id: 2,
                            order: 2,
                            uploadDate: "20190809",
                            playTime: 88,
                            title: "게르마늄 팔찌를 찬 여자2",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        }
                    ]
                },
                {
                    season: 1,
                    viodeos: [
                        {
                            id: 1,
                            order: 1,
                            uploadDate: "20190806",
                            playTime: 22,
                            title: "게르마늄 팔찌를 찬 여자1",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        },
                        {
                            id: 4,
                            order: 4,
                            uploadDate: "20190806",
                            playTime: 22,
                            title: "게르마늄 팔찌를 찬 여자4",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        },
                        {
                            id: 6,
                            order: 6,
                            uploadDate: "20190806",
                            playTime: 99,
                            title: "게르마늄 팔찌를 찬 여자6",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        },
                        {
                            id: 5,
                            order: 5,
                            uploadDate: "20190806",
                            playTime: 181,
                            title: "게르마늄 팔찌를 찬 여자5",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        },
                        {
                            id: 3,
                            order: 3,
                            uploadDate: "20190811",
                            playTime: 88,
                            title: "게르마늄 팔찌를 찬 여자3",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        },
                        {
                            id: 2,
                            order: 2,
                            uploadDate: "20190809",
                            playTime: 88,
                            title: "게르마늄 팔찌를 찬 여자2",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require("../../../dummy/img/share.png")
                        }
                    ]
                }
            ]
        },

        // subTab api 따로
        subTab: ["회차정보", "비슷한 컨텐츠"],

        visibleList: "series",
        similarVideList: [
            {
                similarRanking: 3,
                id: 3,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 4,
                id: 4,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 6,
                id: 6,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 1,
                id: 1,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 2,
                id: 2,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 5,
                id: 5,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 6,
                id: 5,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 7,
                id: 5,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 8,
                id: 5,
                thumbnail: require("../../../dummy/img/share.png")
            },
            {
                similarRanking: 9,
                id: 5,
                thumbnail: require("../../../dummy/img/share.png")
            }
        ],

        visibleModal: false,
    };

    isVideoList = (visibleList) => {
        let visibleName;
        switch (visibleList) {
            case "series":
                visibleName = "series";
                break;

            case "similar":
                visibleName = "similar";
                break;
        }

        this.setState({
            visibleList: visibleName
        });
    };

    videoLike = () => {
        this.setState({
            isLike: !(this.state.isLike)
        });
    };

    visibleModal = () => {
        this.setState({
            visibleModal: !(this.state.visibleModal)
        });
    }

    render() {

        //  오름차순
        function sortAscending(list, keyword) {
            return list.sort(function (a, b) {
                return a[keyword] - b[keyword];
            });
        };

        //    내림차순
        function sortDescending(list, keyword) {
            return list.sort(function (a, b) {
                return b[keyword] - a[keyword];
            });
        };

        //   분 -> 2시간 10분
        function minConvertPlayTime(min) {
            let resultHour = parseInt((min / 60));
            let resultMin = min % 60;

            if (resultHour > 0) {
                return resultHour + StringUtil.TIME + " " + resultMin + StringUtil.MINUTE;
            }
            return resultMin + StringUtil.MINUTE;
        }

        //   비디오 목록 정렬
        sortAscending(this.state.list.seasonList, "season");
        this.state.list.seasonList.forEach(function (season) {
            sortAscending(season.viodeos, "order");
        });
        let videoList = this.state.list.seasonList[0];

        // 비슷한 비디오 목록 정렬
        sortAscending(this.state.similarVideList, "similarRanking");

        return (
            <View style={AppStyle.flexCC}>
                <ScrollView>
                    <View style={[AppStyle.absolute, { height: 300, width: '100%' }]}>
                        <ImageBackground source={this.state.backgroundImg} style={{ height: 300 }}>
                            <View style={[AppStyle.flexCC]}>
                                <Ionicons name="ios-play-circle" size={100} color={AppStyle.white} >
                                </Ionicons>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={[style.container, AppStyle.basePadding, { marginTop: 350 }]}>
                        <View style={[style.descriptonContainer]}>
                            <Text style={style.title}>
                                {this.state.title}
                            </Text>
                            <View style={AppStyle.flexRow}>
                                <Text style={AppStyle.green}>{this.state.sameRate}% 일치</Text>
                                <View style={[AppStyle.flexRow, { marginLeft: 10 }]}>

                                    <View>
                                        <Text style={style.videoInfo}>
                                            {this.state.year}
                                        </Text>
                                    </View>

                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={style.videoInfo}>
                                            {this.state.allowAge}
                                        </Text>
                                    </View>

                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={style.videoInfo}>
                                            시즌{this.state.seasonCount} 개
                                    </Text>
                                    </View>

                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={[style.videoInfo, AppStyle.fb]}>
                                            {this.state.resolution}
                                        </Text>
                                    </View>

                                </View>
                            </View>

                            <View style={[{ marginTop: 10, marginBottom: 10 }]}>
                                <Text style={style.subTitle}>
                                    {this.state.subTitle}
                                </Text>
                                <Text style={[style.subTitle2, { marginTop: 5 }]}>
                                    {this.state.subTitle2}
                                </Text>
                                <Text style={[style.summary, { marginTop: 5 }]}>
                                    {this.state.summary}
                                </Text>
                            </View>

                            {/* 공유하기 버튼  */}
                            <View style={AppStyle.flexRow}>

                                <TouchableOpacity onPress={() => this.videoLike()}>
                                    <View style={[style.iconBtn, AppStyle.flexColumn, AppStyle.flexCC]}>
                                        {
                                            this.state.isLike ?
                                                (
                                                    <Ionicons name="ios-add" size={50} color={AppStyle.white} ></Ionicons>
                                                ) : <Ionicons name="ios-checkmark" size={50} color={AppStyle.white} ></Ionicons>
                                        }
                                        <Text style={style.iconBtnText}>내가 찜한 콘텐츠</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.visibleModal()}>
                                    <View style={[style.iconBtn, { marginLeft: 20 }]} >
                                        <Ionicons name="ios-thumbs-up" size={50} color={AppStyle.white} ></Ionicons>
                                        <Text style={style.iconBtnText}>평가</Text>
                                    </View>
                                </TouchableOpacity>

                                {/*  좋아요 평가 모달창 */}
                                <Modal
                                    animationType="fade"
                                    transparent={true}
                                    overlayBackground={'rgba(0, 0, 0, 0.4)'}
                                    visible={this.state.visibleModal}
                                    onRequestClose={() => {
                                    }}
                                    onShow = {() =>{
                                    }}>
                                        <View style={{
                                            width : "100%", 
                                            height : "100%",
                                            backgroundColor : 'rgba(255, 255, 255, 0.4)' }}>

                                                <View style={{position: 'absolute',
                                                 left : "50%", top : "50%", 
                                                 marginLeft : -100, marginTop : -100,
                                                  width : 200, height : 200}}>

                                                    <View style={[AppStyle.flexCC]}>
                                                        <View style={[AppStyle.flexRow,AppStyle.flexCSb,{width : '100%'}]}>
                                                             <Ionicons name="ios-thumbs-up" size={100} />
                                                             <Ionicons name="ios-thumbs-down" size={100} />
                                                        </View>

                                                        <TouchableOpacity onPress = {() => {
                                                                  this.setState({
                                                                    visibleModal : false
                                                                })
                                                            }}>    
                                                      
                                                            <Ionicons name="ios-close-circle" size={65} />
                                                       
                                                       </TouchableOpacity>
                                                    </View>
                                                </View>
                                        </View>
                                </Modal>

                                <View style={[style.iconBtn, { marginLeft: 20 }]}>
                                    <Ionicons name="ios-share" size={50} color={AppStyle.white} />
                                    <Text style={style.iconBtnText}>공유</Text>
                                </View>

                            </View>

                            <View style={[AppStyle.flexRow, { marginTop: 30 }]}>
                                <TouchableOpacity onPress={() => this.isVideoList("series")}>
                                    <View>
                                        {
                                            <Text
                                                style={[
                                                    AppStyle.flexCC, AppStyle.white, AppStyle.textC,
                                                    {
                                                        width: 100
                                                    },
                                                    this.state.visibleList == "series" ?
                                                        {
                                                            borderTopColor: "red",
                                                            borderTopWidth: 1,
                                                        } : ''
                                                ]}>
                                                회차정보
                                            </Text>
                                        }
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.isVideoList("similar")}>
                                    <View>
                                        {
                                            <Text style={[
                                                AppStyle.flexCC, AppStyle.white, AppStyle.textC,
                                                {
                                                    width: 100,
                                                },
                                                this.state.visibleList == "similar" ?
                                                    {
                                                        borderTopColor: "red",
                                                        borderTopWidth: 1,

                                                    } : ''
                                            ]}>
                                                비슷한 콘텐츠
                                            </Text>
                                        }
                                    </View>
                                </TouchableOpacity>

                            </View>

                            {/* 비디오 리스트 컨테이너*/}
                            {
                                this.state.visibleList == "series" ? (
                                    <View>
                                        <View style={style.recommendMovieContainer}>
                                            <FlatList
                                                scrollEnabled={false}
                                                data={videoList.viodeos}
                                                renderItem={({ item }) => (
                                                    <View style={[AppStyle.flexColumn, AppStyle.basePadding, { paddingTop: 20 }]}>
                                                        <View style={AppStyle.flexRow}>
                                                            <View style={[AppStyle.bgGray, style.iconBtn, { marginLeft: 20 }]}>
                                                                <Image
                                                                    style={[{ height: 100, width: 100 }]}
                                                                    source={item.thumbnail}>
                                                                </Image>
                                                            </View>

                                                            <View style={[AppStyle.flexColumn, { marginLeft: 20 }]}>
                                                                <Text style={AppStyle.white}>
                                                                    {item.order}. {item.title}
                                                                </Text>
                                                                <Text style={AppStyle.gray}>
                                                                    {minConvertPlayTime(item.playTime)}
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={[AppStyle.gray, { marginTop: 20 }]}>
                                                            <Text style={[AppStyle.basePadding, AppStyle.gray, { marginTop: 3 }]}>
                                                                {item.summary}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                )} />
                                        </View>
                                    </View>
                                ) : null
                            }


                            {/* 비슷한 콘텐츠 */}
                            {
                                this.state.visibleList == "similar" ? (
                                    <View style={style.recommendMovieContainer}>
                                        <FlatList
                                            scrollEnabled={false}
                                            numColumns={3}
                                            data={this.state.similarVideList}
                                            renderItem={({ item }) => (
                                                <View style={[AppStyle.flexCFs, { width: 110, height: 160 }]}>
                                                    <Image style={{
                                                        height: 150,
                                                        width: 100,
                                                        resizeMode: 'contain'
                                                    }} source={item.thumbnail}>
                                                    </Image>
                                                </View>
                                            )} />
                                    </View>
                                ) : null
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        opacity: 0.9
    },

    videoContainer: {
        flex: 1,
        backgroundColor: "green"
    },

    descriptonContainer: {
        flex: 1,
        marginTop: 10
    },

    videoDescriptonContainer: {
        flex: 1,
        backgroundColor: "blue"
    },

    videoInfo: {
        color: 'gray',
        opacity: .84,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
    },
    subTitle2: {
        color: "white",
        fontSize: 13,
        fontWeight: 'bold',
    },
    summary: {
        color: "white",
        fontSize: 13,
    },


    //  좋아요 버튼 영역 
    iconBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        width: 110,
        height: 80,
        backgroundColor: "white"
    },
    iconBtnImg: {
        width: 40,
        height: 40,
        backgroundColor: "white"
    },
    iconBtnText: {
        color: "white",
        marginTop: 3
    },

    // top의 이미지 영역
    homeBackgroundContainer: {
        position: 'absolute',
        width: '100%',
    },
    homeBackgroundImg: {
        position: 'absolute',
        width: '100%',

    },

    // 리스트
    recommendMovieContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
});

export default VideoDetail;