import WordpressDateToString from './converters.ts/WordpressDateToString';
import { Post, PostsPageResponse } from 'dao/generated/graphql';

const GraphqlPostsToFrontendPosts = (res: PostsPageResponse): Post[] => {
  const nodes = res.posts.nodes;
  return nodes.map((n) => ({
    id: n.id,
    title: n.title,
    content: n.content,
    date: WordpressDateToString(n.date),
    category: n.categories?.nodes[0].name ?? '',
    mediaItemUrl: n.featuredImage?.node.mediaItemUrl,
  }));
};

export default GraphqlPostsToFrontendPosts;
