/**
 * Created by senthil on 30/11/17.
 */
import variable from "./../../variables/platform";
import {AppStyles} from "./../../style/";
const icon = AppStyles.icon

export default (variables = variable) => {
    const iconTheme = {
        ".nsa-icon": {
            color: icon.color,
            fontSize: variables.iconFontSize - 12,
            paddingRight: 2
        },
        ".title": {
            color: icon.title
        },
        ".desc": {
            color: icon.iconDescColor
        },
        ".black": {
            color: '#000'
        },
    };

    return iconTheme;
};
