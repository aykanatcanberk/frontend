import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfilCard from "../../components/kurumsalAnasayfa/profilcard";
import Gonderi from "../../components/kurumsalAnasayfa/gönderi";
import Gonderiolustur from "../../components/kurumsalAnasayfa/gonderiolusturma";
import Populerkonular from "../../components/kurumsalAnasayfa/populerkonular";
import axios from "axios";
import NotFoundError from "../../routes/NotFoundError";

const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "-5px",
  maxWidth: "1300px",
  marginTop: "-20px",
  width: "100%",
});

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(`https://localhost:7029/Post/AllPosts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log("Error");
      });
  });

  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .post("http://localhost:7029/Post", { postData })
      .then((response) => {
        setPostData(response.data);
        console.log("Post başarılı.");
      })
      .catch((error) => {
        // Post işlemi sırasında bir hata oluştuğunda yapılacak işlemler
        console.error("Post hatası:", error);
      });
  }, []);
  // const [userPosts, setCompanyDataList] = useState([]);

  // useEffect(() => {
  //   getUserPosts()
  //     .then((response) => {
  //       const info = response.data;
  //       console.log(info);
  //       setCompanyDataList(info);
  //     })
  //     .catch(() => {
  //       return <NotFoundError props={"Böyle bir company bilgisi mevcut değil."} />;

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
          {posts.map((postcard) => (
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
