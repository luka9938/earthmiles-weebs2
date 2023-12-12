import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import styles from "./LoginPage.module.css";
import Menu from "@/components/Menu";

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

  const supabaseUrl = "https://ujhcuiladwpybdluglxv.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqaGN1aWxhZHdweWJkbHVnbHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3Nzc3NjgsImV4cCI6MjAxNzM1Mzc2OH0.bH5WVpJzoaMOF4IuFzLZwoGSh_1ASshOgQ8IWYsLABc";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const userLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Email og password skal være udfyldt!");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .eq("firma_email", email)
        .eq("password", password)
        .single();

      if (error || !data) {
        setErrorMessage("Ugyldige loginoplysninger");
        console.error(
          "Failed to login:",
          error ? error.message : "Bruger ikke fundet"
        );
      } else {
        console.log("Login successful!");
        setIsUserLoggedIn(true);
        router.push("/dashboard");
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
    console.log("Forgot Password?");
  };

  const createUserPage = () => {
    console.log("Navigate to Create User page");

    router.push("/createaccount");
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
                Tilbage
              </button>
            </div>

            <p className={styles.errorMessage}>{errorMessage}</p>

            <p className={styles.forgetPassword} onClick={forgetPassword}>
              Glemt kodeord?
            </p>

            {/* "Create User" text link */}
            <p className={styles.createAccount} onClick={createUserPage}>
              Opret bruger
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
    </div>
  );
};

export default LoginPage;
