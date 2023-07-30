import React, { useState } from "react";
import FirmaSelect from "./FirmaSelect";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { addDeneyim } from "../../services/deneyimService";

function DeneyimPaylas() {
  const [deneyimBaslik, setDeneyimBaslik] = useState("");
  const [deneyimIcerik, setDeneyimIcerik] = useState("");
  const [firma, setFirma] = useState("");
  const [loading, setLoading] = useState(false);

  const firmaSec = (par) => {
    setFirma(par);
  };

  const handleAddDeneyim = () => {
    setLoading(true);
    const newDeneyim = {
      name: "Dinny Micah",
      title: deneyimBaslik,
      companyName: firma,
      description: deneyimIcerik,
    };

    addDeneyim(newDeneyim)
      .then(() => {
        console.log("Deneyim eklendi");
        setDeneyimBaslik("");
        setFirma("");
        setDeneyimIcerik("");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error adding data:", error);
        setLoading(false);
      });
  };

  return (
    <div className="deneyimPaylas">
      <TextField
        rows={1}
        maxRows={1}
        label="Deneyim Basligi"
        value={deneyimBaslik}
        id="fullWidth"
        onChange={(e) => setDeneyimBaslik(e.target.value)}
        sx={{ marginTop: "15px" }}
      />
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
        <LoadingButton
          size="small"
          sx={{ height: "40px" }}
          onClick={handleAddDeneyim}
          endIcon={<SendIcon />}
          loading={loading}
          variant="contained"
        >
          Gonder
        </LoadingButton>
      </div>
    </div>
  );
}

export default DeneyimPaylas;
