import { Box, Typography } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { SyntheticEvent, useCallback, useState } from 'react';
import ListPost from 'components/posts/ListPost';
import PostListCategorySelector from 'components/posts/PostListCategorySelector';
import { PostListPageData } from 'dao/generated/graphql';
import getPostListByCategoryId from 'logics/getPostListByCategoryId';
import postListPageResolver, {
  getRecipeResolver,
} from 'resolvers/postListPageResolver';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
};

type Props = {
  postsData: PostListPageData;
};

const Home: NextPage<Props> = ({ postsData }) => {
  const { categories, postListWidthCategoryId } = postsData;
  const [key, setKey] = useState('all');
  const allPosts = getPostListByCategoryId(postListWidthCategoryId, 'all');
  const [filteringPosts, setFilteringPosts] = useState(
    getPostListByCategoryId(postListWidthCategoryId, key),
  );

  const handleChangeTab = useCallback(
    (_event: SyntheticEvent, key: string) => {
      setKey(key);
      setFilteringPosts(getPostListByCategoryId(postListWidthCategoryId, key));
    },
    [postListWidthCategoryId, setFilteringPosts],
  );
  return (
    <div>
      <Head>
        <title>after50</title>
        <meta
          name='description'
          content='『50歳以降の人生をより豊かに』にコンセプトにした個人ブログ。'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box sx={{ ...containerStyle }}>
        <Typography variant='section'>{'New Post'}</Typography>
        <ListPost posts={allPosts} />
        <Box mt={5} />
        <Typography variant='section'>{'Categories'}</Typography>
        <PostListCategorySelector
          categories={categories}
          tabKey={key}
          onChange={handleChangeTab}
        />
        <ListPost posts={filteringPosts} />
      </Box>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await getRecipeResolver();
  console.log(res);
  const { categories, postListWidthCategoryId } = await postListPageResolver();
  return {
    props: {
      postsData: { categories, postListWidthCategoryId },
    },
  };
};
