// import React from "react";
// import Button from "@mui/material/Button";
// import { Grid, Paper, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Avatar from "@mui/material/Avatar";
// import TextField from "@mui/material/TextField";
// import 

// const SharePostCardWrapper = styled(Paper)({
//   padding: "1rem",
//   height: "auto",
//   textAlign: "center",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   borderRadius: "20px",
// });

// const PostCardWrapper = styled(Paper)({
//   padding: "1rem",
//   textAlign: "left",
//   marginBottom: "10px",
//   marginTop: "10px",
//   borderRadius: "20px",
//   marginLeft: "0px",
// });

// const ButtonsWrapper = styled("div")({
//   display: "flex",
//   justifyContent: "space-between",
//   marginTop: "10px",
// });

// function SinglePost({title, content, userName}) {
//   return (
//     // <SharePostCardWrapper>
//     //   <Typography
//     //     variant="h6"
//     //     style={{
//     //       fontFamily: "Arial",
//     //       fontSize: "14px",
//     //       fontWeight: "normal",
//     //     }}
//     //   >
//     //     POST TİTLE
//     //     {title}
//     //   </Typography>

//     //   <Typography
//     //     variant="h2"
//     //     style={{
//     //       fontFamily: "Arial",
//     //       fontSize: "14px",
//     //       fontWeight: "normal",
//     //     }}
//     //   >
//     //     POST TİTLE
//     //     {content}
//     //   </Typography>

//     //   <ButtonsWrapper>
//     //     <Button
//     //       variant="contained"
//     //       color="primary"
//     //       type="submit"
//     //       sx={{ height: "30px", width: "auto" }}
//     //     >
//     //       Edit?
//     //     </Button>
//     //   </ButtonsWrapper>
//     // </SharePostCardWrapper>

//     <PostCardWrapper>
//     <Grid container alignItems="center">
//       <Grid item xs={2} sm={2} md={2}>
//         <Avatar src="url_profil_avatar" alt="Profil Avatarı" />
//       </Grid>
//       <Grid item xs={10} sm={10} md={10}>
//         <Typography
//           variant="subtitle1"
//           style={{
//             fontFamily: "Arial",
//             fontSize: "14px",
//             fontWeight: "bold",
//           }}
//         >
//       {userName}
//         </Typography>
//         <Typography
//           variant="subtitle2"
//           style={{
//             fontFamily: "Arial",
//             fontSize: "12px",
//             fontWeight: "normal",
//             color: "textSecondary",
//           }}
//         >
//           {"userPosts.post_date"}
//         </Typography>
//       </Grid>
//     </Grid>
//     <Typography
//       variant="body1"
//       style={{
//         fontFamily: "Arial",
//         fontSize: "14px",
//         fontWeight: "normal",
//       }}
//     >
//       {content}
//     </Typography>
//     <Typography
//       variant="body2"
//       style={{
//         fontFamily: "Arial",
//         fontSize: "12px",
//         fontWeight: "normal",
//         color: "textSecondary",
//         textAlign: "end",
//       }}
//     >
//       10 Beğeni
//     </Typography>
//     <ButtonsWrapper>
//   <LikeButton />
//   <TextField
//     label="Yorum yaz..."
//     variant="outlined"
//     margin="none"
//     fullWidth
//     size="small"
//     style={{ flexGrow: 1 }}
//   />
//   {/* <PaylasButton /> */}
// </ButtonsWrapper>
//   </PostCardWrapper>
//   );
// }

// const LikeButton = () => {
//   const [liked, setLiked] = useState(false);

//   const handleLike = () => {
//     setLiked(!liked);
//   };

//   return (
//     <IconButton
//       onClick={handleLike}
//       color={liked ? 'secondary' : 'default'}
//       aria-label="like button"
//       style={{ color: liked ? 'red' : '' }} // Kırmızı rengi tıklanınca uygula
//     >
//       {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//     </IconButton>
//   );
// };

// export default SinglePost;
