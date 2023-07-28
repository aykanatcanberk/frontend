import React from "react";
import { Paper } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Slider from "../../components/slider/Slider";
function Deneyimlerim(props) {
  return (
    <Paper
      style={{
        maxHeight: 600,
        width: "500px",
        overflow: "auto",
        backgroundColor: "#e6f6fd",
      }}
    >
      {props.props.map((deneyim, i) => (
        <SwiperSlide key={i}>
          <Slider key={deneyim.id} item={deneyim} />
        </SwiperSlide>
      ))}
    </Paper>
  );
}

export default Deneyimlerim;
