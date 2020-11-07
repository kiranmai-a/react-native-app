import {combineReducers} from "redux";

import * as languageReducer from './languages/languages'
import * as otpReducer from './home/home';

const appReducer = combineReducers(Object.assign(
    languageReducer,
    otpReducer
));

export const rootReducer = (state, action) => {
    return appReducer(state, action)
}