import React from "react";
import { Grid, Paper, Typography, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import advertDB from "../../data/advert.json";
import Advert from "../../components/Advert/Advert";

const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "0 auto",
  maxWidth: "1200px",
  marginTop: "-20px",
});

const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "20px",
});

const AvatarWrapper = styled(Avatar)({
  width: "100px",
  height: "100px",
  margin: "auto",
  borderRadius: "50%",
});

const SmallAvatarWrapper = styled(Avatar)({
  width: "30px",
  height: "30px",
  margin: "0.3rem auto",
  borderRadius: "50%",
});

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

const App = () => {
  return (
    <PageWrapper container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={4} md={3}>
        <CardWrapper>
          <AvatarWrapper src="url_profil_avatar" alt="Profil Avatarı" />
          <Typography
            variant="h6"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Kullanıcı Adı
          </Typography>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "12px",
                fontWeight: "normal",
                color: "secondary",
                textAlign: "center",
              }}
            >
              Öğrenci
            </Typography>
          </Grid>
        </CardWrapper>
        <CardWrapper>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Takip Edilen Firmalar
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_1" alt="Firma 1" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 1
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_2" alt="Firma 2" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 2
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_3" alt="Firma 3" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 3
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_4" alt="Firma 4" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 4
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_5" alt="Firma 5" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 5
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <SmallAvatarWrapper src="url_firma_avatar_6" alt="Firma 6" />
              <Typography
                style={{
                  fontFamily: "Arial",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Firma 6
              </Typography>
            </Grid>
          </Grid>
          <Link
            href="#"
            style={{
              fontFamily: "Arial",
              fontSize: "12px",
              fontWeight: "normal",
            }}
          >
            Tüm Firmaları Görüntüle
          </Link>
        </CardWrapper>
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
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
          <PostInputWrapper
            label="Gönderinizi buraya yazın"
            variant="outlined"
            multiline
            rows={4}
          />
          <ButtonsWrapper>
            <Button
              variant="contained"
              color="primary"
              sx={{ height: "30px", width: "auto" }}
            >
              Resim Yükle
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ height: "30px", width: "auto" }}
            >
              Paylaş
            </Button>
          </ButtonsWrapper>
        </SharePostCardWrapper>

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
            Bu bir örnek gönderi içeriğidir. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla consectetur nulla sit amet nisi
            sodales, in eleifend quam lacinia.
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
      </Grid>

      {/* Üçüncü Kolon */}
      <Grid item xs={12} sm={4} md={3}>
        {advertDB.adverts.map((ad) => (
          <Advert key={ad.id} advert={ad} />
        ))}

        <CardWrapper>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            İlgini Çekebilecek İlanlar
          </Typography>
        </CardWrapper>
        <CardWrapper>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Popüler İçerikler
          </Typography>
        </CardWrapper>
      </Grid>
    </PageWrapper>
  );
};

export default App;
