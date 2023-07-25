import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FirmaSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, margin: "5px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Firmalar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Firmalar"
          onChange={handleChange}
        >
          <MenuItem value="Aselsan">Aselsan</MenuItem>
          <MenuItem value="Havelsan">Havelsan</MenuItem>
          <MenuItem value="Roketsan">Roketsan</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
