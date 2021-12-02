/* eslint-disable @next/next/no-css-tags */
import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Nav from "../components/nav";
import "antd/dist//antd.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: 'mobile'
    });
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/globals.css" />
        <title>Fayez Portfolio</title>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>

      <Nav />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
