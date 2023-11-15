import { useState } from "react";
import styles from "./create.module.css"; // Make sure to import your styles module

const CreateAccountForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [link, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, number, link, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.yourFormClassName}>
      <label className={styles.formLabel}>
        Firmanavn:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Firmanummer (CVR, moms osv.):
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={styles.inputField}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Firmaets hjemmeside:
        <input
          type="text"
          value={link}
          onChange={(e) => setWebsite(e.target.value)}
          className={styles.inputField}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Firmaets Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Erhvervskategori:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Virksomhedens Bio:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.textareaField}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Opret adgangskode:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
          required
        />
      </label>

      <label className={styles.formLabel}>
        Bekræft kodeord:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
          required
        />
      </label>

      <button type="submit" className={styles.submitButton}>
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountForm;
