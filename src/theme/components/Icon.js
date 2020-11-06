import variable from "./../variables/platform";
import IconTheme from "./nsa/Icon";

export default (variables = variable) => {
    const iconTheme = {
        fontSize: variables.iconFontSize,
        color: "#FFF",
        ...IconTheme(variables)
    };

    return iconTheme;
};
