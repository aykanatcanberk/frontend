import * as React from "react";
import FirmaKartvizit from "../../components/firmaKartvizit/FirmaKartvizit";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./BireyselFirmalar.css";
import { getAllCompanies } from "../../services/companyService";

export default function ComplexGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [companies, setCompanies] = useState([]);

  React.useEffect(() => {
    getAllCompanies()
      .then((companies) => {
        setCompanies(companies);
      })
      .catch((err) => {
        console.error("Coulnt fetch the all posts data due to :" + err.message);
      });
  }, []);

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          sx={{ width: 800 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Container>
      <div className="searchFilter">{}</div>
      <div className="firmaContainer">
        {companies.map((company) => (
          <FirmaKartvizit props={company} />
        ))}
      </div>
    </>
  );
}
