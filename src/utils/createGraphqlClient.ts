import { GraphQLClient } from 'graphql-request';

const createGraphqlClient = () => {
  return new GraphQLClient(String(process.env.NEXT_PUBLIC_WP_GQL));
};

export default createGraphqlClient;
