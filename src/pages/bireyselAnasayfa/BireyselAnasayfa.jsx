import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import GonderiCard from "../../components/gonderiCard/gonderiCard";
import GonderiYap from "../../components/gonderiYap/gonderiYap";
import ProfilComp from "../../components/bryselAsayfaProfilComp/profilComp";
import TakipEdilenFirmalar from "../../components/tkpEdilenFirmalar/TakipEdilenFirmalar";
import IlgılıIlanlar from "../../components/ilgiliIlanlar/IlgılıIlanlar";
import PopulerIcerikler from "../../components/populerIcerikler/PopulerIcerikler";
import { getUserPosts } from "../../services/userService";
import axios from "axios";
import NotFoundError from "../../routes/NotFoundError";
const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "0 auto",
  maxWidth: "1300px",
  marginTop: "-20px",
  width: "100%",
});

const BireyselAnasayfa = () => {
  const [userPosts, setCompanyDataList] = useState([]);
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

  useEffect(() => {
    getUserPosts()
      .then((response) => {
        const info = response.data;
        console.log(info);
        setCompanyDataList(info);
      })
      .catch(() => {
        return (
          <NotFoundError props={"Böyle bir company bilgisi mevcut değil."} />
        );
      });
  }, []);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        // Set the token in the Authorization header
        axios.defaults.headers.common["Authorization"] = `Bearer {token}`;

        const response = await axios.get(
          "http://localhost:5071/api/PersonProfile"
        );
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    // Call the function
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper container spacing={3} justifyContent="center">
      <Grid
        item
        xs={12}
        sm={5}
        md={2.5}
        sx={{
          display: "none",
          "@media (min-width: 960px)": { display: "block" },
        }}
      >
        {/* Birinci Kolon */}
        <ProfilComp />
        <TakipEdilenFirmalar />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={6}
        sx={{
          textAlign: "center",
          "@media (min-width: 960px)": { display: "block" },
        }}
      >
        {/* İkinci Kolon */}
        <GonderiYap />
        {userPosts.map((veri, index) => (
          <GonderiCard key={index} userPosts={veri} />
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={3.5}
        sx={{
          display: "none",
          "@media (min-width: 960px)": { display: "block" },
        }}
      >
        {/* Üçüncü Kolon */}
        <IlgılıIlanlar />
        <PopulerIcerikler />
      </Grid>
    </PageWrapper>
  );
};

export default BireyselAnasayfa;
