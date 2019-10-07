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
    TouchableOpacity
} from 'react-native';

import { randomUsers } from './Util';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyle from '../../../style/AppStyle';


// redux
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';



class VideoDetail extends React.Component {

    state = {
        backgroundImg: require("./share.png"),
        title: "아는형님2",
        year: 2019,
        seasonCount: 4,
        allowAge: "15+",
        resolution: "HD",
        sameRate: 98,
        subTitle: "매주 일요일 새로운 에피소드 공개",
        subTitle2: "\"워너원 편\"",
        summary: "교실에 훈훈한 지수가 치솟는다. 순회공연을 마치고 완전체로 돌아온다 워너원. 열한 명의 전학생들이 예능 종합선물세트를 선보인다. 현님들과의 현란한 댄스 대결은 덤!",
        isLike: true,
        isEsteem: 1,
        esteem: 1,

        // type : series 
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
                            thumbnail: require('./share.png')
                        },
                        {
                            id: 3,
                            order: 3,
                            uploadDate: "20190811",
                            playTime: 11,
                            title: "게르마늄 팔찌를 찬 여자3",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require('./share.png')
                        },
                        {
                            id: 2,
                            order: 2,
                            uploadDate: "20190809",
                            playTime: 88,
                            title: "게르마늄 팔찌를 찬 여자2",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require('./share.png')
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
                            thumbnail: require('./share.png')
                        },
                        {
                            id: 3,
                            order: 3,
                            uploadDate: "20190811",
                            playTime: 88,
                            title: "게르마늄 팔찌를 찬 여자3",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require('./share.png')
                        },
                        {
                            id: 2,
                            order: 2,
                            uploadDate: "20190809",
                            playTime: 88,
                            title: "게르마늄 팔찌를 찬 여자2",
                            summary: "게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를게르마늄 팔찌를",
                            thumbnail: require('./share.png')
                        }
                    ]
                }
            ]
        },

        // subTab api 따로
        subTab: ["회차정보", "비슷한 컨텐츠"],
        // videoSeries : false,


        visibleList: "series",
        similarVideList: [
            {
                similarRanking: 3,
                id: 3,
                thumbnail: require('./share.png')
            },
            {
                similarRanking: 4,
                id: 4,
                thumbnail: require('./share.png')
            },
            {
                similarRanking: 6,
                id: 6,
                thumbnail: require('./share.png')
            },
            {
                similarRanking: 1,
                id: 1,
                thumbnail: require('./share.png')
            },
            {
                similarRanking: 2,
                id: 2,
                thumbnail: require('./share.png')
            },
            {
                similarRanking: 5,
                id: 5,
                thumbnail: require('./share.png')
            }
        ]
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


        TIME = "시간";
        HOUR = "시";
        MINUTE = "분";
        SECOND = "초";

        //   분 -> 2시간 10분
        function minConvertPlayTime(min) {
            let resultHour = parseInt((min / 60));
            let resultMin = min % 60;

            if (resultHour > 0) {
                return resultHour + TIME + " " + resultMin + MINUTE;
            }
            return resultMin + MINUTE;
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
                    <View style={AppStyle.absolute, { height: 300 }}>
                        <Image style={{
                            height: 300
                        }}

                            source={this.state.backgroundImg}>
                        </Image>
                    </View>

                    <View style={[style.container, AppStyle.basePadding]}>
                        <View style={style.descriptonContainer}>
                            <Text style={style.title}>{this.state.title}</Text>
                            <View style={style.flexContainer}>
                                <Text style={AppStyle.green}>{this.state.sameRate}% 일치</Text>

                                <Text style={AppStyle.flexRow, style.videoInfo}>
                                    {this.state.year}
                                    {this.state.allowAge}
                                    시즌{this.state.seasonCount} 개
                                    {this.state.resolution}
                                </Text>

                            </View>

                            <View>
                                <Text style={style.subTitle}>
                                    {this.state.subTitle}
                                </Text>

                                <Text style={style.subTitle2}>
                                    {this.state.subTitle2}
                                </Text>
                                <Text style={style.summary}>
                                    {this.state.summary}
                                </Text>
                            </View>

                            {/* 공유하기 버튼  */}
                            <View style={AppStyle.flexRow}>
                                <View style={style.iconBtn, AppStyle.flexColumn, AppStyle.flexCC, { backgroundColor: "white" }}>
                                    <Ionicons name="ios-add" size={50} color={AppStyle.white} ></Ionicons>
                                    <Text style={style.iconBtnText}>내가 찜한 콘텐츠</Text>
                                </View>
                                <View style={style.iconBtn, { backgroundColor: "white", marginLeft: 20 }} >
                                    <Ionicons name="ios-thumbs-up" size={50} color={AppStyle.white} ></Ionicons>
                                    <Text style={style.iconBtnText}>평가</Text>
                                </View>
                                <View style={style.iconBtn, { backgroundColor: "white", marginLeft: 20 }}>
                                    <Ionicons name="ios-share" size={50} color={AppStyle.white} />
                                    <Text style={style.iconBtnText}>공유</Text>
                                </View>
                            </View>

                            <View style={[AppStyle.flexRow, { marginTop: 30 }]}>
                                <TouchableOpacity onPress={() => this.isVideoList("series")}>
                                    <View>
                                        {
                                            this.state.visibleList == "series" ?
                                                (
                                                    <View style={AppStyle.flexColumn}>
                                                        <Text style={AppStyle.flexCC,[AppStyle.white,AppStyle.textC, {
                                                            borderTopColor : "red",
                                                            borderTopWidth : 1,
                                                            width : 100,
                                                            width: 100}]}>
                                                             회차정보
                                                        </Text>
                                                    </View>
                                                ) : <Text style={[AppStyle.flexCC,AppStyle.white,AppStyle.textC, { width: 100}]}>
                                                    회차정보
                                                    </Text>
                                        }
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.isVideoList("similar")}>
                                    <View>
                                        {
                                            this.state.visibleList == "similar" ?
                                                (
                                                    <View style={AppStyle.flexColumn}>
                                                    <Text style={[AppStyle.flexCC,AppStyle.white,AppStyle.textC, 
                                                    {borderTopColor : "red",
                                                    borderTopWidth : 1,
                                                    width : 100,
                                                    width: 100}]}>
                                                        비슷한 콘텐츠
                                                    </Text>
                                                    </View>
                                                ) : <Text style={[AppStyle.white,AppStyle.textC, { width: 100 }]}>
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
                                                    <View style={AppStyle.flexColumn, AppStyle.basePadding, { paddingTop: 20 }}>
                                                        <View style={AppStyle.flexRow}>
                                                            <View style={AppStyle.bgWhite, style.iconBtn, { marginLeft: 20 }}>
                                                                <Image
                                                                    style={AppStyle.bgGray, { height: 100, width: 100 }}
                                                                    source={item.thumbnail}></Image>
                                                            </View>

                                                            <View style={AppStyle.flexColumn, { marginLeft: 15 }}>
                                                                <Text style={AppStyle.white}>
                                                                    {item.order}. {item.title}
                                                                </Text>
                                                                <Text style={AppStyle.gray}>
                                                                    {minConvertPlayTime(item.playTime)}
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={AppStyle.gray,AppStyle.basePadding, { marginTop: 20 }}>
                                                            <Text style={AppStyle.gray}>
                                                                {item.summary}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                )} />
                                        </View>
                                    </View>
                                )
                                    : null
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
                                                <View style={AppStyle.flexColumn}>
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
    },

    videoDescriptonContainer: {
        flex: 1,
        backgroundColor: "blue"
    },

    videoInfo: {
        color: 'gray',
        opacity: .84,
        marginLeft: 10,
        // color : 'rgba(0,0,0,0.5)'
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
        width: 120,
        height: 80
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

    // top 영역의 이미지 영역
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

    // 폰트 크기 및 색상 정의 필요
    // fCGreen: {
    //     color: "green"
    // },
    // fcWhite: {
    //     color: "white"
    // },
    bgBlue: {
        backgroundColor: "blue"
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    basePadding: {
        paddingLeft: 10,
        paddingRight: 10
    },
});


// actin
const SUBTAB_CLICK ="SUBTAB_CLICK";
const LikeVideo ="LikeVideo";
export function subtabClick(){
    return {
        type : "SUBTAB_CLICK"
    };
}
export
export function likeVideo(){
    return {
        type : "LikeVideo"
    };
}

// store
const store = createStore(reducers);

// Default State
const initialState = {
    isLike: false
};

//reducer
function reducer (state = initialState,action){
    switch(action.type){
        case LikeVideo:
            return {
                isLike : !(state.isLike)
            }
            break;
    }
    return state;
}

// reducer 결합
const allReducers = combineReducers({
    reducer,
  });












export default VideoDetail;
