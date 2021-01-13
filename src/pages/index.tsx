import React, {FC} from 'react'
import styles from '../../styles/Home.module.scss'

const Home: FC = ({text}:any) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {text}
        </h1>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const text = 'Welcome to My HomePage'

  return {
    props: { text },
  }
}