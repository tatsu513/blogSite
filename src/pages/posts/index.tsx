import { MenuItem, List, Typography, Grid } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import PostCard from 'components/PostCard';
import { PostsPageData } from 'dao/generated/graphql';
import postsPageResolver from 'resolvers/postsPageResolver';
import { shadow } from 'shadow';

type Props = {
  postsData: PostsPageData;
};

const menuItemStyle = {
  padding: 0,
};

const Index: NextPage<Props> = ({ postsData }) => {
  const { categories, postsWidthCategoryId } = postsData;
  return (
    <>
      <Grid container justifyContent='flex-start' spacing={5}>
        {postsWidthCategoryId.map((data) =>
          data.posts.map((post) => (
            <Grid item sm={12} md={6} lg={3} key={post.id}>
              <Link href={`/posts/${post.id}`} passHref>
                <PostCard
                  mediaUrl={post.mediaItemUrl}
                  category={post.category.name}
                  date={post.date}
                  id={post.id}
                  title={post.title}
                />
              </Link>
            </Grid>
          )),
        )}
      </Grid>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { categories, postsWidthCategoryId } = await postsPageResolver();
  return {
    props: {
      postsData: { categories, postsWidthCategoryId },
    },
  };
};
