/**
 * Created by senthil on 30/11/17.
 */
import variables from "./../../variables/platform";
import {AppStyles} from '../../style/'


const ButtonThyeme = {
    white: {
        "NativeBase.Text": {
            color: variables.btnWhiteBg,
        },
        "NativeBase.Icon": {
            color: variables.btnWhiteBg,
        },
        "NativeBase.IconNB": {
            color: variables.btnWhiteBg,
        },
        backgroundColor: "transparent",
        borderColor: variables.btnWhiteBg,
        borderWidth: variables.borderWidth * 2,
    },

    whiteTransparent: {
        "NativeBase.Text": {
            color: variables.btnWhiteBg,
        },
        "NativeBase.IconNB": {
            color: variables.btnWhiteBg,
        },
        "NativeBase.Icon": {
            color: variables.btnWhiteBg,
        },
        backgroundColor: null,
    },

    whiteBordered: {
        ".bordered": {
            "NativeBase.Text": {
                color: variables.btnWhiteBg,
            },
            "NativeBase.Icon": {
                color: variables.btnWhiteBg,
            },
            "NativeBase.IconNB": {
                color: variables.btnWhiteBg,
            },
        },
        backgroundColor: variables.btnWhiteBg,
    },

    nsabutton: {
        "NativeBase.IconNB": {
            marginRight: 10,
            marginLeft: 0,
        },
        "NativeBase.Icon": {
            marginRight: 10,
            marginLeft: 0,
        },
        "NativeBase.Text": {
            marginLeft: variables.buttonPadding,
        },
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyles.button.bg
    },
    disableButtonBackground: {
        ".disabled": {
            backgroundColor: 'transparent',
        }
    },
}

export default ButtonThyeme
