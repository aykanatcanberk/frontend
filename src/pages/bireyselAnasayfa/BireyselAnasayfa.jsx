import React from "react";
import { Paper, Grid, Avatar, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const avatarPStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',
};

const avatarFStyle = {
  width: '40px',
  height: '40px',
  marginLeft: '10px',
  borderRadius: '20%',
  overflow: 'hidden',
};

function BireyselAnasayfa() {
  const firmalar = [
    { name: "Aselsan", avatarUrl: "url_for_firma_1_avatar" },
    { name: "Tusaş", avatarUrl: "url_for_firma_2_avatar" },
    { name: "Havelsan", avatarUrl: "url_for_firma_3_avatar" },
    { name: "Baykar", avatarUrl: "url_for_firma_4_avatar" },
    { name: "STM", avatarUrl: "url_for_firma_5_avatar" },
    { name: "FNSS", avatarUrl: "url_for_firma_6_avatar" },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Paper elevation={0} style={{ paddingRight: 20 }} sx={{ height: "100%" }}>
          <Grid container justifyContent="center" alignItems="center" direction="column">
            <Avatar
              sx={avatarPStyle}
              elevation={1}
              alt="Profil"
              style={{ marginTop: 20 }}
            />
            <Typography variant="h6" style={{ marginTop: "10px" }}>
              Hasan Basri BİLGE
            </Typography>
            <Typography variant="h6" style={{ marginTop: "150px", marginRight: "1px" }}>
              Firmalar
            </Typography>
            <Grid container spacing={1} justifyContent="center" alignItems="center" style={{ marginTop: "20px" }}>
              {firmalar.map((firma, index) => (
                <Grid key={index} item xs={5}>
                  <Paper elevation={0} justifyContent="center" alignItems="center" style={{ paddingLeft: 10, textAlign: 'center' }}>
                    <Avatar
                      sx={avatarFStyle}
                      elevation={1}
                      alt={firma.name}
                      src={firma.avatarUrl}
                    />
                    <Typography variant="body2" justifyContent="center" alignItems="center" style={{ marginTop: "10px", textAlign: 'center', marginLeft: "-10px" }}>
                      {firma.name}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper elevation={1} style={{ padding: 20 }} sx={{ height: "100%" }}>
          <Typography style={{ padding: 20 }} textAlign='center'>
            Gönderiler
          </Typography >
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Typography style={{ padding: 20 }} textAlign='center'>
          İlanlar
        </Typography>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 580,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`}>
                {[0, 1, 2].map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <Card sx={{ width: '100%' }} style={{ padding: 100}}>
                      <CardContent>
                        <Typography variant="body2">{`Item ${item}`}</Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                ))}
            </li>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default BireyselAnasayfa;
