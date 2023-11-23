import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css"; // Import styling module

const LoginPage = () => {
  const [pin, setPin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handlePinChange = (e) => {
    const inputValue = e.target.value;
    setPin(inputValue);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserLogin = () => {
    console.log("Fortsæt som bruger");
    setIsUserLoggedIn(true);
  };

  const handleAdminLogin = () => {
    if (pin === "admin1234") {
      console.log("Admin login successful!");
      // Implement logic for admin login here
    } else {
      setErrorMessage("Forkert PIN. Prøv igen.");
    }
  };

  const handleForgotPin = () => {
    console.log("Glemt PIN?"); // Implement logic for forgotten PIN here
  };

  useEffect(() => {
    document.body.classList.add(styles.bodyClass);
    return () => {
      document.body.classList.remove(styles.bodyClass);
    };
  }, []);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.title}>
        <h1>Earth Miles</h1>
      </div>
      <div className={styles.subtitle}>
        <h3>For partners</h3>
      </div>

      {!isUserLoggedIn ? (
        <>
          <div className={styles.formGroup}>
            <label>Indtast 4-cifret PIN:</label>
            <div
              id="pinInput"
              className={`${styles.pinInput} ${
                pin.length > 0 ? styles.hasContent : ""
              }`}
            >
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className={styles.pinDot}>
                  {index < pin.length ? "•" : ""}
                </div>
              ))}
            </div>
            <input
              type="password"
              value={pin}
              onChange={handlePinChange}
              className={styles.hiddenInput}
              maxLength="4"
            />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.userButton} onClick={handleUserLogin}>
              Fortsæt som bruger
            </button>
            <button className={styles.adminButton} onClick={handleAdminLogin}>
              Indtast admin PIN
            </button>
          </div>

          <p className={styles.errorMessage}>{errorMessage}</p>

          <p className={styles.forgotPin} onClick={handleForgotPin}>
            Glemt PIN?
          </p>
        </>
      ) : (
        <>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={styles.input}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.userButton}
              onClick={() => console.log("Login med email og password")}
            >
              Log ind
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
