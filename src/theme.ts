import { createTheme } from '@mui/material';
import { black, gray, green, orange, white } from 'color';

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    allVariants: {
      color: black,
    },
    section: {
      display: 'block',
      marginBottom: '24px',
      fontSize: '32px',
      fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
    },
    h1: {
      fontSize: '28px',
    },
    h2: {
      fontSize: '24px',
    },
    h3: {
      fontSize: '20px',
      color: green[200],
    },
    body1: {
      fontSize: '16px',
      whiteSpace: 'normal',
    },
    body2: {
      fontSize: '14px',
      whiteSpace: 'normal',
    },
    caption: {
      // Montserratを追加（不都合が出てきたら削除する）
      color: gray[200],
      fontSize: '12px',
      fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
      fontWeight: '600',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          height: '48px',
          minWidth: '200px',
          fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
          fontSize: '16px',
          transition: 'background 400ms ease',
        },
        outlined: {
          height: '48px',
          minWidth: '200px',
          fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
          transition: 'all 400ms ease',
        },
      },
    },
  },
  palette: {
    primary: {
      light: green[100],
      main: green[200],
    },
    secondary: {
      main: orange[200],
    },
    error: {
      main: orange[200],
    },
    text: {
      primary: black,
      secondary: gray[200],
    },
  },
  shadows: [
    'none',
    '0 0 16px 4px rgba(0, 0, 0, 0.2)', // hover
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
});

export default theme;

declare module '@mui/material/styles' {
  interface TypographyVariants {
    section: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    section?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    section: true;
  }
}
