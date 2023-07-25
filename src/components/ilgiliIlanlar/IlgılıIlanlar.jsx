import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from "@mui/material/Avatar";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import roketsan from "./images/roketsan.png";
import tet from "./images/tr-egitim-ve-teknoloji-as.png";


const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "20px",
});

function IlgılıIlanlar() {
  return (
    <CardWrapper>
      <Typography style={{fontFamily: "Arial", fontWeight:"bold"}}>
      İlgini Çekebilecek İlanlar
      </Typography>
          <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={roketsan} alt="Roketsan" />
              </ListItemIcon>
              <ListItemText primary="R-FORCE Genç Yetenek Programı 2023" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={tet} alt="TRET" />
              </ListItemIcon>
              <ListItemText primary="Kıdemli Kurumsal İletişim Uzmanı" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={tet} alt="TRET" />
              </ListItemIcon>
              <ListItemText primary="Kıdemli Eğitim Tasarımı ve Operasyonları Uzmanı" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={tet} alt="TRET" />
              </ListItemIcon>
              <ListItemText primary="Kıdemli Yazılım Geliştirme Uzmanı" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
        </CardWrapper>
  )
}

export default IlgılıIlanlar;