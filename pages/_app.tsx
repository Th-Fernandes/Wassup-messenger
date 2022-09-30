import "../src/common/styles/global.css";
import wassupLogo from "../public/wassup-logo.svg";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp;
