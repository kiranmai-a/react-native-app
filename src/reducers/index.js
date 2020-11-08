import {combineReducers} from "redux";

import * as otpReducer from './home/home';

const appReducer = combineReducers(Object.assign(
    otpReducer
));

export const rootReducer = (state, action) => {
    return appReducer(state, action)
}