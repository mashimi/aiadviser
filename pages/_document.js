import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Couples Ai therapy" key="title"/>
        <meta property="og:description" content="Therapy by Artificial intelligence" key="description"/>
        <meta
          property="og:image"
          content="https://ibb.co/wQ7zVNL"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
