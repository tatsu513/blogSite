import { Button } from '@mui/material';
import React from 'react';
import { green, white } from 'color';

type OutlineButtonProps = {
  text: string;
  onClick?: () => void;
};

const buttonStyle = {
  backgroundColor: white,
  borderColor: green[200],
  color: green[200],
  '&:hover': {
    backgroundColor: green[200],
    borderColor: green[200],
    color: white,
  },
};

const OutlineButton: React.VFC<OutlineButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant='outlined' sx={{ ...buttonStyle }} onClick={onClick}>
      {text}
    </Button>
  );
};

export default OutlineButton;
