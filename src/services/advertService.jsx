import axios from "axios";
const apiUrl = 'http://localhost:3000/kurumsal-ilanlar'; 
export const addAdvert = (newAdvert) => {
return axios.post(apiUrl, newAdvert);
  };

export const getAdvert = () => {
  return axios.get(apiUrl);
};