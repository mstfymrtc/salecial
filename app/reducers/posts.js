import {
  UPDATE_POSTS,
  SHARE_NEW_POST,
  UPDATE_POSTS_INITIAL,
  SHARE_NEW_POST_INITIAL,
  FILTER_POSTS_WITH_TAG,
  FILTER_POSTS_WITH_TAG_INITIAL
} from "../actions/posts";

const initialState = {
  loading: false,
  data: []
};
function filterByRights(data, filterArray) {
  return _.filter(data, function(post) {
    return _.any(post.postTags, function(postTag) {
      return _.contains(postTags, postTag);
    });
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSTS_INITIAL:
      return {
        ...state,
        loading: true
      };

    case UPDATE_POSTS:
      return {
        ...state,
        loading: false,
        data: action.posts.data
      };
    case SHARE_NEW_POST:
      return {
        ...state,
        loading: false
      };

    case SHARE_NEW_POST_INITIAL:
      return {
        ...state,
        loading: true
      };
    case FILTER_POSTS_WITH_TAG:
      return {
        ...state,
        loading: false
      };

    // data: _.flatten(_.map(filterArray,function(other){
    //  return _.where(data.postTags,other);
    // }}));
    // ...state,
    // loading: false,
    // data: _.includes(data, action.filterArray)

    //   var filtered_posts = _.filter(allPosts, function(p) {
    //     return _.includes(filterArray, p.postTags);
    //   });
    //   return {

    //     state.loading:false,
    //     state.data:action.posts,
    //     loading: false,
    //     data:action.posts
    //   };
    case FILTER_POSTS_WITH_TAG_INITIAL:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

// console.log(initialState);
// console.log(reducer(initialState, updateTags()));

export default reducer;
