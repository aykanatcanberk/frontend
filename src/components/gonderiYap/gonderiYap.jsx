/* Author: Hasan Basri BİLGE
Last Update: 25.07.2023 */

import React from 'react';
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';


const SharePostCardWrapper = styled(Paper)({
  padding: "1rem",
  height: "auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "20px",
});

const PostInputWrapper = styled(TextField)({
  margin: "10px 0",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
});

const ButtonsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});

const BlueButton = styled(Button)({
  borderRadius: "15px",
  color: "blue",
  borderColor: "blue",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const GreenButton = styled(Button)({
  borderRadius: "15px",
  color: "white",
  backgroundColor: "green",
  "&:hover": {
    backgroundColor: "black",
  },
});

function GonderiYap() {
  return (
    <SharePostCardWrapper>
      <Typography
        variant="h6"
        style={{
          fontFamily: "Arial",
          fontSize: "14px",
          fontWeight: "normal",
        }}
      >
        Gönderi Paylaş
      </Typography>
      <Divider />
      <PostInputWrapper
        label="Gönderinizi buraya yazın"
        variant="outlined"
        multiline
        rows={4}
      />
      <ButtonsWrapper>
        <BlueButton variant="contained" color="primary" sx={{ height: "30px", width: "auto" }}>
          Resim Yükle
        </BlueButton>
        <GreenButton variant="contained" color="primary" sx={{ height: "30px", width: "auto" }}>
          Paylaş
        </GreenButton>
      </ButtonsWrapper>
    </SharePostCardWrapper>
  )
}

export default GonderiYap;
