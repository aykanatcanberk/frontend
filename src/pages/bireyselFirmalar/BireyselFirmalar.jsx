import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirmaKartvizit from "../../components/firmaKartvizit/FirmaKartvizit";
import { Container } from "@mui/material";
import "./BireyselFirmalar.css";
import db from "../../data/db.json";
import SearchBar from "../../components/searchBar/searchBar";

export default function ComplexGrid() {
  const [searchTerm, setSearchTerm] = useState("");
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
  const filteredCompanies = db["info-firma"].filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
