import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function DropdownMenu({ menuItems, selectItem }) {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  const handleChange = (event) => {
    // console.log(event.target.value);
    // selectItem?.(event.target.value);

    const selectedItem = menuItems.find(item => item.name === event.target.value);
    setSelectedItem(selectedItem);
    console.log(selectedItem);
    selectItem?.(selectedItem);
  };
  

  return (
    <Box sx={{ margin: "10px 0", width: "95%", marginLeft: "2.5%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">FirmaSeç </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedItem.name}
          label="Firmalar"
          onChange={handleChange}
        >
          {menuItems.map((menuItem) => (
            <MenuItem value={menuItem.name}>{menuItem.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
