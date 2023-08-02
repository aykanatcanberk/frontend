import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Twitter, Instagram, LinkedIn, GitHub, YouTube } from "@mui/icons-material";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{}}>
      <div className="footer-logo">
        <img src={logo} alt="Logo" style={{ width: 200, margin: 10 }} />
      </div>
      <div className="footer-contact">
        <h3>İletişim</h3>
        <p>Adres: Üniversiteler, ODTÜ Teknokent, 06800 Çankaya/Ankara</p>
        <p>Email: info@alesta.com</p>
        <p>Telefon: 555-123-4567</p>
      </div>
      <div className="footer-social-media">
        <h3>Sosyal Medya Hesaplarımız</h3>
        <div className="social-icons">
          {/* Social media icons */}
          <a href="https://www.facebook.com" style={{ color: "#fff"}}>
            <Facebook style={{ fontSize: 30 , marginRight: 10 }} />
          </a>
          <a href="https://www.twitter.com" style={{ color: "#fff" }}>
            <Twitter style={{ fontSize: 30 , marginRight: 10 }} />
          </a>
          <a href="https://www.instagram.com" style={{ color: "#fff" }}>
            <Instagram style={{ fontSize: 30 , marginRight: 10 }} />
          </a>
          {/* LinkedIn and GitHub icons */}
          <a href="https://www.linkedin.com" style={{ color: "#fff" }}>
            <LinkedIn style={{ fontSize: 30 , marginRight: 10 }} />
          </a>
          <a href="https://www.github.com" style={{ color: "#fff" }}>
            <GitHub style={{ fontSize: 30 , marginRight: 10 }} />
          </a>
          <a href="https://www.youtube.com" style={{ color: "#fff" }}>
            <YouTube style={{ fontSize: 30 , marginRight: 10 }} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <h5>Tüm hakları saklıdır &copy; {new Date().getFullYear()}</h5>
      </div>
    </div>
  );
};

export default Footer;
