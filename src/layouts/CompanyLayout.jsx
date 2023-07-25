import React from "react";
import KurumsalNavbar from "../components/navbar/kurumsal_navbar/KurumsalNavbar";

const CompanyLayout = ({ element }) => {
  return (
    <div>
      <KurumsalNavbar />
      {element}
    </div>
  );
};

export default CompanyLayout;
