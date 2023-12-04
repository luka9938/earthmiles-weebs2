import React, { useState } from "react";
import { useRouter } from "next/router";

const NewCampaignData = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    // Redirect to a new page with the form data as query parameters
    router.push(`/campaigns?name=${formData.name}&email=${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCampaignData;
