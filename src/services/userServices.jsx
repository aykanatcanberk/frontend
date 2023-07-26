import axios from "axios";

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "users?userID=" + userId
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    console.error("Login Failed due to: " + err.message);
    return {}; // Return an empty object in case of an error
  }
};

//process.env.BACKEND_URL +
export const getUserByEmail = async (eMail) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "users?eMail=" + eMail
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    return {}; // Return an empty object in case of an error
  }
};

// // NOT RECOMENDED, AS THERE CAN BE MORE THAN 1 USER WITH THE SAME NAME
// export const getUserByName = async (userName) => {
//   try {
//     const response = await axios.get(
//       process.env.REACT_APP_BACKEND_URL + "users?userName=" + userName
//     );
//     return response.data; // Assuming you want to return the data array from the response
//   } catch (err) {
//     return {}; // Return an empty object in case of an error
//   }
// };
