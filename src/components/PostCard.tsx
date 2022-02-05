import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { shadow } from 'shadow';

type PostCardProps = {
  categoryNames: string[];
  date: string;
  id: string;
  mediaUrl: string;
  title: string;
};

const cardContainerStyle = {
  boxShadow: 'none',
  borderRadius: '0',
  cursor: 'pointer',
  transition: 'all 400ms ease',
  '&:hover': {
    boxShadow: shadow['hover'],
  },
};
const titleBoxStyle = {
  marginTop: '8px',
};
const titleStyle = {
  height: 'calc(24px * 3)',
  display: '-webkit-box',
  overflow: 'hidden',
  '-webkit-line-clamp': '3',
  '-webkit-box-orient': 'vertical',
};

const PostCard: React.VFC<PostCardProps> = ({
  categoryNames,
  date,
  id,
  mediaUrl,
  title,
}) => {
  return (
    <Link href={`/posts/${id}`} passHref>
      <Card sx={{ ...cardContainerStyle }}>
        <CardMedia
          component='img'
          height='200'
          image={mediaUrl}
          alt='アイキャッチ画像'
        />
        <CardContent>
          <Box display='flex' justifyContent='space-between'>
            <Box>
              {categoryNames.map((n, i) => (
                <Typography key={n} variant='caption'>
                  {n}
                  {i !== categoryNames.length - 1 && <> / </>}
                </Typography>
              ))}
            </Box>
            <Typography variant='caption'>{date}</Typography>
          </Box>
          <Box sx={{ ...titleBoxStyle }}>
            <Typography sx={{ ...titleStyle }}>{title}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;
