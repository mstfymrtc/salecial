import { StatusBar, StyleSheet } from "react-native";
import { RkTheme } from "react-native-ui-kitten";
import { DefaultTheme } from "./defaultTheme";
import { scale, scaleModerate, scaleVertical } from "./utils/scale";

export let bootstrapDefault = () => {
  RkTheme.setTheme(DefaultTheme, null);

 

  StatusBar.setBarStyle("dark-content", true);
};
