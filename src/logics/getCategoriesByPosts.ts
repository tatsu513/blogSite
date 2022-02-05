import { Category, PostForList } from 'dao/generated/graphql';

const getCategoriesByPosts = (posts: PostForList[]): Category[] => {
  const categories = posts.flatMap((p) => p.categories);
  return categories.filter(
    (c, i, self) => self.findIndex((s) => s.categoryId === c.categoryId) === i,
  );
};

export default getCategoriesByPosts;
