import axios from "axios";


const jwtToken =
  "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlBlcnNvbiIsImV4cCI6MTY5MTA1Mzk0MH0.-AIJVx1Ol1qj648pjRLld1HntTfYF5WvqQ6-KmBLv8w";

export function getCompany() {
  const url = "http://localhost:5071/api/Get_AllCompnay/get%20all%20company";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
}

export function getUserPosts() {
  return axios.get("http://localhost:3000/user-Posts");
}
