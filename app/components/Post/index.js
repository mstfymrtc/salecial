// import {
//   Container,
//   Header,
//   Content,
//   Card,
//   Root,
//   CardItem,
//   Thumbnail,
//   Text,
//   Button,
//   Icon,
//   Left,
//   Body,
//   Right
// } from "native-base";
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Image, Dimensions, TouchableOpacity } from "react-native";
// import { Font, AppLoading } from "expo";
// import ViewPost from "../../screens/ViewPost";
// var { width } = Dimensions.get("window");

// export default class Post extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: true };
//     // this.handleImagePress = this.handleImagePress.bind(this);
//   }

//   handleImagePress() {
//     console.log("image pressed");

//     // NavigationService.navigate("ViewPost", {
//     //   postTitle: this.props.postTitle,
//     //   userName: this.props.userName,
//     //   postDetail: this.props.postDetail,
//     //   postShareTime: this.props.postShareTime,
//     //   postImage: this.props.postImage
//     // }
//   }

//   componentWillMount() {
//     Font.loadAsync({
//       Roboto: require("native-base/Fonts/Roboto.ttf"),
//       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
//     }).then(() => {
//       this.setState({
//         loading: false
//       });
//     });
//   }

//   render() {
//     //   const {userPicUrl,userName,postTitle,postImage,postShareTime}=this.props.item;

//     if (this.state.loading) {
//       return <AppLoading />;
//     }
//     /*
//             {this.props.picture !== null ? && (
//               <Thumbnail source={require("./images/person.jpg")} />
//             )}
//             */
//     return (
//       <Card key={this.props.postId} style={{ width: width }}>
//         <CardItem>
//           <Left>
//             <Body>
//               <Text>{this.props.userName}</Text>
//               <Text note>{this.props.postTitle}</Text>
//             </Body>
//           </Left>
//         </CardItem>
//         <TouchableOpacity>
//           {/*onPress={this.props.navigate}> */}
//           <CardItem cardBody>
//             <Image
//               source={require("./images/samplePost.jpg")}
//               style={{ height: 200, width: 200, flex: 1 }}
//             />
//           </CardItem>
//         </TouchableOpacity>

//         <CardItem>
//           <Left>
//             <Button transparent>
//               <Icon active name="thumbs-up" />
//               <Text>12 Likes</Text>
//             </Button>
//           </Left>
//           {/* <Body>
//                     <Button transparent>
//                         <Icon active name="chatbubbles" />
//                         <Text>4 Comments</Text>
//                     </Button> 
//                 </Body> */}
//           <Right>
//             <Text>{this.props.postShareTime}</Text>
//           </Right>
//         </CardItem>
//       </Card>
//     );
//   }
// }

// // Post.propTypes = {
// //   userPicUrl: PropTypes.string,
// //   userName: PropTypes.string,
// //   postTitle: PropTypes.string,
// //   postImage: PropTypes.string,
// //   postShareTime: PropTypes.string,
// //   picture: PropTypes.bool,
// //   onImagePress: PropTypes.func
// // };
