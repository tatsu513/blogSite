import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Post } from 'dao/generated/graphql';
import getPosts from 'utils/getPosts';

type Props = {
  posts: Post[];
};

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>{post.title}</div>
            <div>{post.date}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  console.log(posts);
  return { props: { posts } };
};
