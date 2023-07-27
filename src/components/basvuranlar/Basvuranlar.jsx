import * as React from "react";
import { Paper, Typography, CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
//import pp from "../../components/bryselAsayfaProfilComp/images/pp";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

const CardWrapper = styled(Paper)({
  padding: "1rem",
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

const handleClick = () => {
  // Burada tıklama işlemlerini gerçekleştirebilirsiniz
};

function Basvuranlar({ applicant }) {
  return (
    <CardWrapper>
      <CardActionArea onClick={handleClick} href="/bireysel-profil">
        {/* Karta eklemek istediğiniz içerik burada olacak */}
        <AvatarWrapper alt="Profil Avatarı" />

        <Typography
          style={{
            fontFamily: "Arial",
            fontSize: "14px",
            fontWeight: "normal",
          }}
        >
          <RecentActorsIcon
            sx={{
              fontSize: 18,
              marginRight: 1.5,
              marginTop: 2,
            }}
          />
          {applicant.name_surname}
        </Typography>
      </CardActionArea>

      <Typography
        variant="subtitle1"
        style={{
          fontFamily: "Arial",
          fontSize: "14px",
          fontWeight: "normal",
          color: "secondary",
          textAlign: "center",
        }}
      >
        <SchoolIcon
          sx={{
            fontSize: 18,
            marginRight: 1.5,
            marginTop: 2,
          }}
        />
        {applicant.university}
      </Typography>

      <Typography
        variant="subtitle1"
        style={{
          fontFamily: "Arial",
          fontSize: "14px",
          fontWeight: "normal",
          color: "secondary",
          textAlign: "center",
        }}
      >
        <StarIcon
          sx={{
            fontSize: 18,
            marginRight: 1.5,
            marginTop: 2,
          }}
        />
        {applicant.gno}
      </Typography>
    </CardWrapper>
  );
}

export default Basvuranlar;
