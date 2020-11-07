/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home }  from './screens/index';

const Stack = createStackNavigator();

class AppWithNavigationState extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}
            
AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});
        
export default connect(mapStateToProps)(AppWithNavigationState);