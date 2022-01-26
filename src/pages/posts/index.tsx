import { MenuItem, List, Typography } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Post } from 'dao/generated/graphql';
import getPosts from 'utils/getPosts';

type Props = {
  posts: Post[];
};

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <List>
        {posts.map((post) => (
          <MenuItem key={post.id}>
            <Typography>{post.title}</Typography>
            <Typography>{post.date}</Typography>
          </MenuItem>
        ))}
      </List>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
