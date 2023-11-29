import styles from './header.module.css';

import Link from "next/link"
export function Header() {
  return (

    <header className={styles.header}>
      <Link style={{ textDecoration: 'none' }} href="/">
        <div className={styles.anchar}>Index</div>
      </Link>
      <Link  href="/about">
      <div className={styles.anchar}>About</div>
      </Link>
    </header>
  );
}