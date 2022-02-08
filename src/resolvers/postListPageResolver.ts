import createGraphqlClient from '../utils/createGraphqlClient';
import { ListPageResults } from 'dao/generated/graphql';
import { getSdk } from 'dao/generated/graphql';
import WordpressPostsToPosts from 'logics/WordpressPostsToPosts';
import getCategoriesByPosts from 'logics/getCategoriesByPosts';

export const postListPageResolver = async (): Promise<ListPageResults> => {
  const graphqlSdk = getSdk(createGraphqlClient());
  console.info({ graphqlSdk });
  const response = await graphqlSdk.homePage();
  console.info({ response });
  const posts = WordpressPostsToPosts(response.posts.nodes);
  console.info({ posts });
  const categories = getCategoriesByPosts(posts);
  console.info({ categories });

  return { posts, categories };
};

export default postListPageResolver;
