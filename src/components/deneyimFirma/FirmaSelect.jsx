import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getAllCompanies } from "../../services/deneyimService";
export default function FirmaSelect(props) {
  const [data, setData] = React.useState([]);
  const handleChange = (event) => {
    console.log(event.target.value);
    props?.firmaSec(event.target.value);
  };

  useEffect(() => {
    getAllCompanies()
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
  }, []);

  return (
    <Box sx={{ minWidth: 120, margin: "5px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">FirmaSeç </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props?.firma}
          label="Firmalar"
          onChange={handleChange}
        >
          {/* <MenuItem value="Aselsan">Aselsan</MenuItem>
          <MenuItem value="Havelsan">Havelsan</MenuItem>
          <MenuItem value="Roketsan">Roketsan</MenuItem>
          <MenuItem value="Tusaş">Tusaş</MenuItem>
          <MenuItem value="TR Eğitim ve Teknoloji">
            TR Eğitim ve Teknoloji
          </MenuItem> */}
          {data?.map((firma) => (
            <MenuItem value={firma.id}>{firma.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
