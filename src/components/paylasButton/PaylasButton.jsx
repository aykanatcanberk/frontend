
import React from 'react';
import SendIcon from "@mui/icons-material/Send";
import IconButton from '@mui/material/IconButton';

const PaylasButton = () => {
  return (
    <IconButton
      color="default"
      aria-label="Paylas"
    >
      <SendIcon style={{ color: 'blue' }} />
    </IconButton>
  );
};

export default PaylasButton;
