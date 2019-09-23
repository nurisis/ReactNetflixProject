import { StyleSheet } from 'react-native';
/**
 *  프로젝트에 사용되는 기본적인 스타일 시트 정의
 *  visible 속성
 *  flex 속성
 *  폰트 사이즈
 *  폰트 굵기
 *  색
 */

export default StyleSheet.create({
    /**
     *  visible option
     */
    none: {
        display: "none"
    },

    /**
     * flexbox direction
     */
    flexRow: {
        flex: 1,
        flexDirection: 'row'
    },
    flexColumn: {
        flex: 1,
        flexDirection: 'column'
    },

    /**
     *  flex alignItems justifyContent
     */
    flexSFs: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "flex-start"
    },
    flexSFe: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "flex-end"
    },
    flexSFc: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center"
    },
    flexSSb: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-between"
    },
    flexSSa: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-around"
    },
    flexSSe: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-evenly"
    },

    flexFsFs: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    flexFsFe: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end"
    },
    flexFsFc: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    flexFsSb: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    flexFsSa: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    flexFsSe: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "space-evenly"
    },

    flexFeFs: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-start"
    },
    flexFeFe: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    flexFeFc: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center"
    },
    flexFeSb: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    flexFeSa: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-around"
    },
    flexFeSe: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-evenly"
    },

    flexCFs: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    flexCFe: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    flexCFc: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    flexCSb: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    flexCSa: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    flexCSe: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    flexBFs: {
        flex: 1,
        alignItems: "baseline",
        justifyContent: "flex-start"
    },
    flexBFe: {
        flex: 1,
        alignItems: "baseline",
        justifyContent: "flex-end"
    },
    flexBFc: {
        flex: 1,
        alignItems: "baseline",
        justifyContent: "center"
    },
    flexBSb: {
        flex: 1,
        alignItems: "baseline",
        justifyContent: "space-between"
    },
    flexBSa: {
        flex: 1,
        alignItems: "baseline",
        justifyContent: "space-around"
    },
    flexBSe: {
        flex: 1,
        alignItems: "baseline",
        justifyContent: "space-evenly"
    },

    /**
    * font size
    * 단말기 screen
    * 320
    * 360
    * 375
    * 411
    * 414
    */

    /**
     * fontWeight
     */

    /**
     * font color
     * 참고
     * https://facebook.github.io/react-native/docs/colors
     */
    black: {
        fontColor: '#000000'
    },
    white: {
        fontColor: '#ffffff'
    }
});