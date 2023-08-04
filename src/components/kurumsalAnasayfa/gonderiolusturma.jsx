import React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import addPost from "../../services/postService";
import { useState } from "react";

const SharePostCardWrapper = styled(Paper)({
  padding: "2px",
  height: "auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "20px",
  marginLeft: "12px",
});

const PostInputWrapper = styled(TextField)({
  margin: "10px ",
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
    backgroundColor: "	#4CAF50",
  },
});

function Gonderiolustur() {
  const PostData = {
    companyname: "",
    content: "",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  const [postData, setPostData] = useState(PostData);

  const handleSubmit = () => {
    const newPost = {
      content: postData.content,
      companydate: new Date().toLocaleDateString(),
    };

    addPost(newPost)
      .then((response) => {
        console.log("Post başarıyla eklendi:", response.data);
      })
      .catch((error) => {
        console.error("Post eklenirken bir hata oluştu:", error);
      });
    setPostData(PostData);
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
        name="content"
        value={postData.content}
        onChange={handleInputChange}
      />
      <ButtonsWrapper>
        <GreenButton
          variant="contained"
          color="primary"
          sx={{ height: "30px", width: "auto" }}
          onClick={handleSubmit}
        >
          Paylaş
        </GreenButton>
      </ButtonsWrapper>
    </SharePostCardWrapper>
  );
}

export default Gonderiolustur;

