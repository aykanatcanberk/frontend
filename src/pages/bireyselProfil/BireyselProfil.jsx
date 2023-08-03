import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeneyimYorumu from "./DeneyimYorumu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
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
import EditEgitimGecmisi from "./Ozgecmis/EgitimGecmisi/EditEgitimGecmisi";
import EditIsGecmisi from "./Ozgecmis/IsGecmisi/EditIsGecmisi";
import UserAllPostsSlider from "./UserAllPostsSlider";
import { getAllPosts } from "../../services/postServices";
import SinglePost from "./SinglePost";
import GonderiCard from "../../components/gonderiCard/gonderiCard";
import {
  getUserById,
  getUserPrivateInformationById,
  getUserWorkBackgroundById,
  updatePrivateInformation,
  updateUserEduBackgroundInformation,
} from "../../services/userServices";
import AddIsGecmisi from "./Ozgecmis/IsGecmisi/AddIsGecmisi";
import axios from "axios";

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
  marginLeft: "0px",
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

  const [userWorkBackground, setUserWorkBackground] = useState([]);

  useEffect(() => {
    getUserWorkBackgroundById(1)
      .then((response) => {
        setUserWorkBackground(userWorkBackground.data);
        console.log(userWorkBackground);
      })
      .catch((error) => {
        console.log(
          "there is an error with getting the posts in bireyselporfil " +
            error.massage
        );
      });
  }, []);

  const initialPrivateInfo = {
    userName: "John",
    userSurname: "Doe",
    eMail: "john.doe@example.com",
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
    confirmationState: "notConfirmed",
  };

  const [privateInfo, setPrivateInfo] = useState(initialPrivateInfo);
  const [isEditingPrivateInfo, setIsEditingPrivateInfo] = useState(false);

  const [eduBackground, setEduBackground] = useState(initialEduBackground);
  const [isEditingEduBackground, setIsEditingEduBackground] = useState(false);

  const [workBackground, setWorkBackground] = useState(initialWorkBackground);
  const [isEditingWorkBackground, setIsEditingWorkBackground] = useState(false);

  const [editWorkBackgroundIndex, setEditWorkBackgroundIndex] = useState(-1);

  const [isAddingNewWorkBackground, setIsAddingNewWorkBackground] =
    useState(false);

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserById(1)
      .then((res) => {
        setUserInfo(res);
        const info = {
          userName: res.userName,
          surname: res.userSurname,
          email: res.eMail,
          birthDate: res.userPrivateInfo.birthDate,
          city: res.userPrivateInfo.city,
          cellNumber: res.userPrivateInfo.cellNumber,
        };
        handleEditPrivateInfoSave(info);
      })
      .catch((error) => {
        console.log(
          "there is an error with getting the posts in bireyselporfil " +
            error.massage
        );
      });
  }, []);

  const handleEditPrivateInfoClick = () => {
    setIsEditingPrivateInfo(true);
  };

  const handleEditEduBackgroundClick = () => {
    setIsEditingEduBackground(true);
  };

  const handleEditWorkBackgroundClick = () => {
    setIsEditingWorkBackground(true);
  };

  const handleAddWorkBackgroundClick = () => {
    setIsAddingNewWorkBackground(true);
  };

  const handleEditPrivateInfoSave = (editedSahsiInfo) => {
    updatePrivateInformation(
      { ...userInfo, userEduBackground: editedSahsiInfo },
      1
    );

    setPrivateInfo(editedSahsiInfo);
    setIsEditingPrivateInfo(false);
  };

  const handleEditEduBackgroundSave = (editedEduBackground) => {
    updateUserEduBackgroundInformation(editedEduBackground, 1);

    setEduBackground(editedEduBackground);
    setIsEditingEduBackground(false);
  };

  const handleEditWorkBackgroundSave = (editedWorkBackground) => {
    setWorkBackground(editedWorkBackground);
    setIsEditingWorkBackground(false);
  };

  const handleAddWorkBackgroundSave = (editedWorkBackground) => {
    // setWorkBackground(editedWorkBackground);
    setIsAddingNewWorkBackground(false);
  };

  const handleEditCancel = () => {
    setIsEditingPrivateInfo(false);
    setIsEditingEduBackground(false);
    setIsEditingWorkBackground(false);
    setIsAddingNewWorkBackground(false);
  };

  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    getAllPosts()
      .then((response) => {
        setAllPosts(response.data);
      })
      .catch((error) => {
        console.log(
          "there is an error with getting the posts in bireyselporfil " +
            error.massage
        );
      });
  }, []);

  function handleRendering() {
    if (sharedPostsActive) {
      return (
        <>
          <div>
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
          </div>
          <div style={{ width: "100%", height: "100%", marginTop: "1rem" }}>
            <Grid container spacing={5}>
              <Grid className="left-side" item xs={6}>
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
                    <GonderiCard key={index} userPosts={post} />
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
            </Grid>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
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
          </div>

          <div style={{ width: "100%", height: "100%", marginTop: "1rem" }}>
            <Grid container spacing={5}>
              <Grid className="left-side" item xs={6}>
                <SahsiBilgiler
                  sahsiBilgiler={privateInfo}
                  onEditClick={handleEditPrivateInfoClick}
                />

                <EditSahsiBilgiler
                  initialData={privateInfo}
                  onClose={handleEditCancel}
                  onSave={handleEditPrivateInfoSave}
                  isOpen={isEditingPrivateInfo}
                />

                <EgitimGecmisi
                  eduBackground={eduBackground}
                  onEditClick={handleEditEduBackgroundClick}
                />
                <EditEgitimGecmisi
                  initialData={eduBackground}
                  onClose={handleEditCancel}
                  onSave={handleEditEduBackgroundSave}
                  isOpen={isEditingEduBackground}
                />
              </Grid>

              <Grid className="right-side" item xs={6}>
                <CardWrapperForTitles elevation={4}>
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

                <IconButton
                  color="primary"
                  aria-label="add new work experience"
                  size="large"
                  onClick={handleAddWorkBackgroundClick}
                >
                  <AddCircleIcon backgroundColor="#47e632" />
                </IconButton>

                <Paper
                  className="allPosts"
                  style={{
                    maxHeight: 600,
                    width: "100%",
                    elevation: "0",
                    overflow: "auto",
                    backgroundColor: "white",
                    alignContent: "left",
                    marginLeft: "0px",
                  }}
                  elevation={0}
                >
                  <IsGecmisi
                    workBackground={workBackground}
                    onEditClick={handleEditWorkBackgroundClick}
                    style={{ marginLeft: 400 }}
                  />

                  <IsGecmisi
                    workBackground={workBackground}
                    onEditClick={handleEditWorkBackgroundClick}
                  />

                  <IsGecmisi
                    workBackground={workBackground}
                    onEditClick={handleEditWorkBackgroundClick}
                  />

                  <IsGecmisi
                    workBackground={workBackground}
                    onEditClick={handleEditWorkBackgroundClick}
                  />

                  <IsGecmisi
                    workBackground={workBackground}
                    onEditClick={handleEditWorkBackgroundClick}
                  />
                </Paper>

                <AddIsGecmisi
                  initialData={{}}
                  onClose={handleEditCancel}
                  onSave={handleAddWorkBackgroundClick}
                  isOpen={isAddingNewWorkBackground}
                />

                {/* <EditIsGecmisi
              initialData={isAddingNewWorkBackground ? workBackground : {}}
              onClose={handleEditCancel}
              onSave={handleEditWorkBackgroundSave}
              isOpen={isEditingWorkBackground}
            /> */}
              </Grid>
            </Grid>
          </div>
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

{
  /* <Grid className="left-side" item xs={6}>
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

<SahsiBilgiler
  sahsiBilgiler={privateInfo}
  onEditClick={handleEditPrivateInfoClick}
/>

<EditSahsiBilgiler
  initialData={privateInfo}
  onClose={handleEditCancel}
  onSave={handleEditPrivateInfoSave}
  isOpen={isEditingPrivateInfo}
/>

<EgitimGecmisi
  eduBackground={eduBackground}
  onEditClick={handleEditEduBackgroundClick}
/>
<EditEgitimGecmisi
  initialData={eduBackground}
  onClose={handleEditCancel}
  onSave={handleEditEduBackgroundSave}
  isOpen={isEditingEduBackground}
/>
</Grid>

<Grid className="right-side" item xs={6}>
<CardWrapperForTitles elevation={4}>
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

<IconButton
  color="primary"
  aria-label="add new work experience"
  size="large"
  onClick={handleAddWorkBackgroundClick}
>
  <AddCircleIcon backgroundColor="#47e632" />
</IconButton>

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
  elevation={0}
>
  <IsGecmisi
    workBackground={workBackground}
    onEditClick={handleEditWorkBackgroundClick}
  />

  <IsGecmisi
    workBackground={workBackground}
    onEditClick={handleEditWorkBackgroundClick}
  />

  <IsGecmisi
    workBackground={workBackground}
    onEditClick={handleEditWorkBackgroundClick}
  />

  <IsGecmisi
    workBackground={workBackground}
    onEditClick={handleEditWorkBackgroundClick}
  />

  <IsGecmisi
    workBackground={workBackground}
    onEditClick={handleEditWorkBackgroundClick}
  />
</Paper>

<AddIsGecmisi
  initialData={{}}
  onClose={handleEditCancel}
  onSave={handleAddWorkBackgroundClick}
  isOpen={isAddingNewWorkBackground}
/>


</Grid> */
}

{
  /* <EditIsGecmisi
  initialData={isAddingNewWorkBackground ? workBackground : {}}
  onClose={handleEditCancel}
  onSave={handleEditWorkBackgroundSave}
  isOpen={isEditingWorkBackground}
/> */
}
