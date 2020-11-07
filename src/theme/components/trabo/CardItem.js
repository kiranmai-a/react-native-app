/**
 * Created by senthil on 30/11/17.
 */
import variable from "./../../variables/platform";

export default (variables = variable) => {
    const cardItemTheme = {
        ".nsaborder": {
            "NativeBase.Input": {
                paddingLeft: 8,
            },
            "NativeBase.Icon": {
                paddingLeft: 10,

            },
            ".success": {
                borderColor: variables.inputSuccessBorderColor,
            },
            ".error": {
                borderColor: variables.inputErrorBorderColor,
            },
            borderWidth: 1,
            borderColor: '#fff',
        },
    };
    return cardItemTheme;
};
