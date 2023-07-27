import React from "react";
import Grid from "@mui/material/Grid";
import İlanDetay from "../../components/ilanDetay/İlanDetay";
import db from "../../data/db.json";

function KurumsalIlan() {
  return (
    <Grid item xs={12} lg={9}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginTop={3}
        spacing={2}
      >
        {db["advert-detail"].map((advert, index) => (
          <Grid
            item
            key={advert.id}
            xs={12}
            sm={12}
            marginTop={10}
            marginLeft={20}
          >
            <İlanDetay advert={advert} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default KurumsalIlan;
