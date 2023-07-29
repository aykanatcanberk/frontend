import React from "react";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";

function Slider({ item }) {
  return (
    <Paper
      sx={{
        borderRadius: "10px",
        border: "1px solid blue",
        backgroundColor: "#d4f2ff",
        height: "260px",
        width: "100%",
        minWidth: "300px",
      }}
    >
      <div className="deneyimBaslik">
        <h2>{item.name}</h2>
        <h4>{item.companyName}</h4>
      </div>
      <TextField
        fullWidth
        multiline
        rows={7}
        label={item.title}
        disabled
        defaultValue={item.description}
      />
    </Paper>
  );
}

export default Slider;
