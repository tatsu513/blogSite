import { Box, Typography } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { SyntheticEvent, useCallback, useState } from 'react';
import PrimaryButton from 'components/buttons/PrimaryButton';
import ListPost from 'components/posts/ListPost';
import PostListCategorySelector from 'components/posts/PostListCategorySelector';
import { ListPageResults } from 'dao/generated/graphql';
import getPostListByCategoryId from 'logics/getPostListByCategoryId';
import postListPageResolver from 'resolvers/postListPageResolver';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
};

type Props = {
  data: ListPageResults;
};

const Home: NextPage<Props> = ({ data }) => {
  const { posts, categories } = data;
  const [key, setKey] = useState(categories[0].categoryId);
  const [filteredPosts, setFilteringPosts] = useState(
    getPostListByCategoryId(posts, key),
  );

  const handleChangeTab = useCallback(
    (_event: SyntheticEvent, key: string) => {
      setKey(key);
      setFilteringPosts(getPostListByCategoryId(posts, key));
    },
    [posts, setFilteringPosts],
  );
  return (
    <div>
      <Head>
        <title>over50</title>
        <meta
          name='description'
          content='“50歳からを人生で一番楽しく” そんな夢を持つ一般人の日々の書き物。'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box sx={{ ...containerStyle }}>
        <Typography variant='section'>{'New Post'}</Typography>
        <ListPost posts={posts} />
        <Box textAlign='center' mt={5}>
          <PrimaryButton text='MORE' onClick={() => alert('onClick')} />
        </Box>
        <Box mt={10} />
        <Typography variant='section'>{'Categories'}</Typography>
        <PostListCategorySelector
          categories={categories}
          tabKey={key}
          onChange={handleChangeTab}
        />
        <ListPost posts={filteredPosts} />
        <Box textAlign='center' mt={5}>
          <PrimaryButton text='MORE' onClick={() => alert('onClick')} />
        </Box>
      </Box>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const results = await postListPageResolver();
  return {
    props: {
      data: results,
    },
  };
};
