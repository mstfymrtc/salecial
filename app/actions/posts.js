export const FILTER_POSTS_WITH_TAG = "FILTER_POSTS_WITH_TAG";
export const UPDATE_POSTS = "UPDATE_POSTS";
export const SHARE_NEW_POST = "SHARE_NEW_POST";
export const UPDATE_POSTS_INITIAL = "UPDATE_POSTS_INITIAL";
export const SHARE_NEW_POST_INITIAL = "SHARE_NEW_POST_INITIAL";
export const FILTER_POSTS_WITH_TAG_INITIAL = "FILTER_POSTS_WITH_TAG_INITIAL";
import _ from "lodash";

export function fetchPosts() {
  return dispatch => {
    dispatch(updatePostsInitial());
    return fetch("http://demo4367135.mockable.io/postApi")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(updatePosts(json));
        console.log(json);

        return json;
      });
  };
}

export function newPost(title, base64, detail, UserEmail, postDate) {
  return dispatch => {
    dispatch(shareNewPostInitial());
    fetch("https://demo4367135.mockable.io/TakePicturePost", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postTitle: title,
        postBase64: base64,
        postDetail: detail,
        userEmail: UserEmail,
        postShareTime: postDate
      })
    })
      .then(response => console.log(response))
      .catch(error => {
        console.error(error);
      });
    dispatch(shareNewPost());
  };
}
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function filterPosts(filterArray) {
  return dispatch => {
    dispatch(filterPostsWithTagInitial());
    dispatch(filterPostsWithTag(filterArray));
  };
}

export const filterPostsWithTag = filterArray => ({
  type: FILTER_POSTS_WITH_TAG,
  filterArray

  //posts reducerına contentx listesini dönecem, o da bu liste ile postları listeleyecek.
});
export const filterPostsWithTagInitial = () => ({
  type: FILTER_POSTS_WITH_TAG_INITIAL

  //posts reducerına contentx listesini dönecem, o da bu liste ile postları listeleyecek.
});
export const updatePosts = posts => ({
  type: UPDATE_POSTS,
  posts
});

export const updatePostsInitial = () => ({
  type: UPDATE_POSTS_INITIAL
});

//TODO: KAYDET DEYINCE API'YE NEW POST ÇAĞRISI YAPILIR
//TODO: Bu post isteği gidince nesne oluşturulurken base64 değeri cognitive'e gönderilir,
//TODO: cognitive den gelen tagler paylaştığımız posta postTags olarak eklenir.

// DAHA SONRA UPDATE POSTS ÇAĞRILIR
export const shareNewPost = () => ({
  type: SHARE_NEW_POST
});
export const shareNewPostInitial = () => ({
  type: SHARE_NEW_POST_INITIAL
});
