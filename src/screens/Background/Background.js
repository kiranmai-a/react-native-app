/**
 * Created by senthil on 02/11/17.
 */
import React, { Component } from 'react';
import {ImageBackground} from "react-native";
import {
    Content,
    Container
} from 'native-base';

import {Images, AppStyles} from '../../theme/style';
import {Gradient} from '../'

export default class Background extends Component {
    // render() {
    //     var screen = AppStyles.screen;
    //     let {bg} = this.props;
    //     if(!bg){
    //         bg = screen.bg;
    //     }
    //     return (
    //         <Container style={{backgroundColor:  bg }}>
    //             <Gradient gstyle={{flex: 1, borderTopRightRadius: 500, borderBottomLeftRadius: 500}} tirtary={true}>
    //             {this.props.children}
    //
    //             </Gradient>
    //         </Container>
    //
    //
    //     );
    // }

    render() {
        var screen = AppStyles.screen
        return (
            <Container style={{backgroundColor: screen.bg}}>
                {this.props.children}
            </Container>
        );
    }
}
