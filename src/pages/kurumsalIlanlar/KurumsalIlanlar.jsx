import React from "react";
import Avatar from '@mui/material/Avatar';
import BusinessIcon from '@mui/icons-material/Business';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import "./KurumsalIlanlar.css";
import { Link } from 'react-router-dom';
import Advert from '../../components/Advert/Advert';
function KurumsalIlanlar() {
  return (
    <>
         <Grid container direction="column" marginTop={2} paddingLeft={80} alignItems="center" spacing={2}>  
      <Grid item container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar sx={{ fontSize:45, bgcolor: blue[500] }}>
            <BusinessIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Box component="span" sx={{ p: 1, border: 1, borderColor: 'text.primary', boxShadow: 2 }}>
          <Link to="/kurumsal-profil">
                <Button>Profil</Button>
              </Link>
              </Box>
        </Grid>
      </Grid>
    </Grid>
    <Grid container spacing={0} sx={{ marginTop: '20px' }}>
        <Grid item lg={8} md={12} sx={{paddingRight: '10px', paddingLeft: '40px'}}>
    <Typography level="h6" className="Typography" style={{ marginLeft:280, marginTop: 10 }}>
          İlan Paylaş
        </Typography>
      <Card
        variant="outlined"
        sx={{
          maxHeight: 'max-content',
          maxWidth: '50%',
          marginLeft: 14,
          marginTop: 5,
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <Typography level="h1" fontSize="xl">
          İlan Adı
          <Input />
        </Typography>
        <Divider inset="none" />
        <CardContent
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
            gap: 1.5,
          }}
        >
          <FormControl>
          <FormLabel>Çalışma Şekli</FormLabel>
          <Checkbox label="Yüz Yüze" sx={{ gridColumn: '1/-1', my: 1 }}/>
          <Checkbox label="Uzaktan" sx={{ gridColumn: '1/-1', my: 1 }} />
          <Checkbox label="Hibrit" sx={{ gridColumn: '1/-1', my: 1 }} />
          </FormControl>
          <FormControl>
          <FormLabel>Çalışma Tercihi</FormLabel>
          <Checkbox label="Tam Zamanlı" sx={{ gridColumn: '1/-1', my: 1 }}/>
          <Checkbox label="Yarı Zamanlı" sx={{ gridColumn: '1/-1', my: 1 }} />
          <Checkbox label="Proje Bazlı" sx={{ gridColumn: '1/-1', my: 1 }} />
          <Checkbox label="Serbest Zamanlı" sx={{ gridColumn: '1/-1', my: 1 }}/>
          </FormControl>
          <FormControl>
          <FormLabel>İlan Tipi</FormLabel>
          <Checkbox label="Staj İlanı" sx={{ gridColumn: '1/-1', my: 1 }}/>
          <Checkbox label="İş İlanı" sx={{ gridColumn: '1/-1', my: 1 }} />
          </FormControl>
          <FormControl>
          <FormLabel>Bölüm</FormLabel>
          <Checkbox label="Bilgisayar Mühendisliği" sx={{ gridColumn: '1/-1', my: 1 }}/>
          <Checkbox label="Elektrik-Elektronik Mühendisliği" sx={{ gridColumn: '1/-1', my: 1 }} />
          <Checkbox label="Endüstri Mühendisliği" sx={{ gridColumn: '1/-1', my: 1 }} />
          <Checkbox label="Makine Mühendisliği" sx={{ gridColumn: '1/-1', my: 1 }}/>
          </FormControl>
          <CardActions
            sx={{
              gridColumn: '1/-1',
              display: 'flex',
              flexDirection: 'column',
              width: 'max-width',
            }}
          >
            <FormLabel>Gereklilikler</FormLabel>
            <TextareaAutosize
              className="styled-textarea"
              maxRows={20}
              aria-label="maximum height"
              placeholder=""
              defaultValue=""
            />
            <Button variant="solid" color="primary">
              Paylaş
            </Button>
          </CardActions>
        </CardContent>
      </Card> 
      </Grid>
        <Grid item lg={4} md={12} sx={{ paddingRight: '150px', '@media (max-width: 1280px)': { textAlign: 'center', paddingRight: "5px" } }}>
          <Typography level="h6" className="Typography" style={{ marginLeft: 10, marginTop: 10 }}>
            Yayımlanmış İlanlar
          </Typography>
          <div style={{ marginTop: 20,marginRight:20 }}>
            <Advert></Advert>
          </div>
          <div style={{ marginTop: 20,marginRight:20}}>
            <Advert></Advert>
          </div>
          <div style={{ marginTop: 20,marginRight:20}}>
            <Advert></Advert>
          </div> 
        </Grid>
      </Grid>
    </>
  );
}

export default KurumsalIlanlar;