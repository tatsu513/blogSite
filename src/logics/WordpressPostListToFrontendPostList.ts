import WordpressDateToString from './converters.ts/WordpressDateToString';
import {
  PostListPageResponse,
  PostWithCategoryId,
} from 'dao/generated/graphql';

const WordpressPostListToFrontendPostList = (
  res: PostListPageResponse,
): PostWithCategoryId[] => {
  const postListWithCategoryId = res.categories.nodes.flatMap((cn) => {
    const result: PostWithCategoryId = {
      categoryId: cn.categoryId,
      postList: [],
    };
    const sampleImg =
      'https://placehold.jp/f0f0f0/ffffff/500x500.png?text=No%20Photo';
    cn.posts.nodes.map((pn) => {
      result.postList.push({
        id: pn.id,
        title: pn.title,
        date: WordpressDateToString(pn.date),
        mediaItemUrl: pn.featuredImage?.node.mediaItemUrl ?? sampleImg,
        category: pn.categories?.nodes[0] ?? { id: '', name: '' },
      });
    });
    return result;
  });
  return postListWithCategoryId;
};

export default WordpressPostListToFrontendPostList;
