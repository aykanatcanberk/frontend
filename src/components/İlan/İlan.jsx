import * as React from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { grey } from '@mui/material/colors';
import BusinessIcon from '@mui/icons-material/Business';
import Button from '@mui/material/Button';
import CardActions from '@mui/joy/CardActions';

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 420px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2;
  padding: 8px;
  margin-left:20px;
  height:250px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

`,
);

export default function İlan({advert}){
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <BusinessIcon sx={{ fontSize: 35, bgcolor: blue[500] }} aria-label="recipe" />
        }
        title={
          <Typography variant="h8" fontWeight="bold">
             {advert.advertTitle}
          </Typography>
        }
        subheader={
          <Box display="flex" alignItems="center">
            <CalendarMonthIcon sx={{ fontSize: 14, marginLeft: 1 }} />
            <Typography variant="body2" color="text.secondary">{advert.advertDate}
            </Typography>
            <BusinessCenterIcon sx={{ fontSize: 14, marginLeft: 1 }} />
            <Typography variant="body2" color="text.secondary">{advert.advertType}</Typography>
          </Box>
        }
      />
      <StyledTextarea
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 100 rows"
        defaultValue={advert.advertDesc}
        readOnly
      />
      <CardActions>
      <Button variant="solid" color="primary">
            Başvur
          </Button>
      </CardActions>
    </Card>
  );
}