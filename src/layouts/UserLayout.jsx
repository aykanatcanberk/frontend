import React from "react";
import BireyselNavbar from "../components/navbar/bireysel_navbar/BireyselNavbar";

const UserLayout = ({ element }) => {
  return (
    <div>
      <BireyselNavbar />
      {element}
    </div>
  );
};

export default UserLayout;
