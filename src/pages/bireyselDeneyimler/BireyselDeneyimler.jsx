import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../../components/slider/Slider";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Deneyimlerim from "../../components/deneyimFirma/Deneyimlerim";
import DeneyimPaylas from "../../components/deneyimFirma/DeneyimPaylas";

export default function App() {
  var items = [
    {
      name: "Mehmet Ali",
      title: "Harikaydi!!!",
      companyName: "Aselsan",
      description: `Staj döneminde öğrendiklerimden bazıları şunlardır:
      - Python ve JavaScript gibi dillerde kod yazma yetkinliği.
      - Yazılım geliştirme süreçlerine uyum sağlama ve takım içinde etkin iletişim.
      - Agil yazılım geliştirme metodolojileriyle çalışma deneyimi.
      - Veritabanı yönetimi ve veri tabanı tasarımı konusunda temel bilgi.
      - Hata ayıklama ve sorun giderme becerilerini geliştirme.
      - Sürüm kontrol sistemlerini (Git) etkin kullanma.`,
      firma: "Aselsan",
    },
    {
      name: "Ayşe Fatma",
      title: "Mukemmel bir deneyimdi!!!",
      companyName: "Havelsan",
      description: `Bu beş aylık staj dönemim boyunca, ABC Teknoloji Şirketi'nde yazılım geliştirme ekibiyle birlikte çalıştım ve değerli bir deneyim kazandım. Şirket, öncü teknolojiler üzerinde çalışan bir endüstri lideridir ve kendilerine özgü ürünler geliştirmektedir.
      Stajım süresince, gerçek dünya yazılım projelerine katılarak, yazılım geliştirme süreçleri hakkında derinlemesine bir anlayış elde ettim. Projeler, takım çalışmasını vurgulayan ve benim sorumluluklarımı alarak öğrenme fırsatı sağlayan çeşitli endüstriyel uygulamaları kapsıyordu.
      Proje ekiplerimiz, yazılım yaşam döngüsünün her aşamasında yer aldığımız ve kendi becerilerimi geliştirmek için önemli bir fırsat sağlayan gerçek müşteri projeleriydi. İşbirliği içinde çalışarak, analiz etme, tasarım yapma, kodlama ve test etme aşamalarında yer aldım. Bu süreçler, yazılımın nasıl başarılı bir şekilde geliştirileceği ve sunulacağı konusunda sağlam bir kavrayış elde etmeme yardımcı oldu.`,
      firma: "Havelsan",
    },
    {
      name: "Hasan Hüseyin",
      title: "Mukemmel bir deneyimdi!!!",
      companyName: "Roketsan",
      description: `Bu beş aylık staj dönemim boyunca, ABC Teknoloji Şirketi'nde yazılım geliştirme ekibiyle birlikte çalıştım ve değerli bir deneyim kazandım. Şirket, öncü teknolojiler üzerinde çalışan bir endüstri lideridir ve kendilerine özgü ürünler geliştirmektedir.
      Stajım süresince, gerçek dünya yazılım projelerine katılarak, yazılım geliştirme süreçleri hakkında derinlemesine bir anlayış elde ettim. Projeler, takım çalışmasını vurgulayan ve benim sorumluluklarımı alarak öğrenme fırsatı sağlayan çeşitli endüstriyel uygulamaları kapsıyordu.
      Proje ekiplerimiz, yazılım yaşam döngüsünün her aşamasında yer aldığımız ve kendi becerilerimi geliştirmek için önemli bir fırsat sağlayan gerçek müşteri projeleriydi. İşbirliği içinde çalışarak, analiz etme, tasarım yapma, kodlama ve test etme aşamalarında yer aldım. Bu süreçler, yazılımın nasıl başarılı bir şekilde geliştirileceği ve sunulacağı konusunda sağlam bir kavrayış elde etmeme yardımcı oldu.
      `,
      firma: "Havelsan",
    },
    {
      name: "Uğur Utku",
      title: "Mukemmel bir deneyimdi!!!",
      companyName: "TUSAŞ",
      description: `Bu beş aylık staj dönemim boyunca, ABC Teknoloji Şirketi'nde yazılım geliştirme ekibiyle birlikte çalıştım ve değerli bir deneyim kazandım. Şirket, öncü teknolojiler üzerinde çalışan bir endüstri lideridir ve kendilerine özgü ürünler geliştirmektedir.
      Stajım süresince, gerçek dünya yazılım projelerine katılarak, yazılım geliştirme süreçleri hakkında derinlemesine bir anlayış elde ettim. Projeler, takım çalışmasını vurgulayan ve benim sorumluluklarımı alarak öğrenme fırsatı sağlayan çeşitli endüstriyel uygulamaları kapsıyordu.
      Proje ekiplerimiz, yazılım yaşam döngüsünün her aşamasında yer aldığımız ve kendi becerilerimi geliştirmek için önemli bir fırsat sağlayan gerçek müşteri projeleriydi. İşbirliği içinde çalışarak, analiz etme, tasarım yapma, kodlama ve test etme aşamalarında yer aldım. Bu süreçler, yazılımın nasıl başarılı bir şekilde geliştirileceği ve sunulacağı konusunda sağlam bir kavrayış elde etmeme yardımcı oldu.
      `,
      firma: "Havelsan",
    },
    {
      name: "Zeynep Zehra",
      title: "Mukemmel bir deneyimdi!!!",
      companyName: "TR EGITIM",
      description: `Bu beş aylık staj dönemim boyunca, ABC Teknoloji Şirketi'nde yazılım geliştirme ekibiyle birlikte çalıştım ve değerli bir deneyim kazandım. Şirket, öncü teknolojiler üzerinde çalışan bir endüstri lideridir ve kendilerine özgü ürünler geliştirmektedir.
      Stajım süresince, gerçek dünya yazılım projelerine katılarak, yazılım geliştirme süreçleri hakkında derinlemesine bir anlayış elde ettim. Projeler, takım çalışmasını vurgulayan ve benim sorumluluklarımı alarak öğrenme fırsatı sağlayan çeşitli endüstriyel uygulamaları kapsıyordu.
      Proje ekiplerimiz, yazılım yaşam döngüsünün her aşamasında yer aldığımız ve kendi becerilerimi geliştirmek için önemli bir fırsat sağlayan gerçek müşteri projeleriydi. İşbirliği içinde çalışarak, analiz etme, tasarım yapma, kodlama ve test etme aşamalarında yer aldım. Bu süreçler, yazılımın nasıl başarılı bir şekilde geliştirileceği ve sunulacağı konusunda sağlam bir kavrayış elde etmeme yardımcı oldu.
      `,
      firma: "Havelsan",
    },
  ];

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
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Slider key={i} item={item} />
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
