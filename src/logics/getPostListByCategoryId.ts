import { PostWithCategoryId, PostList } from 'dao/generated/graphql';

const getPostListByCategoryId = (
  postList: PostWithCategoryId[],
  categoryId: string,
): PostList[] => {
  if (categoryId === 'all') return postList.flatMap((p) => p.postList);
  return postList.filter((p) => p.categoryId === categoryId)[0].postList ?? [];
};

export default getPostListByCategoryId;
