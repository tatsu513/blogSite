import WordpressDateToString from './converters.ts/WordpressDateToString';
import { Post, WordpressPost } from 'dao/generated/graphql';

const WordpressPostToPosts = (wp: WordpressPost): Post => {
  const sampleImg =
    'https://placehold.jp/3d4070/ffffff/800x800.png?text=No%20Photo';
  return {
    id: wp.id,
    title: wp.title,
    content: wp.content,
    date: WordpressDateToString(wp.date),
    mediaItemUrl: wp.featuredImage?.node.mediaItemUrl ?? sampleImg,
    category: wp.categories.nodes[0]?.name ?? '',
  };
};

export default WordpressPostToPosts;
