import { Platform, Dimensions } from "react-native";

import variable from "./../variables/platform";
import {AppStyles} from '../style'
const primary = AppStyles.primary

const deviceHeight = Dimensions.get("window").height;
export default (variables = variable) => {
	const theme = {
		flex: 1,
		height: Platform.OS === "ios" ? deviceHeight : deviceHeight - 20,
		backgroundColor: primary,
	};

	return theme;
};
