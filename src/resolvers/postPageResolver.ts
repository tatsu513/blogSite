import { getSdk, Post } from 'dao/generated/graphql';
import WordpressPostToPosts from 'logics/WordpressPostToPosts';
import createGraphqlClient from 'utils/createGraphqlClient';

const postPageResolver = async (id: string): Promise<Post> => {
  const variables = { id };
  const graphqlSdk = getSdk(createGraphqlClient());
  const response = await graphqlSdk.postPage(variables);
  return WordpressPostToPosts(response.post);
};

export default postPageResolver;
