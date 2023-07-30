import axios from "axios";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const addPost = (newPost) => {
  return axios.post("${BASE_URL}/kurumsal-anasayfa", newPost);
};
