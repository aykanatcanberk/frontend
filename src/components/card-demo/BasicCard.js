import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Isim
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rol
        </Typography>
        <Typography variant="body2">
          Görev
        </Typography>
      </CardContent>
      <CardActions >
        <Button aria-label="delete" size="large" style={{background: 'linear-gradient(to right bottom, red, darkred)'}}>
          <Typography color={"white"}>Sil</Typography>
          
        </Button>
        <Button aria-label="add" size="large" style={{background: 'linear-gradient(to right bottom, green, lightgreen)'}}>
          <Typography color={"white"}>Ekle</Typography>
        </Button>
        <Button aria-label="update" size="large" style={{background: 'linear-gradient(to right bottom, darkblue, lightblue)'}}>
          <Typography color={"white"}>Güncelle</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;