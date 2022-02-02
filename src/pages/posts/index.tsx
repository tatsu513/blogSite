import { Grid } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import PostCard from 'components/PostCard';
import PostListCategorySelector from 'components/posts/PostListCategorySelector';
import { PostListPageData } from 'dao/generated/graphql';
import getPostListByCategoryId from 'logics/getPostListByCategoryId';
import postListPageResolver from 'resolvers/postListPageResolver';

type Props = {
  postsData: PostListPageData;
};

const Index: NextPage<Props> = ({ postsData }) => {
  const { categories, postListWidthCategoryId } = postsData;
  const [key, setKey] = useState('all');
  const [showPostList, setShowPostList] = useState(
    getPostListByCategoryId(postListWidthCategoryId, key),
  );
  const handleChangeTab = useCallback(
    (_event: SyntheticEvent, selectedKey: string) => {
      setKey(selectedKey);
      setShowPostList(
        getPostListByCategoryId(postListWidthCategoryId, selectedKey),
      );
    },
    [postListWidthCategoryId],
  );

  return (
    <>
      <PostListCategorySelector
        categories={categories}
        tabKey={key}
        onChange={handleChangeTab}
      />
      <Grid container justifyContent='flex-start' spacing={5}>
        {showPostList.map((p) => (
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
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { categories, postListWidthCategoryId } = await postListPageResolver();
  return {
    props: {
      postsData: { categories, postListWidthCategoryId },
    },
  };
};
