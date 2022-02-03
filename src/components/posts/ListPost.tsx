import { Grid } from '@mui/material';
import React from 'react';
import PostCard from 'components/PostCard';
import { PostForList } from 'dao/generated/graphql';

type Props = {
  posts: PostForList[];
  maxNum?: number;
};

const ListPost: React.VFC<Props> = ({ posts, maxNum }) => {
  const showPosts = maxNum ? posts.slice(0, maxNum) : posts;
  return (
    <Grid container justifyContent='flex-start' spacing={5}>
      {showPosts.map((p) => (
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
