import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getUserById = async (userId) => {
  // try {
  //   const response = await axios.get(
  //     process.env.REACT_APP_BACKEND_URL + "users?userID=" + userId
  //   );
  //   return response.data; // Assuming you want to return the data array from the response
  // } catch (err) {
  //   console.error("Login Failed due to: " + err.message);
  //   return {}; // Return an empty object in case of an error
  // }

  const user = await axios.get(`${BASE_URL}/users/${userId}`);
 
  return user.data;
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

export const getUserPrivateInformationById = async (id) => {
  const user = await axios.get(`${BASE_URL}/users/${id}`);
 
  return user.data.userPrivateInfo;
};

export const getUserWorkBackgroundById = async (id) => {
  // `http://localhost:5071/api/Auth/loginPerson`
  const user = await axios.get(`${BASE_URL}/users/${id}`);
 
  return user.data.userWorkBackground;
};

export const updatePrivateInformation = async (newPrivateInfo, id) => {
  return axios.put(`${BASE_URL}/users/${id}/`, newPrivateInfo);
};

export const updateUserEduBackgroundInformation = async (newEduInfo, id) => {
  return axios.put(`${BASE_URL}/userEduBackground/${id}`, newEduInfo);
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
