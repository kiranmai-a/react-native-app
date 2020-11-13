import React, {Component} from "react";
import { Content, Text, View, Button, Input } from "native-base";

import { Background, Gradient } from "../";
import styles from "./style";
import { ActionCreators, bindActionCreators, connect } from "../../common/imports/redux/";

class EnterMobile extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        mobileNumber: '',
    }

    sendOtp() {
        this.props.sendOtp(this.state.mobileNumber);
        this.props.navigation.navigate('VerifyOtp', { mobileNumber: this.state.mobileNumber });
    }

    render() {
        return (
            <Background >
                <Gradient bottom gstyle={{flex: 1}} screen="dashboard">
                    <Content >
                        <View style={{zIndex: 4}}>
                            <View style={{marginBottom: 100}}/>
                            <Text style={{textAlign: 'center', fontSize: 45,  color: '#ffffff'}}> Trabo Jobs </Text>
                            <Text style={{textAlign: 'center', fontSize:18, color: '#2CEEB3', fontFamily: 'monospace'}}> your path to success </Text>
                            <View style={{marginBottom: 80}}/>
                        </View>
                        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 30}}>
                            <Text sub style={{fontSize:28, color: '#ffffff'}}> What's your number</Text>
                            <Text sub style={{fontSize:18, color: '#ffffff'}}> Enter mobile number and continue</Text>
                        </View>
                        <View style={{height:60, width: '90%', borderColor: '#3BC5F3', borderRadius: 50, borderWidth:2,  marginLeft: 30, marginTop: 20, marginBottom: 10 }}>
                            <Input
                                style={{width: '100%', fontSize: 18, borderColor: 'white', borderRadius: 10, color: '#fff', marginLeft: 10 }}
                                placeholder="Enter mobile number here..."
                                placeholderTextColor="#fff"
                                value={this.state.mobileNumber}
                                keyboardType="numeric"
                                maxLength={10}
                                onChangeText={(texts) => this.setState({mobileNumber:texts,allowEditing: true})}>
                            </Input>
                        </View>
                        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'flex-start',  marginLeft: 30}}>
                            <Text sub style={{fontSize:18, color: '#ffffff', justifyContent: 'flex-start'}}> By signing up you agree to Job</Text>
                            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <Text sub style={{fontSize:18, color: '#2CEEB3', fontWeight: '100'}}> T&C </Text>
                                <Text sub style={{fontSize:18, color: '#ffffff'}}> and</Text>
                                <Text sub style={{fontSize:18, color: '#2CEEB3', fontWeight: '100'}}> Privacy Policy </Text>
                            </View>
                        </View>
                        <View style={{alignSelf: 'flex-end', marginRight: 20}}>
                            <View style={{marginBottom: 30}}/>
                            <Button disabled={this.state.mobileNumber.length < 10} style={{ opacity: this.state.mobileNumber.length == 10 ? 1 : 0.5, width: 150, height: 50, borderRadius: 50, justifyContent: 'center'}} onPress={() => {
                                this.sendOtp();
                            }}>
                                <Text style={{justifyContent: 'center', fontSize: 17, color: '#000000', fontWeight: 'bold'}}> CONTINUE </Text>
                            </Button>
                        </View>
                    </Content>
                </Gradient>
            </Background>
        )
    }
}


function bindAction(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = state => ({
    otp: state.otpReducer.otp
});

export default connect(mapStateToProps, bindAction)(EnterMobile);