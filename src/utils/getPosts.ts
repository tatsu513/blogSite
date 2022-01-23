import fetchApi from './fetchApi';
import GraphqlPostsToFrontendPosts from 'logics/GraphqlPostsToFrontendPosts';

const query = `{
  posts {
    nodes {
      id
      title
      content
      date
    }
  }
}`;

const getPosts = async () => {
  const data = await fetchApi(query);
  return GraphqlPostsToFrontendPosts(data);
};

export default getPosts;
