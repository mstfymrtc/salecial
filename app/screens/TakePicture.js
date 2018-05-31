import React, { Component } from "react";
import {
  Image,
  View,
  StatusBar,
  Dimensions,
  Button,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView
} from "react-native";
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
  RkButton
} from "react-native-ui-kitten";
import { Font, AppLoading, ImagePicker } from "expo";
import { connect } from "react-redux";
import { newPost } from "../actions/posts";

const { width } = Dimensions.get("window");
class TakePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerResult: null
    };
  }
  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3]
    });

    this.setState({
      pickerResult
    });
    console.log(pickerResult);
  };

  handleShare(image) {
    // const payload = {
    //   postTitle: this.postTitle,
    //   postDetail: this.postDetail,
    //   postImageBase64: image
    // };
    // this.props.dispatch(
    //   newPost(
    //     postTitle,
    //     postImageBase64,
    //     postDetail,
    //     "mstfymrtci@gmail.com",
    //     "dün"
    //   )
    // );
    this.props.dispatch(
      newPost("başlık", "safdasfads", "Ayrıntı", "mstfymrtci@gmail.com", "dün")
    );

    //TODO: ALTTAKİ SATIRI ÇALIŞIR HALE GETİR!
    // this.props.dispatch(shareNewPost(postTitle,postImageBase64,postDetail,this.state.user))
    // console.log(payload.postTitle, payload.postDetail, payload.postImageBase64);
  }

  render() {
    let { pickerResult } = this.state;

    let imageUri = pickerResult
      ? `data:image/jpg;base64,${pickerResult.base64}`
      : null;
    return (
      <ScrollView style={styles.root}>
        <View style={{ paddingTop: StatusBar.currentHeight * 2 }} />
        <View style={styles.row}>
          <RkTextInput
            underlineColor="#1E7ECC"
            label="Başlık"
            rkType="right clear"
            onChangeText={text => (this.postTitle = text)}
          />
        </View>

        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{
              marginTop: 30,
              marginBottom: 20,
              width: "100%",
              height: width / 1.3
            }}
          />
        ) : (
          <TouchableHighlight onPress={() => this._pickImage()}>
            <Image
              source={require("./images/placeholder.jpg")}
              style={{
                marginTop: 40,
                marginBottom: 20,
                width: "100%",
                height: width / 1.3
              }}
            />
          </TouchableHighlight>
        )}
        <View style={styles.row}>
          <RkTextInput
            underlineColor="#1E7ECC"
            label="Açıklama"
            rkType="right clear"
            onChangeText={text => (this.postDetail = text)}
          />
        </View>

        {imageUri ? (
          <View
            style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}
          >
            <RkButton
              rkType="basic large"
              onPress={() => this.handleShare(imageUri)}
            >
              PAYLAŞ!
            </RkButton>
          </View>
        ) : null}
      </ScrollView>

      // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      //   <Button
      //     title="Pick an image from camera roll"
      //     onPress={this._pickImage}
      //   />
      //   {pickerResult ? (
      //     <Image
      //       source={{ uri: imageUri }}
      //       style={{ width: 200, height: 200 }}
      //     />
      //   ) : null}
      //   {pickerResult ? (
      //     <Text style={styles.paragraph}>
      //       Keys on pickerResult: {JSON.stringify(Object.keys(pickerResult))}
      //     </Text>
      //   ) : null}
      // </View>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(TakePicture);

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingVertical: 25,
    alignItems: "center"
  },
  section: {
    marginVertical: 25
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: "center"
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32
  }
}));
