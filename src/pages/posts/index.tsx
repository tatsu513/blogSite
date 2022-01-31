import { Grid } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import PostCard from 'components/PostCard';
import PostsCategorySelector from 'components/posts/PostsCategorySelector';
import { PostsPageData } from 'dao/generated/graphql';
import postsPageResolver from 'resolvers/postsPageResolver';

type Props = {
  postsData: PostsPageData;
};

const Index: NextPage<Props> = ({ postsData }) => {
  const { categories, postsWidthCategoryId } = postsData;
  const [key, setKey] = useState(categories[0].id);

  const handleChangeTab = useCallback(
    (_event: SyntheticEvent, selectedKey: string) => {
      console.log({ selectedKey: selectedKey });
      setKey(selectedKey);
    },
    [],
  );

  return (
    <>
      <PostsCategorySelector
        categories={categories}
        tabKey={key}
        onChange={handleChangeTab}
      />
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
