import axios from "axios";

const jwtToken =
  "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXNlbHNhbkBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkNvbXBhbnkiLCJleHAiOjE2OTExNjE5OTl9.OZuE6k-kuS4J8rk9neOm4LCAU5QpF3ORGJ7JTmNg3g8";


export const getAllCompanies = async () => {
  try {
    const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "infoCompany"
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    console.error("Login Failed due to: " + err.message);
    return {}; // Return an empty object in case of an error
  }
};

export function getCompanyInfo() {
  const url = "http://localhost:5071/api/Company";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${jwtToken}`,
  };

  return axios.get(url, { headers });
}
