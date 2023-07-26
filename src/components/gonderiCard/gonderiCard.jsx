/* Author: Hasan Basri BİLGE
Last Update: 25.07.2023 */

import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const ButtonsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});
const PostCardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "left",
  marginBottom: "10px",
  marginTop: "10px",
  borderRadius: "20px",
  marginLeft: "0px",
});
const RoundButton = styled(Button)({
  borderRadius: "20px",
  padding: "5px 10px",
});

function GonderiCard({ postData }) {
  return (
    <PostCardWrapper>
      <Grid container alignItems="center">
        <Grid item xs={2} sm={2} md={2}>
          <Avatar src="url_profil_avatar" alt="Profil Avatarı" />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {postData.userName}
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
            {postData.postDate}
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
        {postData.content}
      </Typography>
      <Typography
        variant="body2"
        style={{
          fontFamily: "Arial",
          fontSize: "12px",
          fontWeight: "normal",
          color: "textSecondary",
          textAlign: "end",
        }}
      >
        ?10 Beğeni?
      </Typography>
      <ButtonsWrapper>
        <RoundButton
          variant="contained"
          color="primary"
          size="small"
          sx={{ marginRight: "5px" }}
        >
          Beğen
        </RoundButton>
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

export default GonderiCard;
