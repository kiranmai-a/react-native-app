import React, {Component} from "react";
import { Content, Text, View, Button, Input } from "native-base";

import { Background, Gradient } from "../";

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
                            <View style={{marginBottom: 80}}/>
                        </View>
                        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 30}}>
                            <Text sub style={{fontSize:25, color: '#ffffff'}}> What's your number</Text>
                            <Text sub style={{fontSize:18, color: '#ffffff'}}> Enter mobile number and continue</Text>
                        </View>
                        <View style={{height:60, width: '90%', borderColor: '#379AD4', borderRadius: 10, borderWidth:2,  marginLeft: 30, marginTop: 20, marginBottom: 10 }}>
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
                                <Text sub style={{fontSize:18, color: '#56CCF2', fontWeight: '100'}}> T&C </Text>
                                <Text sub style={{fontSize:18, color: '#ffffff'}}> and</Text>
                                <Text sub style={{fontSize:18, color: '#56CCF2', fontWeight: '100'}}> Privacy Policy </Text>
                            </View>
                        </View>
                        <View style={{marginBottom: 30}}/>
                        <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20}}>
                            <Button style={{width: 150, height: 50, borderRadius: 10, justifyContent: 'center'}} onPress={() => {
                                this.props.navigation.navigate('VerifyOtp', { mobileNumber: this.state.mobileNumber });
                            }}>
                                <Text style={{fontSize: 20, fontWeight: '500'}}> CONTINUE </Text>
                            </Button>
                        </View>

                    </Content>
                </Gradient>
            </Background>
        )
    }    
}

export default EnterMobile;