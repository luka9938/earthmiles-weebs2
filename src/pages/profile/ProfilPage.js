// ProfilePage.jsx

import React from "react";
import styles from "./ProfilePage.module.css"; // Importer stylingmodulet

const ProfilePage = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.logoContainer}>
        {/* Stort logo her */}
        <img src="stort_logo.jpg" alt="Logo" />
      </div>

      <div className={styles.profileBox}>
        <h2>Brugerens Navn</h2>
        <ul className={styles.profileMenu}>
          <li>Personlig info</li>
          <li>Hvordan det virker</li>
          <li>Log ud</li>
          <li>Billing and invoices</li>
          <li>Kontakt support</li>
        </ul>
      </div>

      <div className={styles.campaignBox}>
        <h3>Want to make something new</h3>
        {/* Yderligere indhold for at starte en ny kampagne */}
      </div>
    </div>
  );
};

export default ProfilePage;
