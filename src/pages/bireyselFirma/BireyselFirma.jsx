import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCardComp from "../../components/bireyselFirmaLayoutComp/bireyselFirmaLay";
import { getCompany } from "../../services/userService";

const BireyselFirma = ({ id }) => {
  const [companyDataList, setCompanyDataList] = useState([]);

  useEffect(() => {
    getCompany(id)
      .then((response) => {
        console.log("API Response:", response.data);
        setCompanyDataList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching company data:", error);
      });
  }, [id]);

  return (
    <>
        <ProfileCardComp companyData={companyDataList} />
    </>
  );
}

export default BireyselFirma;
