/* Author: Hasan Basri BİLGE
Last Update: 25.07.2023 */

import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import pp from "./images/pp";
import { getUserEduInfo, getUserInfo } from "../../services/userService";
import NotFoundError from "../../routes/NotFoundError";

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
  const [eduinf, setCompanyDataList] = useState([]);

  useEffect(() => {
    getUserEduInfo()
      .then((response) => {
        const eduinfo = response.data;
        setCompanyDataList(eduinfo);
      })
      .catch(() => {
        return <NotFoundError props={"Böyle bir edu bilgisi mevcut değil."} />;
      });
  }, []);

  const [userinfo, setUserData] = useState([]);

  useEffect(() => {
    getUserInfo()
      .then((response) => {
        const userinf = response.data;
        setUserData(userinf);
      })
      .catch(() => {
        return (
          <NotFoundError props={"Böyle bir kullanıcı bilgisi mevcut değil."} />
        );
      });
  }, []);
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
        {userinfo.name} <span /> {userinfo.surname}
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
          {eduinf.departmentName}
        </Typography>
      </Grid>
    </CardWrapper>
  );
}

export default ProfilComp;
