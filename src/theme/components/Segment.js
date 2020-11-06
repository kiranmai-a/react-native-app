import variable from "./../variables/platform";
import {AppStyles} from '../style/'
const segment = AppStyles.segment
export default (variables = variable) => {
    const platform = variables.platform;

    const segmentTheme = {
        height: 45,
        borderColor: variables.segmentBorderColorMain,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: variables.segmentBackgroundColor,
        ".transparent": {
            backgroundColor: 'transparent'
        },
        "NativeBase.Button": {
            alignSelf: "center",
            borderRadius: 0,
            paddingHorizontal: 20,
            height: 30,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderColor: segment.borderColor,
            elevation: 0,
            ".active": {
                backgroundColor: segment.color,
                "NativeBase.Text": {
                    color: variables.segmentActiveTextColor,
                },
                "NativeBase.Icon": {
                    color: segment.activeTintColor,
                },
            },
            ".first": {
                borderTopLeftRadius: platform === "ios" ? 5 : 5,
                borderBottomLeftRadius: platform === "ios" ? 5 : 5,
                borderLeftWidth: 1,
            },
            ".last": {
                borderTopRightRadius: platform === "ios" ? 5 : 5,
                borderBottomRightRadius: platform === "ios" ? 5 : 5,
            },
            "NativeBase.Text": {
                color: variables.segmentTextColor,
                fontSize: 14,
            },
            "NativeBase.Icon": {
                color: segment.inactiveTintColor,
            },
        },
    };

    return segmentTheme;
};
