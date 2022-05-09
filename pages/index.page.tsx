import type { NextPage } from 'next'
import Head from 'next/head'

import Image from 'components/image'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Mamello Seboholi</title>
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>Hi I am Mamello</h1>

      <p className={styles.description}>Computer Scientist and Engineer</p>

      <div className={styles.bottom}>
        <a href="https://github.com/mamello-justice" target="_blank" rel="noopener noreferrer">
          <Image className={styles.github} src="/github.png" alt="Github Logo" width={50} height={50} />
        </a>
      </div>
    </main>
  </div>
)

export default Home
