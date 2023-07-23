import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";

const login = () => {
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "10px auto",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <TextField label="E-posta" placeholder="" fullWidth required />
        <TextField
          label="Şifre"
          placeholder=""
          type="password"
          fullWidth
          required
          sx={{
            margin: "15px",
            marginLeft: "1px",
            color: "success.main",
          }}
        />

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Beni Hatırla"
          sx={{
            marginBottom: "20px ",
          }}
        />
        <Stack direction="row" spacing={5}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginLeft: "18px",
            }}
          >
            Giriş Yap
          </Button>
          <Button variant="contained" color="secondary">
            Kayıt Ol
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default login;
