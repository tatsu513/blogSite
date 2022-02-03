import WordpressDateToString from './converters.ts/WordpressDateToString';
import { ListPost, PostForList } from 'dao/generated/graphql';

const WordpressPostToPosts = (posts: ListPost[]): PostForList[] => {
  const sampleImg =
    'https://placehold.jp/f0f0f0/ffffff/500x500.png?text=No%20Photo';
  const frontendPosts = posts.map((p) => {
    return {
      id: p.id,
      title: p.title,
      date: WordpressDateToString(p.date),
      mediaItemUrl: p.featuredImage?.node.mediaItemUrl ?? sampleImg,
      category: p.categories.nodes[0],
    };
  });
  return frontendPosts;
};

export default WordpressPostToPosts;
