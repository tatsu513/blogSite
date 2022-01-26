import fetchApi from './fetchApi';
import { GetPostsResponse, Post } from 'dao/generated/graphql';
import GraphqlPostsToFrontendPosts from 'logics/GraphqlPostsToFrontendPosts';

const query = `{
  posts {
    nodes {
      id
      title
      content
      date
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`;

const getPosts = async (): Promise<Post[]> => {
  const data: GetPostsResponse = await fetchApi(query);
  const posts = data.posts.nodes;
  const result = posts.map((post) => GraphqlPostsToFrontendPosts(post));
  return result;
};

export default getPosts;
