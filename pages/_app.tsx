import Head from 'next/head'
import "../styles/globals.css";


function App({ Component, pageProps }) {
    return (
  <>
     <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
    )
    
  }
  
export default App