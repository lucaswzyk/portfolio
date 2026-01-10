import React from "react";
import "./style.css";
import {useTranslation} from "react-i18next";
import {Button, Navbar} from "@lukeashford/aurelius";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Headermain = () => {
  const {t} = useTranslation();

  const handleLogoClick = () => {
    window.location.href = "/portfolio";
  };

  return (
      <Navbar fixed bordered={false} className="bg-transparent py-2">
        <div className="flex items-center justify-between w-full">
          <Button
              variant="ghost"
              as="a"
              href="/portfolio"
              onClick={handleLogoClick}
              className="text-xl font-heading text-gold font-bold"
          >
            {t("logotext")}
          </Button>
          <LanguageSwitcher/>
        </div>
      </Navbar>
  );
};

export default Headermain;
