import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/logo.svg';
import { white } from 'color';

const headerBoxStyle = {
  height: '240px',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'center',
};
const contentBoxStyle = {
  position: 'absolute',
  top: '50%',
  right: '0px',
  bottom: '0px',
  left: '0px',
  transform: 'translateY(-50%)',
  color: white,
};
const headerTitleStyle = {
  marginTop: '20px',
  color: white,
  fontSize: '12px',
  fontWeight: 300,
  lineHeight: '1.8',
};

const Header = () => {
  return (
    <Box sx={{ ...headerBoxStyle }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Image
          src='/top_image.png'
          alt='トップ画像'
          objectFit='cover'
          layout='fill'
        />
      </Box>
      <Box sx={{ ...contentBoxStyle }}>
        <Link href='/' passHref>
          <Box component='a'>
            <Logo />
          </Box>
        </Link>
        <Typography sx={{ ...headerTitleStyle }}>
          “50歳からを人生で一番楽しく”
          <br />
          そんな夢を持つ一般人の日々の書き物
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
