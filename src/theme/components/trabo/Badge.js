/**
 * Created by senthil on 30/11/17.
 */
import variable from "./../../variables/platform";

export default (variables = variable) => {
    const badgeTheme = {
        "NativeBase.Text": {
            color: variables.badgeColor,
            fontSize: variables.fontSizeBase,
            lineHeight: variables.lineHeight - 7,
            textAlign: "center",
            paddingHorizontal: 1,
        },
        height: 20
    };
    return badgeTheme;
};
