import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeneyimYorumu from "./DeneyimYorumu";
import "./BireyselProfil.css";
import {
  getAllExperienceReviews,
  getSelfExperiences,
} from "../../services/expReviewServices";
import NewPost from "./NewPost";

import EgitimGecmisi from "./Ozgecmis/EgitimGecmisi/EgitimGecmisi";
import IsGecmisi from "./Ozgecmis/IsGecmisi/IsGecmisi";
import SahsiBilgiler from "./Ozgecmis/SahsiBilgiler/SahsiBilgiler";
import EditSahsiBilgiler from "./Ozgecmis/SahsiBilgiler/EditSahsiBilgiler";
import BlurredBackgroundWrapper from "./BlurredBackgroundWrapper";
import EditEgitimGecmisi from "./Ozgecmis/EgitimGecmisi/EditEgitimGecmisi";
import EditIsGecmisi from "./Ozgecmis/IsGecmisi/EditIsGecmisi";
import UserAllPostsSlider from "./UserAllPostsSlider";
import { getAllPosts } from "../../services/postServices";
import SinglePost from "./SinglePost";
import GonderiCard from "../../components/gonderiCard/gonderiCard";

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

const EqualWidthButton = styled(Button)({
  flex: 1, // Make the buttons share the available space equally
  margin: "0 5px", // Optional: Add some margin between the buttons
});

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

function BireyselProfil({ avatarSrc = "url_profil_avatar", name, school }) {
  const [sharedPostsActive, setSharedPostsActive] = useState(true);

  const [expReviewsSelf, setExpReviewsSelf] = useState([]);

  // useEffect(() => {
  //   console.log(getSelfExperiences().promiseResult);
  //   const selfRev = getSelfExperiences();
  //   setExpReviewsSelf(getSelfExperiences());
  // }, []);

  const initialPrivateInfo = {
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    birthDate: "10/10/10",
    city: "İstanbul",
    cellNumber: "123-456-7890",
  };

  const initialEduBackground = {
    graduate: "**",
    year: "3",
    department: "comp engineering",
    faculty: "engineering",
    eduStatus: "?",
    gpa: "3.13",
  };

  const initialWorkBackground = {
    companyName: "**",
    workPosition: "3",
    startDate: "comp engineering",
    endDate: "",
    personnelNumber: "engineering",
    confirmationLetter: "?",
  };

  const [privateInfo, setPrivateInfo] = useState(initialPrivateInfo);
  const [isEditingPrivateInfo, setIsEditingPrivateInfo] = useState(false);

  const [eduBackground, setEduBackground] = useState(initialEduBackground);
  const [isEditingEduBackground, setIsEditingEduBackground] = useState(false);

  const [workBackground, setWorkBackground] = useState(initialWorkBackground);
  const [isEditingWorkBackground, setIsEditingWorkBackground] = useState(false);

  const handleEditPrivateInfoClick = () => {
    setIsEditingPrivateInfo(true);
    disableScroll();
  };

  const handleEditEduBackgroundClick = () => {
    setIsEditingEduBackground(true);
    disableScroll();
  };

  const handleEditWorkBackgroundClick = () => {
    setIsEditingWorkBackground(true);
    disableScroll();
  };

  const handleEditPrivateInfoSave = (editedSahsiInfo) => {
    setPrivateInfo(editedSahsiInfo);
    enableScroll();
  };

  const handleEditEduBackgroundSave = (editedEduBackground) => {
    setEduBackground(editedEduBackground);
    enableScroll();
  };

  const handleEditWorkBackgroundSave = (editedWorkBackground) => {
    setWorkBackground(editedWorkBackground);
    enableScroll();
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const handleEditCancel = () => {
    setIsEditingPrivateInfo(false);
    setIsEditingEduBackground(false);
    setIsEditingWorkBackground(false);
    enableScroll();
  };


  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    getAllPosts()
      .then((response) => {
        setAllPosts(response.data);
      })
      .catch((error) => {
        console.log("there is an error with getting the posts in bireyselporfil " + error.massage);
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
            <NewPost url={"/posts"} userId={1} />
            <br />
            <Paper
              className="allPosts"
              style={{
                maxHeight: 600,
                width: "100%",
                elevation: "0",
                overflow: "auto",
                backgroundColor: "white",
                alignContent: "center",

              }}
            >
              {allPosts.map((post, index) => (
                <GonderiCard  key={index} userPosts={post} />
              ))}
            </Paper>
          </Grid>

          <Grid className="right-side" item xs={6}>
            <CardWrapper>DENEYİM YORUMLARIM</CardWrapper>
            <CardWrapper elevation={12}>
              {expReviewsSelf.map((expReview) => (
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

            <BlurredBackgroundWrapper
              isShown={isEditingPrivateInfo || isEditingEduBackground}
            >
              <SahsiBilgiler
                sahsiBilgiler={privateInfo}
                onEditClick={handleEditPrivateInfoClick}
              />

              {isEditingPrivateInfo && (
                <div className="popup-container">
                  <EditSahsiBilgiler
                    initialData={privateInfo}
                    onClose={handleEditCancel}
                    onSave={handleEditPrivateInfoSave}
                  />
                </div>
              )}

              <EgitimGecmisi
                eduBackground={eduBackground}
                onEditClick={handleEditEduBackgroundClick}
              />

              {isEditingEduBackground && (
                <div className="popup-container">
                  <EditEgitimGecmisi
                    initialData={eduBackground}
                    onClose={handleEditCancel}
                    onSave={handleEditEduBackgroundSave}
                  />
                </div>
              )}
            </BlurredBackgroundWrapper>
          </Grid>

          <Grid className="right-side" item xs={6}>
            <BlurredBackgroundWrapper isShown={isEditingWorkBackground}>
              <IsGecmisi
                workBackground={workBackground}
                onEditClick={handleEditWorkBackgroundClick}
              />

              {isEditingWorkBackground && (
                <div className="popup-container">
                  <EditIsGecmisi
                    initialData={workBackground}
                    onClose={handleEditCancel}
                    onSave={handleEditWorkBackgroundSave}
                  />
                </div>
              )}
            </BlurredBackgroundWrapper>
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
