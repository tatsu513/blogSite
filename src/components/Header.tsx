import { Box, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const headerBoxStyle = {
  height: '240px',
  width: '100%',
  overflow: 'hidden',
  backgroundImage: 'url("/top_header.jpeg")',
  textAlign: 'center',
};
const headerTitleStyle = {
  lineHeight: '240px',
};

const Header = () => {
  return (
    <Box sx={{ ...headerBoxStyle }}>
      <Typography sx={{ ...headerTitleStyle }}>after50</Typography>
    </Box>
  );
};

export default Header;
