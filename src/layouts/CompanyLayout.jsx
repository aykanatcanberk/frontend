import React from "react";
import KurumsalNavbar from "../components/navbar/kurumsal_navbar/KurumsalNavbar";
import Footer from "../components/footer/Footer";

const CompanyLayout = ({ element }) => {
  return (
    <div>
      <KurumsalNavbar />
      {element}
      <Footer />
    </div>
  );
};

export default CompanyLayout;
