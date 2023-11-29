import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./LoginPage.module.css"; // Import styling module

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const router = useRouter();

  const userLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Email og password skal udfyldes");
      return;
    }

    console.log("Fortsæt som bruger");
    setIsUserLoggedIn(true);

    router.push("/dashboard"); // Replace "/dashboard" with the actual path of your dashboard page
  };

  const userCreate = () => {
    console.log();

    router.push("/");
  };

  const forgetPassword = () => {
    console.log("Glemt Password?");
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
              onChange={emailChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={passwordChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={userLogin}>
              Login
            </button>
            <button className={styles.button} onClick={userCreate}>
              Back
            </button>
          </div>

          <p className={styles.errorMessage}>{errorMessage}</p>

          <p className={styles.forgetPassword} onClick={forgetPassword}>
            Glemt paasword?
          </p>
        </>
      ) : (
        <>
          <div className={styles.formGroup}>
            {/* Add user-specific content here after login */}
            <p>Velkommen</p>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
