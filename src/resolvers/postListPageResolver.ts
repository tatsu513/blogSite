import createGraphqlClient from '../utils/createGraphqlClient';
import { ListPageResults } from 'dao/generated/graphql';
import { getSdk } from 'dao/generated/graphql';
import WordpressPostToPosts from 'logics/WordpressPostToPosts';
import getCategoriesByPosts from 'logics/getCategoriesByPosts';

export const postListPageResolver = async (): Promise<ListPageResults> => {
  const graphqlSdk = getSdk(createGraphqlClient());
  const response = await graphqlSdk.homePage();
  const posts = WordpressPostToPosts(response.posts.nodes);
  const categories = getCategoriesByPosts(posts);

  return { posts, categories };
};

export default postListPageResolver;
