import { Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import { gray, green, white } from 'color';
import { Category } from 'dao/generated/graphql';

type PostsCategorySelectorProps = {
  categories: Category[];
  tabKey: string;
  onChange: (_e: SyntheticEvent, _selectedKey: string) => void;
};

const tabStyles = {
  height: '48px',
  width: '136px',
  marginRight: '2px',
  lineHeight: '48px,',
};

const PostsCategorySelector: React.VFC<PostsCategorySelectorProps> = ({
  categories,
  tabKey,
  onChange,
}) => {
  const selectedStyle = (key: string) => {
    const isSelected = key === tabKey;
    return {
      backgroundColor: isSelected ? green[200] : gray[100],
      '&.MuiTab-root': {
        color: isSelected ? white : gray[300],
      },
    };
  };
  return (
    <Tabs
      value={tabKey}
      sx={{ marginBottom: '56px' }}
      onChange={onChange}
      centered={true}
      TabIndicatorProps={{
        style: {
          display: 'none',
        },
      }}
    >
      {categories.map((category) => (
        <Tab
          key={category.id}
          sx={{ ...tabStyles, ...selectedStyle(category.id) }}
          value={category.id}
          label={category.name}
        />
      ))}
    </Tabs>
  );
};

export default PostsCategorySelector;
