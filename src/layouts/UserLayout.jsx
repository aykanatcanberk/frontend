import React from "react";
import BireyselNavbar from "../components/navbar/bireysel_navbar/BireyselNavbar";
import Footer from "../components/footer/Footer";

const UserLayout = ({ element }) => {
  return (
    <div>
      <BireyselNavbar />
      {element}
      <Footer />
    </div>
  );
};

export default UserLayout;
