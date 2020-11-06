const React = require("react-native");
const { Dimensions,Platform } = React;
const primary = require("../../theme/variables/commonColor").brandPrimary;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    links: {
        paddingTop: Platform.OS === "android" ? 8 : 10,
        paddingBottom: Platform.OS === "android" ? 8 : 10,
        paddingLeft: Platform.OS === "android" ? 0 : 10,
        borderBottomWidth: Platform.OS === "android" ? 0 : 0,
        borderBottomColor: "transparent",
    },
    linkText: {
        paddingLeft: 15,
        fontWeight:"bold"
    },
    profileInfoContainer: {
        backgroundColor: '#f4a4604D',
        paddingTop: 10,
        marginRight:5,
        marginLeft:5,
        borderRadius:5,
    },
    head: { height: 30, backgroundColor: 'transparent'},
    text: { textAlign: 'center',color:'white',fontSize: 10, fontWeight: "400"},
    profileUser: {
        alignSelf: "center",
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 5,
        paddingLeft: 10
    },
    profileUserInfo: {
        alignSelf: "center",
        opacity: 0.8,
        fontWeight: "bold",
        color: "#FFF"
    },
    profilePic: {
        width: 420,
        height: 420,
        borderRadius: 210,
    },
    profileInfo: {
        alignSelf: "center",
        paddingTop: 5,
        paddingBottom: 10
    },
    logoutContainer: {
        padding: 30,
        paddingTop: 0
    },
    logoutbtn: {
        paddingTop: 30,
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#fff"
    },
    background: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: primary
    },
    shadow:{
        position: 'absolute',
        shadowColor: "black",
        shadowOffset: { height: 4},
        shadowOpacity: 0.5,
    },
    btn: {
        justifyContent: 'center',
        width: 370,
        height: 50,
        borderRadius: 5
    },
    textShadowText: {
        color: '#fff',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: '#000',
    },
    textShadowTextNone: {
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
        textShadowColor: '#fff',
    },
    stayElevated: {
        width: 50,
        height: 50,
        backgroundColor: '#ffffff'
    },
    drawerContent: {
        paddingTop: Platform.OS === "android" ? 30 : 30
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    marginTop5: {
        marginTop:5,
        color: '#ffffff',

    },
    colWidth: {
        width:'50%',
    },

    colWidth2: {
        width:'80%',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        opacity: 0.4
    },

    overlay: {
        // backgroundColor:'rgba(3,154,170,0.7)',
        backgroundColor:'rgba(107,106,77,0.8)',
        height: 120,
        borderRadius: 10,
    },

    overlay1: {
        // backgroundColor:'rgba(3,154,170,0.7)',
        backgroundColor:'rgba(107,106,77,0.8)',
        height: 200,
    },
    avatarStyle: {
        width:100,
        height: 100,
        marginTop: 10,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textStyle: {
        bottom: 15,
        right: 10,
        fontSize: 80,
        color: "#FFFFFF",
        fontWeight: 'bold',
        alignSelf: 'center',
        height: 100
    },
    balanceContainer:{
        padding:10,
    },

    profilePic: {
        height: 40,
        width: 40,
        borderRadius: Platform.OS === "android" ? 40 : 20
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 120
    },
    categoryCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 100
    },

    categoryCardoverlay: {
        height: 100,
        borderRadius: 9,
    },

    container1: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 210
    },
    dashboardBorder: {
        borderWidth: 1,
        borderColor: "#FFFFFF"
    },
    cover: {
        flex: 1,
        maxHeight: 170,
        resizeMode: 'cover',
    },
    logo: {
        flex: 1,
        resizeMode: "contain",
        height: deviceHeight / 3,
        alignSelf: "center",
    },
    logos: {
        resizeMode: "contain",
        height: deviceHeight / 3.8,
        width: deviceWidth,
        alignSelf: "center",    }

};
