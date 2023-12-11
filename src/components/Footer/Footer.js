import styles from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Link href="/" aria-label="Privatpolitik">
          Privacy Policy
        </Link>
        <Link href="/" aria-label="Hjælp">
          Support
        </Link>
        <Link href="/" aria-label="samtykkeerklæring">
          Terms & Conditions
        </Link>
      </div>
      <div className={styles.so_me}>
        <h3 className={styles.email}>hej@earthmiles.app</h3>
        <h3 className={styles.copyright}>© Earth Miles 2023</h3>
      </div>
    </footer>
  );
}
