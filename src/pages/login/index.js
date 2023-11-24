// Import necessary dependencies
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./LoginPage.module.css"; // Import styling module

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Use the useRouter hook
  const router = useRouter();

  const handleUserLogin = () => {
    console.log("Fortsæt som bruger");
    setIsUserLoggedIn(true);

    // Redirect to the dashboard page
    router.push("/dashboard"); // Replace "/dashboard" with the actual path of your dashboard page
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
            <button className={styles.userButton} onClick={handleUserLogin}>
              Login
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
            {/* Add user-specific content here after login */}
            <p>User is logged in!</p>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
