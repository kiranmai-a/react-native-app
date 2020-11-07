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

    render() {
        return (
            <Background >
                <Gradient bottom gstyle={{flex: 1}} screen="dashboard">
                    <Content >
                        <View style={{zIndex: 4}}>
                            <View style={{marginBottom: 100}}/>
                            <Text style={{textAlign: 'center', fontSize: 45,  color: '#ffffff'}}> Trabo Jobs </Text>
                            <Text style={{textAlign: 'center', fontSize:18, color: '#ED9C22', fontFamily: 'monospace'}}> your path to success </Text>
                            <View style={{marginBottom: 200}}/>
                        </View>
                        <View style={{marginLeft: 40}}>
                            <Text sub style={{fontSize:25, color: '#ffffff'}}> What's your number</Text>
                            <Text sub style={{fontSize:18, color: '#ffffff'}}> Enter mobile number and continue</Text>
                            <Input 
                                style={{width: '100%', fontSize: 18, borderColor: 'white', borderRadius: 10 }}
                                placeholder="Enter mobile number here..."
                                value={this.state.mobileNumber}
                                onChangeText={(texts) => this.setState({mobileNumber:texts,allowEditing: true})}>  
                            </Input>
                            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <Text sub style={[styles.textShadowText , {fontSize:18, color: '#ffffff'}]}> By signing up you agree to Job</Text>
                                <Text sub style={{fontSize:18, color: '#ED9C22'}}> T&C </Text>
                                <Text sub style={[styles.textShadowText , {fontSize:18, color: '#ffffff'}]}> and</Text>
                                <Text sub style={{fontSize:18, color: '#ED9C22'}}> Privacy Policy </Text>
                            </View>
                        </View>
                        <View style={{marginBottom: 30}}/>
                        <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20}}>
                            <Button style={{width: 150, height: 50, borderRadius: 5, justifyContent: 'center'}} onPress={() => {
                                this.props.sendOtp(this.state.mobileNumber).then(() => {
                                    this.props.navigation.navigate('VerifyOtp', { mobileNumber: this.state.mobileNumber });
                                })
                            }}>
                                <Text> CONTINUE </Text>
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
});

export default connect(mapStateToProps, bindAction)(EnterMobile);