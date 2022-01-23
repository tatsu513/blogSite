import fetchApi from './fetchApi';
import { GetPostResponse, Post } from 'dao/generated/graphql';

const query = `{
  post(id: "cG9zdDoxMDU=") {
    id
    date
    content
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`;

const getPost = async (id: string): Promise<GetPostResponse> => {
  const variables = { id };
  const data = await fetchApi(query, { variables });
  return data;
};

export default getPost;
