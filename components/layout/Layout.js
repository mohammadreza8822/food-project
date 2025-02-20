import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">FoodBar</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/mohammadreza8822"
          target="_blank"
          rel="noreferrer"
        >
          Develop By Mohammadreza ❤️
        </a>
        Next JS Project
      </footer>
    </div>
  );
}

export default Layout;
