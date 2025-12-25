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
    <Navbar fixed className="site__header">
      <div className="flex items-center justify-between w-full">
        <a
          href="/portfolio"
          className="nav_ac"
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
