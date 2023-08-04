import { ApprovalRounded } from "@mui/icons-material";
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

export const getCompanyIdByNameDictioanry = async () => {
  try {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/Get_AllCompnay/get all company`;

    const jwtToken = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

    const response = await axios.get(url);

    const filteredCompanies = response.data.filter(
      (company) => company.id !== null && company.name !== null
    );

    // Create an array of dictionaries with id and name fields
    const companyDictionaries = filteredCompanies.map((company) => ({
      id: company.id,
      name: company.name,
    }));
    return companyDictionaries;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching company data:", error);
    throw error;
  }
};

export const getCompanyIdFromName = async (companyName) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/Get_AllCompnay/get all company`;

  let id = null;
  axios
    .get(url)
    .then((res) => {
      id = res.data.name === companyName ? res.data.id : null;
    })
    .catch((err) =>
      console.log("there was an error whilst getting all the companies")
    );
  return id;
};

export const getPersonApproval = async (approvalId) => {

  console.log("approval id: " + approvalId);
  if(approvalId === -1){
    return "g";
  }
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/PersonApproval/${approvalId}`;

  const jwtToken = localStorage.getItem("token");

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
};
