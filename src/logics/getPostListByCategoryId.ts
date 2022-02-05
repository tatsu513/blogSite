import { PostForList } from 'dao/generated/graphql';

const getPostListByCategoryId = (
  posts: PostForList[],
  categoryId: number,
): PostForList[] => {
  if (categoryId === 0) return posts;
  const categoryIds = posts.flatMap((p) =>
    p.categories.map((c) => c.categoryId),
  );
  return posts.flatMap((p) => {
    const isInclude = categoryIds.includes(categoryId);
    return isInclude ? p : [];
  });
};

export default getPostListByCategoryId;
