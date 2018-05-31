import React from "react";
import { Button, Text, View } from "react-native";
import { StackNavigator } from "react-navigation"; // Version can be specified in package.json


export default StackNavigator(
  {
    // Home: { screen: Home },
    // Profile: { screen: Profile },
    // EditProfile: { screen: EditProfile },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null
      }
    }
  },
  { initialRouteName: "Home" }
);
