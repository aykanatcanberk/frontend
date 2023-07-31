import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const addAdvert = (newAdvert) => {
  return axios.post(`${BASE_URL}/kurumsal-ilanlar`);
};

//getAdvertById
export const getAdvertById = (id) => {
  return axios.get(`${BASE_URL}/kurumsal-ilanlar/${id}`);
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
