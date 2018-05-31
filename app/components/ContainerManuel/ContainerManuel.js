import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

import styles from "./styles";

const ContainerManuel = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

ContainerManuel.propTypes = {
  children: PropTypes.any
};

export default ContainerManuel;
