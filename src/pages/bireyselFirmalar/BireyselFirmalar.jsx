import React, { useState,useEffect} from "react";
import FirmaKartvizit from "../../components/firmaKartvizit/FirmaKartvizit";
import { Container } from "@mui/material";
import "./BireyselFirmalar.css";
import SearchBar from "../../components/searchBar/searchBar";
import axios from 'axios';
export default function ComplexGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [firmalar,setFirmalar]=useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // "searchTerm" kullanarak firmaları filtreleyin
  const filteredCompanies = firmalar.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
useEffect(()=>{
  const token="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGFuZW1AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUGVyc29uIiwiZXhwIjoxNjkxMDc0MTcwfQ.n0_Uxexo8q5OJWx3VRgceqoTppgn9MBDHQHAXCv8BVE"
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  axios.get(`https://localhost:7029/api/Get_AllCompnay/get all company`).then((response)=>{
    setFirmalar(response.data)
  }).catch((err)=>{
    console.log("Error");
  })
});
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      </Container>

      <div className="firmaContainer">
        {filteredCompanies.map((companycard) => (
          <FirmaKartvizit key={companycard.id} companycard={companycard} />
        ))}
      </div>
    </>
  );
}
