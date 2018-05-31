import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from "./config/routes";
import { AppLoading, Font } from "expo";
import "./reducers";
import { Provider } from "react-redux";

import store from "./config/store";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",

  $white: "#FFFFFF",
  $lightGray: "#F0F0F0",
  $border: "#979797",
  $inputText: "#797979"
  // $outline: 1
});

export default class App extends Component {
  state = {
    loaded: false
  };
  _loadAssets = async () => {
    await Font.loadAsync({
      fontawesome: require("./assets/fonts/fontawesome.ttf"),
      icomoon: require("./assets/fonts/icomoon.ttf"),
      "Righteous-Regular": require("./assets/fonts/Righteous-Regular.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf")
    });
    this.setState({ loaded: true });
  };

  componentWillMount() {
    this._loadAssets();
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
