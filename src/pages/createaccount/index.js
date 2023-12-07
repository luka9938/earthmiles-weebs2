import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import styles from "./create.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "@/components/Menu";

const CreateAccountForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [link, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const router = useRouter();

  const supabaseUrl = "https://ujhcuiladwpybdluglxv.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqaGN1aWxhZHdweWJkbHVnbHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3Nzc3NjgsImV4cCI6MjAxNzM1Mzc2OH0.bH5WVpJzoaMOF4IuFzLZwoGSh_1ASshOgQ8IWYsLABc";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Kodeord matcher ikke");
      return;
    }

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        console.error("Error creating user:", error.message);
      } else {
        const { data, error: dataError } = await supabase.from("partners").upsert([
          {
            firmanavn: name,
            registreringsnummer: number,
            firma_hjemmeside: link,
            virksomhedskategori: category,
            firma_email: email,
            password: password,
            gentag_password: repeatPassword,
            firma_bio: message,
          },
        ]);

        if (dataError) {
          setError(dataError.message);
          console.error("Error updating user data:", dataError.message);
        } else {
          console.log("User created and data updated successfully:", user, data);

          setConfirmationMessage("Succes! Bruger oprettet");

          setName("");
          setNumber("");
          setWebsite("");
          setEmail("");
          setCategory("");
          setMessage("");
          setPassword("");
          setRepeatPassword("");
        }
      }
    } catch (error) {
      setError("Error creating user");
      console.error("Error creating user:", error.message);
    }
  };

  const createUserPage = () => {
    // Navigate to the login page
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Menu />
      <div className={styles.container}>
        <div className={styles.container_box}>
          <div className={styles.left} style={{ backgroundImage: "url(/leftimage2.jpeg)" }}></div>
          <div className={styles.right}>
            <h2 className={styles.h2}>Opret en konto</h2>

            <label className={styles.label}>
              <input
                placeholder="Firmanavn"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputField}
                required
              />
            </label>

            <label className={styles.label}>
              <input
                placeholder="Registreringsnummer (CVR, moms osv.)"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className={styles.inputField}
                required
              />
            </label>

            <label className={styles.label}>
              <input
                placeholder="Firma hjemmeside"
                type="text"
                value={link}
                onChange={(e) => setWebsite(e.target.value)}
                className={styles.inputField}
                required
              />
            </label>

            <label className={styles.label}>
              <input
                placeholder="Virksomhedskategori"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={styles.inputField}
                required
              />
            </label>

            <label className={styles.label}>
              <input
                placeholder="Firma email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
            </label>

            <label className={styles.label}>
              <input
                placeholder="Kodeord"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                required
              />
            </label>

            <label className={styles.label}>
              <input
                placeholder="Gentag kodeord"
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className={styles.inputField}
                required
              />
            </label>

            <label className={styles.label}>
              <textarea
                placeholder="Firma bio"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
                required
              />
            </label>

            <button type="submit" className={styles.button}>
              Opret konto
            </button>
            {error && (
              <p className={styles.errorMessage} style={{ color: "red" }}>
                {error}
              </p>
            )}
            {confirmationMessage && (
              <>
                <p className={styles.confirmationMessage}>{confirmationMessage}</p>
                <Link href="/login">
                  <span className={styles.loginLink}>Tilbage til login</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateAccountForm;
