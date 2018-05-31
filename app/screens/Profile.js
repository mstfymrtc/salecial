import React from "react";
import { View, ScrollView, Image, StatusBar, FlatList } from "react-native";
import {
  RkText,
  RkButton,
  RkStyleSheet,
  RkCard,
  RkModalImg,
  RkTheme
} from "react-native-ui-kitten";
import { Avatar } from "../components/avatar";
import { FontIcons } from "../assets/icons";
import posts from "../data/posts";
import { UtilStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { bootstrap } from "../bootstrap";
import { Gallery } from "../components/gallery";

const images = [
  require("./img/1.jpg"),
  require("./img/2.jpg"),
  require("./img/3.jpg"),
  require("./img/4.jpg"),
  require("./img/5.jpg"),
  require("./img/6.jpg"),
  require("./img/7.jpg"),
  require("./img/8.jpg"),
  require("./img/9.jpg"),
  require("./img/10.jpg"),
  require("./img/11.jpg"),
  require("./img/12.jpg")
];
{
  /* <Image
              style={{
                height: 128,
                borderRadius: 64,
                width: 128,
                marginBottom: 5
              }}
              source={require("./images/person.jpg")}
            />
            <RkText rkType="header2">Mustafa Yumurtacı</RkText>
          </View> */
}

export default class Profile extends React.Component {
  componentWillMount() {
    console.log("rendered");
    bootstrap();
  }
  handleRoute() {
    this.props.navigation.navigate("EditProfile");
  }

  render() {
    let likeStyle = [styles.buttonIcon, { color: RkTheme.colors.accent }];
    let iconButton = [
      styles.buttonIcon,
      { color: RkTheme.current.colors.text.hint }
    ];
    return (
      <ScrollView style={styles.root}>
        <View style={{ paddingTop: StatusBar.currentHeight }} />

        <View style={[styles.header, styles.bordered]}>
          <View style={styles.row}>
            <View style={styles.buttons}>
              <RkButton style={styles.button} rkType="icon circle">
                <RkText rkType="moon large primary">{FontIcons.mail}</RkText>
              </RkButton>
            </View>
            <Image
              style={{
                height: 128,
                borderRadius: 64,
                width: 128,
                marginBottom: 5
              }}
              source={require("./images/person.jpg")}
            />
            <View style={styles.buttons}>
              <RkButton
                onPress={this.handleRoute.bind(this)}
                style={styles.button}
                rkType="icon circle"
              >
                <RkText rkType="moon large primary">{FontIcons.article}</RkText>
              </RkButton>
            </View>
          </View>
          <View style={styles.section}>
            <RkText rkType="header2">Mustafa Yumurtacı</RkText>
          </View>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.section}>
            <RkText rkType="header3" style={styles.space}>
              543
            </RkText>
            <RkText rkType="secondary1 hintColor">Gönderi</RkText>
          </View>
          <View style={styles.section}>
            <RkText rkType="header3" style={styles.space}>
              12
            </RkText>
            <RkText rkType="secondary1 hintColor">Takipçi</RkText>
          </View>
          <View style={styles.section}>
            <RkText rkType="header3" style={styles.space}>
              12325
            </RkText>
            <RkText rkType="secondary1 hintColor">Takip Edilen</RkText>
          </View>
        </View>
        <Gallery items={images} />
      </ScrollView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    paddingTop: 25,
    paddingBottom: 17
  },
  row: {
    flexDirection: "row"
  },
  userInfo: {
    flexDirection: "row",
    paddingVertical: 18
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base
  },
  section: {
    flex: 1,
    alignItems: "center"
  },
  space: {
    marginBottom: 3
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    alignSelf: "center",
    flexDirection: "row",
    flex: 0,
    width: 1,
    height: 42
  },
  buttons: {
    flex: 1
  },
  button: {
    marginTop: 27.5,
    alignSelf: "center"
  },
  screen: {
    backgroundColor: "#f0f1f5",
    padding: 12
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
}));
