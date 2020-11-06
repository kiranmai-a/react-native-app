/**
 * Created by Sai Deepak on 28/06/20.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Provider } from "react-redux";
import { StyleProvider } from "native-base";

import { store } from "./configureStore";
import AppWithNavigationState from '../App';
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

class Setup extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </StyleProvider>
    );
  }
}

export {
  Setup, store
}