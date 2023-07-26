import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeneyimYorumu from "./DeneyimYorumu";
import "./BireyselProfil.css";
import { getAllExperienceReviews } from "../../services/expReviewServices";

const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "0 auto",
  maxWidth: "1200px",
  marginTop: "-20px",
});

const ProfileWrapper = styled(Paper)({
  display: "grid", // Use CSS Grid for the layout
  gridTemplateColumns: "auto 1fr", // Divide the card into two columns
  alignItems: "center", // Vertically center the content
  padding: "1rem",
  gap: "150px",
  marginBottom: "10px",
  borderRadius: "20px",
  position: "sticky",
});

const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "20px",
});

const CardWrapperLeftAligned = styled(Paper)({
  padding: "1rem",
  textAlign: "left",
  marginBottom: "10px",
  borderRadius: "20px",
});

const AvatarWrapper = styled(Avatar)({
  width: "100px",
  height: "100px",
  margin: "auto",
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

const EqualWidthButton = styled(Button)({
  flex: 1, // Make the buttons share the available space equally
  margin: "0 5px", // Optional: Add some margin between the buttons
});

const RoundButton = styled(Button)({
  borderRadius: "20px",
  padding: "5px 10px",
});

function PageChangeButtons({ sharedPostsActive, setSharedPostsActive }) {
  return (
    <>
      <CardWrapper>
        <ButtonsWrapper>
          <EqualWidthButton
            variant="contained"
            color={sharedPostsActive ? "primary" : "grey"}
            sx={{ height: "30px" }}
            // disabled={!sharedPostsActive}
            onClick={() => setSharedPostsActive(true)}
          >
            PAYLAŞIMLARIM
          </EqualWidthButton>
          <EqualWidthButton
            variant="contained"
            color={!sharedPostsActive ? "primary" : "grey"}
            sx={{ height: "30px" }}
            //disabled={sharedPostsActive}
            onClick={() => setSharedPostsActive(false)}
          >
            ÖZGEÇMİŞİM
          </EqualWidthButton>
        </ButtonsWrapper>
      </CardWrapper>
    </>
  );
}

function KimlikBilgileri({ userName, userTR_Id, userEmail }) {


  return (
    <>
      <Grid container alignItems="left">
        <Grid item xs={10} sm={10} md={10} alignItems="left">
          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            AD SOYAD
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            T.C. KİMLİK NUMARASI
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            E-POSTA ADRESİ
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <ButtonsWrapper>
        <RoundButton variant="contained" color="primary" size="small">
          DÜZENLE?
        </RoundButton>
        <RoundButton variant="contained" color="primary" size="small">
          SİL
        </RoundButton>
      </ButtonsWrapper>
    </>
  );
}

function EgitimGecmisi({ degree, classYear, faculty, departmant, schoolStartDate, gradeAverage}) {
  return (
    <>
      <Grid container alignItems="left">
        <Grid item xs={10} sm={10} md={10} alignItems="left">
          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            LİSANS
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            SINIF
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            FAKÜLTE
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            BÖLÜM
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            BAŞLAMA TARİHİ
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            EĞİTİM DURUMU
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            ORTALAMA
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <ButtonsWrapper>
        <RoundButton variant="contained" color="primary" size="small">
          DÜZENLE?
        </RoundButton>
        <RoundButton variant="contained" color="primary" size="small">
          SİL
        </RoundButton>
      </ButtonsWrapper>
    </>
  );
}

function SahsiBilgiler({ birthDate, birthPlace,  }) {
  return (
    <>
      <Grid container alignItems="left">
        <Grid item xs={10} sm={10} md={10} alignItems="left">
          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            DOĞUM TARİHİ
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            DOĞUM YERİ
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            NUFÜSA KAYITLI OLDUĞU ŞEHİR
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <ButtonsWrapper>
        <RoundButton variant="contained" color="primary" size="small">
          DÜZENLE?
        </RoundButton>
        <RoundButton variant="contained" color="primary" size="small">
          SİL
        </RoundButton>
      </ButtonsWrapper>
    </>
  );
}

function IsGecmisi({ companyName, workPosition, workingDate, departmant }) {
  return (
    <>
      <Grid container alignItems="left">
        <Grid item xs={10} sm={10} md={10} alignItems="left">
          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            Şirket Adı
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            POZİSYON
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            BAŞLAMA-BİTİŞ TARİHİ
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            AÇIKLAMA-HANGİ DEPARTMAN
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <ButtonsWrapper>
        <RoundButton variant="contained" color="primary" size="small">
          DÜZENLE?
        </RoundButton>
        <RoundButton variant="contained" color="primary" size="small">
          SİL
        </RoundButton>
      </ButtonsWrapper>
    </>
  );
}

function İletisimBilgileri({ country, city, district, address, zipCode, cellPhone }) {
  return (
    <>
      <Grid container alignItems="left">
        <Grid item xs={10} sm={10} md={10} alignItems="left">
          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            YAŞADIĞI ÜLKE
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            YAŞADIĞI ŞEHİR
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            YAŞADIĞI İLÇE
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            ADRES
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            POSTA KODU
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
              alignSelf: "left",
            }}
          >
            CEP TELEFONU
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                alignSelf: "left",
              }}
            >
              **
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <ButtonsWrapper>
        <RoundButton variant="contained" color="primary" size="small">
          DÜZENLE?
        </RoundButton>
        <RoundButton variant="contained" color="primary" size="small">
          SİL
        </RoundButton>
      </ButtonsWrapper>
    </>
  );
}

