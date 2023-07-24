import React from "react";
import BireyselNavbar from "../components/navbar/bireysel_navbar/BireyselNavbar";

const LoginLayout = ({ element }) => {
  return (
    <div>
      <BireyselNavbar />
      {element}
    </div>
  );
};

export default LoginLayout;
