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
  borderRadius: "3px",
});

const CardWrapperForTitles = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "3px",
  display: "inline-block",
});

const CardWrapperLeftAligned = styled(Paper)({
  padding: "1rem",
  textAlign: "left",
  marginBottom: "10px",
  borderRadius: "3px",
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

// İLETİŞİM -> SADECE DÜZENLE,
// DİĞERLERİ EKLE VE DÜZENLE

function PageChangeButtons({ sharedPostsActive, setSharedPostsActive }) {
  return (
    <>
      <CardWrapper elevation={0}>
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

function SahsiBilgiler({ userName, userTR_Id, userEmail }) {
  return (
    <>
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
              Şahsi Bilgiler
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
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Ad Soyad
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
                E-posta Adresi
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
                Doğum Tarihi
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
                Yaşadığı Şehir
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
                Cep Telefonu
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
              EKLE
            </RoundButton>
            <RoundButton variant="contained" color="primary" size="small">
              DÜZENLE (EĞER DOLUYSA)
            </RoundButton>
          </ButtonsWrapper>
        </CardWrapperLeftAligned>
      </CardWrapper>
    </>
  );
}

function EgitimGecmisi({
  degree,
  classYear,
  faculty,
  departmant,
  schoolStartDate,
  gradeAverage,
}) {
  return (
    <>
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
                  fontSize: "14px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Lisans
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
                Sınıf
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
                Bölüm Adı
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
                Fakülte
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
                Eğitim Durumu
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
                Ortalama
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
              EKLE
            </RoundButton>
            <RoundButton variant="contained" color="primary" size="small">
              DÜZENLE (EĞER DOLUYSA)
            </RoundButton>
          </ButtonsWrapper>
        </CardWrapperLeftAligned>
      </CardWrapper>
    </>
  );
}

function IsGecmisi({ companyName, workPosition, workingDate, departmant }) {
  return (
    <>
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
              İş Geçmişi
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
                Pozisyon/Birim
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
                Başlama-Bitiş Tarihi
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
                Açıklama(hangi departman)
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
                Personel Numarası
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
                Onay Mektubu
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
              YENİ EKLE
            </RoundButton>
            <RoundButton variant="contained" color="primary" size="small">
              ONAYA GÖNDER
            </RoundButton>
          </ButtonsWrapper>
        </CardWrapperLeftAligned>
      </CardWrapper>
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
            <ProfileWrapper elevation={0}>
              <AvatarWrapper src={avatarSrc} alt="Profil Avatarı" />
              <div>
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
                      AD-SOYAD
                    </Typography>
                  </CardWrapperForTitles>
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
                      Departman
                    </Typography>
                  </CardWrapperForTitles>
                </Grid>
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

            <SahsiBilgiler />
            <EgitimGecmisi />
          </Grid>

          <Grid className="right-side" item xs={6}>
            <IsGecmisi />
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

// // İŞ GEÇMİŞ, EĞİTİM GEÇMİŞİ, İLETİŞİM

// function İletisimBilgileri({
//   country,
//   city,
//   district,
//   address,
//   zipCode,
//   cellPhone,
// }) {
//   // YAŞADIĞI ŞEHİR, TELEFON, MAİLİ BURAYA AL
//   return (
//     <>
//       <Grid container alignItems="left">
//         <Grid item xs={10} sm={10} md={10} alignItems="left">
//           <Typography
//             variant="subtitle1"
//             style={{
//               fontFamily: "Arial",
//               fontSize: "14px",
//               fontWeight: "bold",
//               alignSelf: "left",
//             }}
//           >
//             YAŞADIĞI ÜLKE
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontFamily: "Arial",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 alignSelf: "left",
//               }}
//             >
//               **
//             </Typography>
//           </Typography>

//           <Typography
//             variant="subtitle1"
//             style={{
//               fontFamily: "Arial",
//               fontSize: "14px",
//               fontWeight: "bold",
//               alignSelf: "left",
//             }}
//           >
//             YAŞADIĞI ŞEHİR
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontFamily: "Arial",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 alignSelf: "left",
//               }}
//             >
//               **
//             </Typography>
//           </Typography>

//           <Typography
//             variant="subtitle1"
//             style={{
//               fontFamily: "Arial",
//               fontSize: "14px",
//               fontWeight: "bold",
//               alignSelf: "left",
//             }}
//           >
//             E-MAİL
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontFamily: "Arial",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 alignSelf: "left",
//               }}
//             >
//               **
//             </Typography>
//           </Typography>

//           <Typography
//             variant="subtitle1"
//             style={{
//               fontFamily: "Arial",
//               fontSize: "14px",
//               fontWeight: "bold",
//               alignSelf: "left",
//             }}
//           >
//             POSTA KODU
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontFamily: "Arial",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 alignSelf: "left",
//               }}
//             >
//               **
//             </Typography>
//           </Typography>

//           <Typography
//             variant="subtitle1"
//             style={{
//               fontFamily: "Arial",
//               fontSize: "14px",
//               fontWeight: "bold",
//               alignSelf: "left",
//             }}
//           >
//             CEP TELEFONU
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontFamily: "Arial",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 alignSelf: "left",
//               }}
//             >
//               **
//             </Typography>
//           </Typography>
//         </Grid>
//       </Grid>

//       <ButtonsWrapper>
//         <RoundButton variant="contained" color="primary" size="small">
//           DÜZENLE?
//         </RoundButton>
//         <RoundButton variant="contained" color="primary" size="small">
//           SİL
//         </RoundButton>
//       </ButtonsWrapper>
//     </>
//   );
// }

// function SahsiBilgiler({ birthDate, birthPlace }) {
//   return (
//     <>
//       <Grid container alignItems="left">
//         <Grid item xs={10} sm={10} md={10} alignItems="left">
//           <Typography
//             variant="subtitle1"
//             style={{
//               fontFamily: "Arial",
//               fontSize: "14px",
//               fontWeight: "bold",
//               alignSelf: "left",
//             }}
//           >
//             DOĞUM TARİHİ
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontFamily: "Arial",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 alignSelf: "left",
//               }}
//             >
//               **
//             </Typography>
//           </Typography>

//           <Typography
//             variant="subtitle1"
//             style={{
//               fontFamily: "Arial",
//               fontSize: "14px",
//               fontWeight: "bold",
//               alignSelf: "left",
//             }}
//           >
//             DOĞUM YERİ
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontFamily: "Arial",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 alignSelf: "left",
//               }}
//             >
//               **
//             </Typography>
//           </Typography>

//           <Typography
//             variant="subtitle1"
//             style={{
//               fontFamily: "Arial",
//               fontSize: "14px",
//               fontWeight: "bold",
//               alignSelf: "left",
//             }}
//           >
//             NUFÜSA KAYITLI OLDUĞU ŞEHİR
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontFamily: "Arial",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 alignSelf: "left",
//               }}
//             >
//               **
//             </Typography>
//           </Typography>
//         </Grid>
//       </Grid>

//       <ButtonsWrapper>
//         <RoundButton variant="contained" color="primary" size="small">
//           DÜZENLE?
//         </RoundButton>
//         <RoundButton variant="contained" color="primary" size="small">
//           SİL
//         </RoundButton>
//       </ButtonsWrapper>
//     </>
//   );
// }
