import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="description" content="A site for programing portfolio"/>
            <meta charSet="utf-8"/>
            <meta name="robots" content="noindex,nofollow"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet"></link>
        <link 
                 rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" 
                 />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
