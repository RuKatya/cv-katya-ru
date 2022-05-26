import { useState, useEffect } from "react";
import Head from 'next/head'
import '../styles/globals.scss'
import Layout from './Layout'
import PreLoader from "./Loader/PreLoader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const hasWindow = typeof window !== "undefined"



  useEffect(() => {
    function loadPage() {
      const loadpage = hasWindow ? window.onload = function () {
        setTimeout(() => {
          setLoading(false)
        }, 5000)
      } : null;
      return loadpage;
    }

    loadPage()
  }, [hasWindow])


  return (
    <>
      {
        loading ? <PreLoader /> : (
          <Layout>
            <Head>
              <meta charSet="utf-8" />
              <meta name="description" content="Portfolio of Katya Rukosuev" /> {/* ADD DESCRIPTION AND KEYWORDS */}
              <meta name="keywords" content="Katya-Ru, Katya Ru, CV Katya Ru, CV" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui" />
            </Head>

            <Component {...pageProps} />
          </Layout>
        )
      }

    </>

  )
}

export default MyApp
