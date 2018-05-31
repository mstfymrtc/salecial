import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import {
  View,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Dimensions,
  Text,
  ActivityIndicator
} from "react-native";

import {
  RkButton,
  RkText,
  RkCard,
  RkTheme,
  RkStyleSheet,
  RkModalImg
} from "react-native-ui-kitten";
import { connect } from "react-redux";

// import ImageView from 'react-native-image-view';
import { UtilStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
// import posts from "../data/posts";
import { fetchTags } from "../actions/tags";
import { filterPosts, fetchPosts } from "../actions/posts";
import { updateUser } from "../actions/user";
import MultipleTags from "react-native-multiple-tags";
var { width } = Dimensions.get("window");

// const tags = [
//   "cherry",
//   "mango",
//   "cashew",
//   "almond",
//   "guava",
//   "pineapple",
//   "orange",
//   "pear",
//   "date",
//   "strawberry",
//   "pawpaw",
//   "banana",
//   "apple",
//   "grape",
//   "lemon"
// ];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      contentx: []
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchTags());
    this.props.dispatch(fetchPosts());
  }

  //TODO: MAIN ÇEKME ÇALIŞINCA ÇALIŞACAK!
  // componentWillMount() {
  //   //swipe yapıldığında çalışacak.
  //   AddFetchedTagsToAvaibleTags("tag1", "tag2", "tag3");
  // }
  //TODO: MAIN ÇEKME ÇALIŞINCA ÇALIŞACAK!

  makeRemoteRequest() {
    this.setState({
      refreshing: false
    });
  }
  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  // handleRefresh() {
  //   bringTags();
  //   bringUser();
  //   bringPosts();
  // }

  filterPosts = contentx => {
    this.setState({ contentx });
    console.log("pressed", contentx);
    this.props.dispatch(filterPosts(contentx));
    //TODO:burayı this.props.dispatch(filterPostsWithTag()) olarak değiştir.
    // this.props.dispatch(filterPostsWithTag());
  };

  //:TODO:bu fonksiyonu yaz!

  bringTags = () => {
    // this.props.dispatch(updateTags())
    // main action çalışınca çalışır
  };

  bringUser = () => {
    // this.props.dispatch(updateUser())
  };
  bringPosts = () => {
    //this.props.dispatch(updatePosts())
  };

  render() {
    const { loadingTags, loadingPosts, tags, posts } = this.props;
    const contentArr = [];
    let likeStyle = [styles.buttonIcon, { color: RkTheme.colors.accent }];
    let iconButton = [
      styles.buttonIcon,
      { color: RkTheme.current.colors.text.hint }
    ];

    if (this.props.loadingTags && this.props.loadingPosts)
      return (
        <View
          style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    console.log("home", this.props.tags);

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <MultipleTags
            visibleOnOpen={true}
            // tags={tags}
            search
            onChangeItem={contentx => {
              () => this.filterPosts(contentx);
            }}
            title="Fruits"
            tags={tags}
            //TODO: tags={this.state.tags} olarak değişecek.
          />
        </View>

        <FlatList
          data={this.props.posts}
          style={[UtilStyles.container, styles.screen]}
          renderItem={({ item }) => {
            return (
              <RkCard style={{ marginBottom: 10 }}>
                <View rkCardHeader>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={{ uri: item.user.userPic }}
                      style={styles.avatar}
                    />
                    <View style={{}}>
                      <RkText rkType="header">{item.user.userName}</RkText>
                      <RkText rkType="subtitle">{item.postShareTime}</RkText>
                    </View>
                  </View>

                  <RkButton rkType="clear">
                    <Icon style={styles.dot} name={"circle"} />
                    <Icon style={styles.dot} name={"circle"} />
                    <Icon style={styles.dot} name={"circle"} />
                  </RkButton>
                </View>

                <RkModalImg rkCardImg source={{ uri: item.imageUri }} />

                {/* <Image rkCardImg source={require('./img/post2.png')}/> */}

                <View rkCardHeader style={{ paddingBottom: 2.5 }}>
                  <View>
                    <RkText rkType="header xxlarge">{item.postTitle}</RkText>
                    {/* <RkText rkType='subtitle'>Subtitle</RkText> */}
                  </View>
                </View>
                <View rkCardContent>
                  <RkText rkType="cardText">{item.postDetail}</RkText>
                </View>

                <View rkCardFooter style={styles.footer}>
                  <RkButton rkType="clear link accent">
                    <Icon name="heart" style={likeStyle} />
                    <RkText rkType="accent">18</RkText>
                  </RkButton>
                  <RkButton rkType="clear link">
                    <Icon name="comment-o" style={iconButton} />
                    <RkText rkType="hint">2</RkText>
                  </RkButton>
                  <RkButton rkType="clear link">
                    <Icon name="send-o" style={iconButton} />
                    <RkText rkType="hint">6</RkText>
                  </RkButton>
                </View>
              </RkCard>
            );
          }}
          keyExtractor={item => item.postId}
          refreshing={this.state.refreshing}
          onRefresh={() => this.handleRefresh()}
        />
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  container: {
    position: "relative",
    left: 0,
    top: 0,
    right: 0,
    "@media ios": {
      paddingTop: 20
    },
    "@media android": {
      paddingTop: StatusBar.currentHeight
    },
    width: width
  },
  button: {
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  icon: {
    width: 18
  },
  screen: {
    backgroundColor: "#f0f1f5",
    // paddingLeft: 12,
    //paddingRight: 12
    marginTop: 9,
    marginLeft: 9,
    marginRight: 9
  },
  buttonIcon: {
    marginRight: 7,
    fontSize: 19.7
  },
  footer: {
    marginHorizontal: 16
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 17
  },
  dot: {
    fontSize: 6.5,
    color: "#0000008e",
    marginLeft: 2.5,
    marginVertical: 10
  },
  floating: {
    width: 56,
    height: 56,
    position: "absolute",
    zIndex: 200,
    right: 16,
    top: 173
  },
  footerButtons: {
    flexDirection: "row"
  },
  overlay: {
    justifyContent: "flex-end",
    paddingVertical: 23,
    paddingHorizontal: 16
  }
});

const mapStateToProps = state => ({
  tags: state.tags.data,
  posts: state.posts.data,
  loadingTags: state.tags.loading,
  loadingPosts: state.posts.loading
});

export default connect(mapStateToProps)(Home);
