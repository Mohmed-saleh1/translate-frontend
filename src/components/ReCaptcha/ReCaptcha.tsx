import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaComponent: React.FC<{
  sitekey: string;
  onChange: (value: string | null) => void; // Accepts both string and null
}> = ({ sitekey, onChange }) => {
  return <ReCAPTCHA sitekey={sitekey} onChange={onChange} />;
};

export default ReCaptchaComponent;
