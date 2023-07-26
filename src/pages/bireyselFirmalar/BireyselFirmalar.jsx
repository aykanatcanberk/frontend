import * as React from "react";
import FirmaKartvizit from "../../components/firmaKartvizit/FirmaKartvizit";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./BireyselFirmalar.css";

const bireyselfirmalardata = [
  {
    name: "Aselsan",
    kurulustarihi: 1975,
    calisansayisi: 450,
    konum: "Ankara",
  },
  {
    name: "Havelsan",
    kurulustarihi: 2000,
    calisansayisi: 4050,
    konum: "Ankara",
  },
  {
    name: "TUSAŞ",
    kurulustarihi: 1998,
    calisansayisi: 4050,
    konum: "Ankara",
  },
  {
    name: "Roketsan",
    kurulustarihi: 2000,
    calisansayisi: 4050,
    konum: "Ankara",
  },
  {
    name: "TR EĞİTİM VE TEKNOLOJİ A.Ş.",
    kurulustarihi: 2019,
    calisansayisi: 4050,
    konum: "Ankara",
  },
];

export default function ComplexGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
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
        {bireyselfirmalardata.map((firma) => (
          <FirmaKartvizit props={firma} />
        ))}
      </div>
    </>
  );
}
