import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../kurumsalOnayKutusu/kurumsal.css";
import OnayIstegi from "../../components/onayIstegi/OnayIstegi";
import { getWaitingForApproval } from "../../services/workHistoryService";
import {
  getAllWaitingForApproval,
  deneyimOnaylama,
  deneyimReddetme,
} from "../../services/workHistoryService";

function KurumsalOnayKutusu() {
  const [data, setData] = useState([]);
  const [guncelle, setGuncelle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const haveToken = localStorage.getItem("token");
    const isUser = localStorage.getItem("userType");
    if (!haveToken || isUser === "user") {
      navigate("/");
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  const handleGuncelle = () => {
    setGuncelle(!guncelle);
  };

  // useEffect(() => {
  //   getWaitingForApproval()
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Hata alindi " + error);
  //     });
  // }, [guncelle]);

  useEffect(() => {
    getAllWaitingForApproval()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
  }, [guncelle]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="kurumsal">
      {data?.map((kisi) => (
        <OnayIstegi
          key={kisi.id}
          props={kisi}
          guncelle={handleGuncelle}
          border="5px solid orange"
        />
      ))}
    </div>
  );
}

export default KurumsalOnayKutusu;
