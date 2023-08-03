import axios from "axios";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;
//approvalSatatus ----> 0 = onay bekliyor, 1 = onaylandı, 2 = reddedildi

//put diger alanlari siliyor, o yuzden patch kullanildi
export const setWorkApproval = (id, approvalStatus) => {
  return axios.patch(`${BASE_URL}/workHistory/${id}`, {
    approvalStatus: approvalStatus,
  });
};
export const getWaitingForApproval = () => {
  return axios.get(`${BASE_URL}/workHistory`, {
    params: { approvalStatus: 0 },
  });
};
//------------------------------------for the backend------------------------------------
//this is for the backend
export const getAllWaitingForApproval = () => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.get(`http://localhost:5071/api//ListApp`);
};
//this is for the backend
export const deneyimOnaylama = (id) => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.post(
    `http://localhost:5071/api/ListApp/deneyim onaylama,${id}`,
    {
      id,
    }
  );
};
//this is for the backend
export const deneyimReddetme = (id) => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.post(
    `http://localhost:5071/api/ListApp/deneyim reddetme,${id}`,
    {
      id,
    }
  );
};
