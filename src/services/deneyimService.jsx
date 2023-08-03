import axios from "axios";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getDeneyimler = () => {
  return axios.get(`${BASE_URL}/deneyimler`);
};

export const addDeneyim = (newDeneyim) => {
  return axios.post(`${BASE_URL}/deneyimler`, newDeneyim);
};

//------------------------------------for the backend------------------------------------

//this one is for backend implementation
export const getDeneyimlerFromBackend = () => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.get("http://localhost:5071/api/Person/karışık");
};

export const getMyOwnExperiences = () => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.get("http://localhost:5071/api/Person/Kişi");
};

//new deneyim only have 2 properties: title and description ======>>>> { "title": "string", "description": "string" }
export const addDeneyimToBackend = (companyId, backWorkId, newDeneyim) => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.post(
    `http://localhost:5071/api/Person/CompanyId,BackWorkId?companyId=${companyId}&backWorkId=${backWorkId}`,
    newDeneyim
  );
};
