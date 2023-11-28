import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Links } from './Links';
import { HeadLine } from './HeadLine';

export function Main(props) {
  return (

      <main>
        <HeadLine page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </HeadLine>
        <Links />
      </main>
  );
}
