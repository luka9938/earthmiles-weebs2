import React, { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css"; // Import stylingmodulet
import Menu from "@/components/Menu";

const ProfilePage = () => {
  const [companyName, setCompanyName] = useState("");
  const [cvrNumber, setCvrNumber] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSaveProfile = () => {
    // Implement logic for saving profile information
    console.log("Saving profile information:", {
      companyName,
      cvrNumber,
      companyURL,
      businessAddress,
      phoneNumber,
    });
  };

  useEffect(() => {
    document.body.classList.add(styles.bodyClass);
    return () => {
      document.body.classList.remove(styles.bodyClass);
    };
  }, []);

  return (
    <div>
      {" "}
      <Menu />
      <div className={styles.profileContainer}>
        <div className={styles.logoContainer}>
          <img src="/wheel brown.png" alt="Logo" />
        </div>

        <div className={styles.profileBox}>
          <h2 className={styles.profileTitle}>Firmaprofil</h2>
          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>Firmanavn:</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>CVR-nummer:</label>
            <input
              type="text"
              value={cvrNumber}
              onChange={(e) => setCvrNumber(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>Firma URL:</label>
            <input
              type="text"
              value={companyURL}
              onChange={(e) => setCompanyURL(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>Forretningsadresse:</label>
            <input
              type="text"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>Telefonnummer:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <button className={styles.saveProfileButton} onClick={handleSaveProfile}>
            Gem Profil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
