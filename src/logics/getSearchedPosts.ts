import { PostForList } from 'dao/generated/graphql';

const getSearchedPosts = (
  posts: PostForList[],
  value: string,
): PostForList[] => {
  const result = posts.flatMap((post) => {
    return post.title.indexOf(value) === -1 ? [] : post;
  });
  return result;
};

export default getSearchedPosts;
