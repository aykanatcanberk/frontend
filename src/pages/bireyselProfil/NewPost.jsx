import { useState, useContext, useEffect } from "react";
import { format } from "date-fns";
import api from "../../api/axios";
import { FormControl, Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import addPost from "../../services/postServices";

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

const NewPost = ({ url, userId }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  // useEffect(() => {
  //   console.log("postTitle");
  //   console.log(postTitle);
  //   console.log("postBody");
  //   console.log(postBody);
  // }, [postTitle,postBody]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postDate = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      title: postTitle,
      postDate,
      content: postBody,
      userId: userId,
    };
    console.log(newPost);

    addPost(newPost, "posts");
    setPostTitle("");
    setPostBody("");

    // try {
    //   const response = await api.post(url, newPost);
    //   console.log(response.data);
    //   // const allPosts = [...posts, response.data]; redux buraya gelecek
    //   setPostTitle("");
    //   setPostBody("");
    // } catch (err) {
    //   console.log("HERE");
    //   console.log(`Error: ${err.message}`);
    // }
  };

  return (
    <SharePostCardWrapper>
      <FormControl>
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
          label="Gönderinizi başlığı"
          variant="outlined"
          multiline
          rows={1}
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <PostInputWrapper
          label="Gönderinizi buraya yazın"
          variant="outlined"
          multiline
          rows={4}
          type="text"
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <ButtonsWrapper>
          {/* <Button
          variant="contained"
          color="primary"
          sx={{ height: "30px", width: "auto" }}
        >
          Resim Yükle
        </Button> */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ height: "30px", width: "auto" }}
            onClick={handleSubmit}
          >
            Paylaş
          </Button>
        </ButtonsWrapper>
      </FormControl>
    </SharePostCardWrapper>
  );
};

export default NewPost;
