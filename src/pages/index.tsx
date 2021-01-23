import React, {FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Home.module.scss'
import Background from './background'

const Home: FC = ({text}:any) => {
  return (
    <>
      <div className={styles.center}>
        <h1 className={styles.title}>
          {text}
        </h1>
        <a href='https://twitter.com/nomber1910' target='_blank'>
          <FontAwesomeIcon icon={['fab','twitter']} className={styles.icon}/>
        </a>
        <a href='https://github.com/Akatsuki1910' target='_blank'>
          <FontAwesomeIcon icon={['fab','github']} className={styles.icon}/>
        </a>
      </div>
      <Background/>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const text = 'aktk1910.pw'

  return {
    props: { text },
  }
}