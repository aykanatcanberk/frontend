import axios from "axios";


const jwtToken =
  "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlBlcnNvbiIsImV4cCI6MTY5MTE3Mzg2MX0.cEcqk1hYTJh5BYegUk2130qICpQN-o_bZx9JH_FVfBA";

export function getCompany() {
  const url = "http://localhost:5071/api/Get_AllCompnay/get%20all%20company";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
}

export function getUserPosts() {
  const url = "http://localhost:5071/Post/AllPosts";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
}

export function getUserEduInfo() {
  const url = "http://localhost:5071/api/PersonInfoEdu/get%20all";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
}

export function getUserInfo() {
  const url = "http://localhost:5071/api/PersonProfile";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
}