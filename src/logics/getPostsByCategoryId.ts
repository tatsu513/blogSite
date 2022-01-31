import { PostWithCategoryId } from 'dao/generated/graphql';

const getPostsByCategoryId = (
  posts: PostWithCategoryId[],
  categoryId: string,
) => {
  return posts.filter((posts) => posts.categoryId === categoryId)[0] ?? [];
};

export default getPostsByCategoryId;
