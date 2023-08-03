import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const login1 = ({ email, password }) => {
  return axios.post(`${BASE_URL}/Auth/login`, { email, password });
};
export const login2 = ({ email, password }) => {
  return axios.post(`${BASE_URL}/Auth/login`, { email, password });
};
