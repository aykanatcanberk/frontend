import axios from "axios";
const addAdvert = (newAdvert) => {
  const apiUrl = "http://localhost:3000/kurumsal-ilanlar";
  return axios.post(apiUrl, newAdvert);
};

export function getIlan(id) {
  const baseUrl = "http://localhost:3000/kurumsal-ilanlar";
  const url = id ? `${baseUrl}/${id}` : baseUrl;
  return axios.get(url);
}

export default addAdvert;
