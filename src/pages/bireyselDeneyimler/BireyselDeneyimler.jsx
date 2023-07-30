import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../../components/slider/Slider";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./bireyselDeneyimler.css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Deneyimlerim from "../../components/deneyimFirma/Deneyimlerim";
import DeneyimPaylas from "../../components/deneyimFirma/DeneyimPaylas";
import { useEffect, useState } from "react";
import { getDeneyimler } from "../../services/deneyimService";
import DeneyimBackground from "../../components/deneyimFirma/DeneyimBackground";

export default function App() {
  const [deneyimler, setDeneyimler] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDeneyimler()
      .then((response) => {
        setDeneyimler(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
  }, []);

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
