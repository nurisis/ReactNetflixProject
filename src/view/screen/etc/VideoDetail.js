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
    Share
} from 'react-native';
import ShareBtn from '../../module/ShareBtn';
import DibsBtn from '../../module/DibsBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyle from '../../../style/AppStyle';
import StringUtil from './StringUtil';
import dummy from '../../../dummy/dummy';



randomNumber = 1;

class VideoDetail extends React.Component {

    state = {
        backgroundImg: dummy.videos[randomNumber].thumbNail,
        title: dummy.videos[randomNumber].name,
        year: dummy.videos[randomNumber].comeoutDate,
        seasonCount: dummy.videos[randomNumber].totalSeason,
        allowAge: dummy.videos[randomNumber].allowAge,
        resolution: dummy.videos[randomNumber].videoQuality,
        sameRate: 98,
        subTitle: dummy.videos[randomNumber].advertiseTitle,
        subTitle2: dummy.videos[randomNumber].summaryTitle,
        summary: dummy.videos[randomNumber].summary,

        isLike: dummy.videos[randomNumber].myState.evaluate,
        isDibs: dummy.videos[randomNumber].myState.isDibs,

        isEsteem: 1,
        esteem: 1,
        downloadVisible: false,

        // 시즌 별 리스트 데이터
        seasonInfo : this.state.seasonInfo,

        // list: {
        //     type: "series",
        //     seasonList: [
        //         {
        //             season: 2,
        //             viodeos: [
        //                 {
        //                     id: 1,
        //                     order: 1,
        //                     uploadDate: "20190806",
        //                     playTime: 88,
        //                     title: "게르마늄 팔찌를 찬 여자1",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: require("../../../dummy/img/share.png")
        //                 },
        //                 {
        //                     id: 3,
        //                     order: 3,
        //                     uploadDate: "20190811",
        //                     playTime: 11,
        //                     title: "게르마늄 팔찌를 찬 여자3",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: require("../../../dummy/img/share.png")
        //                 },
        //                 {
        //                     id: 2,
        //                     order: 2,
        //                     uploadDate: "20190809",
        //                     playTime: 88,
        //                     title: "게르마늄 팔찌를 찬 여자2",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: require("../../../dummy/img/share.png")
        //                 }
        //             ]
        //         },
        //         {
        //             season: 1,
        //             viodeos: [
        //                 {
        //                     id: 1,
        //                     order: 1,
        //                     uploadDate: "20190806",
        //                     playTime: 22,
        //                     title: "게르마늄 팔찌를 찬 여자1",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: dummy.videos[0].thumNail,
        //                 },
        //                 {
        //                     id: 4,
        //                     order: 4,
        //                     uploadDate: "20190806",
        //                     playTime: 22,
        //                     title: "게르마늄 팔찌를 찬 여자4",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: require("../../../dummy/img/share.png")
        //                 },
        //                 {
        //                     id: 6,
        //                     order: 6,
        //                     uploadDate: "20190806",
        //                     playTime: 99,
        //                     title: "게르마늄 팔찌를 찬 여자6",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: require("../../../dummy/img/share.png")
        //                 },
        //                 {
        //                     id: 5,
        //                     order: 5,
        //                     uploadDate: "20190806",
        //                     playTime: 181,
        //                     title: "게르마늄 팔찌를 찬 여자5",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: require("../../../dummy/img/share.png")
        //                 },
        //                 {
        //                     id: 3,
        //                     order: 3,
        //                     uploadDate: "20190811",
        //                     playTime: 88,
        //                     title: "게르마늄 팔찌를 찬 여자3",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: require("../../../dummy/img/share.png")
        //                 },
        //                 {
        //                     id: 2,
        //                     order: 2,
        //                     uploadDate: "20190809",
        //                     playTime: 88,
        //                     title: "게르마늄 팔찌를 찬 여자2",
        //                     summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
        //                     thumbnail: require("../../../dummy/img/share.png")
        //                 }
        //             ]
        //         }
        //     ]
        // },

        // subTab api 따로
        subTab: ["회차정보", "비슷한 컨텐츠"],

        visibleList: "similar",
        similarVideList: dummy.SimilarVideos,
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

        if(this.state.seasonInfo != null){
            sortAscending(this.state.seasonInfo, "part");
            this.state.seasonInfo.playList.forEach(function (season) {
                sortAscending(season, "sequence");
            });
        }
    
        // // let videoList = this.state.seasonInfo;
        // let seasonVideoList = this.state.seasonInfo;

        return (
            <View style={AppStyle.flexCC}>
                <ScrollView>
                    <View style={[AppStyle.absolute, { height: 350, width: '100%' }]}>
                        <Image source={{ uri: this.state.backgroundImg }} style={{ resizeMode: 'contain', width: '100%', height: 350 }}></Image>
                        <View style={[AppStyle.absolute, { top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }]}>
                            <Ionicons name="ios-play-circle" size={100} color={AppStyle.white} >
                            </Ionicons>
                        </View>
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

                                    {
                                        this.state.seasonCount != null ? (
                                            <View style={{ paddingLeft: 5 }}>
                                                <Text style={style.videoInfo}>
                                                    시즌{this.state.seasonCount} 개</Text>
                                            </View>
                                        ) : null
                                    }

                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={[style.videoInfo, AppStyle.fb]}>
                                            {this.state.resolution}
                                        </Text>
                                    </View>

                                </View>
                            </View>

                                    {/* 영화 줄거리 및 서브 타이틀 텍스트 표시 */}
                            <View style={[{ marginTop: 10, marginBottom: 10 }]}>
                                {this.state.subTitle != null ? (
                                    <Text style={style.subTitle}>
                                        {this.state.subTitle}
                                    </Text>
                                ) : null}
                                {this.state.subTitle2 != null ? (
                                    <Text style={[style.subTitle2, { marginTop: 5 }]}>
                                        {this.state.subTitle2}
                                    </Text>
                                ) : null}
                                {this.state.summary != null ? (
                                    <Text style={[style.summary, { marginTop: 5 }]}>
                                        {this.state.summary}
                                    </Text>
                                ) : null}
                            </View>

                            {/* 찜하기 버튼  */}
                            <View style={AppStyle.flexRow}>
                                {/* <DibsBtn isDibs ={this.state.isDibs}></DibsBtn> */}

                                <TouchableOpacity onPress={() => this.videoLike()}>
                                    <View style={[style.iconBtn, AppStyle.flexColumn, AppStyle.flexCC]}>
                                        {
                                            this.state.isLike ?
                                                (
                                                    <Ionicons name="ios-add" size={50} color={AppStyle.white} ></Ionicons>
                                                ) : <Ionicons name="ios-checkmark" size={50} color={AppStyle.white} ></Ionicons>
                                        }
                                        <Text style={style.iconBtnText}>
                                            {StringUtil.DIBS_CONTENT}
                                        </Text>
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
                                    onShow={() => {
                                    }}>
                                    <View style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: 'rgba(255, 255, 255, 0.4)'
                                    }}>

