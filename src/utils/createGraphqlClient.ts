import { GraphQLClient } from 'graphql-request';

const createGraphqlClient = () => {
  console.info({ v: String(process.env.NEXT_PUBLIC_WP_GQL) });
  return new GraphQLClient(String(process.env.NEXT_PUBLIC_WP_GQL));
};

export default createGraphqlClient;
