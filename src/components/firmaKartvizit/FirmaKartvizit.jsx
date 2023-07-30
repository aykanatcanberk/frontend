import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import firmalogo from "../assets/firmalogo.png";
import Avatar from "@mui/material/Avatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const FirmaKartvizit = ({ companycard }) => {
  const avatarStyle = {
    width: "100px",
    height: "100px",
    marginTop: "20px",
    marginLeft: "10px",
    border: "1px solid #ccc",
  };
  const linkUrl = `/bireysel-firma/${companycard.id}`;
  return (
    <div className="firmaKartvizit">
      <Paper>
        <Avatar sx={avatarStyle} elevation={1} alt="{}" src={firmalogo} />
        <div>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginTop: "5px", marginLeft: "20px", color: "	#00838F" }}
          >
            {companycard.name}
          </Typography>

          <Typography variant="body1" fontSize={"14px"} color="text.secondary">
            <CalendarMonthIcon sx={{ marginLeft: "5px" }} />
            {companycard.founded}
            <LocationSearchingIcon sx={{ marginLeft: "10px" }} />
            {companycard.location}
            <PeopleIcon sx={{ marginLeft: "10px" }} />
            {companycard.employeeCount}
          </Typography>
          <Typography sx={{ marginLeft: "270px" }}>
            <Link to={linkUrl}>
              <Button sx={{ color: "	#00838F" }}>Sayfaya Git</Button>
            </Link>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};
export default FirmaKartvizit;
