import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import kurumsalpp from "../assets/firmaprofillogo.png";
import LikeButton from "../likeButton/LikeButton";
import PaylasButton from "../paylasButton/PaylasButton";

const ButtonsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});
const PostCardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "left",
  marginBottom: "10px",
  marginTop: "40px",
  borderRadius: "20px",
  marginLeft: "12px",
});
const RoundButton = styled(Button)({
  borderRadius: "20px",
  padding: "5px 10px",
});

function Gonderi({ postcard }) {
  return (
    <PostCardWrapper>
      <Grid container alignItems="center">
        <Grid item xs={2} sm={2} md={3}>
          <Avatar
            src={kurumsalpp}
            alt="Profil Avatarı"
            sx={{ marginLeft: "15px", fontSize: "30px" }}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              marginLeft: "3px",
            }}
          >
            {postcard.companyname}
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              fontFamily: "Arial",
              fontSize: "12px",
              fontWeight: "normal",
              color: "textSecondary",
            }}
          >
            {postcard.companydate}
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="body1"
        style={{
          fontFamily: "Arial",
          fontSize: "14px",
          fontWeight: "normal",
        }}
      >
        {postcard.postdesc}
      </Typography>

      <ButtonsWrapper>
        <ButtonsWrapper>
          <LikeButton />
          <TextField
            label="Yorum yaz..."
            variant="outlined"
            margin="none"
            fullWidth
            size="small"
            style={{ flexGrow: 1 }}
          />
          <PaylasButton />
        </ButtonsWrapper>
        <TextField
          label="Yorum yaz..."
          variant="outlined"
          margin="none"
          fullWidth
          size="small"
          style={{ flexGrow: 1 }}
        />
        <RoundButton
          variant="contained"
          color="primary"
          size="small"
          sx={{ marginLeft: "5px" }}
        >
          <SendIcon />
        </RoundButton>
      </ButtonsWrapper>
    </PostCardWrapper>
  );
}

export default Gonderi;
