import React, {Component} from "react";
import {Image, FlatList, TouchableOpacity, Dimensions, Alert, BackHandler, ImageBackground} from "react-native";
// import {NavigationActions} from "react-navigation";
import {CardItem, Card, Col, Content, Text, View, Button, Icon} from "native-base";
import {AppHeader, Background, Gradient} from "../";
import {Images} from "../../theme/style";
import styles from "./style";

import {ActionCreators, bindActionCreators, connect} from "../../common/imports/redux/";


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            noData: false,
            position: 0,
            interval: null,
            empTimeTable: undefined
        };

    }

    componentDidMount() {
        this.props.getlanguages();
    }



    renderRow(item, index, seperator) {
        alert(item.name)
        return (
            <Col style={styles.colWidth}>
                <TouchableOpacity >
                    <View style={{alignItems: 'center', justifyContent: 'center', margin: 5}}>
                        <View style={styles.circle}>
                            <Image
                                source={Images[item.icon]}
                                style={{height: 25, width: 25, tintColor: '#fff'}}
                            />
                        </View>
                        <Text sub h6
                              style={[styles.marginTop5, {color: "#000"}]}>{item.name != null && item.name != undefined ? item.name.toUpperCase() : ' '}</Text>
                    </View>
                </TouchableOpacity>
            </Col>
        )
    }

    render() {
        console.log('test languages', this.props)
        const languagesArray = [{
            "name": 'English', icon: 'eng', text: 'A', bgColor: 'rgba(3,154,170,0.9)'
        },{
            "name": 'Tamil', icon: 'tamil', text: 'அ', bgColor: 'rgba(107,106,77,0.9)'
        }];
        let data = this.props.languages.length > 0 ? false: true;
        console.log("came ", data, this.props.languages)
        return (
            <Background >
                {/*<AppHeader right {...this.props} title="Dashboard"/>*/}
                <Gradient bottom gstyle={{flex: 1}} screen="dashboard">
                    <Content >
                        <View style={{zIndex: 4}}>
                            <View style={{marginBottom: 100}}/>
                            <Text  style={{textAlign: 'center', fontSize: 45,  color: '#ffffff'}}> Trabo Jobs </Text>
                            <Text style={{textAlign: 'center', fontSize:18, color: '#ED9C22', fontFamily: 'monospace'}}> your path to success </Text>
                            <View style={{marginBottom: 40}}/>
                            <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                                <Text sub h1 style={[styles.textShadowText , {fontSize:45, color: '#ffffff'}]}> We are</Text>
                                <Text sub h1 style={{fontSize:45, color: '#ED9C22'}}> hiring</Text>
                                <Text sub h1 style={[styles.textShadowText , {fontSize:45, color: '#ffffff'}]}> for</Text>
                            </View>
                            <View style={{marginBottom: 200}}/>
                            <Text sub style={{fontSize:18, color: '#ffffff'}}> Your mobile number is only visible to you</Text>

                        </View>
                        <View style={{alignSelf: 'center'}}>
                            <View style={{marginBottom: 30}}/>
                            <Button style={styles.btn} onPress={() => {
                                this.props.navigation.navigate('Dashboard1');
                            }}>
                                <Text style={{justifyContent: 'center'}}> GET STARTED </Text>
                            </Button>
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

//const mapStateToProps = state => ({
//    languages: state.languageReducer.languages,
//})

const mapStateToProps = function(state) {
    console.log('test state', state); // state
    return { languages: state.languageReducer.languages }
};

export default connect(mapStateToProps, bindAction)(Dashboard);

