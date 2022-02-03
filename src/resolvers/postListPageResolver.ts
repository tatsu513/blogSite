import { GraphQLClient } from 'graphql-request';
import createGraphqlClient from '../utils/createGraphqlClient';
import { PostListPageData, PostListPageResponse } from 'dao/generated/graphql';
import { getSdk } from 'dao/generated/graphql';
import WordpressPostListPageDataToCategories from 'logics/WordpressPostListPageDataToCategories';
import WordpressPostListToFrontendPostList from 'logics/WordpressPostListToFrontendPostList';
import fetchApi from 'utils/fetchApi';

export const getRecipeResolver = async () => {
  const graphqlSdk = getSdk(createGraphqlClient());
  const response = await graphqlSdk.homePage();
  const posts = response.posts;
  const categories = getCategoriesByPosts(posts);

  return response.posts;
};

const postListPageResolver = async (): Promise<PostListPageData> => {
  const query = `{
    categories {
      nodes {
        categoryId
        name
        posts {
          nodes {
            id
            title
            date
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            categories {
              nodes {
                categoryId
                name
              }
            }
          }
        }
      }
    }
  }`;
  const result: PostListPageResponse = await fetchApi(query);
  const categories = WordpressPostListPageDataToCategories(result);
  const postListWidthCategoryId = WordpressPostListToFrontendPostList(result);

  return { categories, postListWidthCategoryId };
};

export default postListPageResolver;
