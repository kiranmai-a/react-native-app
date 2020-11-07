import variable from "./../../variables/platform";
export default (variables = variable) => {
    const cardTheme = {
        ".nsa-card": {
            borderRadius: 4,
            borderTopWidth: null,
            marginLeft: 3,
            marginRight: 3,
            marginBottom: 3
        },
        ".inner-card": {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 3
        },
        ".list-card": {
            marginVertical: null,
            marginHorizontal: null,
        },
    };
    return cardTheme;
};
