import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
// export const getAllPosts = async () => {
//   try {
//     const response = await axios.get(
//       process.env.REACT_APP_BACKEND_URL + "posts"
//     );
//     return response.data; // Assuming you want to return the data array from the response
//   } catch (err) {
//     console.error("Login Failed due to: " + err.message);
//     return {}; // Return an empty object in case of an error
//   }
// };

export const getAllPosts = () => {
  return axios.get(`${BASE_URL}/posts`);
};

export const getUserPosts = async (userId) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "posts?userId=" + userId
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    return {}; // Return an empty object in case of an error
  }
};

const addPost = async (newPost, path) => {
  return axios.post(process.env.REACT_APP_BACKEND_URL + path, newPost);
};

export default addPost;
