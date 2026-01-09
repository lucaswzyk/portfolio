import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import {socialprofiles} from "../../config_option";

const Footer = () => {
  const {t} = useTranslation();

  return (
      <footer className="px-6 mt-20 py-6 text-silver/60 text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-4">
            <p>
              &copy; {new Date().getFullYear()} <a href="https://lukeashford.com" target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="text-gold no-underline transition-colors duration-200 hover:text-gold-bright hover:underline">Luke
              Ashford</a>. {t(
                "legal.footer.all_rights")}
            </p>
            <div className="flex md:hidden gap-4 items-center">
              {socialprofiles.twitter && (
                  <a href={socialprofiles.twitter} className="text-gold hover:text-gold-bright">
                    <FaTwitter className="w-5 h-5"/>
                  </a>
              )}
              {socialprofiles.github && (
                  <a href={socialprofiles.github} className="text-gold hover:text-gold-bright">
                    <FaGithub className="w-5 h-5"/>
                  </a>
              )}
              {socialprofiles.facebook && (
                  <a href={socialprofiles.facebook} className="text-gold hover:text-gold-bright">
                    <FaFacebookF className="w-5 h-5"/>
                  </a>
              )}
              {socialprofiles.linkedin && (
                  <a href={socialprofiles.linkedin} className="text-gold hover:text-gold-bright">
                    <FaLinkedin className="w-5 h-5"/>
                  </a>
              )}
              {socialprofiles.youtube && (
                  <a href={socialprofiles.youtube} className="text-gold hover:text-gold-bright">
                    <FaYoutube className="w-5 h-5"/>
                  </a>
              )}
              {socialprofiles.twitch && (
                  <a href={socialprofiles.twitch} className="text-gold hover:text-gold-bright">
                    <FaTwitch className="w-5 h-5"/>
                  </a>
              )}
              {socialprofiles.insta && (
                  <a href={socialprofiles.insta} className="text-gold hover:text-gold-bright">
                    <FaInstagram className="w-5 h-5"/>
                  </a>
              )}
            </div>
          </div>
          <div className="text-right">
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