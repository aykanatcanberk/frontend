import React from "react";
import Carousel from "react-material-ui-carousel";
import Slider from "../../components/slider/Slider";
import FirmaSelect from "../../components/deneyimFirma/FirmaSelect";
import DeneyimText from "../../components/deneyimFirma/DeneyimText";
import { Button } from "@mui/material";
import "./bireyselDeneyimler.css";

function BireyselDeneyimler() {
  var items = [
    {
      name: "Mehmet Ali",
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
      description: `
      Bu beş aylık staj dönemim boyunca, ABC Teknoloji Şirketi'nde yazılım geliştirme ekibiyle birlikte çalıştım ve değerli bir deneyim kazandım. Şirket, öncü teknolojiler üzerinde çalışan bir endüstri lideridir ve kendilerine özgü ürünler geliştirmektedir.
      
      Stajım süresince, gerçek dünya yazılım projelerine katılarak, yazılım geliştirme süreçleri hakkında derinlemesine bir anlayış elde ettim. Projeler, takım çalışmasını vurgulayan ve benim sorumluluklarımı alarak öğrenme fırsatı sağlayan çeşitli endüstriyel uygulamaları kapsıyordu.
      
      Proje ekiplerimiz, yazılım yaşam döngüsünün her aşamasında yer aldığımız ve kendi becerilerimi geliştirmek için önemli bir fırsat sağlayan gerçek müşteri projeleriydi. İşbirliği içinde çalışarak, analiz etme, tasarım yapma, kodlama ve test etme aşamalarında yer aldım. Bu süreçler, yazılımın nasıl başarılı bir şekilde geliştirileceği ve sunulacağı konusunda sağlam bir kavrayış elde etmeme yardımcı oldu.
      `,
      firma: "Havelsan",
    },
    {
      name: "Hasan Hüseyin",
      description: `
      Bu beş aylık staj dönemim boyunca, ABC Teknoloji Şirketi'nde yazılım geliştirme ekibiyle birlikte çalıştım ve değerli bir deneyim kazandım. Şirket, öncü teknolojiler üzerinde çalışan bir endüstri lideridir ve kendilerine özgü ürünler geliştirmektedir.
      
      Stajım süresince, gerçek dünya yazılım projelerine katılarak, yazılım geliştirme süreçleri hakkında derinlemesine bir anlayış elde ettim. Projeler, takım çalışmasını vurgulayan ve benim sorumluluklarımı alarak öğrenme fırsatı sağlayan çeşitli endüstriyel uygulamaları kapsıyordu.
      
      Proje ekiplerimiz, yazılım yaşam döngüsünün her aşamasında yer aldığımız ve kendi becerilerimi geliştirmek için önemli bir fırsat sağlayan gerçek müşteri projeleriydi. İşbirliği içinde çalışarak, analiz etme, tasarım yapma, kodlama ve test etme aşamalarında yer aldım. Bu süreçler, yazılımın nasıl başarılı bir şekilde geliştirileceği ve sunulacağı konusunda sağlam bir kavrayış elde etmeme yardımcı oldu.
      `,
      firma: "Havelsan",
    },
    {
      name: "Uğur Utku",
      description: `
      Bu beş aylık staj dönemim boyunca, ABC Teknoloji Şirketi'nde yazılım geliştirme ekibiyle birlikte çalıştım ve değerli bir deneyim kazandım. Şirket, öncü teknolojiler üzerinde çalışan bir endüstri lideridir ve kendilerine özgü ürünler geliştirmektedir.
      
      Stajım süresince, gerçek dünya yazılım projelerine katılarak, yazılım geliştirme süreçleri hakkında derinlemesine bir anlayış elde ettim. Projeler, takım çalışmasını vurgulayan ve benim sorumluluklarımı alarak öğrenme fırsatı sağlayan çeşitli endüstriyel uygulamaları kapsıyordu.
      
      Proje ekiplerimiz, yazılım yaşam döngüsünün her aşamasında yer aldığımız ve kendi becerilerimi geliştirmek için önemli bir fırsat sağlayan gerçek müşteri projeleriydi. İşbirliği içinde çalışarak, analiz etme, tasarım yapma, kodlama ve test etme aşamalarında yer aldım. Bu süreçler, yazılımın nasıl başarılı bir şekilde geliştirileceği ve sunulacağı konusunda sağlam bir kavrayış elde etmeme yardımcı oldu.
      `,
      firma: "Havelsan",
    },
    {
      name: "Zeynep Zehra",
      description: `
      Bu beş aylık staj dönemim boyunca, ABC Teknoloji Şirketi'nde yazılım geliştirme ekibiyle birlikte çalıştım ve değerli bir deneyim kazandım. Şirket, öncü teknolojiler üzerinde çalışan bir endüstri lideridir ve kendilerine özgü ürünler geliştirmektedir.
      
      Stajım süresince, gerçek dünya yazılım projelerine katılarak, yazılım geliştirme süreçleri hakkında derinlemesine bir anlayış elde ettim. Projeler, takım çalışmasını vurgulayan ve benim sorumluluklarımı alarak öğrenme fırsatı sağlayan çeşitli endüstriyel uygulamaları kapsıyordu.
      
      Proje ekiplerimiz, yazılım yaşam döngüsünün her aşamasında yer aldığımız ve kendi becerilerimi geliştirmek için önemli bir fırsat sağlayan gerçek müşteri projeleriydi. İşbirliği içinde çalışarak, analiz etme, tasarım yapma, kodlama ve test etme aşamalarında yer aldım. Bu süreçler, yazılımın nasıl başarılı bir şekilde geliştirileceği ve sunulacağı konusunda sağlam bir kavrayış elde etmeme yardımcı oldu.
      `,
      firma: "Havelsan",
    },
  ];

  return (
    <div className="bireyselDeneyimler">
      <div className="slider">
        <Carousel>
          {items.map((item, i) => (
            <Slider key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <div className="deneyimPaylas">
        <DeneyimText />
        <FirmaSelect />
        <Button variant="contained">Paylas</Button>
      </div>
    </div>
  );
}

export default BireyselDeneyimler;
