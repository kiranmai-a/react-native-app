import variable from "./../variables/platform";
import TextTheme from './trabo/Text'

export default (variables = variable) => {
    const textTheme = {
        fontSize: variables.DefaultFontSize - 1,
        fontFamily: variables.fontFamily,
        color: "#FFFFFF",
        ".note": {
            color: "#a7a7a7",
            fontSize: variables.noteFontSize,
        },
        ...TextTheme(variables),
    };
    return textTheme;
};