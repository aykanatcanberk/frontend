import axios from "axios";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getDeneyimler = () => {
  console.log(BASE_URL);
  return axios.get(`${BASE_URL}/deneyimler`);
};

export const addDeneyim = (newDeneyim) => {
  return axios.post(`${BASE_URL}/deneyimler`, newDeneyim);
};
