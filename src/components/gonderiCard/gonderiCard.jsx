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
});
const RoundButton = styled(Button)({
    borderRadius: "20px",
    padding: "5px 10px",
});

function GonderiCard() {
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
                Kullanıcı Adı
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
                25 Temmuz 2023, 10:30
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
            Bu bir örnek gönderi içeriğidir. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla consectetur nulla sit amet nisi
            sodales, in eleifend quam lacinia.
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
            10 Beğeni
          </Typography>
          <ButtonsWrapper>
            <RoundButton variant="contained" color="primary" size="small">
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
            <RoundButton variant="contained" color="primary" size="small">
              <SendIcon />
            </RoundButton>
          </ButtonsWrapper>
        </PostCardWrapper>
  )
}

export default GonderiCard;

