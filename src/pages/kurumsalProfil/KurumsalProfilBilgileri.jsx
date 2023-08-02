import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "3px",
});

const CardWrapperForTitles = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "3px",
  display: "inline-block",
});

const CardWrapperLeftAligned = styled(Paper)({
  padding: "1rem",
  textAlign: "left",
  marginBottom: "10px",
  borderRadius: "3px",
});

const ButtonsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});

const RoundButton = styled(Button)({
  borderRadius: "20px",
  padding: "5px 10px",
});

function KurumsalProfilBilgileri() {
  return (
    <>
      <CardWrapper elevation={0}>
        <Grid container alignItems="left">
          <CardWrapperForTitles elevation={4} alignSelf="right">
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "18px",
                fontWeight: "bold",
                alignSelf: "left",
                flex: "auto",
              }}
            >
              Firma Bilgileri
            </Typography>
          </CardWrapperForTitles>
        </Grid>
        <CardWrapperLeftAligned elevation={4}>
          <Grid container alignItems="left">
            <Grid item xs={10} sm={10} md={10} alignItems="left">
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Firma Sektörü
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "bold",
                    alignSelf: "left",
                  }}
                >
                  **
                </Typography>
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Firma Tipi
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "bold",
                    alignSelf: "left",
                  }}
                >
                  **
                </Typography>
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Firma Çalışan Sayısı
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "bold",
                    alignSelf: "left",
                  }}
                >
                  **
                </Typography>
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Firma Kuruluş Tarihi
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "bold",
                    alignSelf: "left",
                  }}
                >
                  **
                </Typography>
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Firma Konumu
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "bold",
                    alignSelf: "left",
                  }}
                >
                  **
                </Typography>
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Firma Uzmanlık Alanı
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "bold",
                    alignSelf: "left",
                  }}
                >
                  **
                </Typography>
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Firma Web Sitesi
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "bold",
                    alignSelf: "left",
                  }}
                >
                  **
                </Typography>
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Firma Telefon
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "bold",
                    alignSelf: "left",
                  }}
                >
                  **
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <ButtonsWrapper>
            <RoundButton variant="contained" color="primary" size="small">
              EKLE
            </RoundButton>
            <RoundButton variant="contained" color="primary" size="small">
              DÜZENLE (EĞER DOLUYSA)
            </RoundButton>
          </ButtonsWrapper>
        </CardWrapperLeftAligned>
      </CardWrapper>
    </>
  );
}

export default KurumsalProfilBilgileri;
