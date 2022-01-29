import { Box, Typography } from '@mui/material';
import { width } from '@mui/system';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import PostContent from 'components/PostContent';
import { Post } from 'dao/generated/graphql';
import postPageResolver from 'resolvers/postPageResolver';

type Props = {
  post: Post;
};

const containerStyle = {
  margin: '0 auto',
  width: '800px',
};
const imageBoxStyle = {
  height: '470px',
  width: '100%',
  margin: '40px 0 54px',
  overflow: 'hidden',
  position: 'relative',
};
const titleStyle = {
  textAlign: 'justify',
};

const Index: NextPage<Props> = ({ post }) => {
  return (
    <Box sx={{ ...containerStyle }}>
      <Box
        display='flex'
        justifyContent='space-between'
        sx={{ marginBottom: '16px' }}
      >
        <Typography variant='caption'>{post.category}</Typography>
        <Typography variant='caption'>{post.date}</Typography>
      </Box>
      <Typography variant='h1' sx={{ ...titleStyle }}>
        {post.title}
      </Typography>
      <Box sx={{ ...imageBoxStyle }}>
        <Image
          src={post.mediaItemUrl}
          alt='アイキャッチ画像'
          layout='fill'
          objectFit='cover'
        />
      </Box>
      {/* HTMLに変換して表示 */}
      <PostContent content={post.content} />
    </Box>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { postId } = ctx.query;
  const post: Post = await postPageResolver(postId as string);
  return {
    props: { post },
  };
};
