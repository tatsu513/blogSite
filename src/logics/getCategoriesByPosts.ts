import { Category, PostForList } from 'dao/generated/graphql';

const getCategoriesByPosts = (posts: PostForList[]): Category[] => {
  const categories = posts.map((p) => {
    return {
      categoryId: p.category.categoryId,
      name: p.category.name,
    };
  });

  return categories.filter(
    (c, i, self) => self.findIndex((s) => s.categoryId === c.categoryId) === i,
  );
};

export default getCategoriesByPosts;
