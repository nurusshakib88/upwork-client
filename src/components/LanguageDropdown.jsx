import React, { useState, useEffect, useRef } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);
  const dropdownRef = useRef(null);

  // Define the available languages and their respective country codes
  const languages = [
    { code: "en", name: "English", flag: "EN" },
    { code: "gu", name: "ગુજરાતી", flag: "GU" },
    { code: "es", name: "Español", flag: "ES" },
    { code: "fr", name: "Français", flag: "FR" },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    i18next.changeLanguage(code);
    localStorage.setItem("i18nextLng", code); // Save language preference
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
      >
        <img
          src={`/assets/images/flags/${selectedLanguage.toUpperCase()}.svg`}
          alt="flag"
          className="h-5 w-5 rounded-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black z-40 rounded-md shadow-md overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 dark:text-white dark:hover:bg-[#060818]"
            >
              <img
                src={`/assets/images/flags/${lang.code.toUpperCase()}.svg`}
                alt={lang.name}
                className="h-5 w-5 rounded-full object-cover"
              />
              <span className="font-medium">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
