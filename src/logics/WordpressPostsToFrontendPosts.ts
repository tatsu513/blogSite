import WordpressDateToString from './converters.ts/WordpressDateToString';
import { Posts, PostsPageResponse } from 'dao/generated/graphql';

const GraphqlPostsToFrontendPosts = (res: PostsPageResponse): Posts[] => {
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

export default GraphqlPostsToFrontendPosts;
