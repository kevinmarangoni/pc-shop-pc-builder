import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chaupi Informatica</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 