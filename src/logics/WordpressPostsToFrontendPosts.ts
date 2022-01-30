import WordpressDateToString from './converters.ts/WordpressDateToString';
import { Posts, PostsPageResponse } from 'dao/generated/graphql';

const WordpressPostsToFrontendPosts = (res: PostsPageResponse): Posts[] => {
  const postsWithCategoryId = res.categories.nodes.flatMap((cn) => {
    return cn.posts.nodes.map((pn) => {
      return {
        categoryId: cn.categoryId,
        posts: {
          id: pn.id,
          title: pn.title,
          date: WordpressDateToString(pn.date),
          mediaItemUrl: pn.featuredImage?.node.mediaItemUrl ?? '',
          category: pn.categories?.nodes[0] ?? { id: '', name: '' },
        },
      };
    });
  });
  console.log({ aaa: postsWithCategoryId[0].posts });
  const posts = res.categories.nodes
    .flatMap((node) => node.posts.nodes)
    .map((post) => {
      return {
        id: post.id,
        title: post.title,
        date: WordpressDateToString(post.date),
        mediaItemUrl: post.featuredImage?.node.mediaItemUrl ?? '',
        category: post.categories?.nodes[0] ?? { id: '', name: '' },
      };
    });
  return posts;
};

export default WordpressPostsToFrontendPosts;
