import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
function Slider(props) {
  return (
    <Paper
      sx={{
        border: "2px solid blue",
        height: "40vh",
        margin: "20px",
        width: "40%",
        minWidth: "600px",
      }}
    >
      <PersonIcon />
      <h2>{props.item.name}</h2>
      <TextField
        fullWidth
        multiline
        rows={8}
        label="Deneyimim"
        disabled
        defaultValue={props.item.description}
      />
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Slider;
