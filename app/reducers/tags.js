import { UPDATE_TAGS, UPDATE_TAGS_INITIAL } from "../actions/tags";

const initialState = {
  loading: false,
  data: ["ayakkabı", "kıyafet", "giysi", "yelek"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TAGS_INITIAL:
      return {
        ...state,
        loading: true
      };

    case UPDATE_TAGS:
      return {
        ...state,
        loading: false,
        data: action.tags.data
      };
    default:
      return state;
  }
};

// console.log(initialState);
// console.log(reducer(initialState, updateTags()));

export default reducer;
