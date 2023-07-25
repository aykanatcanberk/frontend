import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import GonderiCard from "../../components/gonderiCard/gonderiCard";
import GonderiYap from "../../components/gonderiYap/gonderiYap";
import ProfilComp from "../../components/bryselAsayfaProfilComp/profilComp";
import TakipEdilenFirmalar from "../../components/tkpEdilenFirmalar/TakipEdilenFirmalar";
import IlgılıIlanlar from "../../components/ilgiliIlanlar/IlgılıIlanlar";
import PopulerIcerikler from "../../components/populerIcerikler/PopulerIcerikler";

const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "0 auto",
  maxWidth: "1200px",
  marginTop: "-20px",
});

const App = () => {
  return (
    <PageWrapper container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={4} md={3}>
        {/* Birinci Kolon */}
        <ProfilComp />
        <TakipEdilenFirmalar />
        
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {/* İkinci Kolon */}
        <GonderiYap />
        <GonderiCard />
        <GonderiCard />
      </Grid>
      
      <Grid item xs={12} sm={4} md={3}>
        {/* Üçüncü Kolon */}
        <IlgılıIlanlar />
        <PopulerIcerikler />
      </Grid>
    </PageWrapper>
  );
};

export default App;
