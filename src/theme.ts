import { createTheme } from '@mui/material';
import { black, gray } from 'color';

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    h1: {
      fontSize: '24px',
    },
    h2: {
      fontSize: '20px',
    },
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    },
    caption: {
      // Montserratを追加（不都合が出てきたら削除する）
      fontSize: '12px',
      fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
    },
  },
  palette: {
    text: {
      primary: black,
      secondary: gray[200],
    },
  },
});

export default theme;
