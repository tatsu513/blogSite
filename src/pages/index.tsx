import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import useGetPosts from 'hooks/useGetPosts';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
};

const Home: NextPage = () => {
  const { data, error } = useGetPosts();
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
      <Box sx={{ ...containerStyle }}>トップ</Box>
    </div>
  );
};

export default Home;
