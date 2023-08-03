import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfilCard from "../../components/kurumsalAnasayfa/profilcard";
import Gonderi from "../../components/kurumsalAnasayfa/gönderi";
import Gonderiolustur from "../../components/kurumsalAnasayfa/gonderiolusturma";
import db from "../../data/db.json";
import Populerkonular from "../../components/kurumsalAnasayfa/populerkonular";
import axios from 'axios';
import  { useState,useEffect} from "react";

const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "-5px",
  maxWidth: "1300px",
  marginTop: "-20px",
  width: "100%",
});


const App = () => {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const token="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXNlbHNhbkBhc2Vsc2FuLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkNvbXBhbnkiLCJleHAiOjE2OTExODY3NzN9.mVavcH9RKIrGQpTE7IAJFlzVrX90n6RzYanAFHq_jQ8";
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    axios.get(`http://localhost:5071/Post/AllPosts`)
    .then((response)=>{
      setPosts(response.data)
    })
    .catch((err)=>{
      console.log("Error");
    })
  });

  const [postData,setPostData]=useState([]);
  useEffect(() => {
  
    const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXNlbHNhbkBhc2Vsc2FuLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkNvbXBhbnkiLCJleHAiOjE2OTExMjg5NDV9.6w_aKtarXBVOFADBsJtrhrhekedG-VCNJ_AXexQF5TM";
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.post('http://localhost:5071/Post',{postData})
      .then((response) => {
       
        setPostData(response.data)
        console.log("Post başarılı.");
      })
      .catch((error) => {
        // Post işlemi sırasında bir hata oluştuğunda yapılacak işlemler
        console.error("Post hatası:", error);
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
          {db["my-info-firma"].map((firma) => (
            <ProfilCard profilcard={firma} />
          ))}
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
