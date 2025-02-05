import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaComponent: React.FC<{
  sitekey: string;
  onChange: (value: string | null) => void;
}> = ({ sitekey, onChange }) => {
  return <ReCAPTCHA sitekey={sitekey} onChange={onChange} />;
};

export default ReCaptchaComponent;
