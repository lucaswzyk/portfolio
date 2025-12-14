import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();

  return (
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>
              &copy; {new Date().getFullYear()} <a href="https://lukeashford.com" target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="footer-link">Luke Ashford</a>. {t(
                "legal.footer.all_rights")}
            </p>
          </div>
          <div className="footer-right">
            <Link to="/legal" className="footer-link footer-legal">
              {t("legal.notice_link")}
            </Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
