import React from "react";
import Navbar from "../components/navbar/Navbar";

const CompanyLayout = ({ element }) => {
  return (
    <div>
      <Navbar />
      {element}
    </div>
  );
};

export default CompanyLayout;
