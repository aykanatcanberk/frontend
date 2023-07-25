/* Author: Hasan Basri BİLGE
Last Update: 25.07.2023 */
import "./BireyselFirma.css"
import * as React from 'react';
import { useState, useEffect } from 'react';
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
  height: 'auto' + "10px",
  marginTop: "0px",
  backgroundColor: '#f0f0f0'
};

const avatarStyle = {
  width: '80px',
  height: '80px',
  marginLeft: '320px',
  border: '1px solid #ccc',
  borderRadius: '20%',
};

function ProfileCardComp({companyData}) {

    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    useEffect(() => {
      window.addEventListener("resize", handleResize);

      return() => {
        window.removeEventListener("resize", handleResize);
      }
    }, []);

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

    const isMobileView = window.innerWidth <= 1280;

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
    <><Paper sx={{ ...paperStyle, '@media (max-width: 1280px)': { flexDirection: 'column', alignItems: 'center' } }} elevation={0}>
      <Avatar 
      sx={{...avatarStyle, '@media (max-width: 1280px)': { marginLeft: "20px", marginBottom: '10px', alignItems: "center", marginTop: "20px" }}}
      elevation={1} 
      alt="Aselsan" 
      src={aslimg}/>
      <div>
        <Typography variant="h5" component="div" fontFamily={"sans-serif"} sx={{marginLeft: "20px", marginTop: "60px", '@media (max-width: 1280px)': {alignItems: "center", verticalAlign: 'center', textAlign: "center", marginTop: "20px"}}}>
          {companyData.name}
        </Typography>
        <Typography variant="body1" fontSize="10px" fontFamily={"sans-serif"} color="text.secondary" sx={{ marginTop: "10px", marginBottom: "30px", '@media (max-width: 1280px)': { textAlign: 'center' } }}>
            <TurnedInNotIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '20px' }} />{companyData.category}    
            <BusinessIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '20px' }} />{companyData.type}
            <CalendarMonthIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '20px' }} />{companyData.founded}
            <span />
            <br />
        <Typography variant="body1" fontSize="10px" fontFamily={"sans-serif"} color="text.secondary" sx={{ marginTop: "10px", marginBottom: "30px", '@media (max-width: 1280px)': { textAlign: 'center' } }} >
            <LocationSearchingIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '20px' }} />{companyData.location}
            <PeopleIcon sx={{ fontSize: "15px", verticalAlign: 'middle', marginLeft: '20px' }} />{companyData.employeeCount}
            </Typography>
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
        <Grid item lg={8} md={12} sx={{paddingRight: '10px', paddingLeft: '300px', '@media (max-width: 1280px)': { textAlign: 'center', paddingLeft: "10px" }}}>
          <Paper elevation={0} style={{ padding: '20px', height: 'auto' }}>
          <h4>Firma Hakkında</h4>
          <Typography variant="body1" color="text.secondary" fontFamily={"sans-serif"} fontSize={"12px"} textAlign={"justify"}>
            {companyData.about}
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12} sx={{paddingRight: '300px', '@media (max-width: 1280px)': { textAlign: 'center', paddingRight: "10px" }}}>
          <Paper elevation={0} style={{
              padding: '10px',
              height: 'auto',
              '@media (min-width: 1280px)': {
                padding: '20px',
              },
            }}>
            <h5>Uzmanlık</h5>
            <Typography variant="body1" color="text.secondary"  fontFamily={"sans-serif"} fontSize={"12px"} textAlign={"justify"}>
            {companyData.expertise}            
            </Typography>
            <h5>İletişim</h5>
            <Typography variant="body1" color="text.secondary" fontFamily={"sans-serif"} fontSize={"10px"}>
            <p>{companyData.website}</p> 
            <span />
            <p>{companyData.address}</p>
            <span />
            <p>{companyData.phone}</p>
            <span />
            <p>{companyData.contact}</p>   
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>   
    </>
  );
}
export default ProfileCardComp;