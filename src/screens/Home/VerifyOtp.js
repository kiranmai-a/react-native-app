import React, {Component} from "react";
import { Content, Text, View, Button } from "native-base";

import { Background, Gradient } from "../";

class VerifyOtp extends Component {
    render() {
        const { mobileNumber } = this.props.route.params;
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
                        <View style={{marginLeft: 40}}>
                            <Text sub style={{fontSize:25, color: '#ffffff'}}> Verfiy your number</Text>
                            <Text sub style={{fontSize:18, color: '#ffffff'}}> 4 digit code sent to {mobileNumber}</Text>
                        </View>
                        <View style={{marginBottom: 30}}/>
                        <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20}}>
                            <Button style={{width: 150, height: 50, borderRadius: 5, justifyContent: 'center'}} onPress={() => {
                                console.log('test clicked')
                            }}>
                                <Text> LOGIN </Text>
                            </Button>
                        </View>

                    </Content>
                </Gradient>
            </Background>
        );
    }
}

export default VerifyOtp;