import { MenuItem, List, Typography } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import PostCard from 'components/PostCard';
import { Post } from 'dao/generated/graphql';
import getPosts from 'utils/getPosts';

type Props = {
  posts: Post[];
};

const listStyle = {
  display: 'flex',
  padding: 0,
};
const menuItemStyle = {
  padding: '0 40px 0 0',
  '&:nth-child(4n)': {
    paddingRight: 0,
  },
};

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <List sx={{ ...listStyle }}>
        {posts.map((post) => (
          <MenuItem sx={{ ...menuItemStyle }} key={post.id}>
            <PostCard
              mediaUrl={post.mediaItemUrl}
              category={post.category}
              date={post.date}
              id={post.id}
              title={post.title}
            />
          </MenuItem>
        ))}
        <MenuItem sx={{ ...menuItemStyle }}>
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
        <MenuItem sx={{ ...menuItemStyle }}>
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
        <MenuItem sx={{ ...menuItemStyle }}>
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
      </List>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