function BireyselProfil({ avatarSrc = "url_profil_avatar", name, school }) {
  const [sharedPostsActive, setSharedPostsActive] = useState(true);

  const [expReviews, setexpReviews] = useState([]);

  useEffect(() => {
    getAllExperienceReviews()
      .then((reviews) => {
        setexpReviews(reviews);
      })
      .catch((err) => {
        console.error("Coulnt fetch the all posts data due to :" + err.message);
      });
  }, []);

  function handleRendering() {
    if (sharedPostsActive) {
      return (
        <>
          <Grid className="left-side" item xs={6}>
            <ProfileWrapper>
              <AvatarWrapper src={avatarSrc} alt="Profil Avatarı" />
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  User Name
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Department
                </Typography>
              </div>
            </ProfileWrapper>

            <PageChangeButtons
              sharedPostsActive={sharedPostsActive}
              setSharedPostsActive={setSharedPostsActive}
            />
            <CardWrapper>
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
            </CardWrapper>
          </Grid>

          <Grid className="right-side" item xs={6}>
            <CardWrapper>DENEYİM YORUMLARI</CardWrapper>
            <CardWrapper elevation={12}>
              {expReviews.map((expReview) => (
                <DeneyimYorumu expReview={expReview} />
              ))}
            </CardWrapper>
          </Grid>
        </>
      );
    } else {
      return (
        <>
          <Grid className="left-side" item xs={6}>
            <ProfileWrapper>
              <AvatarWrapper src={avatarSrc} alt="Profil Avatarı" />
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  User Name
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Department
                </Typography>
              </div>
            </ProfileWrapper>
            <PageChangeButtons
              sharedPostsActive={sharedPostsActive}
              setSharedPostsActive={setSharedPostsActive}
            />

            <CardWrapperLeftAligned elevation={4}>
              <KimlikBilgileri />
            </CardWrapperLeftAligned>
            <CardWrapperLeftAligned elevation={4}>
              <EgitimGecmisi />
            </CardWrapperLeftAligned>
          </Grid>

          <Grid className="right-side" item xs={6}>
            <CardWrapperLeftAligned elevation={4}>
              <SahsiBilgiler />
            </CardWrapperLeftAligned>
            <CardWrapperLeftAligned elevation={4}>
              <IsGecmisi />
            </CardWrapperLeftAligned>
            <CardWrapperLeftAligned elevation={4}>
              <İletisimBilgileri />
            </CardWrapperLeftAligned>
          </Grid>
        </>
      );
    }
  }

  return (
    <PageWrapper
      className="bireyselProfil"
      container
      spacing={4}
      justifyContent="center"
    >
      {handleRendering()}
    </PageWrapper>
  );
}

export default BireyselProfil;
