import * as React from "react";
import FirmaKartvizit from "../../components/firmaKartvizit/FirmaKartvizit";
import { Container} from "@mui/material";
import "./BireyselFirmalar.css";
import db from "../../data/db.json";
import SearchBar from "../../components/searchBar/searchBar"
export default function ComplexGrid() {
 
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 8 }}>
   <SearchBar/>
      </Container>

      <div className="firmaContainer">
        {db["info-firma"].map((companycard) => (
          <FirmaKartvizit key={companycard.id} companycard={companycard} />
        ))}
      </div>
    </>
  );
}
