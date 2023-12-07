import styles from "./campaigns.module.css";
import Link from "next/link";
import { useState } from "react";
import PopUp from "@/components/DashboardPopup/DashboardPopup";
import { useRouter } from "next/router";
import Menu from "@/components/Menu";

export default function Campaigns() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const togglePopup = (content) => {
    setShowPopup(!showPopup);
    setPopupContent(content);
  };

  const handleButtonClick = (buttonName) => {
    if (selectedButton === buttonName) {
      setSelectedButton(null);
    } else {
      setSelectedButton(buttonName);
    }
  };

  const router = useRouter();
  const { name, description, price, quantity, discount, commission, redemption, link } =
    router.query;

  return (
    <main className={styles.background}>
      <Menu />
      <article className={styles.grid_container}>
        <article className={styles.big_element}>
          <Link href="/dashboard">
            <span className={styles.arrow}></span>
          </Link>
          <section className={styles.campaign_container}>
            <button
              className={`${styles.campaign} ${
                selectedButton === "Kampagne 1" ? styles.selected : ""
              }`}
              onClick={() => {
                togglePopup("Kampagne 1");
                handleButtonClick("Kampagne 1");
              }}
            >
              <span className={styles.campaign_text}>Kampagne 1</span>
            </button>
            {name ? (
              <button
                className={`${styles.campaign} ${
                  selectedButton === router.query.name ? styles.selected : ""
                }`}
                onClick={() => {
                  togglePopup(router.query.name);
                  handleButtonClick(router.query.name);
                }}
              >
                <span className={styles.campaign_text}>{name}</span>
              </button>
            ) : null}
          </section>
        </article>
        <PopUp isOpen={showPopup}>
          {popupContent === "Kampagne 1" && (
            <>
              <h1 className={styles.h1}>Kampagne 1</h1>
              <h2 className={styles.h2}>50% på din entré</h2>
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
                <div className={styles.earnings}>
                  <p className={styles.p}>Original price</p>
                  <p className={styles.h3}>250 kr</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>Discount value</p>
                  <p className={styles.h3}>50%</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>EM commission (10%)</p>
                  <p className={styles.h3}>1.100 kr</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>Redemption Type</p>
                  <p className={styles.h3}>QR code</p>
                </div>
              </section>
            </>
          )}
          {popupContent === router.query.name && (
            <>
              <h1 className={styles.h1}>{name}</h1>
              <h2 className={styles.h2}>{description}</h2>
              <section>
                <div className={styles.earnings}>
                  <p className={styles.p}>samlet salg fra denne kampagne</p>
                  <p className={styles.h3}>11.000</p>
                  <p className={styles.p}>indløste rabatter</p>
                  <p className={styles.h3}>10/{quantity}</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>Earth Miles optjent</p>
                  <p className={styles.h3}>1139</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>Original price</p>
                  <p className={styles.h3}>{price}</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>Discount value</p>
                  <p className={styles.h3}>{discount}</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>EM commission (10%)</p>
                  <p className={styles.h3}>{commission}</p>
                </div>
                <div className={styles.earnings}>
                  <p className={styles.p}>Redemption Type</p>
                  <p className={styles.h3}>{redemption}</p>
                  <p className={styles.p}>{link}</p>
                </div>
              </section>
            </>
          )}
        </PopUp>
      </article>
    </main>
  );
}
