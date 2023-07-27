// services/deneyimService.js

import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getDeneyimler = () => {
  return axios.get(`${BASE_URL}/deneyimler`);
};

export const addDeneyim = (newDeneyim) => {
  return axios.post(`${BASE_URL}/deneyimler`, newDeneyim);
};
