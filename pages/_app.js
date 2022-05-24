import Head from 'next/head'
import '../styles/globals.css'
import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  return (
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

export default MyApp
