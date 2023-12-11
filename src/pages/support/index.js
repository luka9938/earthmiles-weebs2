import "react";
import styles from "./support.module.css";
import Menu from "@/components/Menu";
import Link from "next/link";

export default function NewCampaign() {
  return (
    <>
      <main className={styles.background}>
        <div className={styles.background_green}>
          <Menu />
          <div className={styles.loginContainer}>
            <div className={styles.title}>
              <h1>Kontakt & support</h1>
            </div>
            <div className={styles.subtitle}>
              <h3>Vil du vide mere eller har du spørgsmål?</h3>
              <h3>Vi er her for dig!</h3>
            </div>
            <p className={styles.p}>Email os på hej@earthmiles.app</p>
            <p className={styles.p}>Made in Copenhagen ❤️🇩🇰</p>
            <p className={styles.p}>Følg rejsen</p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link
                  href="https://www.linkedin.com/company/earthmilesapp/about/?viewAsMember=true"
                  className={styles.p}
                >
                  LinkedIn
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  href="https://www.facebook.com/profile.php?id=100086774006047"
                  className={styles.p}
                >
                  Facebook
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="https://www.instagram.com/earthmiles.app/" className={styles.p}>
                  Instagram
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="https://www.instagram.com/earthmiles.app/" className={styles.p}>
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
