import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Yerrrdle</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
