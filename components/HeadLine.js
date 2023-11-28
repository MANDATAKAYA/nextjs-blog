import Head from 'next/head';
import styles from '../styles/Home.module.css';

export function HeadLine(props) {
  return (
    <div>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">{props.page}Page</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/{props.page}.js</code>
        </p>
    </div>
  );
}
