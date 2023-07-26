import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import kurumsalpp from "../assets/firmaprofillogo.png";

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
  marginLeft: "0px",
});
const RoundButton = styled(Button)({
  borderRadius: "20px",
  padding: "5px 10px",
});

function Gonderi() {
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
            25 Temmuz 2023, 18.30
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
        (GÖNDERİ İÇERİĞİ) Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi est ad aspernatur illo dolore voluptatibus
        exercitationem natus eligendi, qui inventore laboriosam consequuntur
        reiciendis quasi reprehenderit! Nisi eos dignissimos voluptatem quam.
        Optio expedita quis dolorem quam corrupti eaque voluptate placeat
        voluptatum quas fugiat sapiente, nostrum a fugit asperiores illum ipsam
        cupiditate qui laborum nemo, sed, ad veniam soluta nihil. Quam,
        sapiente.
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
        32 Beğeni
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

export default Gonderi;
