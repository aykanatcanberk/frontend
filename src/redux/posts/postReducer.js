import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postTypes";

const initialState = {
  loading: "false",
  posts: [],
  error: "",
};

const postsReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...previousState,
        loading: true,
        posts: [],
        error: "",
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...previousState,
        loading: false,
        posts: [],
        error: action.payload,
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...previousState,
        loading: false,
        posts: action.payload,
        error: "",
      };

    default:
      return previousState;
  }
};

export default postsReducer;
