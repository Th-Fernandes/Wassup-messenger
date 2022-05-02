import "../src/common/styles/global.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Wassup messenger</title>
    </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
