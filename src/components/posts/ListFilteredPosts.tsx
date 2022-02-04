import React, { SyntheticEvent } from 'react';
import ListPost from './ListPost';
import PostListCategorySelector from './PostListCategorySelector';
import { Category, PostForList } from 'dao/generated/graphql';

type ListFilteredPostsProps = {
  categories: Category[];
  selectedTabKey: number;
  posts: PostForList[];
  onChange: (_e: SyntheticEvent, tabKey: number) => void;
};

const ListFilteredPosts: React.VFC<ListFilteredPostsProps> = ({
  categories,
  selectedTabKey,
  posts,
  onChange,
}) => {
  return (
    <>
      <PostListCategorySelector
        categories={categories}
        tabKey={selectedTabKey}
        onChange={onChange}
      />
      <ListPost posts={posts} />
    </>
  );
};

export default ListFilteredPosts;
