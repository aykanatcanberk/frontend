import React from "react";
import { styled } from "@mui/material/styles";

export const BlurredBackgroundWrapperStyle = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  filter: "blur(4px)",
  pointerEvents: "none",
});

const BlurredBackgroundWrapper = ({ isShown, children }) => {
  return (
    <div>
      {children}
      {/* {isShown && <div className="blurred-background" style={BlurredBackgroundWrapperStyle}/>} */}
      {isShown && <BlurredBackgroundWrapperStyle />}
    </div>
  );
};

export default BlurredBackgroundWrapper;
