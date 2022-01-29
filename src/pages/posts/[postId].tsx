import { Box, Typography } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Post } from 'dao/generated/graphql';
import postPageResolver from 'resolvers/postPageResolver';

type Props = {
  post: Post;
};

const containerStyle = {
  margin: '0 auto',
  width: '800px',
};

const Index: NextPage<Props> = ({ post }) => {
  return (
    <Box sx={{ ...containerStyle }}>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant='caption'>{post.category}</Typography>
        <Typography variant='caption'>{post.date}</Typography>
      </Box>
      {/* <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <Image
        src={post.featuredImage.node.mediaItemUrl}
        alt='アイキャッチ画像'
        layout='fill'
        objectFit='contain'
      />
      </div> */}
      {/* <div>{post.date}</div>
      <div>個別ページ: {post.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
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
