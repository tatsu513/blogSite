import { GotPost, Post } from 'dao/generated/graphql';

const GraphqlPostsToFrontendPosts = (post: GotPost): Post => {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    date: post.date,
    category: post.categories.nodes[0].name ?? '',
    mediaItemUrl: post.featuredImage.node.mediaItemUrl,
  };
};

export default GraphqlPostsToFrontendPosts;
