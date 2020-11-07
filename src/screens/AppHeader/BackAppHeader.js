/**
 * Created by senthil on 24/11/17.
 */
import React, { Component } from 'react';
import {
    Header,
    Button,
    Icon,
    Text,
    Left,
    Body,
    Right,
    View,
    Title
} from "native-base";

import styles from "../app-style";
import styles1 from '../Home/style'
import {Images} from "../../theme/style";
import {BackHandler, ImageBackground} from 'react-native'
let opac = 1.0;
export default class BackAppHeader extends Component {
    constructor(props) {
        super(props);
        this.onBackPressed = this.onBackPressed.bind(this);
        this.state = {
            bgNo: 1,
            bgImage : Images['bg1']
        }
    }
    componentDidMount() {

        BackHandler.addEventListener("hardwareBackPress", this.onBackPressed);
        this.bgTimeout = setInterval(() => {
            if(this.state.bgNo == 5) {
                this.setState({
                    bgImage: Images['bg' + this.state.bgNo],
                    bgNo: 1,
                })
            } else {
                this.setState({
                    bgImage: Images['bg' + this.state.bgNo],
                    bgNo: this.state.bgNo + 1
                })
            }
        }, 4000)
    }
    componentWillUnmount() {
        endReached = false;
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPressed);
        clearInterval(this.bgTimeout)
    }
    onBackPressed() {
        this.goBack(false);
        return true;
    }
    goBack(refresh) {
        const {navigation} = this.props;
        if (refresh && navigation.state.params !== undefined && navigation.state.params.refresh !== undefined)
            navigation.state.params.refresh();

        this.props.navigation.goBack();
    }
    render() {
        let { title, search, rightValue, opacity, bg, newHeader, txtColor } = this.props;
        let rightSide = null;
        if(search) {
          rightSide = rightValue
        }
        if(opacity !== undefined)
            opac = opacity;
        else
            opac = 1;

        if(!txtColor) {
            txtColor = '#000'
        }

        if(newHeader) {
            return (
                <View style={{height: 130}}>
                    <ImageBackground
                        source={this.state.bgImage}
                        style={styles1.container1}
                        imageStyle={{resizeMode: 'cover'}}>
                        <View style={[styles1.overlay1,{backgroundColor: 'rgba(255,255,255,0.5)'}]}>
                            <Header searchBar rounded style={{ backgroundColor: "transparent", border: 0, elevation: 0}}>
                                <Left style={{flex: 0, width: 50}}>
                                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                                        <Icon active name="arrow-back" style={[styles.headerIcons, {color: '#000'}]}/>
                                    </Button>
                                </Left>
                                <Body>
                                <Title style={[styles.textHeader]}></Title>
                                </Body>
                                <Right style={{flex: 0, width: 50}}>
                                    {rightSide}
                                </Right>
                            </Header>
                        </View>
                    </ImageBackground>
                </View>
            )
        } else {

            return (

                <Header searchBar rounded style={{opacity: opac, backgroundColor: bg, border: 0}}>
                    <Left style={{flex: 0, width: 50}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon active name="arrow-back" style={[styles.headerIcons, {color: txtColor}]}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={[styles.textHeader, {color: txtColor}]}>{title ? (((title.toUpperCase()).length > 20) ?
                        (((title.toUpperCase()).substring(0, 20 - 3)) + '...') :
                        title.toUpperCase()) : 'QApp'}</Title>
                    </Body>
                    <Right style={{flex: 0, width: 50}}>
                        {rightSide}
                    </Right>
                </Header>
            );
        }
    }
}
