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

import { Dashboard }  from './screens/index';

const Stack = createStackNavigator();

class AppWithNavigationState extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Dashboard" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Dashboard" component={Dashboard} />
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