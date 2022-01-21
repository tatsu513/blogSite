import { GetPostsResponse } from 'dao/generated/graphql';

const GraphqlPostsToFrontendPosts = (graphqlPosts: GetPostsResponse) => {
  const posts = graphqlPosts.posts.nodes.map((post) => {
    return {
      id: post.id,
      title: post.title,
      conetnt: post.content,
    };
  });
  return posts;
};

export default GraphqlPostsToFrontendPosts;
