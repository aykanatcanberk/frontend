import axios from "axios";
import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postTypes";

export const fetchPosts = (
  fetchLocation = "https://jsonplaceholder.typicode.com/posts"
) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get(fetchLocation)
      .then((axiosResponse) => {
        const posts = axiosResponse.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.massage))
      });
  };
};

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
