import React from "react";
import { Paper } from "@mui/material";
import Slider from "../../components/slider/Slider";

function Deneyimlerim(props) {
  return (
    <Paper
      className="gecmisDeneyimlerim"
      style={{
        maxHeight: 600,
        width: "450px",
        overflow: "auto",
        backgroundColor: "#d4f2ff",
      }}
    >
      {props.props.map((deneyim, i) => (
        <Slider key={deneyim.id} item={deneyim} />
      ))}
    </Paper>
  );
}

export default Deneyimlerim;
