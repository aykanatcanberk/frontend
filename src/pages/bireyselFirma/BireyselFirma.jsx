import "./BireyselFirma.css"
import * as React from 'react';
import { useState } from 'react';
import haber1 from "./images/haber-1.png";
import haber2 from "./images/haber-2.png";
import haber3 from "./images/haber-3.png";
import haber4 from "./images/haber-4.png";
import haber5 from "./images/haber-5.png";
import haber6 from "./images/haber-6.png";
import haber7 from "./images/haber-7.png";
import haber8 from "./images/haber-8.png";
import aslimg from "./images/aselsan logo.png"
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PeopleIcon from '@mui/icons-material/People';
import { Grid } from '@mui/material';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [haber1, haber2, haber3, haber4, haber5, haber6, haber7, haber8]

const paperStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '-45px',
  width: '100%',
  height: 'auto',
  marginTop: "0px",
  backgroundColor: '#f0f0f0'
};

const avatarStyle = {
  width: '100px',
  height: '100px',
  marginLeft: '200px',
  border: '1px solid #ccc',
};

function ProfileCard() {

    const NextArrow = ({onClick}) => {
      return (
        <div className='arrow next' onClick={onClick}>
          <FaArrowRight />
        </div>
      )
    }

    const PrevArrow = ({onClick}) => {
      return (
        <div className='arrow prev' onClick={onClick}>
          <FaArrowLeft />
        </div>
      )
    }

    const [ImageIndex, setImageIndex] = useState(0)

    const isMobileView = window.innerWidth <= 768;

    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: isMobileView ? 1 : 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next), 
    }

  return (
    <><Paper sx={{ ...paperStyle, '@media (max-width: 768px)': { flexDirection: 'column', alignItems: 'center' } }} elevation={0}>
      <Avatar 
      sx={{...avatarStyle, '@media (max-width: 768px)': { marginLeft: 0, marginBottom: '10px', alignItems: "center" }}}
      elevation={1} 
      alt="Aselsan" 
      src={aslimg}/>
      <div>
        <Typography variant="h5" component="div" sx={{marginLeft: "16px", marginTop: "50px", '@media (max-width: 768px)': {alignItems: "center", verticalAlign: 'center', textAlign: "center"}}}>
          Aselsan
        </Typography>
        <Typography variant="body1" fontSize="14px" color="text.secondary" sx={{ marginTop: "20px", '@media (max-width: 768px)': { textAlign: 'center' } }}>
            <TurnedInNotIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '40px' }} />Savunma Sanayii    
            <BusinessIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '40px' }} />Halka Açık Şirket
            <CalendarMonthIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '40px' }} />1975
            <LocationSearchingIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '40px' }} />Ankara, Yenimahalle
            <PeopleIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '40px' }} />5.001-10.000
          </Typography>
      </div>
    </Paper>
    <div className='Slider'>
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div className={idx === ImageIndex ? "slide activeSlide": "slide"}>
          <img src={img} alt={img} />
        </div>
      ))}
    </Slider>
    </div>
    <>
    <Grid container spacing={0} sx={{ marginTop: '20px' }}>
        <Grid item lg={8} md={12} sx={{paddingRight: '10px', paddingLeft: '200px', '@media (max-width: 768px)': { textAlign: 'center', paddingLeft: "10px" }}}>
          <Paper elevation={0} style={{ padding: '20px', height: 'auto' }}>
          <h4>Firma Hakkında</h4>
          <Typography variant="body1" color="text.secondary" fontSize={"12px"} textAlign={"justify"}>
            Türk Silahlı Kuvvetleri'nin haberleşme ihtiyaçlarının milli imkanlarla karşılanması için 1975 yılında kurulan ASELSAN; Türk Silahlı Kuvvetlerini Güçlendirme Vakfı'na (TSKGV) bağlı bir anonim şirkettir. ASELSAN hisselerinin %74,20'si TSKGV'ye aittir, %25,70'lik kısım ise Borsa İstanbul'da (BİST) işlem görmektedir. Türkiye'nin en büyük savunma elektroniği kuruluşu olan ASELSAN; başta Türk Silahlı Kuvvetleri olmak üzere yurtiçi ve yurtdışı ihtiyaç makamlarının, haberleşme ve bilgi teknolojileri, radar ve elektronik harp, elektro-optik, aviyonik, insansız sistemler, kara, deniz ve silah sistemleri, hava savunma ve füze sistemleri, komuta kontrol sistemleri, ulaştırma, güvenlik, trafik, otomasyon ve sağlık teknolojilerine yönelik ihtiyaçlarını karşılayabilecek çok geniş bir ürün yelpazesine sahip bulunmaktadır. ASELSAN bugün, özgün ürünlerini ihraç eden, dünyanın ilk 100 savunma sanayi şirketi (Defense News Top 100) listesinde yer alan, yerel kuruluşlar ile işbirliği modelleri kurgulayarak uluslararası pazarlarda ortaklıklar kuran, yatırım yapan bir marka haline gelmiştir.
ASELSAN, vizyonundaki teknoloji vurgusu ile "Küresel pazarda yarattığı değerler ile sürdürülebilir büyümesini koruyan, rekabet gücü ile tercih edilen, stratejik bir ortak gibi güven duyulan, çevreye ve insana duyarlı bir milli teknoloji firması olmak" hedefini benimsemiştir.
Bu başarının kilit faktörlerinden olan 6.000'i aşkın çalışanı bünyesinde yer alan nitelikli mühendislik kadrosu ile ASELSAN, yıllık cirosunun ortalama %7'sini, kendi özkaynakları ile finanse edilen AR-GE faaliyetlerine ayırmaktadır.
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12} sx={{paddingRight: '200px', '@media (max-width: 768px)': { textAlign: 'center', paddingRight: "10px" }}}>
          <Paper elevation={0} style={{
              padding: '10px',
              height: 'auto',
              '@media (min-width: 768px)': {
                padding: '20px',
              },
            }}>
            <h5>Uzmanlık</h5>
            <Typography variant="body1" color="text.secondary" fontSize={"10px"} textAlign={"justify"}>
            Savunma Sistemleri, Teknolojileri Radar ve Elektronik Harp Sistemleri, Mikroelektronik Elektro-Optik, İşletme ve Taşımacılık, Güvenlik, Enerji ve Otomasyon Sistemleri            
            </Typography>
            <h5>İletişim</h5>
            <Typography variant="body1" color="text.secondary" fontSize={"10px"}>
            <p>http://www.aselsan.com.tr</p> 
            <span />
            <p>Mehmet Akif Ersoy Mahallesi 296. Cadde No: 16, 06370 Yenimahalle-Ankara, Türkiye</p>
            <span />
            <p>+90 284 123 45 67</p>
            <span />
            <p>+90 (312) 354 13 02 / +90 (312) 354 26 69 </p>   
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>   
    </>
  );
}
export default ProfileCard;