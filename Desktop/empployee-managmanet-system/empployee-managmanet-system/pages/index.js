import Head from 'next/head'
// import Image from 'next/image'
import SideBar from "../components/SideBar"
import Employees from "../components/Employees"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
    <div className={`${styles.container}`}>
      <Head>
        <title>Shaper - recruitment</title>
        <meta
          name="description"
          content="shaper learner recruitment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div><div className={`${styles.body}`}>
        <div className={`${styles.heads}`}>
          <h1>Head</h1>

        </div>

        <div className={`${styles.main}`}>
          <div className={`${styles.sideBar}`}>
            <h1>sideBar</h1>
            <SideBar />

          </div>
          <div className={`${styles.window}`}>
            <h1>content</h1>
            <Employees />
          </div>

        </div>
        <div className={`${styles.footer}`}>
          <h1>Footer</h1>

        </div>
      </div>
      </>
  )
}
