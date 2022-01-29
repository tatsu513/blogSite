import { Post, PostsPageResponse } from 'dao/generated/graphql';
import GraphqlPostsToFrontendPosts from 'logics/GraphqlPostsToFrontendPosts';
import fetchApi from 'utils/fetchApi';

const postsPageResolver = async (): Promise<Post[]> => {
  const query = `{
    posts {
      nodes {
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
        content
        id
        title
      }
    }
  }`;
  const result: PostsPageResponse = await fetchApi(query);
  return GraphqlPostsToFrontendPosts(result);
};

export default postsPageResolver;
