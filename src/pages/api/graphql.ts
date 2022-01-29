import { ApolloServer } from 'apollo-server-micro';
import { resolvers } from '../../apollo/resolvers';
import { typeDefs } from '../../apollo/type-defs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer.createHandler({ path: '/api/graphql' });
