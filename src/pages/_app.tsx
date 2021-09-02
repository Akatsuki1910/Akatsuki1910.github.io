import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import Router, { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url))

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

import '../../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
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