                                        <View style={{
                                            position: 'absolute',
                                            left: "50%", top: "50%",
                                            marginLeft: -100, marginTop: -100,
                                            width: 200, height: 200
                                        }}>

                                            <View style={[AppStyle.flexCC]}>
                                                <View style={[AppStyle.flexRow, AppStyle.flexCSb, { width: '100%' }]}>
                                                    <Ionicons name="ios-thumbs-up" size={100} />
                                                    <Ionicons name="ios-thumbs-down" size={100} />
                                                </View>

                                                <TouchableOpacity onPress={() => {
                                                    this.setState({
                                                        visibleModal: false
                                                    })
                                                }}>

                                                    <Ionicons name="ios-close-circle" size={65} />

                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>

                                {/* 공유하기 버튼 */}
                                <ShareBtn></ShareBtn>

                            </View>

                            <View style={[AppStyle.flexRow, { marginTop: 30 }]}>
                                {/* 회차정보 */}
                                {this.state.seasonCount != null ? (

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
                                                    회차정보</Text>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                ) : null}

                                {/* 비슷한 컨텐츠 */}
                                {(this.state.similarVideList != null && this.state.similarVideList.length != 0) && this.state.visibleList == "similar" ? (
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
                                                    비슷한 콘텐츠</Text>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                ) : null}


                            </View>

                            {/* 시리즈 비디오 리스트 컨테이너*/}
                            {
                                (this.state.seasonCount != null && this.state.visibleList == "series") ? (
                                    <View>
                                        <View style={style.recommendMovieContainer}> */}
                                    <FlatList
                                                scrollEnabled={false}
                                                data={this.state.seasonInfo[0]}
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
                                    </View>)
                                    : null
                            }

                            {/* 비슷한 콘텐츠 */}
                            {(this.state.similarVideList != null && this.state.visibleList == "similar") ? (
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
                                                }} source={{uri : item.thumbNail}}>
                                                </Image>
                                            </View>
                                        )} />
                                </View>
                            ) : null}

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