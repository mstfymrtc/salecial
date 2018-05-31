import { combineReducers } from "redux";
import tags from "./tags";
import posts from "./posts";

export default combineReducers({
  tags,
  posts
});
