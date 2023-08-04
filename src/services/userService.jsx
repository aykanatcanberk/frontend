import axios from "axios";


const token = localStorage.getItem("token");

export function getCompany() {
  const url = "http://localhost:5071/api/Get_AllCompnay/get%20all%20company";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${token}`,
  };

  return axios.get(url, { headers });
}

export function getUserPosts() {
  const url = "http://localhost:5071/Post/AllPosts";
  
  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${token}`,
  };

  return axios.get(url, { headers });
}

export function getUserEduInfo() {
  const url = "http://localhost:5071/api/PersonInfoEdu/get%20all";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${token}`,
  };

  return axios.get(url, { headers });
}

export function getUserProfile() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/PersonProfile`;
  const jwtToken = localStorage.getItem("token");
  
  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
}

export function updatePrivateInformation(privateInfo) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/PersonProfile`;

  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  
  // const headers = {
  //   accept: "text/plain",
  //   Authorization: `Bearer ${jwtToken}`,
  // };  

  return axios.put(url, privateInfo);
}

export function getUserEduBackProfile() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/PersonInfoEdu/get single`;
  const jwtToken = localStorage.getItem("token");
  
  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
}

export function updateUserEduBackgroundInformation(eduBackInfo) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/PersonInfoEdu`;

  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  const correctedDataForBackend = {
    ...eduBackInfo,
    eduStatus: true, // Convert to boolean
    avg: parseFloat(eduBackInfo.avg),   // Convert to number
  };

  return axios.put(url, correctedDataForBackend);
}

export function getAllUserWorkBackground() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/PersonInfoWork/get all`;
  const jwtToken = localStorage.getItem("token");
  
  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${token}`,
  };

  return axios.get(url, { headers });
}


export function createUserWorkBackground(workBackground, companyId) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/PersonInfoWork/${companyId}`;

  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  const correctedDataForBackend = {
    ...workBackground,   
  };

  return axios.post(url, correctedDataForBackend);
}




export function getUserInfo() {
  const url = "http://localhost:5071/api/PersonProfile";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${token}`,
  };

  return axios.get(url, { headers });
}