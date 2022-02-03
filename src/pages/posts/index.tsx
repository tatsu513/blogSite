import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import ListPost from 'components/posts/ListPost';
import { PostListPageData } from 'dao/generated/graphql';
import getPostListByCategoryId from 'logics/getPostListByCategoryId';
import postListPageResolver from 'resolvers/postListPageResolver';

type Props = {
  postsData: PostListPageData;
};

const Index: NextPage<Props> = ({ postsData }) => {
  const { postListWidthCategoryId } = postsData;
  const showPostList = getPostListByCategoryId(postListWidthCategoryId, 'all');

  return (
    <>
      <ListPost posts={showPostList} />
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
