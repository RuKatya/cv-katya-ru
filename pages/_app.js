import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from 'next/head'
import '../styles/globals.scss'
import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  useEffect(() => {
    // Обработка начала загрузки
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    // Обработка окончания загрузки
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {
        // Если загружается то показываем прелоадер
        loading ? <div style={{ color: "black" }}>loading</div> : (
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
