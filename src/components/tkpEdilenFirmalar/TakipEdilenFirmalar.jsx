import React from "react";
import { Grid, Paper, Typography, Link } from "@mui/material";
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
function TakipEdilenFirmalar() {
  return (
    <CardWrapper>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Takip Edilen Firmalar
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_1" alt="Firma 1" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 1
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_2" alt="Firma 2" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 2
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_3" alt="Firma 3" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 3
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_4" alt="Firma 4" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 4
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_5" alt="Firma 5" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 5
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_6" alt="Firma 6" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 6
              </Typography>
            </Grid>
          </Grid>
          <Link
            href="#"
            style={{
              fontFamily: "Arial",
              fontSize: "12px",
              fontWeight: "normal",
            }}
          >
            Tüm Firmaları Görüntüle
          </Link>
        </CardWrapper>
  )
}

export default TakipEdilenFirmalar;