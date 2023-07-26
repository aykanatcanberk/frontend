/* Author: Hasan Basri BİLGE
Last Update: 25.07.2023 */
import React, { useState, useEffect } from "react";
import ProfileCardComp from "../../components/bireyselFirmaLayoutComp/bireyselFirmaLay";
import { getAllCompanies } from "../../services/companyService";

function BireyselFirma({id}) {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getAllCompanies()
      .then((companies) => {
        setCompanies(companies);
      })
      .catch((err) => {
        console.error("Coulnt fetch the all posts data due to :" + err.message);
      });
  }, []); 

  return (
    <div>
      {companies.map((companyData, index) => (
        <ProfileCardComp key={index} companyData={companyData} />
      ))}
    </div>
  );
}

export default BireyselFirma;
