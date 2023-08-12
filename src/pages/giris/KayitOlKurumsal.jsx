import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../bg/login.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useRef, useEffect } from "react";
// import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment } from "@mui/material";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../api/axios";
import { styled } from "styled-components";
import "./KayıtOlBireysel.css";
import { Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import VideoAnimations from "../../components/videoAnimation/VideoAnimations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

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

const USER_REGEX = /^.{1,22}$/; // şirket ismi her şey olabilsin ?
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // Daha güçlü şifre için bunu kullanın
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^.{6,}$/;
const REGISTER_URL = "http://localhost:5071/api/Auth/registerCompany";

const PasswordRequirementsTooltip = () => {
  return (
    <Tooltip
      title={
        <Typography>
          Password must meet the following requirements:
          <ul>
            <li>At least 6 characters long</li>
            <li>...</li> {/* Add more requirements */}
          </ul>
        </Typography>
      }
    >
      <HelpIcon />
    </Tooltip>
  );
};

export default function Register() {
  const navigate = useNavigate();

  const companyNameRef = useRef();
  const userSurnameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [companyName, setCompanyName] = useState("");
  const [validCompanyName, setValidUserName] = useState(false);
  const [userNameFocus, setCompanyNameFocus] = useState(false);

  const [companyEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setCompanyEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    companyNameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUserName(USER_REGEX.test(companyName));
    setValidEmail(EMAIL_REGEX.test(companyEmail));
  }, [companyName, companyEmail]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if button enabled with JS hack
    const v1 = USER_REGEX.test(companyName);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(companyEmail);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      // burası backend'e olmadan çalışmaz
      const userDto = {
        email: companyEmail,
        password: pwd,
      };
      const companyDto = {
        name: companyName,
      };

      const data = {
        userDto: userDto,
        companyDto: companyDto,
      };

      await axios.post(REGISTER_URL, data).then((response) => {
        // response backend olunca bir işe yarıyor
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response));
        setSuccess(true);
        //clear state and controlled inputs
        //need value attrib on inputs for this
        setCompanyName("");
        setUserEmail("");
        setPwd("");
        setMatchPwd("");

        toast.success("KAYIT OLMA İŞLEMİ BAŞARILI OLDU.", {
          onClose: () => {
            // Redirect to the desired page
            navigate("/");
          },
          autoClose: 10,
        });
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
        console.log(err);
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
        console.log(err);
      } else {
        setErrMsg("Registration Failed");
        console.log(err);
      }
      // errRef.current.focus();

      toast.error("ERROR! KAYIT OLMA İŞLEMİ BAŞARILI DEĞİL.", {
        onClose: () => {
          // Redirect to the desired page
          navigate("/");
        },
        autoClose: 100,
      });
    }
  };

  return (
    <>
      <VideoAnimations />
      <ToastContainer />

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
                              width: 435,
                              ml: "2em",
                              display: "flex",
                              alignItems: "flex-end",
                            }}
                          >
                            <AccountCircle
                              sx={{
                                color: "action.active",
                                mr: 1,
                                my: 0.5,
                              }}
                            />
                            <TextField
                              fullWidth
                              id="ad"
                              label="Şirket İsmi"
                              variant="standard"
                              type="text"
                              ref={companyNameRef}
                              onChange={(e) => setCompanyName(e.target.value)}
                              value={companyName}
                              required
                              onFocus={() => setCompanyNameFocus(true)}
                              onBlur={() => setCompanyNameFocus(false)}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end"></InputAdornment>
                                ),
                              }}
                            />
                            <FontAwesomeIcon
                              icon={faCheck}
                              color="white"
                              className={validCompanyName ? "valid" : "hide"}
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              color="white"
                              className={
                                validCompanyName || !companyName
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
                            value={companyEmail}
                            required
                            onFocus={() => setCompanyEmailFocus(true)}
                            onBlur={() => setCompanyEmailFocus(false)}
                            // Burada belki girilen e-postanın var olup olmadığı araştırılabilir.
                          />
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="white"
                            className={validEmail ? "valid" : "hide"}
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            color="white"
                            className={
                              validEmail || !companyEmail ? "hide" : "invalid"
                            }
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
                            onFocus={(e) => {
                              setPwdFocus(true);
                            }}
                            onBlur={() => {
                              setPwdFocus(false);
                            }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <PasswordRequirementsTooltip />
                                </InputAdornment>
                              ),
                            }}
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
                            label="Şifre Tekrarı"
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
