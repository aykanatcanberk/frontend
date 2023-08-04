import axios from "axios";

const jwtToken = localStorage.getItem("token")

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
