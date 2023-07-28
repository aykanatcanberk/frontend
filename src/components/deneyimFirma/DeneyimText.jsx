import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function DeneyimText() {
  return (
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
        rows={7}
        label="Deneyim Icerigi"
        id="fullWidth"
      />
    </Box>
  );
}
