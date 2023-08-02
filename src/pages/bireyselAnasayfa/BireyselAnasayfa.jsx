import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import GonderiCard from "../../components/gonderiCard/gonderiCard";
import GonderiYap from "../../components/gonderiYap/gonderiYap";
import ProfilComp from "../../components/bryselAsayfaProfilComp/profilComp";
import TakipEdilenFirmalar from "../../components/tkpEdilenFirmalar/TakipEdilenFirmalar";
import IlgılıIlanlar from "../../components/ilgiliIlanlar/IlgılıIlanlar";
import PopulerIcerikler from "../../components/populerIcerikler/PopulerIcerikler";
import { getAllPosts } from "../../services/postServices";
import { getUserPosts } from "../../services/userService";

const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "0 auto",
  maxWidth: "1300px",
  marginTop: "-20px",
  width: "100%",
});

const BireyselAnasayfa = () => {
  const [gorunenVeriler, setGorunenVeriler] = useState([]);
  const itemsPerPage = 10;
  const batchSize = 5;
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    console.log("Component mounted");
    loadInitialData();

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        // Load more data here
        loadMoreData();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loadInitialData = () => {
    getUserPosts(1, itemsPerPage)
      .then((response) => {
        console.log("Data fetched:", response.data);
        const data = response.data;
        if (data && Array.isArray(data)) {
          setGorunenVeriler(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const loadMoreData = () => {
    const nextPage = pageNumber + 1;
    getUserPosts(nextPage, batchSize)
      .then((response) => {
        console.log("More data fetched:", response.data);
        const data = response.data;
        if (data && Array.isArray(data)) {
          setGorunenVeriler((prevData) => [...prevData, ...data]);
          setPageNumber(nextPage);
        }
      })
      .catch((error) => {
        console.error("Error fetching more data:", error);
      });
  };

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
        {gorunenVeriler.map((veri, index) => (
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
