import React, { useState, useEffect } from "react";
import { getIlan } from "../../services/advertService";
import { useParams } from "react-router-dom";
import NotFoundError from "../../routes/NotFoundError";
import Ilan from "../../components/kurumsalIlanLayout/kurumsalIlanLayout";

const KurumsalIlan = () => {
  const [AdvertDataList, setAdvertDataList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getIlan(id)
      .then((response) => {
        console.log("API Response:", response.data);
        setAdvertDataList(response.data);
      })
      .catch((error) => {
        return <NotFoundError props={"Böyle bir şirket mevcut değil"} />;
      });
  }, [id]);

  return (
    <>
      <Ilan advert={AdvertDataList} />
    </>
  );
};

export default KurumsalIlan;
