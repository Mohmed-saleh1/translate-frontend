"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./langSwitcher.module.css";
import { Locale, i18n } from "../../config/i18n";
import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  lang: Locale;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Locale>(lang);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLang") as Locale | null;
    if (storedLang && i18n.locales.includes(storedLang)) {
      setSelectedLang(storedLang);
    }
  }, []);

  const getLangSwitcherUrl = (newLang: Locale) => {
    const pathParts = pathname.split("/");
    pathParts[1] = newLang;
    return pathParts.join("/");
  };

  const handleLanguageChange = (newLang: Locale) => {
    localStorage.setItem("preferredLang", newLang);
    document.cookie = `preferredLang=${newLang}; path=/; max-age=31536000`;

    setSelectedLang(newLang);
    router.push(getLangSwitcherUrl(newLang));
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <button
        className={styles.langButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
      >
        {selectedLang.toUpperCase()} ▼
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {i18n.locales.map((locale) => (
            <button
              key={locale}
              className={
                locale === selectedLang ? styles.activeLang : styles.langOption
              }
              onClick={() => handleLanguageChange(locale)}
            >
              {locale.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
