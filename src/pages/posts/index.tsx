import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import ListPost from 'components/posts/ListPost';
import { ListPageResults } from 'dao/generated/graphql';
import postListPageResolver from 'resolvers/postListPageResolver';

type Props = {
  data: ListPageResults;
};

const Index: NextPage<Props> = ({ data }) => {
  return <ListPost posts={data.posts} />;
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const results = await postListPageResolver();
  return {
    props: {
      data: results,
    },
  };
};
