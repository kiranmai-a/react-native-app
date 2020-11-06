import * as types from "../../lib/types";
import createReducer from "../../lib/createReducer";

const initialState = {
    languages: [],
}

export const languageReducer = createReducer(initialState, {
    [types.SET_LANGUAGES](state, action) {
        return {...state, languages: action.languagesArray}
    } 
})

