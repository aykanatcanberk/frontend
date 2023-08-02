import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../bg/signin.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, forwardRef, useRef, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../api/axios";
import { styled } from "styled-components";
import "./KayıtOlBireysel.css";

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
  left: "30%",
};

const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

export default function Register() {
  const [open, setOpen] = useState(false);
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

  const userNameRef = useRef();
  const userSurnameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [userSurname, setUserSurname] = useState("");
  const [validUserSurname, setValidUserSurname] = useState(false);
  const [userSurnameFocus, setUserSurnameFocus] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setUserEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUserName(USER_REGEX.test(userName));
    setValidUserSurname(USER_REGEX.test(userSurname));
  }, [userName, userSurname]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleSubmit = async (e) => {
    setOpen(true);
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // if button enabled with JS hack
    const v1 = USER_REGEX.test(userName);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ userName, userSurname, userEmail, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUserName("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
    finally{
      navigate("/bireysel-profil");
    }
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
                        <FormControl variant="standard">
                          <Box
                            sx={{
                              width: 200,
                              ml: "2em",
                              display: "flex",
                              alignItems: "flex-end",
                            }}
                          >
                            <AccountCircle
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                              id="ad"
                              label="Ad"
                              variant="standard"
                              type="text"
                              ref={userNameRef}
                              onChange={(e) => setUserName(e.target.value)}
                              value={userName}
                              required
                              onFocus={() => setUserNameFocus(true)}
                              onBlur={() => setUserNameFocus(false)}
                            />
                            <FontAwesomeIcon
                              icon={faCheck}
                              color="white"
                              className={validUserName ? "valid" : "hide"}
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              color="white"
                              className={
                                validUserName || !userName ? "hide" : "invalid"
                              }
                            />

                            {/* <TextField
                              id="uidnote"
                              className={
                                userNameFocus && userName && !validUserName
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              4 to 24 characters.
                              <br />
                              Must begin with a letter.
                              <br />
                              Letters, numbers, underscores, hyphens allowed.
                            </TextField> */}
                          </Box>
                        </FormControl>
                        <FormControl variant="standard">
                          <Box
                            sx={{
                              width: 200,
                              ml: "1em",
                              display: "flex",
                              alignItems: "flex-end",
                            }}
                          >
                            <AccountCircle
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                              id="soyad"
                              label="Soyad"
                              variant="standard"
                              type="text"
                              ref={userSurnameRef}
                              onChange={(e) => setUserSurname(e.target.value)}
                              value={userSurname}
                              required
                              onFocus={() => setUserSurnameFocus(true)}
                              onBlur={() => setUserSurnameFocus(false)}
                            />
                            <FontAwesomeIcon
                              icon={faCheck}
                              color="white"
                              className={validUserSurname ? "valid" : "hide"}
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              color="white"
                              className={
                                validUserSurname || !userSurname
                                  ? "hide"
                                  : "invalid"
                              }
                            />
                          </Box>
                        </FormControl>
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
                            label="E-posta Adresi"
                            variant="standard"
                            type="email"
                            ref={emailRef}
                            onChange={(e) => setUserEmail(e.target.value)}
                            value={userEmail}
                            required
                            onFocus={() => setUserEmailFocus(true)}
                            onBlur={() => setUserEmailFocus(false)}
                            // Burada belki girilen e-postanın var olup olmadığı araştırılabilir.
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
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                          />
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={validPwd ? "valid" : "hide"}
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={validPwd || !pwd ? "hide" : "invalid"}
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
                            label="Şifre Tekrardan"
                            variant="standard"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                          />
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={
                              validMatch && matchPwd ? "valid" : "hide"
                            }
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={
                              validMatch || !matchPwd ? "hide" : "invalid"
                            }
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
                            backgroundColor: "#1e90ff",
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
