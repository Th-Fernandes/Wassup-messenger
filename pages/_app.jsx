import "../src/common/styles/global.css"
import Head from "next/head"

function Test(){
  return(
    <style  global jsx>{`
    body {
      font-family: 'Lexend Deca', sans-serif;
    }
    `}</style>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Wassup messenger</title>
    </Head>
      <Test />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
