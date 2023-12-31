import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from "../components/Footer"
import { Links } from '../components/Links';
import { HeadLine } from '../components/HeadLine';
import { Main } from '../components/Main';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="index" />
      <Footer />



      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
