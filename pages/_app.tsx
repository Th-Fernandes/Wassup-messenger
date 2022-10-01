import "../src/common/styles/global.css";
import wassupLogo from "../public/wassup-logo.svg";
import Head from "next/head";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href={wassupLogo.src} />
        <title>Wassup messenger</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}