import Theme from "/pages/src/context/Theme.jsx";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true" }/>
      <link
        href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </Theme>
  )
}

export default MyApp
