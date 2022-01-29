import { MenuItem, List, Typography } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import PostCard from 'components/PostCard';
import { Post } from 'dao/generated/graphql';
import postsResolver from 'resolvers/postsResolver';
import { shadow } from 'shodow';

type Props = {
  posts: Post[];
};

const listStyle = {
  display: 'flex',
  padding: 0,
};
const menuItemStyle = {
  margin: '0 40px 0 0',
  padding: 0,
  transition: 'all 400ms ease',
  '&:hover': {
    boxShadow: shadow['hover'],
  },
  '&:nth-child(4n)': {
    marginRight: 0,
  },
};

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <List sx={{ ...listStyle }}>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id} passHref>
            <MenuItem sx={{ ...menuItemStyle }}>
              <PostCard
                mediaUrl={post.mediaItemUrl}
                category={post.category}
                date={post.date}
                id={post.id}
                title={post.title}
              />
            </MenuItem>
          </Link>
        ))}
        {[...Array(3)].map((a, i) => (
          <MenuItem sx={{ ...menuItemStyle }} key={i}>
            <PostCard
              mediaUrl={
                'https://tatsu513.com/wp-content/uploads/2021/05/067AME0226_TP_V.jpg'
              }
              category={'Money'}
              date={'2022-01-16T22:44:39'}
              id={'123'}
              title={
                '１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０'
              }
            />
          </MenuItem>
        ))}
      </List>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await postsResolver();
  return { props: { posts } };
};
