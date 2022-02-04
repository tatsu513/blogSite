import { GetServerSideProps, NextPage } from 'next';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import ListFilteredPosts from 'components/posts/ListFilteredPosts';
import { ListPageResults } from 'dao/generated/graphql';
import getPostListByCategoryId from 'logics/getPostListByCategoryId';
import postListPageResolver from 'resolvers/postListPageResolver';

type Props = {
  data: ListPageResults;
  initialCategoryId: number;
};

const Index: NextPage<Props> = ({ data, initialCategoryId }) => {
  const { posts, categories } = data;
  console.log({ initialCategoryId });
  const [selectedTabKey, setSelectedTabKey] = useState(initialCategoryId);
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
    <ListFilteredPosts
      categories={categories}
      hasAll={true}
      selectedTabKey={selectedTabKey}
      posts={filteredPosts}
      onChange={handleChangeSelectedTab}
    />
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const initialCategoryId = ctx.query.category ? Number(ctx.query.category) : 0;
  const results = await postListPageResolver();
  return {
    props: {
      data: results,
      initialCategoryId,
    },
  };
};
