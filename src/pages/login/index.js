import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./LoginPage.module.css";

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

  const userLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Email og password skal udfyldes");
      return;
    }

    // Use the login API to authenticate the user
    try {
      const response = await fetch(
        "https://earth-miles-backend.azurewebsites.net/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        // Assuming the API returns some indication of successful login
        const responseData = await response.json();

        if (responseData.success) {
          console.log("Login successful!");
          setIsUserLoggedIn(true);
          router.push("/dashboard");
        } else {
          setErrorMessage("Invalid credentials");
        }
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to login");
        console.error("Failed to login:", response.status, response.statusText);
      }
    } catch (error) {
      setErrorMessage("Error logging in");
      console.error("Error logging in:", error.message);
    }
  };

  const userCreate = () => {
    console.log("Back to homepage");
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
            Glemt password?
          </p>
        </>
      ) : (
        <>
          <div className={styles.formGroup}>
            <p>Velkommen</p>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
