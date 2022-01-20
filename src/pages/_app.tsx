import '../styles/globals.css';
import type { AppProps } from 'next/app';

const API = 'https://countries.trevorblades.com';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
