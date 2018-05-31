export const UPDATE_TAGS = "UPDATE_TAGS";
export const UPDATE_TAGS_INITIAL = "UPDATE_TAGS_INITIAL";

export function fetchTags() {
  return dispatch => {
    dispatch(updateTagsInitial());
    return fetch("http://demo4367135.mockable.io/mstfymrtc")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(updateTags(json));
        console.log(json);

        return json;
      });
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const updateTagsInitial = () => ({
  type: UPDATE_TAGS_INITIAL
});

export const updateTags = tags => ({
  type: UPDATE_TAGS,
  tags
});

// export function updateTags(tags: Object) {
//   console.log("Tags", tags);
//   return {
//     type: UPDATE_TAGS,
//     tags
//   };
// }

//reducera tags listesini dönecem, o da bu liste ile taglari güncelleyecek
// (tags) listesini

// const trdy = {
//   loading: false,
//   items: ["1321", "3224", "2435"]
// };

// console.log(updateTagsInitial());
// console.log(updateTags(trdy));
