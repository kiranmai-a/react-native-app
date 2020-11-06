/**
 * Created by senthil on 30/11/17.
 */
import { Platform } from "react-native";

import variable from "./../../variables/platform";
import {AppStyles} from "./../../style";

export default (variables = variable) => {

    const footerTabTheme = {
        ".selected": {
            "NativeBase.Text": {
                color: AppStyles.tabs.activeTintColor,
                fontSize: AppStyles.tabs.fontSize,
                lineHeight: 16,
            },
            "NativeBase.Icon": {
                color: AppStyles.tabs.activeTintColor,
            },
            "NativeBase.IconNB": {
                color: variables.footerTabActiveBgColor,
            },
        },
        ".nsa-tabs": {
            backgroundColor: AppStyles.tabs.bg,
        },
        ".footer-icon": {
            borderRadius: null,
            "NativeBase.Icon": {
                color: variable.footerTabBarTextColor,
            },
            "NativeBase.Text": {
                color: variable.footerTabBarTextColor,
                fontWeight: "bold"
            },
        },
    };

    return footerTabTheme;
};
