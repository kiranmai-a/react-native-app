/**
 * Created by senthil on 02/11/17.
 */

const React = require("react-native");
const {Dimensions, Platform} = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import {AppStyles} from '../theme/style/'
import variables from "../theme/variables/platform";

const icon = AppStyles.icon;
export default{
    AppStyles,
    textHeader: {
        fontWeight: '600',
        fontSize: Platform.OS === "ios" ? 16 : 18
    },
    profileInfoContainer: {
        backgroundColor: '#BCE0EC',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 2,
        marginBottom: 2,
        marginTop: 2,
        marginRight: 2
    },
    talkBubble: {
        backgroundColor: 'transparent',
        marginLeft: 30
    },
    talkBubbleSquare: {
        width: 120,
        height: 80,
        backgroundColor: 'red',
        borderRadius: 10,
        borderColor: 'red'
    },
    talkBubbleTriangle: {
        position: 'absolute',
        left: -26,
        top: 26,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 13,
        borderRightWidth: 26,
        borderRightColor: 'red',
        borderBottomWidth: 13,
        borderBottomColor: 'transparent'
    },
    images: {height: 180, width: deviceWidth},
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    textNote: {
        fontSize: 12,
        alignSelf: "center",
        color: "#006400"
    },
    helpText: {
        justifyContent: "center",
        backgroundColor: "#6466661A",
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
    },

    profileUser: {
        alignSelf: "Left",
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 5
    },
    profileUserInfo: {
        alignSelf: "center",
        opacity: 0.8,
        fontWeight: "bold",
        color: "#FFF"
    },
    profileInfo: {
        alignSelf: "center",
        paddingTop: 5,
        paddingBottom: 10
    },
    linkTabs: {
        backgroundColor: "#fff"
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#64666680'
    },
    circleImage: {
        height: 20,
        width: 20,
        tintColor: '#DD5018'
    },
    newsContent: {
        flexDirection: "column",
        paddingTop: 10,
        paddingLeft: 18,
        paddingRight: 18,
        flex: 1
    },
    card: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
        borderBottomWidth: 5,
        borderBottomColor: '#FF9D59',
        marginRight: 8,
        marginLeft: 8,
        marginTop: 7
    },
    newsHeader: {
        color: "#006400",
        fontSize: 15
    },
    newsLink: {
        alignSelf: "flex-start"
    },

    swipeBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    iconPadding: {
        paddingRight: 5
    },
    headerFont: {
        fontSize: 22
    },
    cardBottomStyle: {
        borderBottomColor: '#939393', borderBottomWidth: 1
    },
    headerIcons: {
        fontSize: 30,
        backgroundColor: "transparent",
        color: icon.iconColor
    },
    colonStyle: {
        marginLeft: 35,
        marginRight: 5
    },
    iconTitle: {
        color: icon.title,
        paddingRight: 13,
        fontSize: 20
    },
    iconDescription: {
        color: icon.iconDescColor,
        paddingRight: 15,
        fontSize: 16
    },
    iconList: {
        color: icon.iconDescColor,
        paddingRight: 5,
        fontSize: 16
    },
    nsaTimeLineIcon: {
        marginLeft: -11
    },
    iconColor: {
        color: icon.iconDescColor,
        fontSize: 25
    },
    iconTextPadding: {
        paddingLeft: 2
    },
    avatarMarginStyle: {
        borderRightWidth: 1, paddingRight: 8, paddingLeft: 8, borderColor: '#6466664D'
    },
    newsTypeView: {
        flexDirection: "row",
        alignSelf: "flex-start",
        paddingBottom: 5
    },
    newsTypeText: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingBottom: 5
    },
    contentContainer: {
        backgroundColor: "#fff",
        paddingLeft: 20,
        paddingRight: 20
    },
    timelineContentHeading: {
        alignSelf: "center",
        marginTop: 8
    },
    timelineView: {
        paddingLeft: 30,
        backgroundColor: "#fff"
    },
    timelineContent: {
        paddingLeft: 20,
        borderLeftWidth: 1,
        borderColor: "#ccc",
        paddingBottom: 15
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },
    status: {
        marginLeft: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        color: "white",
    },
    TextInputStyleClass: {

        margin: 5,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#FFFFFF"

    },
    descriptionContainer: {
        marginTop: 10,
        height: 140,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 7,
        backgroundColor: "#FFFFFF",
        textAlignVertical: 'top'
    },
    inputBoxWithBorder: {
        height: 40,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 7,
        backgroundColor: "#FFFFFF"
    },
    inputBox: {
        maxHeight: 300,
        minHeight: 200,
        textAlignVertical: "top",
        fontSize: 14
    },
    rhs: {
        color: "black",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    historyGrid: {
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center'
    },
    historyList: {
        backgroundColor: "white",
        marginLeft: 5,
        marginRight: 5
    },
    formPickerStyle: {
        ...Platform.select({
            ios: {
                width: '30%',
                marginTop: 5
            },
            android: {
                width: '30%',
                marginTop: 1
            }
        })
    },
    formPickerView : {
        ...Platform.select({
            ios: {
                flexDirection: 'row',
                height: 40,
                marginTop: 5
            },
            android: {
                flexDirection: 'row',
                height: 50
            }
        })
    },
    templateType: {
        ...Platform.select({
            android: {
                height: 25,
                alignItems: 'center'
            }
        })
    },
    templateSelection: {
        ...Platform.select({
            ios:{
                width:'50%',
                paddingLeft: 15
            },
            android: {
                width:'50%',
                paddingRight: 10,
            }
        })
    }
};
