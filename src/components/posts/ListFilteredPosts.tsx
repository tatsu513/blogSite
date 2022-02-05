import React, { SyntheticEvent } from 'react';
import ListPost from './ListPost';
import PostListCategorySelector from './PostListCategorySelector';
import { Category, PostForList } from 'dao/generated/graphql';

type ListFilteredPostsProps = {
  categories: Category[];
  hasAll?: boolean;
  selectedTabKey: number;
  posts: PostForList[];
  onChange: (_e: SyntheticEvent, tabKey: number) => void;
};

const ListFilteredPosts: React.VFC<ListFilteredPostsProps> = ({
  categories,
  hasAll,
  selectedTabKey,
  posts,
  onChange,
}) => {
  return (
    <>
      <PostListCategorySelector
        categories={categories}
        hasAll={hasAll}
        tabKey={selectedTabKey}
        onChange={onChange}
      />
      <ListPost posts={posts} />
    </>
  );
};

export default ListFilteredPosts;
