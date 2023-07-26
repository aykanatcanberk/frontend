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
import { useState, forwardRef, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { stringify } from "json5";
import { connect } from "react-redux";
import { useRadioGroup } from "@mui/material";
import { fetchUsers } from "../../redux/users/userActions";
import { getUserByEmail } from "../../services/services.js";

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
  left: "37%",
};

function Login({ usersData, fetchUsers }) {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    fetchUsers("http://localhost:3000/users");
  }, []);

  const initialAccount = {
    eMail: "",
    password: "",
    userType: "-",
  };

  const [tryAccount, setTryAccount] = useState(initialAccount);

  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setOpen(true);
    event.preventDefault();
    ProceedLogin();
    // const data = new FormData(event.currentTarget);
  };

  const ProceedLogin = () => {
    if (validate()) {
      getUserByEmail(tryAccount.eMail)
        .then((user) => {
          if (user[0].password === tryAccount.password) {
            console.log("Success");
            sessionStorage.setItem("eMail", tryAccount.eMail);
            sessionStorage.setItem("userrole", user.role);
            console.log("go to the main page!");
            navigate("/bireysel-anasayfa");
          } else {
            console.error("Please Enter valid credentials");
          }
        })
        .catch((err) => {
          console.error("Login Failed due to :" + err.message);
        });
    }
  };

  const ProceedLoginusingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      let inputobj = { eMail: tryAccount.eMail, password: tryAccount.password };
      fetch("https://localhost:44308/User/Authenticate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inputobj),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            console.error("Login failed, invalid credentials");
          } else {
            console.log("Success");
            sessionStorage.setItem("eMail", tryAccount.eMail);
            sessionStorage.setItem("jwttoken", resp.jwtToken);
            // usenavigate("/");
          }
          // if (Object.keys(resp).length === 0) {
          //     toast.error('Please Enter valid username');
          // } else {
          //     if (resp.password === password) {
          //         toast.success('Success');
          //         sessionStorage.setItem('username',username);
          //         usenavigate('/')
          //     }else{
          //         toast.error('Please Enter valid credentials');
          //     }
          // }
        })
        .catch((err) => {
          console.error("Login Failed due to :" + err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (tryAccount.eMail === "" || tryAccount.eMail === null) {
      result = false;
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Hata! E-posta alanı boş bırakılamaz.
      </Alert>;
    }
    if (tryAccount.password === "" || tryAccount.password === null) {
      result = false;
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Hata! Şifre alanı boş bırakılamaz.
      </Alert>;
    }
    return result;
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
          Hata! AAAAA E-posta ve şifre alanı boş bırakılamaz.
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
                            fullWidth
                            id="eMail"
                            label="E-posta"
                            name="eMail"
                            value={tryAccount.eMail}
                            onChange={(e) => {
                              setTryAccount({
                                ...tryAccount,
                                eMail: e.target.value,
                              });
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="şifre"
                            label="Şifre"
                            type="password"
                            id="şifre"
                            value={tryAccount.password}
                            onChange={(e) => {
                              setTryAccount({
                                ...tryAccount,
                                password: e.target.value,
                              });
                            }}
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

const mapStateToProps = (state) => {
  return {
    usersData: state.userrrrr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
