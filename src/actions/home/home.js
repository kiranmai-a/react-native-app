import * as types from "../../lib/types";
import * as common from "../common";
import { Api, URLs } from "../../lib";

export function sendOtp(mobileNumber) {
    return (dispatch, getState) => {
        dispatch(common.itemsIsLoading(true, true));
        return Api.get(`${URLs.SEND_OTP_URL}/${mobileNumber}`).then(response => {
            dispatch(response.success ? sendOtpStatus(response) : common.handleError(types.TOAST_ERROR, response.data, dispatch));
            dispatch(common.itemsIsLoading(false, false));
        }).catch((ex) => {
            common.handleError(types.TOAST_INFO, null, dispatch)
        });
    }
}

export function validateOtp(mobileNumber, otpNum) {
    return (dispatch, getState) => {
        dispatch(common.itemsIsLoading(true, true));
        return Api.get(`${URLs.VALIDATE_OTP_URL}/${mobileNumber}?otpnum=${otpNum}`).then(response => {
            dispatch(response.success ? sendOtpValidation(response) : common.handleError(types.TOAST_ERROR, response.data, dispatch));
            dispatch(common.itemsIsLoading(false, false));
        }).catch((ex) => {
            common.handleError(types.TOAST_INFO, null, dispatch)
        });
    }
}

export function clearOtpStatus(otpObject: Object) {
    return {
        type: types.VALIDATE_OTP,
        otpObject
    }
}

export function sendOtpStatus(otpObject: Object) {
    return {
        type: types.SET_OTP,
        otpObject
    }
}

export function sendOtpValidation(otpObject: Object) {
    return {
        type: types.VALIDATE_OTP,
        otpObject
    }
}
