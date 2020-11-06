/**
 * Created by senthil on 28/10/17.
 */
import React, {Component} from "react";

import {Badge, Body, Button, Header, Icon, Left, Right, Text, View, Title} from "native-base";
// import FCM from 'react-native-fcm';
// import {ActionCreators, bindActionCreators, connect} from "../../common/imports/redux/";
export class AppHeader extends Component {

    render() {
        let { title, right, search, rightValue } = this.props;
        let rightSide = <Button/>;

        if(search) {
          rightSide = rightValue
        }
        return (
            <Header>
                <Left style={{flex:0, width:50}}>
                    <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon active name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title header>{  ((title.toUpperCase()).length >30) ?
                      (((title.toUpperCase()).substring(0,30-3)) + '...') :
                      title.toUpperCase()}</Title>
                </Body>
                <Right style={{flex:0, width:50}}>
                    {rightSide}
                </Right>
            </Header>
        );
    }
}

