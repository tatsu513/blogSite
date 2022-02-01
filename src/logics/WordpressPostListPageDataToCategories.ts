import { Category, PostListPageResponse } from 'dao/generated/graphql';

const WordpressPostListPageDataToCategories = (
  res: PostListPageResponse,
): Category[] => {
  return res.categories.nodes.map((category) => {
    return {
      id: category.categoryId,
      name: category.name,
    };
  });
};

export default WordpressPostListPageDataToCategories;
