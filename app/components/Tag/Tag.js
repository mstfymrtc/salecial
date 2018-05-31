import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import MultipleTags from "react-native-multiple-tags";

export default class Tags extends Component {
  render() {
    const contentArr = [];
    return (
      <View style={styles.container}>
        <MultipleTags
          visibleOnOpen={true}
          // tags={tags}
          search
          onChangeItem={content => {
            contentArr.push[content];
          }}
          title="Fruits"
          {...this.props}
        />
      </View>
    );
  }
}
