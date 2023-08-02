import axios from "axios";
<<<<<<< HEAD
const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const addPost = (newPost) => {
  return axios.post("${BASE_URL}/kurumsal-anasayfa", newPost);
=======

const addPost = (newPost) => {
  const apiUrl = "http://localhost:3000/kurumsal-anasayfa";
  return axios.post(apiUrl, newPost);
>>>>>>> 2081ece6df8e9f49d36edb5e2c0261c2e3b774ea
};
