import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfilCard from "../../components/kurumsalAnasayfa/profilcard";
import Gonderi from "../../components/kurumsalAnasayfa/gönderi";
import Gonderiolustur from "../../components/kurumsalAnasayfa/gonderiolusturma";
import Populerkonular from "../../components/kurumsalAnasayfa/populerkonular";
import { getUserPosts } from "../../services/userService";
import NotFoundError from "../../routes/NotFoundError";

const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "-5px",
  maxWidth: "1300px",
  marginTop: "-20px",
  width: "100%",
});

const App = () => {
  const [userPosts, setCompanyDataList] = useState([]);

  useEffect(() => {
    getUserPosts()
      .then((response) => {
        const info = response.data;
        console.log(info);
        setCompanyDataList(info);
      })
      .catch(() => {
        return <NotFoundError props={"Böyle bir company bilgisi mevcut değil."} />;
      });
  }, []);
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
            <ProfilCard />
        </div>
      </Grid>

      <Grid
        item
        xs={10}
        sm={5}
        md={6}
        sx={{
          textAlign: "center",
          "@media (min-width: 960px)": { display: "block" },
        }}
      >
        {/* gönderi oluşturma kısmı */}
        <Gonderiolustur />
        <div className="firmaContainer">
          {userPosts.map((postcard) => (
            <Gonderi key={postcard.id} postcard={postcard} />
          ))}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={3}
        sx={{
          display: "none",
          "@media (min-width: 960px)": { display: "block" },
        }}
      >
        {/* Üçüncü Kolon */}

        <Populerkonular />
      </Grid>
    </PageWrapper>
  );
};

export default App;
