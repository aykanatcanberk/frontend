import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import {
  CardWrapper,
  CardWrapperForTitles,
  CardWrapperLeftAligned,
  RoundButton,
  ButtonsWrapper,
} from "../CustomStyledComponents";

function FirmaBilgileri({ companyInfo, onEditClick }) {
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
                fontSize: "15px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              Firma Sektörü
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
              {companyInfo.companySector}
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
              Firma Tipi
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
              {companyInfo.companyType}
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
              Çalışan Sayısı
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
              {companyInfo.employeeCount}
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
              Firma Kuruluş Tarihi
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
              {companyInfo.foundedIn}
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
              Firma Konumu
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
              {companyInfo.location}
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
              Firma Uzmanlık Alanı
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
              {companyInfo.areaOfExpertise}
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
              Firma web sitesi
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
              {companyInfo.webSite}
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
              Firma Telefon
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
              {companyInfo.phoneNum}
            </Typography>
            <br />

          </Grid>
        </Grid>
        <ButtonsWrapper>
          <RoundButton
            variant="contained"
            color="primary"
            size="small"
            onClick={onEditClick}
            style={{ marginLeft: "80%"}}
          >
            DÜZENLE
          </RoundButton>
        </ButtonsWrapper>
      </CardWrapperLeftAligned>
    </CardWrapper>
  );
}

export default FirmaBilgileri;