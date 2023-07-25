/* Author: Hasan Basri BİLGE
Last Update: 25.07.2023 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCardComp from "../../components/bireyselFirmaLayoutComp/bireyselFirmaLay";

function ProfileCard() {
  const [companyDataList, setCompanyDataList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/bireysel-firma`)
      .then((response) => {
        setCompanyDataList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching company data:", error);
      });
  }, []);

  return (
    <div>
      {companyDataList.map((companyData, index) => (
        <ProfileCardComp key={index} companyData={companyData} />
      ))}
    </div>
  );
}

export default ProfileCard;
