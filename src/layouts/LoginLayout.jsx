import React from "react";
import Navbar from "../components/navbar/Navbar";

const LoginLayout = ({ element }) => {
  return (
    <div>
      <Navbar />
      {element}
    </div>
  );
};

export default LoginLayout;
