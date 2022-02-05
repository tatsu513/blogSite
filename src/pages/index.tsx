import { Box, Typography } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { SyntheticEvent, useCallback, useState } from 'react';
import OutlineButton from 'components/buttons/OutlineButton';
import ListFilteredPosts from 'components/posts/ListFilteredPosts';
import ListPost from 'components/posts/ListPost';
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
  const [selectedTabKey, setSelectedTabKey] = useState(
    categories[0].categoryId,
  );
  const [filteredPosts, setFilteringPosts] = useState(
    getPostListByCategoryId(posts, selectedTabKey),
  );

  const handleChangeSelectedTab = useCallback(
    (_event: SyntheticEvent, tabKey: number) => {
      setSelectedTabKey(tabKey);
      setFilteringPosts(getPostListByCategoryId(posts, tabKey));
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
          <Link href='/posts/' passHref>
            <OutlineButton text='MORE' />
          </Link>
        </Box>
        <Box mt={10} />
        <Typography variant='section'>{'Categories'}</Typography>
        <ListFilteredPosts
          categories={categories}
          selectedTabKey={selectedTabKey}
          posts={filteredPosts}
          onChange={handleChangeSelectedTab}
        />
        <Box textAlign='center' mt={5}>
          <Link
            href={{
              pathname: '/posts/',
              query: { category: selectedTabKey },
            }}
            passHref
          >
            <OutlineButton text='MORE' />
          </Link>
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
