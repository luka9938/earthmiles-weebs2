// ProfilePage.jsx

import React, { useState } from "react";
import styles from "./ProfilePage.module.css"; // Importer stylingmodulet

const ProfilePage = () => {
  const [companyName, setCompanyName] = useState("");
  const [cvrNumber, setCvrNumber] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSaveProfile = () => {
    // Implementer logik for at gemme profiloplysninger
    console.log("Gemmer profiloplysninger:", {
      companyName,
      cvrNumber,
      companyURL,
      businessAddress,
      phoneNumber,
    });
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.logoContainer}>
        {/* Stort logo her */}
        <img src="stort_logo.jpg" alt="Logo" />
      </div>

      <div className={styles.profileBox}>
        <h2>Firmaprofil</h2>
        <div className={styles.formGroup}>
          <label className={styles.labelText}>Firmanavn:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label>CVR-nummer:</label>
          <input
            type="text"
            value={cvrNumber}
            onChange={(e) => setCvrNumber(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Firma URL:</label>
          <input
            type="text"
            value={companyURL}
            onChange={(e) => setCompanyURL(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Forretningsadresse:</label>
          <input
            type="text"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Telefonnummer:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button
          className={styles.saveProfileButton}
          onClick={handleSaveProfile}
        >
          Gem Profil
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
