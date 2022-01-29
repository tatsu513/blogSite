import { Category, PostsPageResponse } from 'dao/generated/graphql';

const WordpressPostsPageDataToCategories = (
  res: PostsPageResponse,
): Category[] => {
  return res.categories.nodes.map((category) => {
    return {
      id: category.categoryId,
      name: category.name,
    };
  });
};

export default WordpressPostsPageDataToCategories;
