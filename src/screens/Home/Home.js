import React, {Component} from "react";
import { Content, Text, View, Button } from "native-base";

import { Background, Gradient } from "../";
import styles from "./style";

class Home extends Component {
    render() {
        return (
            <Background >
                <Gradient bottom gstyle={{flex: 1}} screen="dashboard">
                    <Content >
                        <View style={{zIndex: 4}}>
                            <View style={{marginBottom: 100}}/>
                            <Text  style={{textAlign: 'center', fontSize: 45,  color: '#ffffff'}}> Trabo Jobs </Text>
                            <Text style={{textAlign: 'center', fontSize:18, color: '#2ceeb3', fontFamily: 'monospace'}}> your path to success </Text>
                            <View style={{marginBottom: 40}}/>
                            <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                                <Text sub h1 style={[styles.textShadowText , {fontSize:45, color: '#ffffff'}]}> We are</Text>
                                <Text sub h1 style={{fontSize:45, color: '#2CEEB3'}}> hiring</Text>
                                <Text sub h1 style={[styles.textShadowText , {fontSize:45, color: '#ffffff'}]}> for</Text>
                            </View>
                            <View style={{marginBottom: 200}}/>
                            <Text sub style={{fontSize:18, color: '#ffffff'}}> Your mobile number is only visible to you</Text>

                        </View>
                        <View style={{alignSelf: 'flex-end', marginRight: 50}}>
                            <View style={{marginBottom: 30}}/>
                            <Button style={styles.btn} onPress={() => {
                                this.props.navigation.navigate('EnterMobile');
                            }}>
                                <Text style={{justifyContent: 'center', fontSize: 17, color: '#000000', fontWeight: 'bold'}}> GET STARTED </Text>
                            </Button>
                        </View>

                    </Content>
                </Gradient>
            </Background>
        );
    }
}

export default Home;