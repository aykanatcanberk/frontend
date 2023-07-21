import * as React from "react";
import "./onayIstegi.css";
import Box from "@mui/material/Box";
import Card from "./Card";

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
];

export default function OnayIstegi() {
  return (
    <div className="onayIstegi">
      <Box sx={{ minWidth: 275 }}>
        {data.map((kisi) => (
          <Card props={kisi} border="5px solid orange" />
        ))}
      </Box>
    </div>
  );
}
