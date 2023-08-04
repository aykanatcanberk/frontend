import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import {
  CardWrapper,
  CardWrapperForTitles,
  CardWrapperLeftAligned,
  RoundButton,
  ButtonsWrapper,
} from "../../CustomStyledComponents";

function EgitimGecmisi({ eduBackground, onEditClick }) { 
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
              Öğrenim Seviyesi
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
              {eduBackground.schoolType}
            </Typography>
            <br />
            
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
              Okul
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
              {eduBackground.schoolName}
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
              Bölüm
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
              {eduBackground.departmentName}
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
              Eğitim Durumu
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
              {eduBackground.eduStatus}
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
              Ortalama
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
              {eduBackground.avg}
            </Typography>
            <br />

            {/* Add other input fields here */}
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

export default EgitimGecmisi;
