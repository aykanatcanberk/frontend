import React from "react";
import Grid from "@mui/material/Grid";
import Basvuranlar from "../../components/basvuranlar/Basvuranlar";
import Typography from "@mui/joy/Typography";
import db from "../../data/db.json";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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

function kurumsalIlanLayout({ advert }) {
  return (
    <Grid container spacing={0} sx={{ marginTop: "60px" }}>
      <Grid
        item
        lg={7}
        md={10}
        sx={{ paddingRight: "100px", paddingLeft: "80px" }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop={3}
          spacing={2}
        >
          <Typography
            level="h6"
            className="Typography"
            style={{ marginRight: 410, marginTop: 2 }}
          >
            İLAN DETAYI
          </Typography>

          <Grid
            item
            key={advert.id}
            xs={12}
            sm={12}
            marginTop={5}
            marginLeft={10}
          >
            <Card sx={{ maxWidth: 500 }}>
              <CardHeader
                avatar={
                  <BusinessIcon
                    sx={{ fontSize: 35, bgcolor: blue[500] }}
                    aria-label="recipe"
                  />
                }
                title={
                  <Typography
                    variant="h8"
                    fontWeight="bold"
                    color="text.secondary"
                  >
                    {advert.ilan_adi}
                  </Typography>
                }
                subheader={
                  <Box display="flex" alignItems="center">
                    <CalendarMonthIcon
                      sx={{ fontSize: 14, marginLeft: 1, marginTop: 0.8 }}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      marginTop={0.8}
                    >
                      {advert.ilan_date}
                    </Typography>
                    <BusinessCenterIcon
                      sx={{ fontSize: 14, marginLeft: 2, marginTop: 0.8 }}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      marginTop={0.8}
                    >
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
                <WorkHistoryIcon
                  sx={{ fontSize: 14, marginLeft: 4, marginTop: 0.8 }}
                />
                <Typography
                  variant="body2"
                  marginTop={0.8}
                  marginLeft={0.5}
                  color="text.secondary"
                >
                  {advert.çalışma_şekli}
                </Typography>
                <LocalAtmIcon
                  sx={{ fontSize: 14, marginLeft: 4, marginTop: 0.8 }}
                />
                <Typography
                  variant="body2"
                  marginTop={0.8}
                  marginLeft={0.5}
                  color="text.secondary"
                >
                  {advert.çalışma_tercihi}
                </Typography>
                <EngineeringIcon
                  sx={{ fontSize: 14, marginLeft: 4, marginTop: 0.8 }}
                />
                <Typography
                  variant="body2"
                  marginTop={2.8}
                  marginLeft={0.5}
                  marginBottom={2}
                  color="text.secondary"
                >
                  {advert.bölüm}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        lg={4}
        md={12}
        sx={{
          paddingRight: "150px",
          "@media (max-width: 1280px)": {
            textAlign: "center",
            paddingRight: "5px",
          },
        }}
      >
        <Typography
          level="h6"
          className="Typography"
          style={{ marginLeft: 2, marginTop: 20 }}
        >
          BAŞVURANLAR
        </Typography>

        <div style={{ marginTop: 60, marginRight: 10 }}>
          {db.applicant.map((applicant) => (
            <Basvuranlar key={applicant.id} applicant={applicant} />
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export default kurumsalIlanLayout;
