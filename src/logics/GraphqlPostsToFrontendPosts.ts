import { GetPostsResponse } from 'dao/generated/graphql';

const GraphqlPostsToFrontendPosts = (graphqlPosts: GetPostsResponse) => {
  const posts = graphqlPosts.posts.nodes.map((post) => {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      date: post.date,
    };
  });
  return posts;
};

export default GraphqlPostsToFrontendPosts;
