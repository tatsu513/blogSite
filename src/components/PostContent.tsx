import { Box } from '@mui/material';
import React from 'react';

type PostContentProps = {
  content: string;
};

const PostContent: React.VFC<PostContentProps> = ({ content }) => {
  return (
    <Box
      className='postContainer'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostContent;
