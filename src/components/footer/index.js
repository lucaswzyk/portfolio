import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();

  return (
      <footer className="py-4 border-t border-ash/20 text-gold bg-transparent">
        <div className="flex justify-between items-center gap-4 flex-wrap px-5 md:flex-row flex-col md:items-center items-start">
          <div className="flex-1 min-w-60">
            <p>
              &copy; {new Date().getFullYear()} <a href="https://lukeashford.com" target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="text-gold no-underline transition-colors duration-200 hover:text-gold-bright hover:underline">Luke Ashford</a>. {t(
                "legal.footer.all_rights")}
            </p>
          </div>
          <div className="text-right flex-none md:text-right text-left">
            <Link to="/legal" className="text-gold no-underline transition-colors duration-200 hover:text-gold-bright hover:underline font-semibold">
              {t("legal.notice_link")}
            </Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
