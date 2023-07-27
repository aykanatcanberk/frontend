/* Author: Hasan Basri BİLGE
Last Update: 25.07.2023 */

import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import pp from "./images/pp";

const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "20px",
});

const AvatarWrapper = styled(Avatar)({
  width: "100px",
  height: "100px",
  margin: "auto",
  borderRadius: "50%",
});

function ProfilComp() {
  return (
    <CardWrapper>
          <AvatarWrapper src={pp} alt="Profil Avatarı" />
          <Typography
            variant="h6"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Patrick Bateman
          </Typography>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                fontSize: "12px",
                fontWeight: "normal",
                color: "secondary",
                textAlign: "center",
              }}
            >
              Öğrenci
            </Typography>
          </Grid>
        </CardWrapper>
  )
}

export default ProfilComp;