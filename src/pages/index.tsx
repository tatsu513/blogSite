import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
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
    <div className={styles.container}>
      <Head>
        <title>after50</title>
        <meta
          name='description'
          content='『50歳以降の人生をより豊かに』にコンセプトにした個人ブログ。'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box sx={{ ...containerStyle }}>
        <span>おおお</span>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default Home;
