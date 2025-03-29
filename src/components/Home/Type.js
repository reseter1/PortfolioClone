import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../contexts/LanguageContext";

function Type() {
  const { language } = useLanguage();

  const enStrings = [
    "Freelancer",
    "Web Developer",
    "Open Source Contributor",
  ];

  const viStrings = [
    "Freelancer",
    "Nhà phát triển Web",
    "Người đóng góp mã nguồn mở",
  ];

  const strings = language === "en" ? enStrings : viStrings;

  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
