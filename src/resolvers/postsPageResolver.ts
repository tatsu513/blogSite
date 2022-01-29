import { PostsPageData, PostsPageResponse } from 'dao/generated/graphql';
import WordpressPostsPageDataToCategories from 'logics/WordpressPostsPageDataToCategories';
import WordpressPostsToFrontendPosts from 'logics/WordpressPostsToFrontendPosts';
import fetchApi from 'utils/fetchApi';

const postsPageResolver = async (): Promise<PostsPageData> => {
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
  const result: PostsPageResponse = await fetchApi(query);
  const categories = WordpressPostsPageDataToCategories(result);
  const posts = WordpressPostsToFrontendPosts(result);

  return { categories, posts };
};

export default postsPageResolver;
