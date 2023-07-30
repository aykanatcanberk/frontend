import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getAllPosts } from "../../services/postServices";
import BlurredBackgroundWrapper from "./BlurredBackgroundWrapper";
import FirmaBilgileri from "./FirmaBilgileri/FirmaBilgiler";
import EditFirmaBilgileri from "./FirmaBilgileri/EditFirmaBilgileri";

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

function KurumsalProfil({ avatarSrc = "url_profil_avatar", name, school }) {
  const [posts, setPosts] = useState([]);

  const initialPrivateCompanyInfo = {
    companySector: "John",
    companyType: "Doe",
    employeeCount: "john.doe@example.com",
    foundedIn: "10/10/10",
    location: "Istanbul",
    areaOfExpertise: "İstanbul",
    webSite: "123-456-7890",
    phoneNum: "123-456-7890",
  };

  const [privateCompanyInfo, setPrivateCompanyInfo] = useState(
    initialPrivateCompanyInfo
  );
  const [isEditingPrivateCompanyInfo, setIsEditingPrivateCompanyInfo] =
    useState(false);

  const handleEditPrivateCompanyInfoClick = () => {
    setIsEditingPrivateCompanyInfo(true);
    disableScroll();
  };

  const handleEditPrivateCompanyInfoSave = (editedCompanyInfo) => {
    setPrivateCompanyInfo(editedCompanyInfo);
    enableScroll();
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const handleEditCancel = () => {
    setIsEditingPrivateCompanyInfo(false);
    enableScroll();
  };

  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => {
        console.error("Coulnt fetch the all posts data due to :" + err.message);
      });
  }, []);

  function handleRendering() {
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
                      fontSize: "16px",
                      fontWeight: "bold",
                      alignSelf: "left",
                      flex: "auto",
                    }}
                  >
                    Firma Adı
                  </Typography>
                </CardWrapperForTitles>
              </Grid>
            </div>
          </ProfileWrapper>

          <BlurredBackgroundWrapper isShown={isEditingPrivateCompanyInfo}>
            <FirmaBilgileri
              companyInfo={privateCompanyInfo}
              onEditClick={handleEditPrivateCompanyInfoClick}
            />

            {isEditingPrivateCompanyInfo && (
              <div className="popup-container">
                <EditFirmaBilgileri
                  initialData={isEditingPrivateCompanyInfo}
                  onClose={handleEditCancel}
                  onSave={handleEditPrivateCompanyInfoSave}
                />
              </div>
            )}
          </BlurredBackgroundWrapper>
        </Grid>
        <Grid className="right-side" item xs={6}>
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
      </>
    );
  }

  return (
    <PageWrapper
      className="kurumsalProfil"
      container
      spacing={4}
      justifyContent="center"
    >
      {handleRendering()}
    </PageWrapper>
  );
}

export default KurumsalProfil;
