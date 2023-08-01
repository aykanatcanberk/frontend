import React, { useState, useEffect } from "react";
import ProfileCardComp from "../../components/bireyselFirmaLayoutComp/bireyselFirmaLay";
import { getCompany } from "../../services/userService";
import { useParams } from "react-router-dom";
import NotFoundError from "../../routes/NotFoundError";

const BireyselFirma = () => {
  const [companyDataList, setCompanyDataList] = useState([]);
  const { id } = useParams();
  var deneyimlerim = [
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Veritabanı yönetimi tasarımı konusunda temel bilgi.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Yazılım geliştirme süreçlerine uyum sağlama.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Veritabanı yönetimi tasarımı konusunda temel bilgi.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Yazılım geliştirme süreçlerine uyum sağlama.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Veritabanı yönetimi tasarımı konusunda temel bilgi.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Yazılım geliştirme süreçlerine uyum sağlama.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Veritabanı yönetimi tasarımı konusunda temel bilgi.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Yazılım geliştirme süreçlerine uyum sağlama.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Veritabanı yönetimi tasarımı konusunda temel bilgi.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Yazılım geliştirme süreçlerine uyum sağlama.`,
      companyName: "Aselsan",
    },
  ];
  useEffect(() => {
    getCompany(id)
      .then((response) => {
        console.log("API Response:", response.data);
        setCompanyDataList(response.data);
      })
      .catch((error) => {
        return <NotFoundError props={"Böyle bir şirket mevcut değil"} />;
      });
  }, [id]);

  return (
    <>
      <ProfileCardComp companyData={companyDataList} item={deneyimlerim}/>
    </>
  );
};

export default BireyselFirma;
