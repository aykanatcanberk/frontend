import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../bg/signin.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { login1 } from "../../services/loginService";
import axios from "axios";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "50px",
};

const center = {
  position: "relative",
  top: "50%",
  left: "37%",
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setOpen(true);
    const data = new FormData(event.currentTarget);
    // login1({ email, password })
    //   .then((response) => {
    //     localStorage.setItem("token", response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios
      .post(`http://localhost:5071/api/Auth/login`, { email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data);
        navigate("/bireysel-anasayfa");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Hata! E-posta ve şifre alanı boş bırakılamaz.
        </Alert>
      </Snackbar>
      <div>
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  marginTop: "40px",
                  marginLeft: "15px",
                  marginRight: "15px",
                  height: "63vh",
                  color: "#f5f5f5",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "#3b33d5",
                  borderRadius: "50px",
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={80} />
                    <Box sx={center}>
                      <Typography color="#ffff" component="h1" variant="h4">
                        Giriş Yap
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            value={email}
                            onChange={(e) => setUsername(e.target.value)}
                            fullWidth
                            id="email"
                            label="E-posta"
                            name="email"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            name="şifre"
                            label="Şifre"
                            type="password"
                            id="şifre"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <Stack direction="row" spacing={2}>
                            <FormControlLabel
                              sx={{ width: "60%" }}
                              onClick={() => setRemember(!remember)}
                              control={<Checkbox checked={remember} />}
                              label="Beni Hatırla"
                            />
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth="true"
                            size="large"
                            sx={{
                              mt: "10px",
                              mr: "20px",
                              borderRadius: 28,
                              color: "#ffffff",
                              minWidth: "170px",
                              backgroundColor: "#1e90ff",
                            }}
                          >
                            GİRİŞ YAP
                          </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <Stack direction="row" spacing={2}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{
                                marginTop: "10px",
                                marginLeft: "100px ",
                              }}
                            >
                              Henüz hesabın yok mu?{" "}
                              <span
                                style={{
                                  color: "#f8f8ff",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  navigate("/kayit-ol-bireysel");
                                }}
                              >
                                Kayıt Ol
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
