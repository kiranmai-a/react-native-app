/**
 * Created by senthil on 05/12/17.
 */
const BASE_URL = 'http://10.0.2.2:8080/api/v1/trabo/';
const   URLs = {
    SEND_OTP_URL: BASE_URL + 'sms/generateOtp',
    VALIDATE_OTP_URL: BASE_URL + 'sms/validateOtp'
}

export default URLs