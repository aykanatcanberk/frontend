import axios from "axios";

const addPost = (newPost) => {
  const apiUrl = "http://localhost:5071/Post";
  return axios.post(apiUrl, newPost);
};

export default addPost;
