import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Welcome to YUPPTV&nbsp;
            {/* <code className={styles.code}>pages/index.js</code> */}
          </p>
          <div>
            <a
              href="https://twitter.com/yoursnataraj"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/images/twitter.png"
                alt="Twitter Icon"
                className={styles.vercelLogo}
                width={24}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/images/yupptv.jpg"
            alt="YUPPTV Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://www.yupptv.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Details <span>-&gt;</span>
            </h2>
            <p>
              Find the end less entertainment &nbsp; in our YUPPTV.COM.
            </p>
          </a>

          <a
            href="/login"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>
              Login <span>-&gt;</span>
            </h2>
            <p>
              To work with us, please login &nbsp; to our world!
            </p>
          </a>

          <a
            href="/register"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>
              Register <span>-&gt;</span>
            </h2>
            <p>
              If you're not registered yet, please &nbsp; do it now.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Developer <span>-&gt;</span>
            </h2>
            <p>
              Developed by Nataraja Murthy with&nbsp; the help of NEXT JS.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
