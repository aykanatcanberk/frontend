import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import BusinessIcon from '@mui/icons-material/Business';
import { withTheme } from '@emotion/react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
  avatar={
    <BusinessIcon sx={{ fontSize: 35, bgcolor:blue[500] }} aria-label="recipe" />
  }
  title={
    <Typography variant="h8" fontWeight="bold">
      İlan Başlığı
    </Typography>
  }
  subheader={
    <Box display="flex" alignItems="center">
      <CalendarMonthIcon sx={{ fontSize: 18, marginRight: 1 }} />
      <Typography variant="body2" color="text.secondary">
        Tarih
      </Typography>
    </Box>
  }
/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          İlan Detayları
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      </CardActions>
    </Card>
  );
}