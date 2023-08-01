// LikeButton.js

import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <IconButton
      onClick={handleLike}
      color={liked ? 'secondary' : 'default'}
      aria-label="like button"
      style={{ color: liked ? 'red' : '' }} // Kırmızı rengi tıklanınca uygula
    >
      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default LikeButton;
