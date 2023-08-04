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

export function getUserInfo() {
  const url = "http://localhost:5071/api/PersonProfile";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${token}`,
  };

  return axios.get(url, { headers });
}