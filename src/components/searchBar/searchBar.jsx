import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

function SearchBar({ searchTerm, onChange }) {
  return (
    <div>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={onChange}
        sx={{ width: 800 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
