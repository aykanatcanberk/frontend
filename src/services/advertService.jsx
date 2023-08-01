import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const addAdvert = (newAdvert) => {
  return axios.post(`${BASE_URL}/kurumsal-ilanlar`, newAdvert);
};

export const getAdverts = () => {
  return axios.get(`${BASE_URL}/kurumsal-ilanlar`);
};

export const getAdvertApplicationStatus = (birey_id, ilan_id) => {
  return axios.get(
    `${BASE_URL}/appliedAdverts?birey_id=${birey_id}&ilan_id=${ilan_id}`
  );
};
// ?birey_id=${birey_id}&ilan_id=${ilan_id}
export const applyAdvert = (birey_id, ilan_id, firma_id) => {
  return axios.post(`${BASE_URL}/appliedAdverts`, {
    birey_id,
    ilan_id,
    firma_id,
  });
};

export const cancelAdvert = (birey_id, ilan_id) => {
  return axios.delete(
    `${BASE_URL}/appliedAdverts?birey_id=${birey_id}&ilan_id=${ilan_id}`
  );
};


export const getIlan = (id) => {
  const baseUrl = `${BASE_URL}/kurumsal-ilanlar`;
  const url = id ? `${baseUrl}/${id}` : baseUrl;
  return axios.get(url);
};
