import "react";
import styles from "./support.module.css";
import Menu from "@/components/Menu";

export default function NewCampaign() {
  return (
    <>
      <main className={styles.background}>
        <div className={styles.background_green}>
          <Menu />
          <div className={styles.loginContainer}>
            <div className={styles.title}>
              <h1>FAQ</h1>
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
                <p>Hvor meget arbejde kræves der fra min virksomhed?</p>
              </li>
              <li className={styles.li}>
                <p>Hvor meget koster det?</p>
              </li>
              <li className={styles.li}>
                <p>Hvem håndterer betalingen?</p>
              </li>
              <li className={styles.li}>
                <p>Hvilke indløsningsmuligheder understøtter vi?</p>
              </li>
              <li className={styles.li}>
                <p>Hvordan kan Earth Miles hjælpe min virksomhed?</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
