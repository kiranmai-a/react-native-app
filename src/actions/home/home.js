import * as types from "../../lib/types";
import * as common from "../common";
import { Api, URLs } from "../../lib";

export function sendOtp(mobileNumber) {
    console.log('mobileNumber', mobileNumber)
    return (dispatch, getState) => {
        dispatch(common.itemsIsLoading(true, true));
        const body = mobileNumber;
        return Api.post(`${URLs.SEND_OTP_URL}`, body).then(response => {
            dispatch(response.success);
            dispatch(common.itemsIsLoading(false, false));
        }).catch((ex) => {
            common.handleError(types.TOAST_INFO, null, dispatch)
        });
    }
}
