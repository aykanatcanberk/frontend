/* Author: Hasan Basri BİLGE
Last Update: 25.07.2023 */

import React from "react";
import { Grid, Paper, Typography, Button, Card, CardActionArea, CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import aselsanlogo from "./images/aselsanlogo.png";
import havelsanlogo from "./images/havelsanlogo.png";
import roketsan from "./images/roketsan.png";
import tusas from "./images/tusas.png";
import tet from "./images/tr-egitim-ve-teknoloji-as.png";

const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "20px",
});

const SmallAvatarWrapper = styled(Avatar)({
  width: "40px",
  height: "40px",
  margin: "0 auto",
  marginTop: "5px",
  marginBottom: "0px",
  borderRadius: "50%",
});

const handleClick = () => {
  // Burada tıklama işlemlerini gerçekleştirebilirsiniz
};

function TakipEdilenFirmalar() {
  return (
    <CardWrapper>
      <Typography
        variant="h7"
        style={{
          fontFamily: "Arial",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Takip Edilen Firmalar
      </Typography>
      <Grid container spacing={1}>
      <Grid item xs={6} sm={6} md={6}>
      <Card elevation={0} style={{borderRadius: "50%"}}>
        <CardActionArea onClick={handleClick} href="/bireysel-firma/3">
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src={roketsan} alt="Roketsan" />
          <CardContent>
            <Typography
              style={{
                fontFamily: "Arial",
                fontSize: "12px",
                fontWeight: "normal",
              }}
            >
              Roketsan
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={6} sm={6} md={6}>
      <Card elevation={0} style={{borderRadius: "50%"}}>
        <CardActionArea onClick={handleClick} href="/bireysel-firma/2">
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src={havelsanlogo} alt="Havelsan" />
          <CardContent>
            <Typography
              style={{
                fontFamily: "Arial",
                fontSize: "12px",
                fontWeight: "normal",
              }}
            >
              Havelsan
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={6} sm={6} md={6}>
      <Card elevation={0} style={{borderRadius: "50%"}}>
        <CardActionArea onClick={handleClick} href="/bireysel-firma/1">
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src={aselsanlogo} alt="Aselsan" />
          <CardContent>
            <Typography
              style={{
                fontFamily: "Arial",
                fontSize: "12px",
                fontWeight: "normal",
              }}
            >
              Aselsan
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={6} sm={6} md={6}>
      <Card elevation={0} style={{borderRadius: "50%"}}>
        <CardActionArea onClick={handleClick} href="/bireysel-firma/5">
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src={tusas} alt="TUSAŞ" />
          <CardContent>
            <Typography
              style={{
                fontFamily: "Arial",
                fontSize: "12px",
                fontWeight: "normal",
              }}
            >
              TUSAŞ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={6} sm={6} md={6}>
      <Card elevation={0} style={{borderRadius: "50%"}}>
        <CardActionArea onClick={handleClick} href="/bireysel-firma/4">
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src={tet} alt="TET A.Ş." />
          <CardContent>
            <Typography
              style={{
                fontFamily: "Arial",
                fontSize: "12px",
                fontWeight: "normal",
              }}
            >
              TET A.Ş.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button
        href="/bireysel-firmalar"
        variant="contained"
        color="primary"
        style={{
          fontFamily: "Arial",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "15px",
          color: "blue",
          borderColor: "blue",
          backgroundColor: "transparent",
          "&:hover": {
          backgroundColor: "transparent",
        },
        }}
      >
        Tüm Firmaları Görüntüle
      </Button>
    </CardWrapper>
  );
}

export default TakipEdilenFirmalar;
