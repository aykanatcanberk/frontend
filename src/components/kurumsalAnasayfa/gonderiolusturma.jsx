/* Author: Hasan Basri BİLGE
Last Update: 26.07.2023 */

import React, { useState } from 'react';
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import addPost from '../../services/postService';


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

const GreenButton = styled(Button)({
  borderRadius: "15px",
  color: "white",
  backgroundColor: "green",
  "&:hover": {
    backgroundColor: "black",
  },
});

function GonderiYap() {
  const [postText, setPostText] = useState(""); // State to hold the text of the post

  const handlePostShare = () => {
    // Call the addPost function with the post text
    addPost({ content: postText })
      .then((response) => {
        console.log("Post shared successfully!");
        // Clear the post text after sharing
        setPostText("");
      })
      .catch((error) => {
        console.error("Error sharing post:", error);
        // Handle error if needed
      });
  };
  return (
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
      <Divider />
      <PostInputWrapper
        label="Gönderinizi buraya yazın"
        variant="outlined"
        multiline
        rows={4}
        value={postText} // Bind the input value to the state
        onChange={(e) => setPostText(e.target.value)} // Update the state on input change
      />
      <ButtonsWrapper>
        <GreenButton variant="contained" color="primary" onClick={handlePostShare}>
          Paylaş
        </GreenButton>
      </ButtonsWrapper>
    </SharePostCardWrapper>
  )
}

export default GonderiYap;
