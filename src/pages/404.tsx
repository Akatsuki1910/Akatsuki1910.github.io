import React, { FC } from 'react'
import Head from 'next/head'
import styles from '../../styles/404.module.scss'

const Custom404: FC = () => {
  return (
    <div className={styles.bg}>
      <Head>
        <title>error</title>
      </Head>

      <span className={styles.glitch} data-text="aktk1910.pw">
        aktk1910.pw
      </span>
    </div>
  )
}

export default Custom404
