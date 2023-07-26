import React, { useState } from "react";
import { Button } from "@mui/material";
import DeneyimText from "./DeneyimText";
import FirmaSelect from "./FirmaSelect";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function DeneyimPaylas() {
  const [deneyimBaslik, setDeneyimBaslik] = useState("");
  const [deneyimIcerik, setDeneyimIcerik] = useState("");
  const [firma, setFirma] = useState("");

  const firmaSec = (par) => {
    setFirma(par);
  };

  const handleClick = () => {
    //burada deneyimBaslik, deneyimIcerik ve firma state'lerini kullanarak veritabanına kayıt yapılacak
    console.log(deneyimBaslik, deneyimIcerik, firma);
  };

  return (
    <div className="deneyimPaylas">
      <TextField
        rows={1}
        maxRows={1}
        label="Deneyim Basligi"
        id="fullWidth"
        onChange={(e) => setDeneyimBaslik(e.target.value)}
        sx={{ margin: "5px" }}
      />
      {/* <DeneyimText /> */}
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          padding: "10px",
        }}
      >
        <TextField
          fullWidth
          multiline
          rows={8}
          value={deneyimIcerik}
          onChange={(e) => setDeneyimIcerik(e.target.value)}
          label="Deneyim Icerigi"
          id="fullWidth"
        />
      </Box>
      <div className="deneyimFirmaButon">
        <FirmaSelect firmaSec={firmaSec} firma={firma} />
        <Button
          size="small"
          sx={{ height: "40px" }}
          variant="contained"
          onClick={handleClick}
          endIcon={<SendIcon />}
        >
          Gonder
        </Button>
      </div>
    </div>
  );
}

export default DeneyimPaylas;
