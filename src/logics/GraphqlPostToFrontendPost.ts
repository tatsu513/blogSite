import WordpressDateToString from './converters.ts/WordpressDateToString';
import { Post, PostPageResponse } from 'dao/generated/graphql';

const GraphqlPostToFrontendPost = (res: PostPageResponse): Post => {
  return {
    id: res.post.id,
    title: res.post.title,
    content: res.post.content,
    date: WordpressDateToString(res.post.date),
    category: res.post.categories?.nodes[0].name ?? '',
    mediaItemUrl: res.post.featuredImage?.node.mediaItemUrl,
  };
};

export default GraphqlPostToFrontendPost;
