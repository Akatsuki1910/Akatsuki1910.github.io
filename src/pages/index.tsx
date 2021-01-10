import React, {FC} from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My HomePage
        </h1>
      </main>
    </div>
  )
} 
export default Home;