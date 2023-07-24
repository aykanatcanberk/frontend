import { Grid, Paper, TextField, Typography, Box, Button } from "@mui/material";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FormControl from "@mui/material/FormControl";

const KayitOl = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: 470,
    height: "50vh",
    margin: "40px auto",
  };
  return (
    <Grid align="center">
      <Paper evelation={20} style={paperStyle}>
        <h2>Kayıt Ol</h2>
        <Typography variant="h7">
          Lütfen kayıt olmak için bu formu doldurunuz!
        </Typography>
        <form>
          <Box sx={{ marginTop: "25px", "& > :not(style)": { m: 1.25 } }}>
            <FormControl variant="standard">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField id="input-with-sx" label="Ad" variant="standard" />
              </Box>
            </FormControl>
            <FormControl variant="standard">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Soyad"
                  variant="standard"
                />
              </Box>
            </FormControl>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                id="input-with-sx"
                label="E-posta Adresi"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                type="password"
                id="input-with-sx"
                label="Şifre"
                variant="standard"
              />
            </Box>
          </Box>
          <Button
            sx={{
              marginTop: "40px",
            }}
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
          >
            Kayıt Ol
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default KayitOl;
