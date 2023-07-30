import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./KurumsalProfil.css";

export const PageWrapper = styled(Grid)({
  padding: "2rem",
  margin: "0 auto",
  maxWidth: "1200px",
  marginTop: "-20px",
});

export const ProfileWrapper = styled(Paper)({
  display: "grid", // Use CSS Grid for the layout
  gridTemplateColumns: "auto 1fr", // Divide the card into two columns
  alignItems: "center", // Vertically center the content
  padding: "1rem",
  gap: "150px",
  marginBottom: "10px",
  borderRadius: "20px",
  position: "sticky",
});

export const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "3px",
});

export const CardWrapperForTitles = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "5px",
  display: "inline-block",
});

export const CardWrapperLeftAligned = styled(Paper)({
  padding: "1rem",
  textAlign: "left",
  marginBottom: "10px",
  borderRadius: "3px",
});

export const AvatarWrapper = styled(Avatar)({
  width: "100px",
  height: "100px",
  margin: "auto",
  borderRadius: "50%",
});

export const SharePostCardWrapper = styled(Paper)({
  padding: "1rem",
  height: "auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "20px",
});

export const PostInputWrapper = styled(TextField)({
  margin: "10px 0",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
});

export const ButtonsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});

export const PostCardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "left",
  marginBottom: "10px",
  marginTop: "10px",
  borderRadius: "20px",
});

export const EqualWidthButton = styled(Button)({
  flex: 1, // Make the buttons share the available space equally
  margin: "0 5px", // Optional: Add some margin between the buttons
});

export const RoundButton = styled(Button)({
  borderRadius: "20px",
  padding: "5px 10px",
});

// Define the custom input style
export const customInputStyle = {
  width: "100%",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
  fontFamily: "Arial, sans-serif",
};
