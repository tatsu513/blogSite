import { GraphQLClient } from 'graphql-request';

const createGraphqlClient = () => {
  return new GraphQLClient(String(process.env.WP_GQL));
};

export default createGraphqlClient;
