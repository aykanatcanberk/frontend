import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from "@mui/material/Avatar";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import bir from "./images/1.png";
import iki from "./images/2.png";
import uc from "./images/3.png";
import dort from "./images/4.png";
import bes from "./images/5.png";


const CardWrapper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginBottom: "10px",
  borderRadius: "20px",
});

function PopulerIcerikler() {
  return (
    <CardWrapper>
      <Typography style={{fontFamily: "Arial", fontWeight: "bold"}}>
      Popüler Konular
      </Typography>
          <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={bir} alt="Haber" />
              </ListItemIcon>
              <ListItemText primary="Haftalık Savunma Sanayii Gündemi" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={iki} alt="Haber" />
              </ListItemIcon>
              <ListItemText primary="Savunma Sanayii Yıldızları" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={uc} alt="Haber" />
              </ListItemIcon>
              <ListItemText primary="Yusuf Salih Gurbet: Haberleşmenin Doruk Noktası Uydular" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={dort} alt="Haber" />
              </ListItemIcon>
              <ListItemText primary="Tei Kariyerini Uçur Yaz Stajı Programı Başvuruları Başladı!" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar src={bes} alt="Haber" />
              </ListItemIcon>
              <ListItemText primary="Gökyüzü İçin Gün Sayıyoruz" sx={{fontSize: "10px", fontFamily:"Arial"}}/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
        </CardWrapper>
  )
}

export default PopulerIcerikler;