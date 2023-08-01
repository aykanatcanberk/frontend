import * as React from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { grey } from "@mui/material/colors";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 310px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px;
  margin-left:5px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

`
);

export default function Advert({ kurumsalİlanlarVerisi }) {
  const advertDetailUrl = `/kurumsal-ilan/${kurumsalİlanlarVerisi.id}`;
  return (
    <Link to={advertDetailUrl} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 380 }}>
        <CardHeader
          avatar={
            <BusinessIcon
              sx={{ fontSize: 35, bgcolor: blue[500] }}
              aria-label="recipe"
            />
          }
          title={
            <Typography variant="h8" fontWeight="bold">
              {kurumsalİlanlarVerisi.ilan_adi}
            </Typography>
          }
          subheader={
            <Box display="flex" alignItems="center">
              <CalendarMonthIcon sx={{ fontSize: 14, marginLeft: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {kurumsalİlanlarVerisi.ilan_date}
              </Typography>
              <BusinessCenterIcon sx={{ fontSize: 14, marginLeft: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {kurumsalİlanlarVerisi.ilan_tipi}
              </Typography>
            </Box>
          }
        />
        <StyledTextarea
          maxRows={4}
          aria-label="maximum height"
          placeholder="Maximum 100 rows"
          defaultValue={kurumsalİlanlarVerisi.desc}
          readOnly
        />

        <Button variant="solid" color="primary" sx={{ marginLeft: 27 }}>
          İlan Detayı
        </Button>
      </Card>
    </Link>
  );
}
