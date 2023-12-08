import React, { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import Link from "next/link";
import Menu from "@/components/Menu";

const ProfilePage = () => {
  const [companyName, setCompanyName] = useState("");
  const [cvrNumber, setCvrNumber] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSaveProfile = () => {
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
      <Menu />
      <div className={styles.profileContainer}>
        <div className={styles.logoContainer}>
          <img src="/logo1.png" className={styles.logo} alt="Logo" />
        </div>

        <div className={styles.profileBox}>
          <h2 className={styles.profileTitle}>Firmaprofil</h2>
          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>Firmanavn:</label>
            <input
              placeholder="Firmanavn"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>CVR-nummer:</label>
            <input
              placeholder="12345678"
              type="text"
              value={cvrNumber}
              onChange={(e) => setCvrNumber(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>Firma URL:</label>
            <input
              placeholder="https://www.example.com"
              type="link"
              value={companyURL}
              onChange={(e) => setCompanyURL(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>Forretningsadresse:</label>
            <input
              placeholder="Gadevej 1, 1234 By"
              type="address"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tallInputField}`}>
            <label className={styles.labelText}>Telefonnummer:</label>
            <input
              placeholder="+45 XX XX XX XX"
              type="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <Link href="/login" className={styles.button} onClick={handleSaveProfile}>
            Gem Profil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
