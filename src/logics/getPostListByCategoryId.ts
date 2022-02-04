import { PostForList } from 'dao/generated/graphql';

const getPostListByCategoryId = (
  posts: PostForList[],
  categoryId: number,
): PostForList[] => {
  if (categoryId === 0) return posts;
  return posts.filter((p) => p.category.categoryId === categoryId);
};

export default getPostListByCategoryId;
