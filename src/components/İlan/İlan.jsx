import React, { useEffect, useState } from "react";
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
import CardActions from "@mui/material/CardActions";
import {
  applyAdvert,
  getAdvertApplicationStatus,
  cancelAdvert,
} from "../../services/advertService";

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 420px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2;
  padding: 8px;
  margin-left:20px;
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
export default function İlan({ advert }) {
  const my_id = 1;
  const [isApplied, setIsApplied] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    getAdvertApplicationStatus(my_id, advert.id)
      .then((response) => {
        setIsApplied(response.data.length === 1 ? true : false);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
  }, [updated]);

  const handleApplication = (my_id, ilan_id, firma_id) => {
    applyAdvert(my_id, ilan_id, firma_id)
      .then((response) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
  };

  const handleCancellation = (my_id, ilan_id) => {
    cancelAdvert(my_id, ilan_id)
      .then((response) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
  };

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
          <React.Fragment>
            <Typography variant="h8" fontWeight="bold" sx={{ marginLeft: 1 }}>
              {advert.ilan_adi}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: 1 }}
            >
              {advert.firma_adi}
            </Typography>
          </React.Fragment>
        }
        subheader={
          <Box display="flex" alignItems="center">
            <CalendarMonthIcon sx={{ fontSize: 14, marginLeft: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {advert.ilan_date}
            </Typography>
            <BusinessCenterIcon sx={{ fontSize: 14, marginLeft: 1 }} />
            <Typography variant="body2" color="text.secondary">
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
      <CardActions>
        <Button
          variant="solid"
          color="primary"
          onClick={
            isApplied
              ? () => handleCancellation(my_id, advert.id)
              : () => handleApplication(my_id, advert.id, advert.firma_id)
          }
        >
          {isApplied ? "Başvuruyu İptal Et" : "Başvur"}
          {/* Başvur */}
        </Button>
      </CardActions>
    </Card>
  );
}
