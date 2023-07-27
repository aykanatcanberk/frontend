import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GirisBireysel from "../pages/giris/GirisBireysel";
import GirisKurumsal from "../pages/giris/GirisKurumsal";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const SignInOutContainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = {
    width: 345,
    margin: "40px auto",
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper style={paperStyle}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab
          icon={<PersonIcon />}
          iconPosition="start"
          label="BİREYSEL"
          sx={{
            marginLeft: "20px",
          }}
        />
        <Tab
          icon={<BusinessCenterIcon />}
          iconPosition="start"
          label="KURUMSAL"
          sx={{
            marginLeft: "40px",
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <GirisBireysel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GirisKurumsal />
      </TabPanel>
    </Paper>
  );
};
export default SignInOutContainer;
