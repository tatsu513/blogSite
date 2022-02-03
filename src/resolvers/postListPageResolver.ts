import WordpressPostListPageDataToCategories from 'logics/WordpressPostListPageDataToCategories';
import WordpressPostListToFrontendPostList from 'logics/WordpressPostListToFrontendPostList';
import { PostListPageData, PostListPageResponse } from 'dao/generated/graphql';
import fetchApi from 'utils/fetchApi';

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
