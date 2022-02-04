import { Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import { gray, green, white } from 'color';
import { Category } from 'dao/generated/graphql';

type PostListCategorySelectorProps = {
  categories: Category[];
  hasAll?: boolean;
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
  hasAll,
  tabKey,
  onChange,
}) => {
  const selectedStyle = (key: number) => {
    const isSelected = key === tabKey;
    return {
      backgroundColor: isSelected ? green[200] : gray[100],
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
      {hasAll && (
        <Tab
          key={0}
          sx={{ ...tabStyles, ...selectedStyle(0) }}
          value={0}
          label={'All'}
        />
      )}
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
