import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfilCard from "../../components/kurumsalAnasayfa/profilcard";
import Gonderi from "../../components/kurumsalAnasayfa/gönderi";
import Gonderiolustur from "../../components/kurumsalAnasayfa/gonderiolusturma";
const kurumsalanasayfaprofil = [
  {
    name: "Aselsan",
    kurulustarihi: 1975,
    calisansayisi: 450,
    konum: "Ankara",
  },
];
const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "0 auto",
  maxWidth: "1300px",
  marginTop: "-20px",
  width: "100%",
});

const App = () => {
  return (
    <PageWrapper container spacing={3} justifyContent="left">
      <Grid
        item
        xs={10}
        sm={5}
        md={3}
        sx={{
          display: "none",
          "@media (min-width: 960px)": { display: "block" },
        }}
      >
        {/* profil kısmı */}
        <div className="firmaContainer">
          {kurumsalanasayfaprofil.map((firma) => (
            <ProfilCard profilcard={firma} />
          ))}
        </div>
      </Grid>

      <Grid
        item
        xs={10}
        sm={5}
        md={8}
        sx={{
          textAlign: "center",
          "@media (min-width: 960px)": { display: "block" },
        }}
      >
        {/* gönderi kısmı */}
        <Gonderiolustur />
        <Gonderi />
        <Gonderi />
      </Grid>
    </PageWrapper>
  );
};

export default App;
