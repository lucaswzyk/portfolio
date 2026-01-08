import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { Navbar } from "@lukeashford/aurelius";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Headermain = () => {
  const { t } = useTranslation();

  const handleLogoClick = () => {
    window.location.href = "/portfolio";
  };

  return (
    <Navbar fixed className="bg-transparent">
      <div className="flex items-center justify-between w-full">
        <a
          href="/portfolio"
          className="px-4 py-1.5 m-0 border-0 bg-transparent text-xl font-heading text-gold leading-loose h-12.5 font-bold hover:text-gold"
          style={{zIndex: 1000}}
          onClick={handleLogoClick}
        >
          {t("logotext")}
        </a>
        <LanguageSwitcher />
      </div>
    </Navbar>
  );
};

export default Headermain;
