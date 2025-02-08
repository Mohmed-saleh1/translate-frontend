/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import styles from "./QuoteForm.module.css";

export default function QuoteForm({ t }: { t: any }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    country: "",
    targetLanguage: "",
    translationType: "",
    message: "",
    files: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <label>{t.quote.firstName}</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.lastName}</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.email}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.phoneNumber}</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.website}</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.address}</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.city}</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.state}</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.country}</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.targetLanguage}</label>
        <select
          name="targetLanguage"
          value={formData.targetLanguage}
          onChange={handleChange}
        >
          <option value="">{t.quote.selectLanguage}</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.translationType}</label>
        <select
          name="translationType"
          value={formData.translationType}
          onChange={handleChange}
        >
          <option value="">{t.quote.selectType}</option>
          <option value="general">General</option>
          <option value="legal">Legal</option>
          <option value="technical">Technical</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.message}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t.quote.fileUpload}</label>
        <input type="file" name="files" multiple />
      </div>

      <button className={styles.submitButton}>{t.quote.submit}</button>
    </form>
  );
}
