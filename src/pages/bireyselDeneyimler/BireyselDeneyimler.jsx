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

export default function App() {
  const [deneyimler, setDeneyimler] = useState([]);

  useEffect(() => {
    getDeneyimler()
      .then((response) => {
        setDeneyimler(response.data);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });

    console.log(deneyimler);
  }, []);

  var deneyimlerim = [
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Veritabanı yönetimi tasarımı konusunda temel bilgi.
      - Hata ayıklama ve sorun giderme becerilerini geliştirme.
      - Sürüm kontrol sistemlerini (Git) etkin kullanma.`,
      companyName: "Aselsan",
    },
    {
      title: "Mukemmel bir deneyimdi!!!",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:

      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Yazılım geliştirme süreçlerine uyum sağlama.
      - Agil yazılım geliştirme metodolojileriyle çalışma deneyimi.
      - Sürüm kontrol sistemlerini (Git) etkin kullanma.`,
      companyName: "Aselsan",
    },
  ];

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
      <div className="deneyimContainer">
        {/* <div className="gecmisDeneyimler">
          <h3>Benim Deneyimlerim</h3>
          {deneyimlerim.map((item, i) => (
            <SwiperSlide key={i}>
              <Slider key={i} item={item} />
            </SwiperSlide>
          ))}
        </div> */}
        <Deneyimlerim props={deneyimlerim} />
        {/* <div className="deneyimPaylas">
          <TextField
            rows={1}
            maxRows={1}
            label="Deneyim Basligi"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />
          <DeneyimText />
          <div className="deneyimFirmaButon">
            <FirmaSelect />
            <Button
              size="small"
              sx={{ height: "40px" }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Gonder
            </Button>
          </div>
        </div> */}
        <DeneyimPaylas />
      </div>
    </>
  );
}
