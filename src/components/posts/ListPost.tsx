import { Grid } from '@mui/material';
import React, { useCallback } from 'react';
import PostCard from 'components/PostCard';
import { PostForList } from 'dao/generated/graphql';

type Props = {
  posts: PostForList[];
  maxNum?: number;
};

const ListPost: React.VFC<Props> = ({ posts, maxNum }) => {
  const showPosts = maxNum ? posts.slice(0, maxNum) : posts;
  const categoryNames = useCallback((post: PostForList) => {
    return post.categories.map((c) => c.name);
  }, []);

  posts.flatMap((p) => p.categories).map((c) => c.name);
  return (
    <Grid container justifyContent='flex-start' spacing={5}>
      {showPosts.map((p) => (
        <Grid item sm={12} md={6} lg={3} key={p.id}>
          <PostCard
            mediaUrl={p.mediaItemUrl}
            categoryNames={categoryNames(p)}
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
