import React, { Component } from "react";
import { FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { Text, View } from "native-base";

import { Images } from "../../theme/style";
import styles from "./style";
import { ActionCreators, bindActionCreators, connect } from "../../common/imports/redux/";


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getlanguages();
    }

    render() {
        let data = this.props.languages.length > 0 ? false: true;
        
        return (
            <View>
                {!data ? <FlatList
                    ListEmptyComponent={true}
                    data={this.props.languages}
                    horizontal={false}
                    numColumns={1}
                    renderItem={({item}) => (
                        <View style={[styles.colWidth2, {alignSelf: "center"}]}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Category1');
                            }}>
                                <View style={{margin : 5, marginBottom: 20}}>
                                    <ImageBackground
                                        source={Images[item.icon]}
                                        style={styles.container}>
                                        <View style={[styles.overlay,{backgroundColor: item.bgColor}]}>
                                            <Text style={{margin: 3}}> {item.name}</Text>
                                            {item.text == 'A' ? <Text style = {styles.textStyle} > {item.text}</Text>
                                                : <Text style = {[styles.textStyle, {bottom: 25}]} > {item.text}</Text>}

                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) }
                /> : <View></View>}       
            </View>
        );
    }
}

function bindAction(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = state => ({
    languages: state.languageReducer.languages,
})

export default connect(mapStateToProps, bindAction)(Dashboard);