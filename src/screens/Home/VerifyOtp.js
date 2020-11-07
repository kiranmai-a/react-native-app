import React, {Component} from "react";
import { Content, Text, View, Button, Input } from "native-base";
import { Background, Gradient } from "../";
import { TextInput} from 'react-native';
import { ActionCreators, bindActionCreators, connect } from "../../common/imports/redux/";


class VerifyOtp extends Component {
    constructor(props) {
        super(props);
        this.props.sendOtp(this.props.route.params.mobileNumber);
        this.state = {
            otpTime: 60, otpMessge: ''
        }
        this.startOtpInterval()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.otpStatus && nextProps.otpStatus == 'Sucesss') {
            this.clearOtp()
            this.props.navigation.navigate('Home');
        }
        return true
    }

    clearOtp() {
        this.props.clearOtpStatus({})

    }

    startOtpInterval() {
        this.otpInterval = setInterval(() => {
            this.setState({
                otpTime: this.state.otpTime -1
            })
            if(this.state.otpTime == 0 ) {
                clearInterval(this.otpInterval)
            }
        }, 1000)
    }

    validateOtp() {
        this.props.validateOtp(this.props.route.params.mobileNumber, (this.state.text).toString() + (this.state.text1).toString() + (this.state.text2).toString() + (this.state.text3).toString());
    }
    render() {
        const { mobileNumber } = this.props.route.params;
        let otp = this.props.otp ? this.props.otp.otp : ''
        return (
            <Background >
                <Gradient bottom gstyle={{flex: 1}} screen="dashboard">
                    <Content >
                        <View style={{zIndex: 4}}>
                            <View style={{marginBottom: 100}}/>
                            <Text  style={{textAlign: 'center', fontSize: 45,  color: '#ffffff'}}> Trabo Jobs </Text>
                            <Text style={{textAlign: 'center', fontSize:18, color: '#ED9C22', fontFamily: 'monospace'}}> your path to success </Text>
                            <View style={{marginBottom: 40}}/>
                        </View>
                        <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', marginLeft: 20}}>
                            <Text  style={{fontSize:25, color: '#ffffff'}}> Verfiy your number</Text>
                            <Text  style={{fontSize:18, color: '#ffffff'}}> 4 digit code sent {otp} to {mobileNumber}</Text>
                        </View>
                        <View style={{flex:1, flexDirection: 'row', marginTop: 20, marginBottom: 10, justifyContent: 'space-around'}}>
                            <View style={{height:60, width: '20%', borderColor: '#379AD4', borderRadius: 10, borderWidth:2, color: '#fffff' }}>
                                <TextInput
                                    style={{height: 40, margin: 10, alignSelf:'center',  fontSize: 20, color: 'white'}}
                                    placeholderTextColor="white"
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                    maxLength = {1}
                                />
                            </View>
                            <View style={{height:60, width: '20%', borderColor: '#379AD4', borderRadius: 10, borderWidth:2 }}>
                                <TextInput
                                    style={{height: 40, margin: 10, alignSelf:'center',  fontSize: 20, color: 'white'}}
                                    placeholderTextColor="white"
                                    onChangeText={(text1) => this.setState({text1})}
                                    value={this.state.text1}
                                    maxLength = {1}
                                />
                            </View>
                            <View style={{height:60, width: '20%', borderColor: '#379AD4', borderRadius: 10, borderWidth:2 }}>
                                <TextInput
                                    style={{height: 40, margin: 10, alignSelf:'center',  fontSize: 20, color: 'white'}}
                                    placeholderTextColor="white"
                                    onChangeText={(text2) => this.setState({text2})}
                                    value={this.state.text2}
                                    maxLength = {1}
                                />
                            </View>
                            <View style={{height:60, width: '20%', borderColor: '#379AD4', borderRadius: 10, borderWidth:2}}>
                                <TextInput
                                    style={{height: 40, margin: 10, alignSelf:'center',  fontSize: 20, color: 'white'}}
                                    placeholderTextColor="white"
                                    onChangeText={(text3) => this.setState({text3})}
                                    value={this.state.text3}
                                    maxLength = {1}
                                />
                            </View>
                        </View>
                        <View style={{marginBottom: 30}}/>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            {this.state.otpTime > 0 ? <Text  style={{fontSize:18, color: '#ffffff', marginLeft: 20, marginTop: 10}}> Resend in 00:{this.state.otpTime} sec</Text> :
                                <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20}}>
                                    <Button style={{width: 150, height: 50, borderRadius: 5, justifyContent: 'center'}} onPress={() => {
                                        console.log('test clicked')
                                    }}>
                                        <Text> Resend </Text>
                                    </Button>
                                </View>
                            }
                            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20}}>
                                <Button style={{width: 150, height: 50, borderRadius: 5, justifyContent: 'center'}} onPress={() => {
                                    console.log('test clicked'); this.validateOtp();
                                }}>
                                    <Text> LOGIN </Text>
                                </Button>
                            </View>
                        </View>

                    </Content>
                </Gradient>
            </Background>
        );
    }
}

function bindAction(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = state => ({
    otp: state.otpReducer.otp,
    otpStatus: state.otpReducer.otpStatus
});
export default connect(mapStateToProps, bindAction)(VerifyOtp);