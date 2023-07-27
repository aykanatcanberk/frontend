import React from "react";
import "../kurumsalOnayKutusu/kurumsal.css";
import OnayIstegi from "../../components/onayIstegi/OnayIstegi";

function KurumsalOnayKutusu() {
  const data = [
    {
      id: 1,
      isim: "Mehmet Sait",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 2,
      isim: "Ali Osman",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 3,
      isim: "Hasan Basri",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 4,
      isim: "Can Berk",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 1,
      isim: "Mehmet Sait",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 2,
      isim: "Ali Osman",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 3,
      isim: "Hasan Basri",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 4,
      isim: "Can Berk",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 1,
      isim: "Mehmet Sait",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 2,
      isim: "Ali Osman",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 3,
      isim: "Hasan Basri",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 4,
      isim: "Can Berk",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 1,
      isim: "Mehmet Sait",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 2,
      isim: "Ali Osman",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 3,
      isim: "Hasan Basri",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 4,
      isim: "Can Berk",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 1,
      isim: "Mehmet Sait",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 2,
      isim: "Ali Osman",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 3,
      isim: "Hasan Basri",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
    {
      id: 4,
      isim: "Can Berk",
      baslangicTarihi: "2022/09/09",
      bitisTarihi: "2023/09/09",
      departmanIsmi: "Yazilim Birimi",
    },
  ];

  return (
    <div className="kurumsal">
      {data.map((kisi) => (
        <OnayIstegi props={kisi} border="5px solid orange" />
      ))}
    </div>
  );
}

export default KurumsalOnayKutusu;
