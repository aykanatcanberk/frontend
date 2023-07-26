import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "posts"
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    console.error("Login Failed due to: " + err.message);
    return {}; // Return an empty object in case of an error
  }
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

export const getUserByName = async (userName) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "users?userName=" + userName
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    return {}; // Return an empty object in case of an error
  }
};
