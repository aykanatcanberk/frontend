import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../../navbar/navbar.css";

function Navbar() {
  const[openLinks, setOpenLinks]= useState(false);
  const toggleNavbar = () => { 
    setOpenLinks(!openLinks);

  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <img src={Logo} alt=""></img>
      <div className="hiddenLinks">
        <Link to="/bireysel-anasayfa">Anasayfa</Link>
        <Link to="/bireysel-ilanlar">İlanlar</Link>
        <Link to="/bireysel-firmalar">Firmalar</Link>
        <Link to="/bireysel-deneyimler">Deneyimler</Link>
        <Link to="/bireysel-profil">Profilim</Link>
        
      </div>
      </div>
      <div className="rightSide">
        <Link to="/bireysel-anasayfa">Anasayfa</Link>
        <Link to="/bireysel-ilanlar">İlanlar</Link>
        <Link to="/bireysel-firmalar">Firmalar</Link>
        <Link to="/bireysel-deneyimler">Deneyimler</Link>
        <Link to="/bireysel-profil">Profilim</Link>
        <button onClick={toggleNavbar}> 
          <ReorderIcon/>
       </button>
       
      </div>
      </div>
   
    );
}

export default Navbar;
