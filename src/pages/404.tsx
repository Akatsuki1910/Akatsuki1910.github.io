import React, {FC} from 'react'
import loadable from '@loadable/component'
const Head = loadable(() => import('next/head'))
import styles from '../../styles/404.module.scss'

const Custom404: FC = () => {
  return (
    <div className={styles.bg}>
      <Head>
        <title>
          404 error
        </title>
      </Head>

      <span className={styles.glitch} data-text="aktk1910.pw">aktk1910.pw</span><br/>
      <span className={styles.glitch} data-text="404">404</span>
    </div>
  )
}

export default Custom404