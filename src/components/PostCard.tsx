import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

type PostCardProps = {
  category: string;
  date: string;
  id: string;
  mediaUrl: string;
  title: string;
};

const cardContainerStyle = {
  maxWidth: '306px',
  boxShadow: 'none',
  borderRadius: '0',
};
const titleBoxStyle = {
  marginTop: '8px',
};

const PostCard: React.VFC<PostCardProps> = ({
  category,
  date,
  id,
  mediaUrl,
  title,
}) => {
  return (
    <Card sx={{ ...cardContainerStyle }}>
      <CardMedia
        component='img'
        height='200'
        image={mediaUrl}
        alt='アイキャッチ画像'
      />
      <CardContent>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='caption'>{category}</Typography>
          <Typography variant='caption'>{date}</Typography>
        </Box>
        <Box sx={{ ...titleBoxStyle }}>
          <Typography>{title}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
