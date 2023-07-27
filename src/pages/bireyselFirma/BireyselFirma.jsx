import React, { useState, useEffect } from "react";
import ProfileCardComp from "../../components/bireyselFirmaLayoutComp/bireyselFirmaLay";
import { getCompany } from "../../services/userService";
import { useParams } from "react-router-dom";

const BireyselFirma = () => {
  const [companyDataList, setCompanyDataList] = useState([]);
  const { id } = useParams();

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
};

export default BireyselFirma;
