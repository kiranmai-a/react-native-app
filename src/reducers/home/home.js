/**
 * Created by Sai on 07/11/20.
 */
import * as types from "../../lib/types";
import createReducer from "../../lib/createReducer";

const initialState = {
    otp : {},
    otpStatus: {}
}

export const otpReducer = createReducer(initialState, {
    [types.SET_OTP](state, action) {
        return {...state, otp: action.otpObject.result}
    },
    [types.VALIDATE_OTP](state, action) {
        return {...state, otpStatus: action.otpObject.message}
    }
})

