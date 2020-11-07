/**
 * Created by senthil on 23/11/17.
 */
import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import {View} from 'native-base';
import { Icon } from "native-base";
import { AppStyles } from "../../theme/style";
const ReactJ = require('react-native');
const {Dimensions, Platform } = ReactJ;
const deviceHeight = Dimensions.get('window').height;

import LinearGradient from 'react-native-linear-gradient';

const defaultColors = AppStyles.gradient.scolor;
const secondaryColors = AppStyles.gradient.secondary;
const gradientLevel = {
    main: [{x: 0, y: 0.5},{x: 1, y: 0.5}],
    sideBar: [{x: 0, y: 0.5},{x: 1, y: 0.9}],
    dashboard: [{x: 0, y: 0},{x: 0, y: 1}]
}


const gStyle = {
    title: {height:2 , marginTop: -7, marginRight:8,marginLeft:8},
    line: {height:2 , marginTop: -7, marginRight:8,marginLeft:8},
    card: {height:2},
    cardInner: {height:1}
}


class Gradient extends Component {
    render() {
        let {
            gstyle,
            start,
            end,
            colors,
            secondary,
            locations,
            screen,
            bottom,
            type,index,layoutNew, layoutTop,tirtary, bottomColor
        } = this.props;

        if(!start) {
            start = screen ? gradientLevel[screen][0] : gradientLevel.main[0]
        }
        if(!end) {
            end = screen ? gradientLevel[screen][1] : gradientLevel.main[1]
        }
        if(!index) {
            index = 0;
        }
        if(!gstyle && type) {
            gstyle = gStyle[type]
        }
        if(layoutTop == undefined) {
            layoutTop = true
        }
        if(!colors) {
            colors = secondary ? secondaryColors : defaultColors
        }
        if(tirtary) {
            colors =AppStyles.gradient.triColor
        }
        if(bottomColor) {
            colors =AppStyles.gradient.bottomColor
        }

        if(bottom) {
            return (
                <LinearGradient
                    locations={locations}
                    style={gstyle}
                    colors={colors}>{this.props.children}</LinearGradient>
            )
        }  else if(index == 1) {
            return (
                <LinearGradient locations={locations} style={gstyle} colors={colors}>{this.props.children}</LinearGradient>
            )
        } else if(index == 2) {
            return (
                <LinearGradient locations={locations} style={gstyle} colors={colors}>{this.props.children}</LinearGradient>
            )
        } else if(index == 3) {
            return (
                <LinearGradient locations={locations} style={gstyle} colors={colors}>{this.props.children}</LinearGradient>
            )
        } else if(index == 4) {
            return (
                <LinearGradient locations={locations} style={gstyle} colors={colors}>{this.props.children}</LinearGradient>
            )
        }  else {
            return (
                <LinearGradient
                    start={start}
                    end={end}
                    locations={locations}
                    style={gstyle}
                    colors={colors}>{this.props.children}</LinearGradient>
            )
        }
    }
}

export {
    Gradient
};