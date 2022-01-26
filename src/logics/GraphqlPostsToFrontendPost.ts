import { GetPostResponse, GetPostsResponse } from 'dao/generated/graphql';

const GraphqlPostsToFrontendPost = (graphqlPosts: GetPostResponse) => {
  const post = graphqlPosts.posts.nodes;
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    date: post.date,
  };
};

export default GraphqlPostsToFrontendPost;
