import React from "react";
import { List, ListItem, Paper } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Slider from "../../components/slider/Slider";
function Deneyimlerim(props) {
  return (
    <Paper style={{ maxHeight: 600, width: "600px", overflow: "auto" }}>
      {props.props.map((deneyim, i) => (
        <SwiperSlide key={i}>
          <Slider key={i} item={deneyim} />
        </SwiperSlide>
      ))}
    </Paper>
  );
}

export default Deneyimlerim;
