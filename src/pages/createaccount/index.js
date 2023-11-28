import { useState } from "react";
import styles from "./create.module.css";
import Link from "next/link";

const CreateAccountForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [link, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, number, link, email, category, message });
  };

  return (
    <form onSubmit={handleSubmit}>
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
              ></input>
            </label>

            <label className={styles.label}>
              <input
                placeholder="Registreringsnummer (CVR, moms osv.)"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className={styles.inputField}
                required
              ></input>
            </label>

            <label className={styles.label}>
              <input
                placeholder="Firma hjemmeside"
                type="text"
                value={link}
                onChange={(e) => setWebsite(e.target.value)}
                className={styles.inputField}
                required
              ></input>
            </label>

            <label className={styles.label}>
              <input
                placeholder="Virksomhedskategori"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={styles.inputField}
                required
              ></input>
            </label>

            <label className={styles.label}>
              <input
                placeholder="Firma email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
              ></input>
            </label>

            <label className={styles.label}>
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                required
              ></input>
            </label>

            <label className={styles.label}>
              <input
                placeholder="Gentag password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                required
              ></input>
            </label>

            <label className={styles.label}>
              <textarea
                placeholder="Firma bio"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
                required
              ></textarea>
            </label>
            <button href="./login" className={styles.button}>
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateAccountForm;
