import React from 'react';
import TextField from '@mui/material/TextField';

function Input(props) {
  return (
    <TextField
      {...props}
      variant="outlined"
      fullWidth
    />
  );
}

export default Input;
