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
      `/campaigns?name=${formData.name}&description=${formData.description}&date=${formData.date}&price=${formData.price}&quantity=${formData.quantity}&discount=${formData.discount}&commission=${formData.commission}&redemption=${formData.redemption}&link=${formData.link}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.grid_container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.h3}>Campaign Details</legend>
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
        <legend className={styles.h3}>Campaign Financials</legend>
        <label className={styles.label}>
          Original price
          <input
            placeholder="Beskrivelse"
            className={styles.input}
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Quantity offered
          <input
            placeholder="Beskrivelse"
            className={styles.input}
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Discount value (%)
          <input
            placeholder="Beskrivelse"
            className={styles.input}
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Potential EM commission (10%)
          <input
            placeholder="Beskrivelse"
            className={styles.input}
            type="number"
            name="commission"
            value={formData.commission}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.h3}>Redemption Type</legend>
        <label className={styles.label}>
          QR code (we generate one for you)
          <div className={styles.checkbox}>
            <input className={styles.input} type="text" name="link" value={formData.link} />
            <input
              type="radio"
              name="redemption"
              value="QR Code"
              checked={formData.redemption === "Option 1"}
              onChange={handleChange}
            />
          </div>
        </label>
        <label className={styles.label}>
          Direct link to workshop
          <div className={styles.checkbox}>
            <input className={styles.input} type="text" name="link" value={formData.link} />
            <input
              type="radio"
              name="redemption"
              value="Option 2"
              checked={formData.redemption === "Option 2"}
              onChange={handleChange}
            />
          </div>
        </label>
        <label className={styles.label}>
          Promo code (CSV, Text File etc.)
          <div className={styles.checkbox}>
            <input className={styles.input} type="text" name="link" value={formData.link} />
            <input
              type="radio"
              name="redemption"
              value="Option 3"
              checked={formData.redemption === "Option 3"}
              onChange={handleChange}
            />
          </div>
        </label>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default NewCampaignData;
