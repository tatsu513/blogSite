import { Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import { gray, orange, white } from 'color';
import { Category } from 'dao/generated/graphql';

type PostListCategorySelectorProps = {
  categories: Category[];
  tabKey: number;
  onChange: (_e: SyntheticEvent, tabKey: number) => void;
};
const tabsStyle = {
  marginBottom: '26px',
  minHeight: '36px',
  height: '36px',
};
const tabStyles = {
  height: '36px',
  minHeight: 'inherit',
  width: '120px',
  marginRight: '2px',
  padding: '0 16px',
  lineHeight: '36px,',
  fontFamily: 'Montserrat, Noto Sans JP, sans-serif',
  fontWeight: 300,
};

const PostListCategorySelector: React.VFC<PostListCategorySelectorProps> = ({
  categories,
  tabKey,
  onChange,
}) => {
  const selectedStyle = (key: number) => {
    const isSelected = key === tabKey;
    return {
      backgroundColor: isSelected ? orange[200] : gray[100],
      '&.MuiTab-root': {
        color: isSelected ? white : gray[300],
        position: 'relative',
      },
    };
  };
  return (
    <Tabs
      value={tabKey}
      sx={{ ...tabsStyle }}
      onChange={onChange}
      TabIndicatorProps={{
        style: {
          display: 'none',
        },
      }}
    >
      {categories.map((category) => (
        <Tab
          key={category.categoryId}
          sx={{ ...tabStyles, ...selectedStyle(category.categoryId) }}
          value={category.categoryId}
          label={category.name}
        />
      ))}
    </Tabs>
  );
};

export default PostListCategorySelector;
