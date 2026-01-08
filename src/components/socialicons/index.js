import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {socialprofiles} from "../../config_option";
import {useTranslation} from "react-i18next";

export const Socialicons = () => {
  const {t} = useTranslation();

  return (
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col items-center" style={{zIndex: 999}}>
        <ul className="list-none p-0 m-0 mb-2.5">
          {socialprofiles.twitter && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.twitter}>
                  <FaTwitter className="w-5 h-5 fill-gold"/>
                </a>
              </li>
          )}
          {socialprofiles.github && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.github}>
                  <FaGithub className="w-5 h-5 fill-gold"/>
                </a>
              </li>
          )}
          {socialprofiles.facebook && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.facebook}>
                  <FaFacebookF className="w-5 h-5 fill-gold"/>
                </a>
              </li>
          )}
          {socialprofiles.linkedin && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.linkedin}>
                  <FaLinkedin className="w-5 h-5 fill-gold"/>
                </a>
              </li>
          )}
          {socialprofiles.youtube && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.youtube}>
                  <FaYoutube className="w-5 h-5 fill-gold"/>
                </a>
              </li>
          )}
          {socialprofiles.twitch && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.twitch}>
                  <FaTwitch className="w-5 h-5 fill-gold"/>
                </a>
              </li>
          )}
          {socialprofiles.insta && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.insta}>
                  <FaInstagram className="w-5 h-5 fill-gold"/>
                </a>
              </li>
          )}
        </ul>
        <p className="text-gold text-xs font-semibold whitespace-nowrap relative -rotate-90" style={{top: '70px', left: '-24px', width: '68px', height: '20px'}}>
          {t("social.follow_me")}
          <span className="absolute block w-10 h-px bg-gold" style={{top: '9px', right: '-48px'}}></span>
        </p>
      </div>
  );
};
