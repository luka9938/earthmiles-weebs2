import React, { useState } from "react";

const CreateAccountFrom = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [Link, setWebsite] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    // Handle form subission logic here
    console.log("From submitted:", { name, number, Link, message });
  };

  return (
    <form onSubmit={handelSubmit}>
      <label>
        Firmanavn:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
      </label>

      <label>
        Firmanummer (CVR, moms osv.):
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        ></input>
      </label>

      <label>
        Firmaets hjemmeside:
        <input
          type="text"
          value={Link}
          onChange={(e) => setWebsite(e.target.value)}
          required
        ></input>
      </label>

      <label>
        Firmaets Email:
        <input
          type="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </label>

      <label>
        Erhvervskategori:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
      </label>

      <label>
        Virksomhedens Bio:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      </label>

      <label>
        Opret adgangskode:
        <input
          type="password"
          value={name}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
      </label>

      <label>
        Bekræft kodeord:
        <input
          type="password"
          value={name}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
      </label>

      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountFrom;
