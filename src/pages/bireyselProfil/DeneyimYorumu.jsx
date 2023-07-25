import * as React from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { blue } from "@mui/material/colors";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { grey } from "@mui/material/colors";
import BusinessIcon from "@mui/icons-material/Business";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 310px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px;
  margin-left:5px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };
`
);

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

export default function DeneyimYorumu({ deneyim }) {
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
      {/* Post Content */}
      <Typography
        variant="body1"
        style={{
          fontFamily: "Arial",
          fontSize: "14px",
          fontWeight: "normal",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        vero animi labore unde quis, consectetur debitis pariatur maiores
        voluptas illo quas impedit odit! Tempora, optio ipsa. Assumenda, dolor
        blanditiis! Similique!
      </Typography>
      {/* Like, Comment, and Likes Count */}
      <ButtonsWrapper>
        <RoundButton variant="contained" color="primary" size="small">
          Beğen
        </RoundButton>
        <RoundButton variant="contained" color="primary" size="small">
          <SendIcon />
        </RoundButton>
        <Typography
          variant="body2"
          style={{
            fontFamily: "Arial",
            fontSize: "12px",
            fontWeight: "normal",
            color: "textSecondary",
          }}
        >
          10 Beğeni
        </Typography>
      </ButtonsWrapper>
      <TextField
        label="Yorum yaz..."
        variant="outlined"
        margin="normal"
        fullWidth
        size="small"
      />
    </PostCardWrapper>
    // <Card sx={{ maxWidth: 380 }}>
    //   <CardHeader
    //     avatar={
    //       <BusinessIcon
    //         sx={{ fontSize: 35, bgcolor: blue[500] }}
    //         aria-label="recipe"
    //       />
    //     }
    //     title={
    //       <Typography variant="h8" fontWeight="bold">
    //         {deneyim.name}
    //       </Typography>
    //     }
    //     subheader={
    //       <Box display="flex" alignItems="center">
    //         <CalendarMonthIcon sx={{ fontSize: 14, marginLeft: 1 }} />
    //         <Typography variant="body2" color="text.secondary">
    //           {deneyim.id}
    //         </Typography>
    //         <BusinessCenterIcon sx={{ fontSize: 14, marginLeft: 1 }} />
    //         {/* <Typography variant="body2" color="text.secondary">{deneyim.ilan_tipi}</Typography> */}
    //       </Box>
    //     }
    //   />
    //   <StyledTextarea
    //     maxRows={4}
    //     aria-label="maximum height"
    //     placeholder="Maximum 100 rows"
    //     defaultValue={deneyim.body}
    //     readOnly
    //   />
    // </Card>
  );
}
