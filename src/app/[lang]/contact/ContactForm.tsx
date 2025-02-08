/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ContactPageStyles from "./ContactPage.module.css";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

export default function ContactForm({ t }: { t: any }) {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const formData = {
      firstName: (e.target as any).firstName.value,
      lastName: (e.target as any).lastName.value,
      email: (e.target as any).email.value,
      message: (e.target as any).message.value,
      captchaToken,
    };

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
      } else {
        alert("Captcha verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={ContactPageStyles.form} onSubmit={handleSubmit}>
      <div
        className={
          (ContactPageStyles.nameContainer, ContactPageStyles.smallField)
        }
      >
        <div className={ContactPageStyles.field}>
          <label htmlFor="firstName" className={ContactPageStyles.label}>
            {t.contact.firstName}
          </label>
          <input
            id="firstName"
            type="text"
            required
            className={ContactPageStyles.input}
          />
        </div>
        <div className={ContactPageStyles.field}>
          <label htmlFor="lastName" className={ContactPageStyles.label}>
            {t.contact.lastName}
          </label>
          <input
            id="lastName"
            type="text"
            required
            className={ContactPageStyles.input}
          />
        </div>
      </div>

      <div className={ContactPageStyles.field}>
        <label htmlFor="email" className={ContactPageStyles.label}>
          {t.contact.email}
        </label>
        <input
          id="email"
          type="email"
          required
          className={ContactPageStyles.input}
        />
      </div>

      <div className={ContactPageStyles.field}>
        <label htmlFor="message" className={ContactPageStyles.label}>
          {t.contact.message}
        </label>
        <textarea
          id="message"
          required
          className={ContactPageStyles.textarea}
        />
      </div>

      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={(token) => setCaptchaToken(token)}
      />

      <button
        type="submit"
        className={ContactPageStyles.submitButton}
        disabled={loading}
      >
        {loading ? "Submitting..." : t.contact.submit}
      </button>
    </form>
  );
}
