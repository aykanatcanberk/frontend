import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../../navbar/navbar.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/bireysel-anasayfa">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className={`rightSide ${openMenu ? "showMenu" : "hideMenu"}`}>
        <Link to="/bireysel-anasayfa">Anasayfa</Link>
        <Link to="/bireysel-ilanlar">İlanlar</Link>
        <Link to="/bireysel-firmalar">Firmalar</Link>
        <Link to="/bireysel-deneyimler">Deneyimler</Link>
        <Link to="/bireysel-profil">Profilim</Link>
        <Link onClick={handleLogOut} to="/">
          Çıkış Yap
        </Link>
      </div>
      <button className="menuButton" onClick={toggleMenu}>
        <ReorderIcon />
      </button>
    </div>
  );
}

export default Navbar;
