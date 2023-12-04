import styles from "./campaigns.module.css";
import Link from "next/link";
import { useState } from "react";
import PopUp from "@/components/DashboardPopup/DashboardPopup";
import { useRouter } from "next/router";

export default function Campaigns() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const togglePopup = (content) => {
    setShowPopup(!showPopup);
    setPopupContent(content);
  };

  const router = useRouter();
  const { name, email } = router.query;

  return (
    <main className={styles.background}>
      <article className={styles.grid_container}>
        <article className={styles.big_element}>
          <Link href="/dashboard">
            <span className={styles.arrow}></span>
          </Link>
          <section className={styles.campaign_container}>
            <button
              className={styles.campaign}
              onClick={() => togglePopup("Kampagne 1")}
            >
              <span className={styles.campaign_text}>Kampagne 1</span>
            </button>
            {name ? (
              <button
                className={styles.campaign}
                onClick={() => togglePopup(router.query.name)}
              >
                <span className={styles.campaign_text}>{name}</span>
              </button>
            ) : null}
          </section>
        </article>
        <PopUp isOpen={showPopup}>
          {popupContent === "Kampagne 1" && (
            <>
              <h3 className={styles.h2}>Kampagne 1</h3>
              <h3 className={styles.h2}>50% på din entré</h3>
              <section>
                <div className={styles.earnings}>
                  <p className={styles.p}>samlet salg fra denne kampagne</p>
                  <p className={styles.h3}>11.000</p>
                  <p className={styles.p}>indløste rabatter</p>
                  <p className={styles.h3}>290/500</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>Earth Miles optjent</p>
                  <p className={styles.h3}>1139</p>
                </div>
              </section>
            </>
          )}
          {popupContent === router.query.name && (
            <>
              <h3 className={styles.h2}>fuck</h3>
              <h3 className={styles.h2}>{popupContent.email}</h3>
            </>
          )}
        </PopUp>
      </article>
    </main>
  );
}
