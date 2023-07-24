import * as React from "react";
import FirmaKartvizit from "../../components/firmaKartvizit/FirmaKartvizit";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./BireyselFirmalar.css";

export default function ComplexGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
    {
      name: "Aselsan",
      kuruluştarihi: 2000,
      calisansayisi: 450,
      konum: "Ankara",
    },
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5 }}>
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
      <div className="firmaContainer">
        {data.map((firma) => (
          <FirmaKartvizit props={firma} />
        ))}
      </div>
    </>
  );
}
