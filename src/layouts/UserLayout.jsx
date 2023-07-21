import React from "react";
import Navbar from "../components/navbar/Navbar";

const UserLayout = ({ element }) => {
  return (
    <div>
      <Navbar />
      {element}
    </div>
  );
};

export default UserLayout;
