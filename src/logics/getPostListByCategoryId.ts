import { PostForList } from 'dao/generated/graphql';

const getPostListByCategoryId = (
  posts: PostForList[],
  categoryId: number,
): PostForList[] => {
  return posts.filter((p) => p.category.categoryId === categoryId);
};

export default getPostListByCategoryId;
