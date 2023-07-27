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
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 420px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2;
  padding: 20px;
  margin-left:10px;
  height:250px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

`
);

export default function İlanDetay({ advert }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <BusinessIcon
            sx={{ fontSize: 35, bgcolor: blue[500] }}
            aria-label="recipe"
          />
        }
        title={
          <Typography variant="h8" fontWeight="bold">
            {advert.ilan_adi}
          </Typography>
        }
        subheader={
          <Box display="flex" alignItems="center">
            <CalendarMonthIcon
              sx={{ fontSize: 14, marginLeft: 1, marginTop: 0.8 }}
            />
            <Typography variant="body2" color="text.secondary" marginTop={0.8}>
              {advert.ilan_date}
            </Typography>
            <BusinessCenterIcon
              sx={{ fontSize: 14, marginLeft: 2, marginTop: 0.8 }}
            />
            <Typography variant="body2" color="text.secondary" marginTop={0.8}>
              {advert.ilan_tipi}
            </Typography>
          </Box>
        }
      />
      <StyledTextarea
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 100 rows"
        defaultValue={advert.desc}
        readOnly
      />

      <Box display="flex" alignItems="center">
        <WorkHistoryIcon sx={{ fontSize: 14, marginLeft: 4, marginTop: 0.8 }} />
        <Typography variant="body2" marginTop={0.8} marginLeft={0.5}>
          {advert.çalışma_şekli}
        </Typography>
        <LocalAtmIcon sx={{ fontSize: 14, marginLeft: 4, marginTop: 0.8 }} />
        <Typography variant="body2" marginTop={0.8} marginLeft={0.5}>
          {advert.çalışma_tercihi}
        </Typography>
        <EngineeringIcon sx={{ fontSize: 14, marginLeft: 4, marginTop: 0.8 }} />
        <Typography
          variant="body2"
          marginTop={2.8}
          marginLeft={0.5}
          marginBottom={2}
        >
          {advert.bölüm}
        </Typography>
      </Box>
    </Card>
  );
}
