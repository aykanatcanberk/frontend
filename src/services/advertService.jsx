import axios from 'axios';

export const getAllAdverts = async () => {
  try {
    const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "adverts"
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    console.error("Login Failed due to: " + err.message);
    return {}; // Return an empty object in case of an error
  }
};

const addAdvert = async (newAdvert) => {

  try {
    const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "adverts"
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    console.error("Login Failed due to: " + err.message);
    return {}; // Return an empty object in case of an error
  }

    // const apiUrl = 'http://localhost:3000/kurumsal-ilanlar'; 
    // return axios.post(apiUrl, newAdvert);
  };
  
  export default addAdvert;