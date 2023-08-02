import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import {
  ProfileWrapper,
  AvatarWrapper,
  CardWrapperForTitles,
  PageChangeButtons,
  CardWrapper,
  ButtonsWrapper,
  SharePostCardWrapper,
  PostInputWrapper,
} from "../CustomStyledComponents";
import DeneyimYorumu from "../DeneyimYorumu";

function Paylasımlar() {
  const [sharedPostsActive, setSharedPostsActive] = useState(true);

  const [expReviews, setexpReviews] = useState([]);
  return (
    <>
      <Grid className="left-side" item xs={6}>
        <ProfileWrapper elevation={0}>
          <AvatarWrapper alt="Profil Avatarı" />
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
}

export default Paylasımlar;
