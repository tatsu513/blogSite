import { Grid } from '@mui/material';
import React from 'react';
import PostCard from 'components/PostCard';
import { PostList } from 'dao/generated/graphql';

type Props = {
  posts: PostList[];
};

const ListPost: React.VFC<Props> = ({ posts }) => {
  return (
    <Grid container justifyContent='flex-start' spacing={5}>
      {posts.map((p) => (
        <Grid item sm={12} md={6} lg={3} key={p.id}>
          <PostCard
            mediaUrl={p.mediaItemUrl}
            category={p.category.name}
            date={p.date}
            id={p.id}
            title={p.title}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPost;
