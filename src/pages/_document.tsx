import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="My personal website"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet" />
      </Head>
      <body className="text-black bg-#EDEDED dark:bg-bg-color dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
