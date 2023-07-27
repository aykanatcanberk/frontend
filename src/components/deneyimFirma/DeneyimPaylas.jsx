import React, { useState } from "react";
import FirmaSelect from "./FirmaSelect";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { addDeneyim } from "../../services/addDeneyim";

function DeneyimPaylas() {
  const [deneyimBaslik, setDeneyimBaslik] = useState("");
  const [deneyimIcerik, setDeneyimIcerik] = useState("");
  const [firma, setFirma] = useState("");
  const [loading, setLoading] = useState(false);

  const firmaSec = (par) => {
    setFirma(par);
  };

  // const addDeneyim = () => {
  //   setLoading(true);
  //   const newDeneyim = {
  //     name: "Dinny Micah",
  //     title: deneyimBaslik,
  //     companyName: firma,
  //     description: deneyimIcerik,
  //   };

  //   axios
  //     .post("http://localhost:3000/deneyimler", newDeneyim)
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding data:", error);
  //       setLoading(false);
  //     });
  // };

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
        <LoadingButton
          size="small"
          sx={{ height: "40px" }}
          onClick={addDeneyim}
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
