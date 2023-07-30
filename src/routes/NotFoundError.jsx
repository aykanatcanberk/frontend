import React from "react";
import "./NotFoundError.css"; // Import the CSS file for NotFoundError

function NotFoundError({ props }) {
  return (
    <div className="not-found-error">
      <h1>Oops!</h1>
      <p>{props ? props : "Böyle bir URL mevcut değil"}</p>
    </div>
  );
}

export default NotFoundError;
