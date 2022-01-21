import { gql, request } from 'graphql-request';
import useSWR from 'swr';
import { GetPostsResponse } from 'dao/generated/graphql';
import GraphqlPostsToFrontendPosts from 'logics/GraphqlPostsToFrontendPosts';

const query = gql`
  query {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;

const useGetPosts = () => {
  const fetcher = () =>
    request(process.env.NEXT_PUBLIC_WP_GQL as string, query);
  const { data, error, mutate } = useSWR<GetPostsResponse>(query, fetcher);
  return {
    data: data ? GraphqlPostsToFrontendPosts(data) : [],
    error,
  };
};

export default useGetPosts;
