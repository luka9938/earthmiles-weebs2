import styles from "./campaigns.module.css";
import Link from "next/link";
import { useState } from "react";
import CustomModal from "@/pages/components/DashboardPopup/DashboardPopup";

export default function Campaigns() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.background}>
      <article className={styles.grid_container}>
        <article className={styles.big_element}>
          <Link href="/dashboard">
            <span className={styles.arrow}></span>
          </Link>
          <button onClick={() => openModal()}>Kampagne 1</button>
        </article>
        <CustomModal isOpen={isModalOpen}>
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
          <button onClick={closeModal}>Luk Modal</button>
        </CustomModal>
      </article>
    </main>
  );
}
