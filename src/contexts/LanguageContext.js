import React, { createContext, useState, useContext, useEffect } from "react";
import { locales } from "../locales";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Lấy ngôn ngữ từ localStorage hoặc mặc định là tiếng Anh
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  });

  // Lấy nội dung dựa trên ngôn ngữ hiện tại
  const t = (key) => {
    return locales[language][key] || key;
  };

  // Chuyển đổi ngôn ngữ
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "vi" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    // Lưu ngôn ngữ vào localStorage khi có thay đổi
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 