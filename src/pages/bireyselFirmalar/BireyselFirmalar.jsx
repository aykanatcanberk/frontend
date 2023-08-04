
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FirmaKartvizit from "../../components/firmaKartvizit/FirmaKartvizit";
import { Container } from "@mui/material";
import "./BireyselFirmalar.css";
import SearchBar from "../../components/searchBar/searchBar";
import axios from 'axios';
export default function ComplexGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const [firmalar,setFirmalar]=useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const haveToken = localStorage.getItem("token");
    const isUser = localStorage.getItem("userType");
    if (!haveToken || isUser === "company") {
      navigate("/");
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // "searchTerm" kullanarak firmaları filtreleyin
  const filteredCompanies = firmalar.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

useEffect(()=>{
  const token=localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  axios.get(`http://localhost:5071/api/Get_AllCompnay/get all company`).then((response)=>{
    setFirmalar(response.data)
  }).catch((err)=>{
    console.log("Error");
  })
});


  if (isLoading) {
    return <div>Loading...</div>;
  }

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
