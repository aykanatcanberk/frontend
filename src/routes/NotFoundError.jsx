import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./NotFoundError.css";


function NotFoundError() {
  return (
    <div className="not-found-error">
      <h1>Oops!</h1>
      <p>Böyle bir URL mevcut değil</p>
      <Button component={Link} to="/bireysel-anasayfa" variant="contained" color="primary">
        Anasayfaya Dön
      </Button>
    </div>
  );
}

export default NotFoundError;
