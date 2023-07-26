import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FirmaSelect(props) {
  const handleChange = (event) => {
    console.log(event.target.value);
    props?.firmaSec(event.target.value);
  };

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
          <MenuItem value="ASELSAN">ASELSAN</MenuItem>
          <MenuItem value="HAVELSAN">HAVELSAN</MenuItem>
          <MenuItem value="ROKETSAN">ROKETSAN</MenuItem>
          <MenuItem value="TUSAS">TUSAS</MenuItem>
          <MenuItem value="TR EGITIM VE TEKNOLOJI">
            TR EGITIM VE TEKNOLOJI
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
