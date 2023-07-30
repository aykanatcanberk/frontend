import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { setWorkApproval } from "../../services/workHistoryService";

const OnayIstegi = ({ props, guncelle }) => {
  const handleApproval = (id, status) => {
    setWorkApproval(id, status)
      .then((response) => {
        guncelle();
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
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
          {props?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props?.startDate} - {props?.finishDate}
        </Typography>
        <Typography variant="body2">
          Merhaba, belirttigim tarihler arasinda sirketinizde {"   "}
          {props?.department} departmaninda calistigimi dogrulayabilir misiniz?
          <br />
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "flex-end" }}>
        {/* Buton yerine direk icon koyulabilir */}

        <Button
          onClick={() => handleApproval(props?.id, 1)}
          sx={{ color: "green" }}
          size="small"
        >
          <DoneIcon />
        </Button>
        <Button
          onClick={() => handleApproval(props?.id, 2)}
          sx={{ color: "red" }}
          size="small"
        >
          <ClearIcon />
        </Button>
      </CardActions>
    </div>
  );
};

export default OnayIstegi;
