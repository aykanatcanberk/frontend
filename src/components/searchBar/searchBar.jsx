import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div><TextField
          id="search"
          type="search"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          sx={{ width: 800 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        /></div>
  )
}

export default SearchBar;