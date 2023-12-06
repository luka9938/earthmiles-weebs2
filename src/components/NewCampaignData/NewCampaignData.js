import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./NewCampaingData.module.css";
const NewCampaignData = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    discount: "",
    commission: "",
    redemption: "",
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
    router.push(`/campaigns?name=${formData.name}&email=${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.grid_container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.h3}>Campaign Details</legend>
        <label className={styles.label}>
          Campaign headline
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Description
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.h3}>Campaign Financials</legend>
        <label className={styles.label}>
          Original price
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Quantity offered
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Discount value (%)
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Potential EM commission (10%)
          <input
            type="text"
            name="commission"
            value={formData.commission}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.h3}>Redemption Type</legend>
        <label className={styles.label}>
          Option 1
          <div className={styles.checkbox}>
            <input type="text" name="link" value={formData.link} />
            <input
              type="radio"
              name="redemption"
              value="Option 1"
              checked={formData.redemption === "Option 1"}
              onChange={handleChange}
            />
          </div>
        </label>
        <label className={styles.label}>
          Option 2
          <div className={styles.checkbox}>
            <input type="text" name="link" value={formData.link} />
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
          Option 3
          <div className={styles.checkbox}>
            <input type="text" name="link" value={formData.link} />
            <input
              type="radio"
              name="redemption"
              value="Option 3"
              checked={formData.redemption === "Option 3"}
              onChange={handleChange}
            />
          </div>
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default NewCampaignData;
