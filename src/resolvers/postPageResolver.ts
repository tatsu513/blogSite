import { Post, PostPageResponse } from 'dao/generated/graphql';
import GraphqlPostsToFrontendPost from 'logics/GraphqlPostsToFrontendPost';
import fetchApi from 'utils/fetchApi';

const postPageResolver = async (id: string): Promise<Post> => {
  const query = `
    query MyQuery($id: ID!) {
      post(id: $id) {
        content
        id
        postId
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        date
        categories {
          nodes {
            name
          }
        }
      }
    }`;
  const variables = { id };
  const result: PostPageResponse = await fetchApi(query, { variables });
  return GraphqlPostsToFrontendPost(result);
};

export default postPageResolver;
