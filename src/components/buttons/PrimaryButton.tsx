import { Button } from '@mui/material';
import React from 'react';
import { green } from 'color';

type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
};

const buttonStyle = {
  height: '48px',
  backgroundColor: green[200],
  '&:hover': {
    backgroundColor: green[400],
  },
};

const PrimaryButton: React.VFC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant='contained' sx={{ ...buttonStyle }} onClick={onClick}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
