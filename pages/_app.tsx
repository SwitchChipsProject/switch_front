import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { useEffect, useRef } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
