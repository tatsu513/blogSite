import '../styles/reset.scss';
import '../styles/post.scss';
import { Box, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import theme from '../theme';
import Header from 'components/Header';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
};
const contentStyle = {
  maxWidth: '1440px',
  margin: '80px auto',
  padding: '0 48px',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...containerStyle }}>
        <Header />
        <Box sx={{ ...contentStyle }}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MyApp;
