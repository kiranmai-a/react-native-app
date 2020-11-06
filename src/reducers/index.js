import {combineReducers} from "redux";

import * as languageReducer from './languages/languages'

const appReducer = combineReducers(Object.assign(
    languageReducer,
));

export const rootReducer = (state, action) => {
    return appReducer(state, action)
}