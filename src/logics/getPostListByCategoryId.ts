import { PostForList } from 'dao/generated/graphql';

const getPostListByCategoryId = (
  posts: PostForList[],
  categoryId: number,
): PostForList[] => {
  if (categoryId === 0) return posts;
  const results = posts.flatMap((p) => {
    const ids = p.categories.map((c) => c.categoryId);
    const hasId = ids.includes(categoryId);
    return hasId ? p : [];
  });
  return results;
};

export default getPostListByCategoryId;
