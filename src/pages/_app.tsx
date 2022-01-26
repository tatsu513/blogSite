import '../styles/globals.css';
import { Box, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import theme from '../theme';
import Header from 'components/Header';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...containerStyle }}>
        <Header />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
};

export default MyApp;
