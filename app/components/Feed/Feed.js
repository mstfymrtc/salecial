import React, { Component } from "react";
import PropTypes from "prop-types";
import { FlatList, ScrollView, Text, View } from "react-native";
import Post from "../Post";
export default class Feed extends Component {
  renderItem(item) {
    return (
      <Post
        key={item.postId}
        nxxxx={this.props.navigateToPostDetail(item)}
        userPicUrl={item.user.userPicUrl}
        postId={item.postId}
        userName={item.user.userName}
        postTitle={item.postTitle}
        postDetail={item.postDetail}
        postImage={item.postImage}
        postShareTime={item.postShareTime}
        picture={this.props.picture}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.postList}
          renderItem={item => this.renderItem(item.item)}
          keyExtractor={item => item.postId}
        />
      </View>
    );
  }
}
