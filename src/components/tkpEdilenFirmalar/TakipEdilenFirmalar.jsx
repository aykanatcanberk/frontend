import React from "react";
import { Grid, Paper, Typography, Button, Card, CardActionArea, CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "20px",
});

const SmallAvatarWrapper = styled(Avatar)({
  width: "30px",
  height: "30px",
  margin: "0.3rem auto",
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
      <Card>
        <CardActionArea onClick={handleClick}>
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src="url_firma_avatar_1" alt="Firma 1" />
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
      <Card>
        <CardActionArea onClick={handleClick}>
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src="url_firma_avatar_1" alt="Firma 1" />
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
      <Card>
        <CardActionArea onClick={handleClick}>
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src="url_firma_avatar_1" alt="Firma 1" />
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
      <Card>
        <CardActionArea onClick={handleClick}>
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src="url_firma_avatar_1" alt="Firma 1" />
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
      <Card>
        <CardActionArea onClick={handleClick}>
          {/* Karta eklemek istediğiniz içerik burada olacak */}
          <SmallAvatarWrapper src="url_firma_avatar_1" alt="Firma 1" />
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
        href="#"
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
