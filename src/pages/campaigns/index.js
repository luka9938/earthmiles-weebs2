import styles from "./campaigns.module.css";
import Link from "next/link";
import { useState } from "react";
import PopUp from "@/components/DashboardPopup/DashboardPopup";

export default function Campaigns() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className={styles.background}>
      <article className={styles.grid_container}>
        <article className={styles.big_element}>
          <Link href="/dashboard">
            <span className={styles.arrow}></span>
          </Link>
          <button onClick={() => togglePopup()}>Kampagne 1</button>
        </article>
        <PopUp isOpen={showPopup}>
          <h3 className={styles.h2}>Kampagne 1</h3>
          <h3 className={styles.h2}>50% på din entré</h3>
          <section>
            <p className={styles.p}>samlet salg fra denne kampagne</p>
            <p className={styles.p}>11.000</p>
            <p className={styles.p}>indløste rabatter</p>
            <p className={styles.p}>290/500</p>
            <p className={styles.p}>Earth Miles optjent</p>
            <p className={styles.p}>1139</p>
          </section>
          <button onClick={closePopup}>Luk Modal</button>
        </PopUp>
      </article>
    </main>
  );
}
