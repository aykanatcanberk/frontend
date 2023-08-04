import axios from "axios";

const addPost = (newPost) => {
  const apiUrl = "http://localhost:5071/Post";
  const token = localStorage.getItem("token");

  return axios.post(apiUrl, newPost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default addPost;
