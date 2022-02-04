import { Box, TextField, Typography } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import { gray } from 'color';
import ListFilteredPosts from 'components/posts/ListFilteredPosts';
import { ListPageResults } from 'dao/generated/graphql';
import getPostListByCategoryId from 'logics/getPostListByCategoryId';
import postListPageResolver from 'resolvers/postListPageResolver';

type Props = {
  data: ListPageResults;
  initialCategoryId: number;
};
const TextFieldStyle = {
  fontSize: '12px',
  '&::placeholder': {
    fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
    fontSize: '12px',
  },
};

const Index: NextPage<Props> = ({ data, initialCategoryId }) => {
  const { posts, categories } = data;
  console.log({ initialCategoryId });
  const [selectedTabKey, setSelectedTabKey] = useState(initialCategoryId);
  const [filteredPosts, setFilteringPosts] = useState(
    getPostListByCategoryId(posts, selectedTabKey),
  );

  const handleChangeSelectedTab = useCallback(
    (_event: SyntheticEvent, tabKey: number) => {
      setSelectedTabKey(tabKey);
      setFilteringPosts(getPostListByCategoryId(posts, tabKey));
    },
    [posts, setFilteringPosts],
  );

  return (
    <>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant='section'>{'Posts'}</Typography>
        <TextField
          sx={{ ...TextFieldStyle }}
          label='Search Title'
          variant='outlined'
          size='small'
          InputLabelProps={{
            sx: {
              color: gray[200],
              fontWeight: 300,
            },
          }}
          InputProps={{
            style: {
              padding: 0,
            },
          }}
        />
      </Box>
      <ListFilteredPosts
        categories={categories}
        hasAll={true}
        selectedTabKey={selectedTabKey}
        posts={filteredPosts}
        onChange={handleChangeSelectedTab}
      />
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const initialCategoryId = ctx.query.category ? Number(ctx.query.category) : 0;
  const results = await postListPageResolver();
  return {
    props: {
      data: results,
      initialCategoryId,
    },
  };
};
