import { Search } from '@mui/icons-material/';
import { Box, TextField, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import { gray } from 'color';
import ListFilteredPosts from 'components/posts/ListFilteredPosts';
import { ListPageResults } from 'dao/generated/graphql';
import getPostListByCategoryId from 'logics/getPostListByCategoryId';
import getSearchedPosts from 'logics/getSearchedPosts';
import postListPageResolver from 'resolvers/postListPageResolver';

type Props = {
  data: ListPageResults;
  initialCategoryId: number;
};
const TextFieldStyle = {
  width: 'calc(100% - 44px)',
  fontSize: '12px',
  '&::placeholder': {
    fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
    fontSize: '12px',
  },
};

const Index: NextPage<Props> = ({ data, initialCategoryId }) => {
  const { posts, categories } = data;
  const [searchValue, setSearchValue] = useState('');
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
  const handleSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue],
  );
  const searchPosts = useCallback(() => {
    setFilteringPosts(getSearchedPosts(filteredPosts, searchValue));
  }, [filteredPosts, searchValue]);

  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='start'>
        <Typography variant='section'>{'Posts'}</Typography>
        <Box
          sx={{
            width: '100%',
            maxWidth: '320px',
          }}
          display='flex'
          alignItems='center'
          justifyContent='end'
        >
          <TextField
            sx={{ ...TextFieldStyle }}
            value={searchValue}
            label='タイトルを検索'
            variant='outlined'
            size='small'
            onChange={handleSearchInput}
            InputLabelProps={{
              sx: {
                color: gray[200],
                fontWeight: 300,
                fontSize: '14px',
              },
            }}
            InputProps={{
              style: {
                padding: 0,
                fontWeight: 300,
                fontSize: '14px',
              },
            }}
          />
          <IconButton
            aria-label='search'
            sx={{ marginLeft: '4px' }}
            onClick={searchPosts}
          >
            <Search />
          </IconButton>
        </Box>
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
