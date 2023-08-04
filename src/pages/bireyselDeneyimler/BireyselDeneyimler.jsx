import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../../components/slider/Slider";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./bireyselDeneyimler.css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Deneyimlerim from "../../components/deneyimFirma/Deneyimlerim";
import DeneyimPaylas from "../../components/deneyimFirma/DeneyimPaylas";
import { getDeneyimler } from "../../services/deneyimService";
import DeneyimBackground from "../../components/deneyimFirma/DeneyimBackground";
import {
  getDeneyimlerFromBackend,
  getMyOwnExperiences,
  addDeneyimToBackend,
} from "../../services/deneyimService";

export default function App() {
  const [deneyimler, setDeneyimler] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const haveToken = localStorage.getItem("token");
    const isUser = localStorage.getItem("userType");
    if (!haveToken || isUser === "company") {
      navigate("/");
    } else {
      setIsLoading(false);
    }
  }, [navigate]);
  //getting data from json-server
   useEffect(() => {
     setLoading(true);
     getDeneyimler()
       .then((response) => {
         setDeneyimler(response.data);
         setLoading(false);
       })
      .catch((error) => {
         console.log("Hata alindi " + error);
         setLoading(false);
       });
   }, []);

  //------------------------------------for the backend------------------------------------
/*   useEffect(() => {
    setLoading(true);
    getDeneyimlerFromBackend()
      .then((response) => {
        setDeneyimler(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
        setLoading(false);
      });
  }, []); */

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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bireyselDeneyimler">
      <DeneyimBackground />
      {loading ? (
        <div className="loading">Yükleniyor...</div>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {deneyimler?.map((item, i) => (
            <SwiperSlide key={i}>
              <Slider item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="deneyimContainer">
        <Deneyimlerim props={deneyimlerim} />
        <DeneyimPaylas />
      </div>
    </div>
  );
}
