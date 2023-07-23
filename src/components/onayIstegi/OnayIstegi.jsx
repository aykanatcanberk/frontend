import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

const OnayIstegi = ({ props }) => {
  const handleAccept = () => {
    console.log("Accepted");
  };
  const handleReject = () => {
    console.log("Rejected");
  };

  return (
    <div className="onayIstegiCard">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {" "}
          {/* Renkler degistirilebilir */}
          Onay Bekliyor
        </Typography>
        <Typography variant="h5" component="div">
          {props?.isim}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props?.baslangicTarihi} - {props?.bitisTarihi}
        </Typography>
        <Typography variant="body2">
          Merhaba, belirttigim tarihler arasinda sirketinizde {"   "}
          {props?.departmanIsmi} departmaninda calistigimi dogrulayabilir
          misiniz?
          <br />
        </Typography>
      </CardContent>
      <CardActions
        style={{ justifyContent: "flex-end" }}
        classes="onayIstegiButon"
      >
        {/* Buton yerine direk icon koyulabilir */}

        <Button onClick={handleAccept} sx={{ color: "green" }} size="small">
          <DoneIcon />
        </Button>
        <Button onClick={handleReject} sx={{ color: "red" }} size="small">
          <ClearIcon />
        </Button>
      </CardActions>
    </div>
  );
};

export default OnayIstegi;
