import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
function Slider(props) {
  return (
    <Paper
      sx={{
        border: "2px solid blue",
        height: "40vh",
        margin: "20px",
        width: "100%",
        minWidth: "300px",
      }}
    >
      <div className="deneyimBaslik">
        <h2>{props.item.name}</h2>
        <h4>{props.item.companyName}</h4>
      </div>
      <TextField
        fullWidth
        multiline
        rows={8}
        label={props.item.title}
        disabled
        defaultValue={props.item.description}
      />
    </Paper>
  );
}

export default Slider;
