import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Post } from 'dao/generated/graphql';
import getPost from 'utils/getPost';

type Props = {
  post: Post;
};

const Index: NextPage<Props> = ({ post }) => {
  return (
    <>
      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        <Image
          src={post.featuredImage.node.mediaItemUrl}
          alt='アイキャッチ画像'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div>{post.date}</div>
      <div>個別ページ: {post.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.query;
  const data = await getPost(postId as string);

  const props: Props = {
    post: data.post,
  };

  return { props };
};