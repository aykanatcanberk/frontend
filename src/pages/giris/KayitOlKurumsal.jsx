import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../bg/signin.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

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
};

const center = {
  position: "relative",
  top: "50%",
  left: "30%",
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setOpen(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
                  backgroundColor: "#1e90ff",
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={60} />
                    <Box sx={center}>
                      <Typography
                        color="#ffff"
                        component="h1"
                        variant="h4"
                        style={{
                          marginLeft: "50px ",
                        }}
                      >
                        Kayıt Ol
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Box
                        sx={{
                          marginTop: "5px",
                          "& > :not(style)": { m: 1 },
                        }}
                      >
                        <Box
                          sx={{
                            width: 465,
                            ml: "2em",
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <AccountCircle
                            sx={{
                              ml: "1.5em",
                              color: "action.active",
                              mr: 1,
                              my: 0.5,
                            }}
                          />
                          <TextField
                            fullWidth
                            id="firma-ad"
                            label="Firma Adı"
                            variant="standard"
                          />
                        </Box>

                        <Box
                          sx={{
                            width: 465,
                            marginTop: "10px",
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <EmailIcon
                            sx={{
                              ml: "1.5em",
                              color: "action.active",
                              mr: 1,
                              my: 0.5,
                            }}
                          />
                          <TextField
                            fullWidth
                            id="email"
                            label="Kurumsal E-posta Adresi"
                            variant="standard"
                          />
                        </Box>
                        <Box
                          sx={{
                            width: 465,
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <LockIcon
                            sx={{
                              ml: "1.5em",
                              color: "action.active",
                              mr: 1,
                              my: 0.5,
                            }}
                          />
                          <TextField
                            fullWidth
                            type="password"
                            id="şifre"
                            label="Şifre"
                            variant="standard"
                          />
                        </Box>
                      </Box>
                      <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth="true"
                          size="large"
                          sx={{
                            mt: "35px",
                            mr: "20px",
                            borderRadius: 28,
                            color: "#ffffff",
                            minWidth: "170px",
                            backgroundColor: "#3b33d5",
                          }}
                        >
                          KAYIT OL
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
                            Zaten hesabın var mı?{" "}
                            <span
                              style={{ color: "#f8f8ff", cursor: "pointer" }}
                              onClick={() => {
                                navigate("/");
                              }}
                            >
                              Giriş Yap
                            </span>
                          </Typography>
                        </Stack>
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
