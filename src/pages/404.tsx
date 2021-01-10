import React, {FC} from 'react'
import Head from 'next/head'
import styles from '../../styles/404.module.scss'
const Custom404: FC = () => {
  return (
    <div className={styles.bg}>
      <Head>
        <title>
          404 error
        </title>
      </Head>

      <span className={styles.glitch} data-text="Aktk1910.0x9.pw">Aktk1910.0x9.pw</span><br/>
      <span className={styles.glitch} data-text="404">404</span>
    </div>
  )
}
export default Custom404