import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {SocialIcons} from "../socialicons/index.js";

const Footer = () => {
  const {t} = useTranslation();

  return (
      <footer className="px-6 mt-20 py-6 text-silver/60 text-sm">
        <div
            className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} <a href="https://lukeashford.com" target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="text-gold no-underline transition-colors duration-200 hover:text-gold-bright hover:underline">Luke
              Ashford</a>. {t(
                "legal.footer.all_rights")}
            </p>
            <SocialIcons className="md:hidden"/>
          </div>
          <div className="text-center md:text-right">
            <Link to="/legal"
                  className="text-silver/80 no-underline transition-colors duration-200 hover:text-gold hover:underline">
              {t("legal.notice_link")}
            </Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;