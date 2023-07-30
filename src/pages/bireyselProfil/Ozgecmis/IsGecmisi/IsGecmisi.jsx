import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import {
  CardWrapper,
  CardWrapperForTitles,
  CardWrapperLeftAligned,
  RoundButton,
  ButtonsWrapper,
} from "../../CustomStyledComponents";

function IsGecmisi({ workBackground, onEditClick }) {
  return (
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
            Eğitim Geçmişi
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
                fontSize: "15px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              Şirket Adı
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "light",
                alignSelf: "left",
              }}
            >
              {workBackground.companyName}
            </Typography>
            <br />

            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "15px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              Pozisyon
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "light",
                alignSelf: "left",
              }}
            >
              {workBackground.workPosition}
            </Typography>
            <br />

            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "15px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              Başlama/Bitiş Tarihi
            </Typography>
            <>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "light",
                  alignSelf: "left",
                }}
              >
                {workBackground.startDate}
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "light",
                  alignSelf: "left",
                }}
              >
                {workBackground.endDate}
              </Typography>
            </>

            <br />

            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "15px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              Açıklama
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "light",
                alignSelf: "left",
              }}
            >
              {workBackground.shortDescription}
            </Typography>
            <br />

            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "15px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              Personel Numarası
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "light",
                alignSelf: "left",
              }}
            >
              {workBackground.personnelNumber}
            </Typography>
            <br />

            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "15px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              Onay Mektubu
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "light",
                alignSelf: "left",
              }}
            >
              {workBackground.confirmationLetter}
            </Typography>
            <br />

            {/* Add other input fields here */}
          </Grid>
        </Grid>
        <ButtonsWrapper>
          <RoundButton
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            EKLE
          </RoundButton>
          <RoundButton
            variant="contained"
            color="primary"
            size="small"
            onClick={onEditClick}
          >
            DÜZENLE (EĞER DOLUYSA)
          </RoundButton>
        </ButtonsWrapper>
      </CardWrapperLeftAligned>
    </CardWrapper>
  );
}

export default IsGecmisi;
