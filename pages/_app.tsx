import "assets/styles/global.css";
import Head from "next/head";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/wassup-logo.svg" />
        <title>Wassup messenger</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}