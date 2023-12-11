import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./NewCampaignData.module.css";
const NewCampaignData = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    price: "",
    quantity: "",
    discount: "",
    commission: "",
    redemption: "",
    link: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/campaigns?name=${formData.name}&description=${formData.description}&startDate=${formData.startDate}&endDate=${formData.endDate}&price=${formData.price}&quantity=${formData.quantity}&discount=${formData.discount}&commission=${formData.commission}&redemption=${formData.redemption}&link=${formData.link}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.grid_container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.h3}>Kampagnedetaljer</legend>
        <label className={styles.label}>
          Kampagneoverskrift
          <input
            placeholder="Kampagneoverskrift"
            className={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Beskrivelse
          <input
            placeholder="Beskrivelse"
            className={styles.input}
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          start dato
          <input
            placeholder="Beskrivelse"
            className={styles.input}
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Slut dato
          <input
            placeholder="Beskrivelse"
            className={styles.input}
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.h3}>Kampagneøkonomi</legend>
        <label className={styles.label}>
          Original pris
          <input
            placeholder="DKK"
            className={styles.input}
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Tilbudt mængde
          <input
            placeholder="DKK"
            className={styles.input}
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Rabatværdi (%)
          <input
            placeholder="DKK"
            className={styles.input}
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Potentiel EM-provision (10%)
          <input
            placeholder="DKK"
            className={styles.input}
            type="number"
            name="commission"
            value={formData.commission}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.h3}>Indløsningstype</legend>
        <label className={styles.label}>
          QR-kode (vi genererer en til dig)
          <div className={styles.checkbox}>
            <input className={styles.input} type="text" name="link" value={formData.link} />
            <input
              type="radio"
              name="redemption"
              value="QR Code"
              checked={formData.redemption === "QR Code"}
              onChange={handleChange}
            />
          </div>
        </label>
        <label className={styles.label}>
          Direkte link til webshop
          <div className={styles.checkbox}>
            <input className={styles.input} type="text" name="link" value={formData.link} />
            <input
              type="radio"
              name="redemption"
              value="Direct link"
              checked={formData.redemption === "Direct link"}
              onChange={handleChange}
            />
          </div>
        </label>
        <label className={styles.label}>
          Kampagnekode (CSV, tekstfil osv.)
          <div className={styles.checkbox}>
            <input className={styles.input} type="text" name="link" value={formData.link} />
            <input
              type="radio"
              name="redemption"
              value="Promo code"
              checked={formData.redemption === "Promo code"}
              onChange={handleChange}
            />
          </div>
        </label>
        <button className={styles.button} type="submit">
          Indsend
        </button>
      </fieldset>
    </form>
  );
};

export default NewCampaignData;
