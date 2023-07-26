import axios from "axios";
// require("dotenv").config();
// console.log(process.env.BACKEND_URL);

// your other code below

//process.env.BACKEND_URL +
export const getUserByEmail = async (eMail) => {
  try {
    console.log("aAAA: " + process.env.REACT_APP_BACKEND_URL + "users?eMail=" + eMail);
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "users?eMail=" + eMail
    );
    console.log("user returned beautiful: " + response.data[0].password);
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    console.error("Login Failed due to: " + err.message);
    return {}; // Return an empty object in case of an error
  }
};

export const getUserByName = (name) => {
  let userReturn = {};
  axios
    .get(process.env.BACKEND_URL + "users?useName=" + name)
    .then((user) => {
      userReturn = user;
    })
    .catch((err) => {
      console.error("Login Failed due to :" + err.message);
    });

  return userReturn;
};
