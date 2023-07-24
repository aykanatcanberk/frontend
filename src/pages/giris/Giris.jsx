import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Giris = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
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

        <Button
          sx={{
            marginBottom: "20px ",
          }}
          fullWidth
          type="submit"
          variant="contained"
          color="secondary"
        >
          Giriş Yap
        </Button>
        <Typography>
          Hesabın yok mu?
          <Link href="#" onClick={() => handleChange("event")}>
            Kayıt Ol
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Giris;
