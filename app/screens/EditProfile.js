import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, StatusBar } from "react-native";
import { bootstrap } from "../bootstrap";
import { editUser, updateUser } from "../actions/user";
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
  RkButton
} from "react-native-ui-kitten";
import { FontAwesome } from "../assets/icons";

export default class EditProfile extends Component {
  componentWillMount() {
    bootstrap();
  }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     fullName: "Musafa YUMURRTACI",
  //     email: "mstfymrtci@gmail.com",
  //     city: "Adana",
  //     password: "*29071997*",
  //     newPassword: "*29071997*",
  //     confirmPassword: "*29071997*"
  //   };
  // }

  handleEditProfile() {
    const payload = {
      fullName: this.fullName,
      email: this.email,
      city: this.city,
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    };

    //TODO: ALTTAKİ SATIRI ÇALIŞIR HALE GETİR!
    // this.props.dispatch(editUser(fullName,email,city,oldPassword,newPassword,confirmPassword))
    //this.props.dispatch(updateUser())
    console.log(
      payload.fullName,
      payload.email,
      payload.city,
      payload.oldPassword,
      payload.newPassword,
      payload.confirmPassword
    );
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={{ paddingTop: StatusBar.currentHeight }} />

        <RkAvoidKeyboard>
          <View style={styles.header}>
            <Image
              style={{
                height: 128,
                borderRadius: 64,
                width: 128,
                marginBottom: 5
              }}
              source={require("./images/person.jpg")}
            />
          </View>

          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType="header6 primary">BİLGİLERİN</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Ad / Soyad"
                placeholder="Musafa YUMURRTACI"
                rkType="right clear"
                // onChangeText={text => this.setState({ fullName: text })}
                onChangeText={text => (this.fullName = text)}
              />
            </View>

            <View style={styles.row}>
              <RkTextInput
                label="Email"
                placeholder="mstfymrtci@gmail.com"
                rkType="right clear"
                // onChangeText={text => this.setState({ email: text })}
                onChangeText={text => (this.email = text)}
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Şehir"
                placeholder="Adana"
                rkType="right clear"
                // onChangeText={text => this.setState({ city: text })}
                onChangeText={text => (this.city = text)}
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType="primary header6">ŞİFRENİ DEĞİŞTİR</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Eski Şifre"
                // placeholder="*29071997*"
                rkType=" right clear"
                secureTextEntry={true}
                // onChangeText={text => this.setState({ password: text })}
                onChangeText={text => (this.oldPassword = text)}
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Yeni Şifre"
                // placeholder="*29071997*"
                rkType=" right clear"
                secureTextEntry={true}
                // onChangeText={text => this.setState({ newPassword: text })}
                onChangeText={text => (this.newPassword = text)}
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Şifreyi Onayla"
                // placeholder="*29071997*"
                rkType="right clear"
                secureTextEntry={true}
                // onChangeText={text => this.setState({ confirmPassword: text })}
                onChangeText={text => (this.confirmPassword = text)}
              />
            </View>
          </View>
          <View style={{ alignItems: "center", paddingBottom: 10 }}>
            <RkButton
              onPress={() => this.handleEditProfile()}
              rkType="info rounded medium"
            >
              Kaydet
            </RkButton>
          </View>
        </RkAvoidKeyboard>
      </ScrollView>
    );
  }
}

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
