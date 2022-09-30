import "../src/common/styles/global.css"
import wassupLogo from "../public/wassup-logo.svg"
import Head from "next/head"

function Test(){
  return(
    <style  global jsx>{`
    body {
      font-family: 'Roboto', sans-serif;
    }
    `}</style>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="icon" type="image/svg" href={wassupLogo.src} />
      <title>Wassup messenger</title>
    </Head>
      <Test />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
