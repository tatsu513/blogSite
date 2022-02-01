import { PostWithCategoryId, Posts } from 'dao/generated/graphql';

const getPostsByCategoryId = (
  posts: PostWithCategoryId[],
  categoryId: string,
): Posts[] => {
  if (categoryId === 'all') return posts.flatMap((post) => post.posts);
  return (
    posts.filter((posts) => posts.categoryId === categoryId)[0].posts ?? []
  );
};

export default getPostsByCategoryId;
