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
