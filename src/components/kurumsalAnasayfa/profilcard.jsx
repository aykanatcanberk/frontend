import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import kurumsalpp from "../assets/firmaprofillogo.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PeopleIcon from "@mui/icons-material/People";
import ClassIcon from "@mui/icons-material/Class";
import { getCompanyInfo } from "../../services/companyService";
import NotFoundError from "../../routes/NotFoundError";
const CardWrapper = styled(Paper)({
  padding: "40px",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "20px",
});

const AvatarWrapper = styled(Avatar)({
  width: "100px",
  height: "100px",
  margin: "auto",
  borderRadius: "50%",
});

function ProfilCard() {
  const [profilcard, setCompanyDataList] = useState([]);

  useEffect(() => {
    getCompanyInfo()
      .then((response) => {
        const info = response.data;
        setCompanyDataList(info);
      })
      .catch(() => {
        return <NotFoundError props={"Böyle bir company bilgisi mevcut değil."} />;
      });
  }, []);

  return (
    <CardWrapper>
      <AvatarWrapper src={kurumsalpp} alt="Profil Avatarı" />
      <Typography
        variant="h6"
        style={{
          fontFamily: "Arial",
          fontSize: "14px",
          fontWeight: "normal",
          marginTop: "3px",
          marginBottom: "10px",
        }}
      >
        {profilcard.name}
      </Typography>
      <Typography
        variant="body1"
        fontSize={"14px"}
        color="text.secondary"
        sx={{ marginTop: "10x", marginBottom: "15px" }}
      >
        <ClassIcon
          sx={{
            marginLeft: "10px",
            marginRight: "5px",
          }}
        />
        {profilcard.category}
      </Typography>
      <Typography
        variant="body1"
        fontSize={"14px"}
        color="text.secondary"
        sx={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <LocationSearchingIcon
          sx={{ marginLeft: "10px", marginRight: "5px" }}
        />
        {profilcard.location}
      </Typography>

      <Typography
        variant="body1"
        fontSize={"14px"}
        color="text.secondary"
        sx={{ marginTop: "15x", marginBottom: "15px" }}
      >
        <PeopleIcon sx={{ marginLeft: "10px", marginRight: "5px" }} />
        {profilcard.totalStaff}
      </Typography>
      <Typography
        variant="body1"
        fontSize={"14px"}
        color="text.secondary"
        sx={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <CalendarMonthIcon sx={{ marginLeft: "10px", marginRight: "5px" }} />
        {profilcard.fDate}
      </Typography>
    </CardWrapper>
  );
}

export default ProfilCard;
