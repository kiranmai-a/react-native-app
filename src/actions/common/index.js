import { Platform, ToastAndroid } from 'react-native'
import { Toast } from 'native-base'

import * as types from '../../lib/types'
import { AppStyles } from '../../theme/style'
const toastTypes = AppStyles.toast

export function itemsIsLoading(bool: boolean, blockUI: boolean) {
    return {
        type: types.ITEMS_IS_LOADING,
        isLoading: bool,
        blockUI: blockUI
    };
}

export function handleError(type: string, response: Object, dispatch) {
    var message = response ? response.message : 'No Data Found!'
    if(response && response.status && !response.status.validSession){
        // handleExpiredSession(dispatch, response.status)
    } else {
        dispatch(itemsIsLoading(false))
        showToast(type, message)
    }
    return {
        type: types.ITEMS_HAS_ERRORED,
        hasErrored: true
    };
}

export function showToast(type: string, message: string) {
    try {
        const text = message ? message === "Not Valid Session" ? "Your session has expired" : message : "Invalid Credentials !"
        if(Platform.OS === "android")
            ToastAndroid.showWithGravity(text, ToastAndroid.LONG, ToastAndroid.CENTER)
        else {
            Toast.show({
                text: text,
                buttonText: 'X',
                style: {
                    backgroundColor: type ? toastTypes[type] : toastTypes['error'],
                },
                position: 'top',
                duration: 2000,
                textStyle: {
                    color: '#fff'
                }
            })
        }
    } catch (err) {
        console.log(err);
    }
}