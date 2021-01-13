import React from 'react'
import Head from 'next/head'
import {AppProps} from 'next/app'
import '../../styles/globals.scss'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>aktk1910.pw</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App