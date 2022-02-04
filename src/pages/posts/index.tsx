import { GetServerSideProps, NextPage } from 'next';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import ListFilteredPosts from 'components/posts/ListFilteredPosts';
import { ListPageResults } from 'dao/generated/graphql';
import getPostListByCategoryId from 'logics/getPostListByCategoryId';
import postListPageResolver from 'resolvers/postListPageResolver';

type Props = {
  data: ListPageResults;
};

const Index: NextPage<Props> = ({ data }) => {
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
    <ListFilteredPosts
      categories={categories}
      selectedTabKey={selectedTabKey}
      posts={filteredPosts}
      onChange={handleChangeSelectedTab}
    />
  );
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
