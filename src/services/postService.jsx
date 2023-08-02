import axios from "axios";

const addPost = (newPost) => {
  const apiUrl = "http://localhost:3000/kurumsal-anasayfa";
  return axios.post(apiUrl, newPost);
};

export default addPost;
