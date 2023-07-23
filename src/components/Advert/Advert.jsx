import * as React from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import PlaceIcon from '@mui/icons-material/Place';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { grey } from '@mui/material/colors';
import BusinessIcon from '@mui/icons-material/Business';
const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardHeader
        avatar={
          <BusinessIcon sx={{ fontSize: 35, bgcolor: blue[500] }} aria-label="recipe" />
        }
        title={
          <Typography variant="h8" fontWeight="bold">
            Yazılım Geliştirme Uzmanı
          </Typography>
        }
        subheader={
          <Box display="flex" alignItems="center">
            <CalendarMonthIcon sx={{ fontSize: 14, marginLeft: 1 }} />
            <Typography variant="body2" color="text.secondary">14.06.2023</Typography>
            <PlaceIcon sx={{ fontSize: 14, marginLeft: 1 }} />
            <Typography variant="body2" color="text.secondary">Ankara</Typography>
            <BusinessCenterIcon sx={{ fontSize: 14, marginLeft: 1 }} />
            <Typography variant="body2" color="text.secondary">Staj</Typography>
          </Box>
        }
      />
      <StyledTextarea
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 100 rows"
        defaultValue="Daha önce Java kullanmış en az 2 yıl tecrübeli, lisans diplomalı yazılım geliştirme uzmanı arıyoruz"
        readOnly
      />
    </Card>
  );
}