import type { AppProps } from 'next/app';
import '../global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lv Blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
