import variable from "./../../variables/platform";
import {AppColor, AppStyles} from "./../../style/";
const subHeader = AppStyles.subHeader
const header = AppStyles.header
const fontSize = AppStyles.fontSize
export default (variables = variable) => {
    const textTheme = {
        ".sub-content": {
            color: "#FFF",
            fontSize: variables.noteFontSize,
        },
        ".black": {
            color: "#000",
            fontSize: variables.noteFontSize,
        },
        ".nsa-text": {
            color: AppColor.screenFontColor,
        },
        ".title": {
            color: AppColor.title,
            fontSize: variables.noteFontSize,
        },
        ".subtitle": {
            color: AppColor.subtitle,
            fontSize: variables.noteFontSize - 2,
        },
        ".footer-text": {
            fontSize: variables.noteFontSize - 6,
        },
        ".list-title": {
            color: AppColor.title,
            fontSize: variables.noteFontSize
        },
        ".list-desc": {
            color: AppColor.listDescColor,
            fontSize: variables.noteFontSize,
            fontWeight: "400"
        },
        ".center": {
            alignSelf: "center"
        },
        ".header": {
            fontWeight: header.h1W,
            color: header.color,
            alignSelf: "center",
            fontSize: fontSize.h1,
        },
        ".sub": {
            color: subHeader.color,
            alignSelf: "center"
        },
        ".h1": {
            fontWeight: subHeader.h1W,
            fontSize: fontSize.h1,
        },
        ".h2": {
            fontWeight: subHeader.h2W,
            fontSize: fontSize.h2,
        },
        ".h3": {
            fontWeight: subHeader.h3W,
            fontSize: fontSize.h3,
        },
        ".h4": {
            fontWeight: subHeader.h4W,
            fontSize: fontSize.h4,
        },
        ".h5": {
            fontWeight: subHeader.h5W,
            fontSize: fontSize.h5,
        },
        ".h6": {
            fontSize: fontSize.h6,
        },
        ".l1": {
            fontWeight: subHeader.h1W,
            fontSize: fontSize.l1,
        },
        ".l2": {
            fontWeight: subHeader.h2W,
            fontSize: fontSize.l2,
        },
        ".l3": {
            fontWeight: subHeader.h3W,
            fontSize: fontSize.l3,
        },
        ".textNote": {
            alignSelf: "center",
            color: "#006400",
        },
        ".flexStart" :{
            alignSelf: "flex-start",
        },
        ".pd10": {
            padding:10,
        },
        ".pdb5":{
            paddingBottom:5,
        },
        ".justify":{
            textAlign: 'justify'
        }
    };

    return textTheme;
};
