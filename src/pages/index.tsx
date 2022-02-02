import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
};

const Home: NextPage = () => {
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
      </Box>
    </div>
  );
};

export default Home;
